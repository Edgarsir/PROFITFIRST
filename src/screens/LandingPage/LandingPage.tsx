import {
  EarningsCalculatorSection,
  FrequentlyAskedQuestionsSection,
  HeroBannerSection,
  HowItWorksSection,
  KeyBenefitsSection,
  UserReviewsSection,
  WhoCanBenefitSection,
} from "./sections";
import { motion } from "framer-motion";

export const LandingPage = (): JSX.Element => {
  return (
    <div
      className="bg-black w-full min-h-screen relative overflow-x-hidden"
      data-model-id="2:7"
      style={{ 
        scrollBehavior: "smooth",
        scrollPaddingTop: "2rem"
      }}
    >



      <motion.section 
        id="home" 
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroBannerSection />
      </motion.section>

      <motion.section 
        id="solution" 
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <WhoCanBenefitSection />
      </motion.section>

      <motion.section 
        id="benefits" 
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <KeyBenefitsSection />
      </motion.section>

      <motion.section 
        id="how-it-works" 
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <HowItWorksSection />
      </motion.section>

      <motion.section 
        id="calculator" 
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <EarningsCalculatorSection />
      </motion.section>

      <motion.section 
        id="reviews" 
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <UserReviewsSection />
      </motion.section>

      <motion.section 
        id="faq" 
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <FrequentlyAskedQuestionsSection />
      </motion.section>
    </div>
  );
};
