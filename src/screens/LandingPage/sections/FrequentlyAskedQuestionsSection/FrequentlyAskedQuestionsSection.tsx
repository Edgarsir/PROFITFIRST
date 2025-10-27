import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeSlideUp, slideFromLeft, slideFromRight, staggerContainer } from "../../../../utils/animations";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

interface FAQItem {
  id: number;
  question: string;
  answer?: string;
  isExpanded?: boolean;
}

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      id: 1,
      question: "When do I get paid?",
      answer: "Monthly — payouts are processed every month for all active referrals.",
      isExpanded: false,
    },
    {
      id: 2,
      question: 'What does "active" mean?',
      answer: "Active means the referred client is subscribed and using Profit First (connected platforms and billing is current).",
      isExpanded: false,
    },
    {
      id: 3,
      question: "Do I need to be technical?",
      answer: "No. We provide ready-made creatives, email templates, and a dashboard to track clicks and conversions.",
      isExpanded: false,
    },
    {
      id: 4,
      question: "Can I promote to agencies and consultants?",
      answer: "Absolutely — we encourage B2B referrals and offer higher-tier bonuses for agency rollouts.",
      isExpanded: false,
    },
  ]);

  const toggleFAQ = (id: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) =>
        faq.id === id ? { ...faq, isExpanded: !faq.isExpanded } : faq,
      ),
    );
  };

  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.section 
      ref={ref}
      className="w-full min-h-screen relative bg-black responsive-section overflow-hidden pt-20 lg:pt-24 3xl:pt-32 4xl:pt-40 5xl:pt-52 pb-8 lg:pb-12 3xl:pb-24 4xl:pb-32 5xl:pb-40"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="exit"
      variants={fadeSlideUp}
    >
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-between items-start pointer-events-none"
        aria-hidden="true"
      >
        <div className="mt-[629px] w-[472px] h-[681px] bg-[#2d4022] rounded-[236px/341px] blur-[100px] -ml-20" />
        <div className="w-[472px] h-[455px] bg-[#2d4022] rounded-[236px/227px] blur-[100px] -mr-20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 lg:pt-28 3xl:pt-40 4xl:pt-52 5xl:pt-64">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Header */}
          <motion.div 
            className="flex flex-col items-start gap-6 lg:gap-8"
            variants={slideFromLeft}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.h2 
              className="[font-family:'Inter',Helvetica] font-normal text-white text-4xl sm:text-5xl md:text-6xl lg:text-[52px] 3xl:text-[64px] 4xl:text-[80px] 5xl:text-[108px] tracking-[0] leading-tight lg:leading-[62px] 3xl:leading-[76px] 4xl:leading-[96px] 5xl:leading-[128px]"
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2 }}
            >
              <span className="[font-family:'Inter',Helvetica] font-normal text-white tracking-[0]">
                Frequently Asked <br />
              </span>
              <span className="font-bold">Questions</span>
            </motion.h2>

            <motion.p 
              className="[font-family:'Poppins',Helvetica] font-normal text-white text-base lg:text-[16px] 3xl:text-[18px] 4xl:text-[22px] 5xl:text-[30px] tracking-[0] leading-relaxed lg:leading-[22px] 3xl:leading-[26px] 4xl:leading-[32px] 5xl:leading-[44px] max-w-[420px] 3xl:max-w-[520px] 4xl:max-w-[680px] 5xl:max-w-[900px]"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4 }}
            >
              If you have any query in your mind this section might answer that and
              if not we have AI by your side.
            </motion.p>
          </motion.div>

          {/* Right Column - FAQ Items */}
          <motion.div 
            className="flex flex-col gap-5 lg:gap-6 4xl:gap-8 5xl:gap-10"
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {faqs.map((faq) => {
              return (
                <motion.div
                  key={faq.id}
                  className="bg-[#1e1e1e] rounded-[16px] 3xl:rounded-[20px] 4xl:rounded-[26px] 5xl:rounded-[35px] overflow-hidden w-full "
                  variants={slideFromRight}
                >
                  <button
                    className="w-full text-left"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={faq.isExpanded}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <div className="flex items-start justify-between p-5 lg:p-6 3xl:p-8 4xl:p-10 5xl:p-14">
                      <h3 className="[font-family:'Poppins',Helvetica] font-medium text-white text-lg lg:text-[20px] 3xl:text-[24px] 4xl:text-[30px] 5xl:text-[40px] tracking-[0] leading-tight lg:leading-[28px] 3xl:leading-[34px] 4xl:leading-[42px] 5xl:leading-[56px] flex-1 pr-3 lg:pr-4 3xl:pr-5 4xl:pr-6 5xl:pr-8">
                        {faq.question}
                      </h3>

                      <div 
                        className="w-7 h-7 lg:w-[32px] lg:h-[32px] 4xl:w-[42px] 4xl:h-[42px] 5xl:w-[56px] 5xl:h-[56px] flex-shrink-0 flex items-center justify-center transition-transform duration-200 ease-out"
                        style={{ transform: faq.isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      >
                        <svg
                          className="w-5 h-5 lg:w-6 lg:h-6 4xl:w-8 4xl:h-8 5xl:w-10 5xl:h-10"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                            stroke="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {faq.isExpanded && faq.answer && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        className="px-5 lg:px-6 4xl:px-10 5xl:px-14 overflow-hidden"
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ 
                          duration: 0.25,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      >
                        <p 
                          className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm lg:text-[16px] 4xl:text-[20px] 5xl:text-[27px] tracking-[0] leading-relaxed lg:leading-[22px] 4xl:leading-[28px] 5xl:leading-[38px] pb-5 lg:pb-6 4xl:pb-10 5xl:pb-14"
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
