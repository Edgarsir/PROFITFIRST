const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

class DatabaseService {
  // User operations
  async createUser(userData) {
    const { data, error } = await supabase
      .from('users')
      .insert([{
        id: userData._id || this.generateId(),
        name: userData.name,
        email: userData.email,
        password: userData.password,
        role: userData.role || 'user',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async findUserByEmail(email) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  }

  async findUserById(id) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  }

  async updateUser(id, updateData) {
    const { data, error } = await supabase
      .from('users')
      .update({
        ...updateData,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Affiliate operations
  async createAffiliate(affiliateData) {
    const { data, error } = await supabase
      .from('affiliates')
      .insert([{
        id: affiliateData._id || this.generateId(),
        user_id: affiliateData.user,
        affiliate_code: affiliateData.affiliateCode,
        referral_link: affiliateData.referralLink,

        total_referrals: affiliateData.totalReferrals || 0,
        active_referrals: affiliateData.activeReferrals || 0,
        total_earnings: affiliateData.totalEarnings || 0,
        pending_earnings: affiliateData.pendingEarnings || 0,
        paid_earnings: affiliateData.paidEarnings || 0,
        commission_rate: affiliateData.commissionRate || 0.10,
        status: affiliateData.status || 'active',
        bank_details: affiliateData.bankDetails || {},
        statistics: affiliateData.statistics || { clicks: 0, signups: 0, conversionRate: 0 },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async findAffiliateByUserId(userId) {
    const { data, error } = await supabase
      .from('affiliates')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  }

  async findAffiliateByCode(code) {
    const { data, error } = await supabase
      .from('affiliates')
      .select('*')
      .eq('affiliate_code', code)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  }



  async updateAffiliate(id, updateData) {
    const { data, error } = await supabase
      .from('affiliates')
      .update({
        ...updateData,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async getAllAffiliates() {
    const { data, error } = await supabase
      .from('affiliates')
      .select(`
        *,
        users:user_id(id, name, email)
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }

  // Referral operations
  async createReferral(referralData) {
    const { data, error } = await supabase
      .from('referrals')
      .insert([{
        id: referralData._id || this.generateId(),
        affiliate_id: referralData.affiliate,
        referred_user_id: referralData.referredUser,
        transaction_id: referralData.transactionId,
        amount: referralData.amount,
        commission: referralData.commission,
        currency: referralData.currency || 'INR',
        status: referralData.status || 'pending',
        source: referralData.source || 'local',
        activated_at: referralData.activatedAt,
        metadata: referralData.metadata || {},
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async findReferralByAffiliateAndTransaction(affiliateId, transactionId) {
    const { data, error } = await supabase
      .from('referrals')
      .select('*')
      .eq('affiliate_id', affiliateId)
      .eq('transaction_id', transactionId)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  }

  async getReferralsByAffiliate(affiliateId, limit = 10) {
    const { data, error } = await supabase
      .from('referrals')
      .select(`
        *,
        users:referred_user_id(id, name, email)
      `)
      .eq('affiliate_id', affiliateId)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data;
  }

  async getReferralsByStatus(affiliateId, status) {
    const { data, error } = await supabase
      .from('referrals')
      .select('*')
      .eq('affiliate_id', affiliateId)
      .eq('status', status);

    if (error) throw error;
    return data;
  }

  async updateReferral(id, updateData) {
    const { data, error } = await supabase
      .from('referrals')
      .update({
        ...updateData,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async getMonthlyEarnings(affiliateId) {
    const { data, error } = await supabase
      .from('referrals')
      .select('commission, activated_at')
      .eq('affiliate_id', affiliateId)
      .eq('status', 'active')
      .not('activated_at', 'is', null);

    if (error) throw error;

    // Group by month (this would need to be done in the controller for simplicity)
    return data;
  }

  async getStatusBreakdown(affiliateId) {
    const { data, error } = await supabase
      .from('referrals')
      .select('status')
      .eq('affiliate_id', affiliateId);

    if (error) throw error;

    const breakdown = data.reduce((acc, referral) => {
      acc[referral.status] = (acc[referral.status] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(breakdown).map(([status, count]) => ({ _id: status, count }));
  }

  // Utility functions
  generateId() {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  }

  // Generate unique affiliate code (for backward compatibility)
  generateAffiliateCode() {
    return Math.random().toString(36).substr(2, 9).toUpperCase();
  }
}

module.exports = new DatabaseService();
