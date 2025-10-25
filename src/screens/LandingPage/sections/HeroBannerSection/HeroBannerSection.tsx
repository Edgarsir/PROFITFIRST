import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeSlideUp, springConfig, hoverGlow } from "../../../../utils/animations";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

// Constants
const NAVIGATION_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Solution", href: "#solution" },
  { label: "Benefits", href: "#benefits" },
  { label: "About", href: "#about" },
] as const;

const LOGO_URL = "https://c.animaapp.com/L87tdvSe/img/icon-2@2x.png";
const HERO_IMAGE_URL = "https://c.animaapp.com/L87tdvSe/img/frame-1356.svg";
const HANDSHAKE_ICON_URL = "https://c.animaapp.com/L87tdvSe/img/game-icons-shaking-hands-1.svg";

// Animation variants
const navLinkVariants = {
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } },
  tap: { scale: 0.95 }
};

const iconRotateVariants = {
  hover: { rotate: 12 },
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

// Reusable Components
const Logo = React.memo(() => (
  <motion.div 
    className="flex items-center gap-3"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1 }}
  >
    <img
      className="w-12 h-12 lg:w-16 lg:h-16"
      alt="Profit First Logo"
      src={LOGO_URL}
      loading="eager"
    />
    <h1 className="font-inter font-bold text-white text-xl lg:text-3xl leading-tight">
      Profit First
    </h1>
  </motion.div>
));
Logo.displayName = "Logo";

