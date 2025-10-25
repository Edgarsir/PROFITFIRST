import React from "react";
import { keyBenefitsMain, benefitIcon1, benefitIcon2 } from "../../../../assets/images";

export const KeyBenefitsSection = (): JSX.Element => {
  const benefitCards = [
    {
      id: 1,
      text: "RECURRING ₹1,000/MONTH PER ACTIVE REFERRAL — PAID EVERY MONTH..",
      topImageSrc: benefitIcon1,
      bottomImageSrc: benefitIcon2,
    },
    {
      id: 2,
      text: "DONE-FOR-YOU CREATIVES, SWIPE COPY, AND TRACKING LINKS — PLUG-AND-PLAY.",
      topImageSrc: benefitIcon1,
      bottomImageSrc: benefitIcon2,
    },
    {
      id: 3,
      text: "HIGH PERCEIVED VALUE = EASY CONVERSIONS TO YOUR AUDIENCE.",
      topImageSrc: benefitIcon1,
      bottomImageSrc: benefitIcon2,
    },
    {
      id: 4,
      text: "TRANSPARENT REPORTING SO YOU CAN SEE EXACTLY WHAT YOU EARNED AND WHEN.",
      topImageSrc: benefitIcon1,
      bottomImageSrc: benefitIcon2,
    },
    {
      id: 5,
      text: "INSTANT CREDIBILITY: WE'RE AN AI-DRIVEN FINANCE PLATFORM FOR D2C BRANDS (SHOPIFY, META ADS, SHIPPING DATA).",
      topImageSrc: benefitIcon1,
      bottomImageSrc: benefitIcon2,
    },
  ];

  return (
    <div className="bg-black w-full lg:h-[900px] min-h-screen relative responsive-section overflow-hidden py-8 lg:py-0">
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-between items-start pointer-events-none"
        aria-hidden="true"
      >
        <div className="mt-[901px] w-[410px] h-[502px] ml-0 rounded-[205px/251px] bg-[#2d4022] blur-[100px] -ml-20" />
        <div className="h-[488px] rounded-[236px/244px] w-[472px] bg-[#2d4022] blur-[100px] -mr-20" />
      </div>

      {/* Mobile Title */}
      <div className="lg:hidden container mx-auto px-4 relative z-10 mb-8 pt-8">
        <h2 className="[font-family:'Inter',Helvetica] font-normal text-white text-4xl sm:text-5xl md:text-6xl tracking-[-1.97px] leading-tight text-center">
          <span className="font-bold tracking-[-1.43px]">Key</span>
          <span className="tracking-[-1.43px]"> Benefits</span>
        </h2>
      </div>

      {/* Desktop Title */}
      <div className="hidden lg:block container mx-auto px-4 lg:px-8 relative z-10 pt-16 3xl:pt-32">
        <h2 className="[font-family:'Inter',Helvetica] font-normal text-white text-[52px] 3xl:text-[64px] 4xl:text-[83px] 5xl:text-[111px] tracking-[-1.97px] 3xl:tracking-[-2.4px] 4xl:tracking-[-3.1px] 5xl:tracking-[-4.2px] leading-[62px] 3xl:leading-[76px] 4xl:leading-[99px] 5xl:leading-[132px]">
          <span className="font-bold tracking-[-1.43px] 3xl:tracking-[-1.8px] 4xl:tracking-[-2.3px] 5xl:tracking-[-3.1px]">Key</span>
          <span className="tracking-[-1.43px] 3xl:tracking-[-1.8px] 4xl:tracking-[-2.3px] 5xl:tracking-[-3.1px]"> Benefits</span>
        </h2>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden container mx-auto px-4 relative z-10">
        <div className="bg-[#1e1e1e] rounded-[16px] p-6 sm:p-8">
          {/* Mobile Image */}
          <div className="flex justify-center mb-8">
            <img
              className="w-full max-w-sm h-auto aspect-[0.8] object-cover rounded-lg"
              alt="Key benefits illustration"
              src={keyBenefitsMain}
            />
          </div>

          {/* Mobile Benefit Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {benefitCards.map((card) => (
              <div
                key={card.id}
                className="relative flex flex-col items-center gap-3 p-4 sm:p-6 bg-white rounded-[10px] overflow-hidden min-h-[120px] sm:min-h-[140px]"
              >
                {/* Top-left icon */}
                <img
                  className="absolute top-2 left-2 w-[18px] h-[25px] sm:w-[26px] sm:h-[37px] aspect-[0.7] flex-shrink-0"
                  alt=""
                  src={card.topImageSrc}
                />
                
                {/* Bottom-right icon */}
                <img
                  className="absolute bottom-2 right-2 w-[18px] h-[25px] sm:w-[26px] sm:h-[37px] aspect-[0.7] flex-shrink-0"
                  alt=""
                  src={card.bottomImageSrc}
                />
                
                {/* Centered text */}
                <p className="[font-family:'Poppins',Helvetica] font-bold text-black text-xs sm:text-sm text-center tracking-[0] leading-relaxed max-w-[calc(100%-60px)] mt-4 mb-4">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block container mx-auto px-4 lg:px-8 relative z-10 mt-12 3xl:mt-20 4xl:mt-26 5xl:mt-35">
        <div className="relative w-full max-w-[1020px] 3xl:max-w-[1400px] 4xl:max-w-[1830px] 5xl:max-w-[2430px] h-[552px] 3xl:h-[750px] 4xl:h-[980px] 5xl:h-[1300px] bg-[#1e1e1e] rounded-[16px] 3xl:rounded-[20px] 4xl:rounded-[26px] 5xl:rounded-[35px] mx-auto">
        <div className="absolute top-[calc(50.00%_-_276px)] 3xl:top-[calc(50.00%_-_375px)] left-[272px] 3xl:left-[373px] w-[476px] 3xl:w-[654px] h-[510px] 3xl:h-[700px]">
          <img
            className="absolute top-[calc(50.00%_-_276px)] 3xl:top-[calc(50.00%_-_375px)] left-[60px] 3xl:left-[82px] w-[391px] 3xl:w-[537px] h-[489px] 3xl:h-[671px] aspect-[0.8] object-cover"
            alt="Key benefits illustration"
            src={keyBenefitsMain}
          />
        </div>

        <div className="flex flex-col w-[153px] 3xl:w-[210px] items-start gap-2 p-4 3xl:p-6 absolute top-[153px] 3xl:top-[210px] left-[187px] 3xl:left-[257px] bg-white rounded-[10px] 3xl:rounded-[14px] overflow-hidden">
          <div className="relative mr-[-0.92px] w-[115px] 3xl:w-[158px] h-[72px] 3xl:h-[99px]">
            <img
              className="absolute top-0 left-px w-[17px] 3xl:w-[23px] h-[24px] 3xl:h-[33px] aspect-[0.7]"
              alt=""
              src={benefitIcon1}
            />
            <img
              className="absolute top-[47px] 3xl:top-[65px] left-[96px] 3xl:left-[132px] w-[17px] 3xl:w-[23px] h-[24px] 3xl:h-[33px] aspect-[0.7]"
              alt=""
              src={benefitIcon2}
            />
            <p className="absolute top-[15px] 3xl:top-[21px] left-[14px] 3xl:left-[19px] [font-family:'Poppins',Helvetica] font-bold text-black text-[9px] 3xl:text-[12px] text-center tracking-[0] leading-[12px] 3xl:leading-[16px] w-[89px] 3xl:w-[122px]">
              RECURRING ₹1,000/MONTH PER ACTIVE REFERRAL — PAID EVERY MONTH..
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[153px] 3xl:w-[210px] items-start gap-2 p-4 3xl:p-6 absolute top-[340px] 3xl:top-[467px] left-[247px] 3xl:left-[339px] bg-white rounded-[10px] 3xl:rounded-[14px] overflow-hidden">
          <div className="relative mr-[-0.92px] w-[119px] 3xl:w-[163px] h-[77px] 3xl:h-[106px]">
            <img
              className="absolute top-0 left-px w-[17px] 3xl:w-[23px] h-[24px] 3xl:h-[33px] aspect-[0.7]"
              alt=""
              src={benefitIcon1}
            />
            <img
              className="absolute top-[51px] 3xl:top-[70px] left-[100px] 3xl:left-[137px] w-[17px] 3xl:w-[23px] h-[24px] 3xl:h-[33px] aspect-[0.7]"
              alt=""
              src={benefitIcon2}
            />
            <p className="absolute top-[15px] 3xl:top-[21px] left-[14px] 3xl:left-[19px] [font-family:'Poppins',Helvetica] font-bold text-black text-[9px] 3xl:text-[12px] text-center tracking-[0] leading-[12px] 3xl:leading-[16px] w-[89px] 3xl:w-[122px]">
              DONE-FOR-YOU CREATIVES, SWIPE COPY, AND TRACKING LINKS — PLUG-AND-PLAY.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[153px] 3xl:w-[210px] items-start gap-2 p-4 3xl:p-6 absolute top-[340px] 3xl:top-[467px] left-[476px] 3xl:left-[653px] bg-white rounded-[10px] 3xl:rounded-[14px] overflow-hidden">
          <div className="relative mr-[-0.92px] w-[119px] 3xl:w-[163px] h-[77px] 3xl:h-[106px]">
            <img
              className="absolute top-0 left-0 w-[17px] 3xl:w-[23px] h-[24px] 3xl:h-[33px] aspect-[0.7]"
              alt=""
              src={benefitIcon1}
            />
            <img
              className="absolute top-[51px] 3xl:top-[70px] left-[100px] 3xl:left-[137px] w-[17px] 3xl:w-[23px] h-[24px] 3xl:h-[33px] aspect-[0.7]"
              alt=""
              src={benefitIcon2}
            />
            <p className="absolute top-[15px] 3xl:top-[21px] left-[14px] 3xl:left-[19px] [font-family:'Poppins',Helvetica] font-bold text-black text-[9px] 3xl:text-[12px] text-center tracking-[0] leading-[12px] 3xl:leading-[16px] w-[89px] 3xl:w-[122px]">
              HIGH PERCEIVED VALUE = EASY CONVERSIONS TO YOUR AUDIENCE.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[153px] 3xl:w-[210px] items-start gap-2 p-4 3xl:p-6 absolute top-[336px] 3xl:top-[461px] left-[723px] 3xl:left-[993px] bg-white rounded-[10px] 3xl:rounded-[14px] overflow-hidden">
          <div className="relative mr-[-0.92px] w-[115px] 3xl:w-[158px] h-[81px] 3xl:h-[111px]">
            <img
              className="absolute top-0 left-px w-[17px] 3xl:w-[23px] h-[24px] 3xl:h-[33px] aspect-[0.7]"
              alt=""
              src={benefitIcon1}
            />
            <img
              className="absolute top-[57px] 3xl:top-[78px] left-[96px] 3xl:left-[132px] w-[17px] 3xl:w-[23px] h-[24px] 3xl:h-[33px] aspect-[0.7]"
              alt=""
              src={benefitIcon2}
            />
            <p className="absolute top-[15px] 3xl:top-[21px] left-[14px] 3xl:left-[19px] [font-family:'Poppins',Helvetica] font-bold text-black text-[9px] 3xl:text-[12px] text-center tracking-[0] leading-[12px] 3xl:leading-[16px] w-[89px] 3xl:w-[122px]">
              TRANSPARENT REPORTING SO YOU CAN SEE EXACTLY WHAT YOU EARNED AND WHEN.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[153px] 3xl:w-[210px] items-start gap-2 p-4 3xl:p-6 absolute top-[102px] 3xl:top-[140px] left-[723px] 3xl:left-[993px] bg-white rounded-[10px] 3xl:rounded-[14px] overflow-hidden">
          <div className="relative mr-[-0.92px] w-[115px] 3xl:w-[158px] h-[123px] 3xl:h-[169px]">
            <img
              className="absolute top-0 left-0 w-[17px] 3xl:w-[23px] h-[24px] 3xl:h-[33px] aspect-[0.7]"
              alt=""
              src={benefitIcon1}
            />
            <img
              className="absolute top-[98px] 3xl:top-[135px] left-[96px] 3xl:left-[132px] w-[17px] 3xl:w-[23px] h-[24px] 3xl:h-[33px] aspect-[0.7]"
              alt=""
              src={benefitIcon2}
            />
            <p className="absolute top-[15px] 3xl:top-[21px] left-[10px] 3xl:left-[14px] [font-family:'Poppins',Helvetica] font-bold text-black text-[9px] 3xl:text-[12px] text-center tracking-[0] leading-[12px] 3xl:leading-[16px] w-[89px] 3xl:w-[122px]">
              INSTANT CREDIBILITY: WE'RE AN AI-DRIVEN FINANCE PLATFORM FOR D2C BRANDS (SHOPIFY, META ADS, SHIPPING DATA).
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};