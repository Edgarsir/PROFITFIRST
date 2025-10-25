export const ShareCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-[360px] 3xl:max-w-[420px] 4xl:max-w-[550px] 5xl:max-w-[730px] gap-10 3xl:gap-[47px] 4xl:gap-[62px] 5xl:gap-[82px] xl:absolute xl:top-[150px] 3xl:xl:top-[200px] 4xl:xl:top-[260px] 5xl:xl:top-[350px] xl:left-[460px] 3xl:xl:left-[547px] 4xl:xl:left-[715px] 5xl:xl:left-[950px] flex flex-col items-start">
      <div className="relative self-stretch w-full h-[340px] 3xl:h-[397px] 4xl:h-[520px] 5xl:h-[690px]">
        <div className="absolute top-0.5 left-0 w-[360px] 3xl:w-[420px] 4xl:w-[550px] 5xl:w-[730px] h-[338px] 3xl:h-[395px] 4xl:h-[517px] 5xl:h-[687px] bg-[#1e1e1e] rounded-[12px] 3xl:rounded-[14px] 4xl:rounded-[18px] 5xl:rounded-[24px]" />
        <div className="inline-flex flex-col items-center gap-2 3xl:gap-3 4xl:gap-4 5xl:gap-5 absolute top-[25px] 3xl:top-[30px] 4xl:top-[39px] 5xl:top-[52px] left-[180px] 3xl:left-[210px] 4xl:left-[275px] 5xl:left-[365px]">
          <div className="relative w-[40px] 3xl:w-[48px] 4xl:w-[63px] 5xl:w-[84px] h-[40px] 3xl:h-[48px] 4xl:h-[63px] 5xl:h-[84px] bg-[#13ef96] rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-base 3xl:text-[19px] 4xl:text-[25px] 5xl:text-[33px]">P</span>
          </div>
          <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-white text-[22px] 3xl:text-[26px] 4xl:text-[34px] 5xl:text-[45px] tracking-[0] leading-[28px] 3xl:leading-[33px] 4xl:leading-[43px] 5xl:leading-[57px] whitespace-nowrap">
            Profit First
          </div>
        </div>
        <div className="flex w-[150px] 3xl:w-[180px] 4xl:w-[235px] 5xl:w-[315px] items-start justify-center gap-2 3xl:gap-3 4xl:gap-4 5xl:gap-5 px-4 3xl:px-5 4xl:px-7 5xl:px-9 py-2 3xl:py-3 4xl:py-4 5xl:py-5 absolute top-[145px] 3xl:top-[175px] 4xl:top-[229px] 5xl:top-[305px] left-[170px] 3xl:left-[200px] 4xl:left-[262px] 5xl:left-[348px] bg-[#13ef96] rounded-xl 3xl:rounded-2xl 4xl:rounded-3xl 5xl:rounded-[32px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-black text-sm 3xl:text-[17px] 4xl:text-[22px] 5xl:text-[29px] text-center tracking-[0] leading-[18px] 3xl:leading-[22px] 4xl:leading-[29px] 5xl:leading-[38px] whitespace-nowrap">
            Share the Link
          </div>
        </div>
        <div className="absolute top-[210px] 3xl:top-[252px] 4xl:top-[330px] 5xl:top-[438px] left-[170px] 3xl:left-[200px] 4xl:left-[262px] 5xl:left-[348px] w-[150px] 3xl:w-[180px] 4xl:w-[235px] 5xl:w-[315px] h-[40px] 3xl:h-[48px] 4xl:h-[63px] 5xl:h-[84px] flex bg-[#4c454533] rounded-xl 3xl:rounded-2xl 4xl:rounded-3xl 5xl:rounded-[32px] overflow-hidden border-[0.5px] border-solid border-[#ffffff8a]">
          <div className="mt-2.5 3xl:mt-3 4xl:mt-4 5xl:mt-5 w-[80px] 3xl:w-[95px] 4xl:w-[124px] 5xl:w-[165px] h-[18px] 3xl:h-[22px] 4xl:h-[29px] 5xl:h-[38px] ml-[35px] 3xl:ml-[42px] 4xl:ml-[55px] 5xl:ml-[73px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm 3xl:text-[17px] 4xl:text-[22px] 5xl:text-[29px] tracking-[0] leading-[18px] 3xl:leading-[22px] 4xl:leading-[29px] 5xl:leading-[38px] whitespace-nowrap">
            Offer detail
          </div>
        </div>
        <div className="absolute top-[150px] 3xl:top-[180px] 4xl:top-[235px] 5xl:top-[313px] left-4 3xl:left-5 4xl:left-7 5xl:left-9 text-center [font-family:'Poppins',Helvetica] font-bold text-black text-sm 3xl:text-[17px] 4xl:text-[22px] 5xl:text-[29px] tracking-[0] leading-[18px] 3xl:leading-[22px] 4xl:leading-[29px] 5xl:leading-[38px] whitespace-nowrap">
          Social Post
        </div>
        <div className="absolute top-[158px] 3xl:top-[190px] 4xl:top-[248px] 5xl:top-[330px] left-[20px] 3xl:left-[27px] 4xl:left-[35px] 5xl:left-[47px] text-center [font-family:'Poppins',Helvetica] font-bold text-black text-sm 3xl:text-[17px] 4xl:text-[22px] 5xl:text-[29px] tracking-[0] leading-[18px] 3xl:leading-[22px] 4xl:leading-[29px] 5xl:leading-[38px] whitespace-nowrap">
          Social Post
        </div>
        <div className="absolute top-px left-0 w-[135px] 3xl:w-[160px] 4xl:w-[210px] 5xl:w-[278px] h-[338px] 3xl:h-[395px] 4xl:h-[517px] 5xl:h-[687px] flex flex-col bg-[#d9d9d9]">
          <div className="ml-3 3xl:ml-4 4xl:ml-5 5xl:ml-7 w-[80px] 3xl:w-[95px] 4xl:w-[124px] 5xl:w-[165px] h-[18px] 3xl:h-[22px] 4xl:h-[29px] 5xl:h-[38px] mt-[55px] 3xl:mt-[65px] 4xl:mt-[85px] 5xl:mt-[113px] [font-family:'Poppins',Helvetica] font-bold text-black text-sm 3xl:text-[17px] 4xl:text-[22px] 5xl:text-[29px] tracking-[0] leading-[18px] 3xl:leading-[22px] 4xl:leading-[29px] 5xl:leading-[38px] whitespace-nowrap">
            Social Post
          </div>
          <div className="ml-3 3xl:ml-4 4xl:ml-5 5xl:ml-7 w-[75px] 3xl:w-[90px] 4xl:w-[118px] 5xl:w-[157px] h-16 3xl:h-[75px] 4xl:h-[98px] 5xl:h-[130px] mt-2 3xl:mt-3 4xl:mt-4 5xl:mt-5 bg-[#b9afaf] rounded-lg 3xl:rounded-xl 4xl:rounded-2xl 5xl:rounded-3xl" />
          <div className="ml-3 3xl:ml-4 4xl:ml-5 5xl:ml-7 w-[60px] 3xl:w-[72px] 4xl:w-[94px] 5xl:w-[125px] h-[18px] 3xl:h-[22px] 4xl:h-[29px] 5xl:h-[38px] mt-4 3xl:mt-5 4xl:mt-7 5xl:mt-9 [font-family:'Poppins',Helvetica] font-bold text-black text-sm 3xl:text-[17px] 4xl:text-[22px] 5xl:text-[29px] tracking-[0] leading-[18px] 3xl:leading-[22px] 4xl:leading-[29px] 5xl:leading-[38px] whitespace-nowrap">
            Email ID
          </div>
          <div className="ml-3 3xl:ml-4 4xl:ml-5 5xl:ml-7 w-[75px] 3xl:w-[90px] 4xl:w-[118px] 5xl:w-[157px] h-2 3xl:h-3 4xl:h-4 5xl:h-5 mt-2 3xl:mt-3 4xl:mt-4 5xl:mt-5 bg-[#b9afaf] rounded-lg 3xl:rounded-xl 4xl:rounded-2xl 5xl:rounded-3xl" />
        </div>
      </div>
      <div className="w-[320px] 3xl:w-[427px] 4xl:w-[558px] 5xl:w-[742px] gap-2 3xl:gap-3 4xl:gap-4 5xl:gap-5 relative flex-[0_0_auto] flex flex-col items-start">
        <div className="inline-flex items-center gap-2 3xl:gap-3 4xl:gap-4 5xl:gap-5 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[22px] 3xl:text-[29px] 4xl:text-[38px] 5xl:text-[50px] text-center tracking-[0] leading-[28px] 3xl:leading-[37px] 4xl:leading-[48px] 5xl:leading-[64px] whitespace-nowrap">
            2.
          </div>
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[22px] 3xl:text-[29px] 4xl:text-[38px] 5xl:text-[50px] text-center tracking-[0] leading-[28px] 3xl:leading-[37px] 4xl:leading-[48px] 5xl:leading-[64px] whitespace-nowrap">
            SHARE
          </div>
        </div>
        <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-white text-base 3xl:text-[21px] 4xl:text-[27px] 5xl:text-[36px] tracking-[0] leading-[22px] 3xl:leading-[29px] 4xl:leading-[38px] 5xl:leading-[50px]">
          Use Our Swipe Emails, Social Posts, And Banners To Promote ProfitFirst.
        </p>
      </div>
    </div>
  );
};