const CTAButton = React.memo(({ isMobile = false }: { isMobile?: boolean }) => (
  <motion.a
    href="/signup"
    className={`inline-flex items-start gap-3 3xl:gap-4 4xl:gap-5 5xl:gap-7 bg-[#13ef96] rounded-lg ${isMobile ? 'p-4 mt-8' : 'p-4 3xl:p-5 4xl:p-7 5xl:p-9 mt-[40px] 4xl:mt-[52px] 5xl:mt-[69px]'}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.1, ...springConfig }}
    whileHover={hoverGlow}
    whileTap={{ scale: 0.95 }}
  >
    <motion.img
      className={`relative aspect-square ${isMobile ? 'w-6 h-6' : 'w-6 h-6 3xl:w-7 3xl:h-7 4xl:w-9 4xl:h-9 5xl:w-12 5xl:h-12'}`}
      alt="Handshake icon"
      src={HANDSHAKE_ICON_URL}
      whileHover={iconRotateVariants.hover}
      transition={iconRotateVariants.transition}
    />
    <span className={`relative w-fit font-poppins font-bold text-black text-center leading-[28px] 3xl:leading-[32px] 4xl:leading-[42px] 5xl:leading-[56px] whitespace-nowrap ${isMobile ? 'text-lg' : 'text-[20px] 3xl:text-[24px] 4xl:text-[31px] 5xl:text-[41px]'}`}>
      Become Our Affiliate
    </span>
  </motion.a>
));
CTAButton.displayName = "CTAButton";

const HeroContent = React.memo(({ isMobile = false }: { isMobile?: boolean }) => (
  <>
    <motion.h2 
      className={`relative self-stretch font-inter font-bold text-white tracking-[-1.48px] ${isMobile ? 'text-3xl sm:text-4xl md:text-5xl leading-tight' : 'text-[52px] 3xl:text-[72px] 4xl:text-[94px] 5xl:text-[125px] leading-[62px] 3xl:leading-[86px] 4xl:leading-[112px] 5xl:leading-[149px]'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, ...springConfig }}
    >
      TURN YOUR AUDIENCE INTO RECURRING CASH
    </motion.h2>
    <motion.p 
      className={`relative w-full font-poppins font-normal text-white ${isMobile ? 'text-lg sm:text-xl md:text-2xl leading-relaxed' : 'max-w-[700px] 3xl:max-w-[950px] 4xl:max-w-[1250px] 5xl:max-w-[1660px] text-[28px] 3xl:text-[38px] 4xl:text-[50px] 5xl:text-[66px] leading-[38px] 3xl:leading-[52px] 4xl:leading-[68px] 5xl:leading-[90px]'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, ...springConfig }}
    >
      Join the ProfitFirst Affiliate Program and earn&nbsp;&nbsp;
      <span className="font-bold">1,00,000+</span>
      {" "}every month, effortlessly.
    </motion.p>
  </>
));
HeroContent.displayName = "HeroContent";

export const HeroBannerSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const hamburgerVariants = useMemo(() => ({
    top: isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 },
    middle: isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 },
    bottom: isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
  }), [isMobileMenuOpen]);

  return (
    <motion.section 
      ref={ref}
      className="w-full min-h-screen relative responsive-section overflow-hidden"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="exit"
      variants={fadeSlideUp}
    >
      {/* Background Blur Effects */}
      <div className="absolute inset-0 flex justify-between items-start pointer-events-none" aria-hidden="true">
        <div className="mt-[459px] w-[345px] h-[349px] rounded-[172.5px/174.5px] bg-[#2d4022] blur-[100px] -ml-20" />
        <div className="w-[344.54px] h-[332px] bg-[#2d4022] rounded-[172.27px/166px] blur-[100px] -mr-20" />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center h-20">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 ml-auto" aria-label="Main navigation">
              {NAVIGATION_ITEMS.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="font-poppins font-medium text-white text-lg leading-6 hover:text-[#13ef96] transition-colors duration-200"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={navLinkVariants.hover}
                  whileTap={navLinkVariants.tap}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 ml-auto"
              onClick={toggleMobileMenu}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <motion.span className="w-6 h-0.5 bg-white rounded-full" animate={hamburgerVariants.top} transition={{ duration: 0.2 }} />
              <motion.span className="w-6 h-0.5 bg-white rounded-full" animate={hamburgerVariants.middle} transition={{ duration: 0.2 }} />
              <motion.span className="w-6 h-0.5 bg-white rounded-full" animate={hamburgerVariants.bottom} transition={{ duration: 0.2 }} />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="lg:hidden absolute top-full left-0 right-0 bg-black shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              aria-label="Mobile navigation"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="font-poppins font-medium text-white text-lg leading-6 hover:text-[#13ef96] transition-colors duration-200 py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={closeMobileMenu}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Layout */}
      <div className="lg:hidden container mx-auto px-4 flex flex-col items-center justify-center min-h-screen pt-24">
        <motion.main 
          className="flex flex-col w-full items-start gap-8 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, ...springConfig }}
        >
          <motion.div 
            className="flex flex-col items-start gap-6 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, ...springConfig }}
          >
            <HeroContent isMobile />
          </motion.div>
          <CTAButton isMobile />
        </motion.main>

        <motion.img
          className="w-full max-w-md h-auto mt-8"
          alt="Hero illustration"
          src={HERO_IMAGE_URL}
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.4, ...springConfig }}
          loading="eager"
        />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="flex items-center justify-between pt-[200px] 3xl:pt-[280px] 4xl:pt-[360px] 5xl:pt-[480px] pb-20 3xl:pb-28 4xl:pb-36 5xl:pb-48">
            <motion.main 
              className="flex flex-col w-full max-w-[820px] 3xl:max-w-[1100px] 4xl:max-w-[1450px] 5xl:max-w-[1930px] items-start gap-6 3xl:gap-8 4xl:gap-10 5xl:gap-14"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, ...springConfig }}
            >
              <motion.div 
                className="flex flex-col items-start gap-5 4xl:gap-7 5xl:gap-9 w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, ...springConfig }}
              >
                <HeroContent />
              </motion.div>
              <CTAButton />
            </motion.main>

            <motion.img
              className="flex-shrink-0 ml-8 4xl:ml-12 5xl:ml-16 w-[550px] 3xl:w-[750px] 4xl:w-[980px] 5xl:w-[1300px] h-[397px] 3xl:h-[541px] 4xl:h-[707px] 5xl:h-[938px] max-w-none"
              alt="Hero illustration"
              src={HERO_IMAGE_URL}
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, ...springConfig }}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};