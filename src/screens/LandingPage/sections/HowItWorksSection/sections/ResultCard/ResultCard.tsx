export const ResultCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-[360px] 3xl:max-w-[420px] items-start gap-[40px] 3xl:gap-[47px] flex flex-col">
      <div className="relative self-stretch w-full h-[340px] 3xl:h-[397px] bg-[#1e1e1e] rounded-[12px] 3xl:rounded-[14px] flex flex-col items-center justify-center p-6 3xl:p-7">
        <div className="w-full h-full bg-gradient-to-br from-[#13ef96] to-green-400 rounded-xl 3xl:rounded-2xl flex flex-col items-center justify-center">
          <svg className="w-12 h-12 3xl:w-16 3xl:h-16 text-black mb-3 3xl:mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <div className="text-black font-bold text-base 3xl:text-[21px]">Analytics Dashboard</div>
          <div className="text-black text-xs 3xl:text-base mt-1 3xl:mt-2">Real-time Results</div>
        </div>
      </div>
      <div className="items-start gap-2 relative self-stretch w-full flex-[0_0_auto] flex flex-col">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[22px] 3xl:text-[29px] text-center tracking-[0] leading-[28px] 3xl:leading-[37px] whitespace-nowrap">
            4.
          </div>
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[22px] 3xl:text-[29px] tracking-[0] leading-[28px] 3xl:leading-[37px] whitespace-nowrap">
            THEY SEE RESULTS
          </div>
        </div>
        <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-white text-base 3xl:text-[21px] tracking-[0] leading-[22px] 3xl:leading-[29px]">
          Net Profit, Margins, Ai Insights, Revenue Forecasts. Conversion Is
          Fast Because The Value Is Immediate.
        </p>
      </div>
    </div>
  );
};