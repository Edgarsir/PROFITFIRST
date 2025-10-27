import React, { useState } from "react";

export const EarningsCalculatorSection = (): JSX.Element => {
  const [numberOfReferrals, setNumberOfReferrals] = useState<string>("1000");
  const [clientMonthlyPrice, setClientMonthlyPrice] = useState<string>("1000");
  const [affiliateCommission, setAffiliateCommission] = useState<string>("1000");
  const [averageMonths, setAverageMonths] = useState<string>("1000");

  // Calculate earnings based on inputs
  const referrals = parseInt(numberOfReferrals) || 0;
  const monthlyPrice = parseInt(clientMonthlyPrice) || 0;
  const commission = parseInt(affiliateCommission) || 0;
  const avgMonths = parseInt(averageMonths) || 0;

  const monthlyRecurring = referrals * monthlyPrice;
  const annualRecurring = monthlyRecurring * 12;
  const lifetimeEarning = monthlyRecurring * avgMonths;

  const handleCalculate = () => {
    // Calculation is already reactive through state
    console.log("Calculate clicked");
  };

  const handleReset = () => {
    setNumberOfReferrals("1000");
    setClientMonthlyPrice("1000");
    setAffiliateCommission("1000");
    setAverageMonths("1000");
  };

  return (
    <section className="w-full min-h-screen relative bg-black responsive-section overflow-hidden py-8 lg:py-12 3xl:py-24 4xl:py-32 5xl:py-40">
      {/* Background blur elements */}
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-between items-start pointer-events-none"
        aria-hidden="true"
      >
        <div className="mt-[400px] w-[345px] h-[349px] rounded-[172.5px/174.5px] bg-[#2d4022] blur-[100px] -ml-20" />
        <div className="w-[344.54px] h-[332px] bg-[#2d4022] rounded-[172.27px/166px] blur-[100px] -mr-20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          {/* Logo */}
          <div className="flex items-center gap-2 lg:gap-3 3xl:gap-4 4xl:gap-5 5xl:gap-6 mb-6 lg:mb-8 4xl:mb-10 5xl:mb-12">
            <img
              className="w-8 h-8 lg:w-[40px] lg:h-[40px] 3xl:w-[60px] 3xl:h-[60px] 4xl:w-[80px] 4xl:h-[80px] 5xl:w-[106px] 5xl:h-[106px]"
              alt="Profit First Logo"
              src="https://c.animaapp.com/L87tdvSe/img/icon-2@2x.png"
            />
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-xl lg:text-[22px] 3xl:text-[32px] 4xl:text-[42px] 5xl:text-[56px] tracking-[0] leading-tight lg:leading-[28px] 3xl:leading-[40px] 4xl:leading-[52px] 5xl:leading-[70px]">
              Profit First
            </h1>
          </div>
        </div>

        {/* Calculator Grid with Centered Title */}
        <div className="mb-8 lg:mb-10 3xl:mb-12 4xl:mb-16 5xl:mb-20">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-2xl lg:text-[32px] 3xl:text-[40px] 4xl:text-[52px] 5xl:text-[70px] tracking-[0] leading-tight lg:leading-[40px] 3xl:leading-[50px] 4xl:leading-[65px] 5xl:leading-[88px] text-center">
            Affiliate Earning Calculator
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 3xl:gap-16 4xl:gap-20 5xl:gap-28">
          {/* Left Panel - Inputs */}
          <div className="bg-[#2a2a2a] rounded-[12px] 3xl:rounded-[14px] 4xl:rounded-[18px] 5xl:rounded-[24px] p-5 lg:p-6 3xl:p-12 4xl:p-16 5xl:p-20 3xl:min-h-[900px] 4xl:min-h-[1200px] 5xl:min-h-[1600px]">
            <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-xl lg:text-[20px] 3xl:text-[32px] 4xl:text-[42px] 5xl:text-[56px] mb-5 lg:mb-6 3xl:mb-12 4xl:mb-16 5xl:mb-20">
              Inputs
            </h3>

            {/* Number of active referrals */}
            <div className="mb-5 lg:mb-6">
              <label className="block [font-family:'Inter',Helvetica] font-medium text-white text-base lg:text-[16px] 3xl:text-[18px] mb-2 3xl:mb-3">
                Number of active referrals
              </label>
              <input
                type="number"
                value={numberOfReferrals}
                onChange={(e) => setNumberOfReferrals(e.target.value)}
                className="w-full h-10 lg:h-[48px] 3xl:h-[56px] bg-[#404040] border border-[#666] rounded-[10px] 3xl:rounded-[12px] px-3 lg:px-4 3xl:px-5 text-white [font-family:'Inter',Helvetica] text-base lg:text-[16px] 3xl:text-[18px] focus:outline-none focus:border-[#13ef96] transition-colors"
              />
            </div>

            {/* Client Monthly Price */}
            <div className="mb-5 lg:mb-6 3xl:mb-8">
              <label className="block [font-family:'Inter',Helvetica] font-medium text-white text-base lg:text-[16px] 3xl:text-[18px] mb-2 3xl:mb-3">
                Client Monthly Price
              </label>
              <input
                type="number"
                value={clientMonthlyPrice}
                onChange={(e) => setClientMonthlyPrice(e.target.value)}
                className="w-full h-10 lg:h-[48px] 3xl:h-[56px] bg-[#404040] border border-[#666] rounded-[10px] 3xl:rounded-[12px] px-3 lg:px-4 3xl:px-5 text-white [font-family:'Inter',Helvetica] text-base lg:text-[16px] 3xl:text-[18px] focus:outline-none focus:border-[#13ef96] transition-colors"
              />
            </div>

            {/* Affiliate Commission per client / month */}
            <div className="mb-5 lg:mb-6 3xl:mb-8">
              <label className="block [font-family:'Inter',Helvetica] font-medium text-white text-base lg:text-[16px] 3xl:text-[18px] mb-2 3xl:mb-3">
                Affiliate Commission per client / month
              </label>
              <input
                type="number"
                value={affiliateCommission}
                onChange={(e) => setAffiliateCommission(e.target.value)}
                className="w-full h-10 lg:h-[48px] 3xl:h-[56px] bg-[#404040] border border-[#666] rounded-[10px] 3xl:rounded-[12px] px-3 lg:px-4 3xl:px-5 text-white [font-family:'Inter',Helvetica] text-base lg:text-[16px] 3xl:text-[18px] focus:outline-none focus:border-[#13ef96] transition-colors"
              />
            </div>

            {/* Average Month a referred client stays active */}
            <div className="mb-6 lg:mb-8 3xl:mb-10">
              <label className="block [font-family:'Inter',Helvetica] font-medium text-white text-base lg:text-[16px] 3xl:text-[18px] mb-2 3xl:mb-3">
                Average Month a referred client stays active
              </label>
              <input
                type="number"
                value={averageMonths}
                onChange={(e) => setAverageMonths(e.target.value)}
                className="w-full h-10 lg:h-[48px] 3xl:h-[56px] bg-[#404040] border border-[#666] rounded-[10px] 3xl:rounded-[12px] px-3 lg:px-4 3xl:px-5 text-white [font-family:'Inter',Helvetica] text-base lg:text-[16px] 3xl:text-[18px] focus:outline-none focus:border-[#13ef96] transition-colors"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 3xl:gap-5">
              <button
                onClick={handleCalculate}
                className="flex-1 bg-[#13ef96] text-black px-5 lg:px-6 3xl:px-7 py-2.5 lg:py-3 3xl:py-4 rounded-[10px] 3xl:rounded-[12px] [font-family:'Inter',Helvetica] font-semibold text-base lg:text-[16px] 3xl:text-[18px] hover:bg-[#0fd085] transition-colors"
              >
                Calculate
              </button>
              <button
                onClick={handleReset}
                className="flex-1 bg-[#666] text-white px-5 lg:px-6 3xl:px-7 py-2.5 lg:py-3 3xl:py-4 rounded-[10px] 3xl:rounded-[12px] [font-family:'Inter',Helvetica] font-semibold text-base lg:text-[16px] 3xl:text-[18px] hover:bg-[#777] transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Right Panel - Results */}
          <div className="space-y-5 lg:space-y-6 3xl:space-y-12 4xl:space-y-16 5xl:space-y-20 3xl:min-h-[900px] 4xl:min-h-[1200px] 5xl:min-h-[1600px]">
            <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-xl lg:text-[24px] 3xl:text-[36px] 4xl:text-[48px] 5xl:text-[64px] 3xl:mb-6 4xl:mb-8 5xl:mb-10">
              Your Earnings & Impacts
            </h3>

            {/* Monthly Recurring Income */}
            <div className="bg-[#2a2a2a] rounded-[12px] 3xl:rounded-[14px] p-3 lg:p-4 3xl:p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
              <div>
                <div className="text-[#ccc] text-sm lg:text-[14px] 3xl:text-[16px] mb-1 3xl:mb-2">Affiliate - Monthly recurring income</div>
                <div className="text-white text-xl lg:text-[24px] 3xl:text-[32px] font-bold">
                  ₹{monthlyRecurring.toLocaleString()}
                </div>
              </div>
              <div className="text-[#ccc] text-sm lg:text-[14px] 3xl:text-[16px] sm:text-right">
                {referrals} x {monthlyPrice}
              </div>
            </div>

            {/* Annual Recurring */}
            <div className="bg-[#2a2a2a] rounded-[12px] 3xl:rounded-[14px] p-3 lg:p-4 3xl:p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
              <div>
                <div className="text-[#ccc] text-sm lg:text-[14px] 3xl:text-[16px] mb-1 3xl:mb-2">Affiliate - Annual recurring 12x</div>
                <div className="text-white text-xl lg:text-[24px] 3xl:text-[32px] font-bold">
                  ₹{annualRecurring.toLocaleString()}
                </div>
              </div>
              <div className="text-[#ccc] text-sm lg:text-[14px] 3xl:text-[16px] sm:text-right">
                12 Months
              </div>
            </div>

            {/* Projected Lifetime Earning */}
            <div className="bg-[#2a2a2a] rounded-[12px] 3xl:rounded-[14px] p-3 lg:p-4 3xl:p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-5 lg:mb-6 3xl:mb-8">
              <div>
                <div className="text-[#ccc] text-sm lg:text-[14px] 3xl:text-[16px] mb-1 3xl:mb-2">Projected Affiliate lifetime earning</div>
                <div className="text-white text-xl lg:text-[24px] 3xl:text-[32px] font-bold">
                  ₹{lifetimeEarning.toLocaleString()}
                </div>
              </div>
              <div className="text-[#ccc] text-sm lg:text-[14px] sm:text-right">
                {avgMonths} Months<br />Average
              </div>
            </div>

            {/* Become Our Affiliate Button */}
            <a
              href="/signup"
              className="inline-flex items-center justify-center gap-2 3xl:gap-3 bg-[#13ef96] text-black px-5 lg:px-6 3xl:px-7 py-2.5 lg:py-3 3xl:py-4 rounded-[12px] 3xl:rounded-[14px] [font-family:'Inter',Helvetica] font-bold text-base lg:text-[16px] 3xl:text-[18px] hover:bg-[#0fd085] transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <img
                className="w-5 h-5 lg:w-6 lg:h-6 3xl:w-7 3xl:h-7"
                alt="Handshake icon"
                src="https://c.animaapp.com/L87tdvSe/img/game-icons-shaking-hands-1.svg"
              />
              Become Our Affiliate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};