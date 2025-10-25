// Using direct image paths for better compatibility

export const RefferalSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full max-w-[360px] 3xl:max-w-[420px] items-start gap-[40px] 3xl:gap-[47px] xl:absolute xl:top-[150px] 3xl:xl:top-[200px] xl:left-[840px] 3xl:xl:left-[987px]">
      <div className="relative self-stretch w-full h-[340px] 3xl:h-[397px] bg-[#1e1e1e] rounded-[12px] 3xl:rounded-[14px]">
        <div className="inline-flex items-center gap-6 3xl:gap-7 absolute top-[230px] 3xl:top-[275px] left-[calc(50.00%_-_120px)] 3xl:left-[calc(50.00%_-_140px)]">
          {/* Shopify Logo */}
          <div className="flex w-16 h-16 3xl:w-[75px] 3xl:h-[75px] items-center justify-center p-2 3xl:p-3 relative bg-white rounded-[32px] 3xl:rounded-[38px] shadow-[2px_2px_6px_#00000040]">
            <img
              className="w-8 h-8 3xl:w-10 3xl:h-10"
              alt="Shopify"
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg"
            />
          </div>
          {/* Meta (Facebook) Logo */}
          <div className="flex w-16 h-16 3xl:w-[75px] 3xl:h-[75px] items-center justify-center p-2 3xl:p-3 relative bg-white rounded-[32px] 3xl:rounded-[38px] shadow-[2px_2px_6px_#00000040]">
            <img
              className="w-8 h-8 3xl:w-10 3xl:h-10"
              alt="Meta"
              src="https://c.animaapp.com/mgrn477pA528g8/img/facebook-original.svg"
            />
          </div>
          {/* Shiprocket Logo */}
          <div className="flex w-16 h-16 3xl:w-[75px] 3xl:h-[75px] items-center justify-center p-2 3xl:p-3 relative bg-white rounded-[32px] 3xl:rounded-[38px] shadow-[2px_2px_6px_#00000040]">
            <svg className="w-8 h-8 3xl:w-10 3xl:h-10" viewBox="0 0 24 24" fill="#5E17EB">
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
          </div>
        </div>


        {/* Central logo */}
        <img
          className="absolute top-[50px] 3xl:top-[60px] left-[142px] 3xl:left-[168px] w-16 h-16 3xl:w-[75px] 3xl:h-[75px]"
          alt="Profit First logo"
          src="https://c.animaapp.com/mgrn477pA528g8/img/group-330@2x.png"
        />

        {/* Three paper airplanes in a straight vertical line */}
        {/* Top plane */}
        <img className="absolute top-[120px] 3xl:top-[143px] left-[168px] 3xl:left-[198px] w-[24px] 3xl:w-[28px] h-[24px] 3xl:h-[28px]" alt="Paper airplane" src="/images/paper-airplane.png" />
        {/* Middle plane */}
        <img className="absolute top-[155px] 3xl:top-[185px] left-[168px] 3xl:left-[198px] w-[24px] 3xl:w-[28px] h-[24px] 3xl:h-[28px]" alt="Paper airplane" src="/images/paper-airplane.png" />
        {/* Bottom plane */}
        <img className="absolute top-[190px] 3xl:top-[227px] left-[168px] 3xl:left-[198px] w-[24px] 3xl:w-[28px] h-[24px] 3xl:h-[28px]" alt="Paper airplane" src="/images/paper-airplane.png" />

        {/* User avatars for Facebook - images 9, 10, 11 */}
        <img className="absolute top-[190px] 3xl:top-[227px] left-[55px] 3xl:left-[65px] w-[48px] 3xl:w-[56px] h-[38px] 3xl:h-[45px] rounded-full object-cover" alt="User avatar" src="/images/image-9.png" />
        <img className="absolute top-[150px] 3xl:top-[180px] left-[82px] 3xl:left-[97px] w-[48px] 3xl:w-[56px] h-[38px] 3xl:h-[45px] rounded-full object-cover" alt="User avatar" src="/images/image-10.png" />
        <img className="absolute top-[115px] 3xl:top-[138px] left-[115px] 3xl:left-[136px] w-[48px] 3xl:w-[56px] h-[38px] 3xl:h-[45px] rounded-full object-cover" alt="User avatar" src="/images/image-11.png" />

        {/* User avatars for Shiprocket - images 12, 13, 14 */}
        <img className="absolute top-[190px] 3xl:top-[227px] left-[250px] 3xl:left-[295px] w-[48px] 3xl:w-[56px] h-[38px] 3xl:h-[45px] rounded-full object-cover" alt="User avatar" src="/images/image-12.png" />
        <img className="absolute top-[150px] 3xl:top-[180px] left-[225px] 3xl:left-[265px] w-[48px] 3xl:w-[56px] h-[38px] 3xl:h-[45px] rounded-full object-cover" alt="User avatar" src="/images/image-14.png" />
        <img className="absolute top-[115px] 3xl:top-[138px] left-[200px] 3xl:left-[236px] w-[48px] 3xl:w-[56px] h-[38px] 3xl:h-[45px] rounded-full object-cover" alt="User avatar" src="/images/image-14.png" />
      </div>
      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-end gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[22px] 3xl:text-[29px] text-center tracking-[0] leading-[28px] 3xl:leading-[37px] whitespace-nowrap">
            3.
          </div>
          <div className="relative w-[250px] 3xl:w-[333px] [font-family:'Inter',Helvetica] font-medium text-white text-[22px] 3xl:text-[29px] tracking-[0] leading-[28px] 3xl:leading-[37px]">
            REFERRAL SIGNS UP
          </div>
        </div>
        <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-white text-base 3xl:text-[21px] tracking-[0] leading-[22px] 3xl:leading-[29px]">
          Shopify, Meta Ads, Shipping Portals. Profit First Collects The Data.
        </p>
      </div>
    </div>
  );
};