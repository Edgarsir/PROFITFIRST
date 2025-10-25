// ES6 Image Exports - Using Original Project Images

// User Personas Images - Using actual project images
export const contentCreator = "/src/assets/images/6 Skills You Need to Become a Successful Online Content Creator _ Entrepreneur 1-3.png";
export const agencyOwner = "/src/assets/images/6 Skills You Need to Become a Successful Online Content Creator _ Entrepreneur 1-1.png";
export const digitalMarketer = "/src/assets/images/6 Skills You Need to Become a Successful Online Content Creator _ Entrepreneur 1-2.png";
export const freelancer = "/src/assets/images/How to Become a Virtual Assistant (With No Experience).jpg";

// Key Benefits Images - Using actual project images
export const keyBenefitsMain = "/src/assets/images/94154ef7dd35ec02829a8a2d351bfa09af23de91.png";
export const benefitIcon1 = "https://c.animaapp.com/mgrn477pA528g8/img/vector.svg";
export const benefitIcon2 = "https://c.animaapp.com/mgrn477pA528g8/img/vector-1.svg";

// How It Works Images - Using working project images
export const userAvatar1 = "https://c.animaapp.com/L87tdvSe/img/ellipse-197.svg";
export const userAvatar2 = "https://c.animaapp.com/L87tdvSe/img/ellipse-197-1.svg";
export const shopifyLogo = "https://c.animaapp.com/mgrn477pA528g8/img/group-330@2x.png";
export const paperAirplane = "https://c.animaapp.com/L87tdvSe/img/game-icons-shaking-hands-1.svg";

// Referral Section Images - Using your specific images
export const referralImage9 = "/src/assets/images/image%209.png";
export const referralImage10 = "/src/assets/images/image%2010.png";
export const referralImage11 = "/src/assets/images/image%2011.png";
export const referralImage12 = "/src/assets/images/image%2012.png";
export const referralImage13 = "/src/assets/images/image%2013.png";
export const referralImage14 = "/src/assets/images/image%2014.png";

// Hero Section Images - Using original project images
export const heroIllustration = "https://c.animaapp.com/L87tdvSe/img/frame-1356.svg";
export const profitFirstLogo = "https://c.animaapp.com/L87tdvSe/img/icon-2@2x.png";

// ES6 Default export with organized structure
export default {
  personas: {
    contentCreator,
    agencyOwner,
    digitalMarketer,
    freelancer,
  },
  benefits: {
    keyBenefitsMain,
    benefitIcon1,
    benefitIcon2,
  },
  howItWorks: {
    userAvatar1,
    userAvatar2,
    shopifyLogo,
    paperAirplane,
  },
  hero: {
    heroIllustration,
    profitFirstLogo,
  },
} as const;

// Type definitions for better TypeScript support
export type PersonaImage = typeof contentCreator | typeof agencyOwner | typeof digitalMarketer | typeof freelancer;
export type BenefitImage = typeof keyBenefitsMain | typeof benefitIcon1 | typeof benefitIcon2;
export type AvatarImage = typeof userAvatar1 | typeof userAvatar2;
export type LogoImage = typeof shopifyLogo | typeof profitFirstLogo;
export type IconImage = typeof paperAirplane;
export type HeroImage = typeof heroIllustration;