import React from 'react';
import { motion } from 'framer-motion';
import { fadeSlideUp, slideFromLeft, slideFromRight, staggerContainer, hoverGlow } from '../../../../utils/animations';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';
import { contentCreator, agencyOwner, digitalMarketer, freelancer } from '../../../../assets/images';

export const WhoCanBenefitSection: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <motion.section
            ref={ref}
            className="w-full relative bg-black responsive-section overflow-hidden py-8 lg:py-12 3xl:py-24"
            data-model-id="2:357"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            exit="exit"
            variants={fadeSlideUp}
        >
            {/* Background gradient elements */}
            <div 
                className="absolute top-0 left-0 w-full h-full flex justify-between items-start pointer-events-none" 
                aria-hidden="true"
            >
                <div className="mt-[400px] w-[345px] h-[400px] rounded-[172.5px/200px] bg-[#2d4022] blur-[100px] -ml-20" />
                <div className="w-[344.54px] h-[332px] bg-[#2d4022] rounded-[172.27px/166px] blur-[100px] -mr-20" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14 3xl:max-w-[1600px] 3xl:mx-auto">
                    <div className="flex flex-col items-start gap-4 lg:gap-5 3xl:gap-6">
                        <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[42px] 3xl:text-[52px] 4xl:text-[68px] 5xl:text-[90px] tracking-[-1.5px] 3xl:tracking-[-1.8px] 4xl:tracking-[-2.4px] 5xl:tracking-[-3.2px] leading-tight lg:leading-[50px] 3xl:leading-[62px] 4xl:leading-[81px] 5xl:leading-[108px]">
                            WHO CAN BENEFIT ?
                        </h2>
                        <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-base sm:text-lg lg:text-[18px] 3xl:text-[22px] 4xl:text-[29px] 5xl:text-[38px] tracking-[0] leading-relaxed lg:leading-[26px] 3xl:leading-[30px] 4xl:leading-[39px] 5xl:leading-[52px] max-w-[520px] 3xl:max-w-[640px] 4xl:max-w-[835px] 5xl:max-w-[1110px]">
                            This is tailor-made for people who already influence D2C brands and
                            e-commerce business.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <motion.div 
                        className="flex-shrink-0 self-end"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.a
                            href="/signup"
                            className="inline-flex items-start gap-2.5 3xl:gap-3 p-3.5 lg:p-4 3xl:p-5 bg-[#13ef96] rounded-[8px] cursor-pointer"
                            whileHover={hoverGlow}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.img
                                className="relative w-5 h-5 3xl:w-6 3xl:h-6 aspect-[1]"
                                alt="Handshake icon"
                                src="https://c.animaapp.com/L87tdvSe/img/game-icons-shaking-hands-1.svg"
                                whileHover={{ rotate: 12 }}
                            />
                            <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-base lg:text-[17px] 3xl:text-[20px] text-center tracking-[0] leading-[24px] 3xl:leading-[28px] whitespace-nowrap">
                                Become Our Affiliate
                            </span>
                        </motion.a>
                    </motion.div>
                </div>

                {/* Content Container - Similar to Key Benefits */}
                <div className="bg-[#1e1e1e] rounded-[16px] 3xl:rounded-[20px] p-6 lg:p-10 3xl:p-14 3xl:max-w-[1600px] 3xl:mx-auto">
                    <motion.div 
                        className="flex flex-col gap-8 lg:gap-11 3xl:gap-14"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >
                        {/* Row 1 - Content Creator */}
                        <motion.div 
                            className="flex flex-col lg:flex-row gap-6 lg:gap-11 3xl:gap-14 items-center"
                            variants={slideFromLeft}
                        >
                            <motion.div 
                                className="flex-1 bg-[#2a2a2a] rounded-[10px] 3xl:rounded-[12px] p-5 lg:p-7 3xl:p-9 order-2 lg:order-1"
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: "#323232",
                                    boxShadow: "0 10px 30px rgba(19, 239, 150, 0.15)"
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-xl sm:text-2xl lg:text-[26px] 3xl:text-[32px] 4xl:text-[42px] 5xl:text-[56px] tracking-[0] leading-tight lg:leading-[34px] 3xl:leading-[42px] 4xl:leading-[55px] 5xl:leading-[73px] mb-3 lg:mb-4 3xl:mb-5 4xl:mb-7 5xl:mb-9">
                                    CONTENT CREATOR AND INFLUENCER
                                </h3>
                                <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-base sm:text-lg lg:text-[18px] 3xl:text-[22px] 4xl:text-[29px] 5xl:text-[38px] tracking-[0] leading-relaxed lg:leading-[26px] 3xl:leading-[32px] 4xl:leading-[42px] 5xl:leading-[56px]">
                                    You talk to store owners every day. Recommend Profit First in
                                    videos, reels, or emails and get paid monthly.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-[320px] 3xl:w-[400px] h-[180px] sm:h-[220px] lg:h-[220px] 3xl:h-[275px] flex-shrink-0 order-1 lg:order-2"
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img
                                    className="w-full h-full object-cover rounded-[8px] 3xl:rounded-[10px]"
                                    alt="Content creator illustration"
                                    src={contentCreator}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Row 2 - Agency Owner */}
                        <motion.div 
                            className="flex flex-col lg:flex-row gap-6 lg:gap-11 3xl:gap-14 items-center"
                            variants={slideFromRight}
                        >
                            <motion.div 
                                className="w-full lg:w-[320px] 3xl:w-[400px] h-[180px] sm:h-[220px] lg:h-[220px] 3xl:h-[275px] flex-shrink-0 order-1"
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img
                                    className="w-full h-full object-cover rounded-[8px] 3xl:rounded-[10px]"
                                    alt="Agency owner illustration"
                                    src={agencyOwner}
                                />
                            </motion.div>
                            <motion.div 
                                className="flex-1 bg-[#2a2a2a] rounded-[10px] 3xl:rounded-[12px] p-5 lg:p-7 3xl:p-9 order-2"
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: "#323232",
                                    boxShadow: "0 10px 30px rgba(19, 239, 150, 0.15)"
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-xl sm:text-2xl lg:text-[26px] 3xl:text-[32px] tracking-[0] leading-tight lg:leading-[34px] 3xl:leading-[42px] mb-3 lg:mb-4 3xl:mb-5">
                                    AGENCY OWNER
                                </h3>
                                <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-base sm:text-lg lg:text-[18px] 3xl:text-[22px] tracking-[0] leading-relaxed lg:leading-[26px] 3xl:leading-[32px]">
                                    Add a recurring revenue stream to your agency ROAS and profit.
                                    Give them the tool that actually shows profit, and collect
                                    recurring fees for the referral.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Row 3 - Digital Marketer */}
                        <motion.div 
                            className="flex flex-col lg:flex-row gap-6 lg:gap-11 3xl:gap-14 items-center"
                            variants={slideFromLeft}
                        >
                            <motion.div 
                                className="flex-1 bg-[#2a2a2a] rounded-[10px] 3xl:rounded-[12px] p-5 lg:p-7 3xl:p-9 order-2 lg:order-1"
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: "#323232",
                                    boxShadow: "0 10px 30px rgba(19, 239, 150, 0.15)"
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-xl sm:text-2xl lg:text-[26px] 3xl:text-[32px] tracking-[0] leading-tight lg:leading-[34px] 3xl:leading-[42px] mb-3 lg:mb-4 3xl:mb-5">
                                    DIGITAL MARKETER AND PAID MEDIA EXPERT
                                </h3>
                                <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-base sm:text-lg lg:text-[18px] 3xl:text-[22px] tracking-[0] leading-relaxed lg:leading-[26px] 3xl:leading-[32px]">
                                    This is tailor-made for people who already influence D2C brands
                                    and e-commerce business.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-[320px] 3xl:w-[400px] h-[180px] sm:h-[220px] lg:h-[220px] 3xl:h-[275px] flex-shrink-0 order-1 lg:order-2"
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img
                                    className="w-full h-full object-cover rounded-[8px] 3xl:rounded-[10px]"
                                    alt="Digital marketer illustration"
                                    src={digitalMarketer}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Row 4 - Freelancer */}
                        <motion.div 
                            className="flex flex-col lg:flex-row gap-6 lg:gap-11 3xl:gap-14 items-center"
                            variants={slideFromRight}
                        >
                            <motion.div 
                                className="w-full lg:w-[320px] 3xl:w-[400px] h-[180px] sm:h-[220px] lg:h-[220px] 3xl:h-[275px] flex-shrink-0 order-1"
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img
                                    className="w-full h-full object-cover rounded-[8px] 3xl:rounded-[10px]"
                                    alt="Freelancer illustration"
                                    src={freelancer}
                                />
                            </motion.div>
                            <motion.div 
                                className="flex-1 bg-[#2a2a2a] rounded-[10px] 3xl:rounded-[12px] p-5 lg:p-7 3xl:p-9 order-2"
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: "#323232",
                                    boxShadow: "0 10px 30px rgba(19, 239, 150, 0.15)"
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-xl sm:text-2xl lg:text-[26px] 3xl:text-[32px] tracking-[0] leading-tight lg:leading-[34px] 3xl:leading-[42px] mb-3 lg:mb-4 3xl:mb-5">
                                    FREELANCER
                                </h3>
                                <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-base sm:text-lg lg:text-[18px] 3xl:text-[22px] tracking-[0] leading-relaxed lg:leading-[26px] 3xl:leading-[32px]">
                                    This is tailor-made for people who already influence D2C brands
                                    and e-commerce business.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};
