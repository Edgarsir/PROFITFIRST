import React, { useState } from "react";

export const UserRegistrationSection = (): JSX.Element => {
  const [affiliateId, setAffiliateId] = useState("");

  const handleCreateClick = () => {
    console.log("Create button clicked");
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");
  };

  const handleAffiliateIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAffiliateId(e.target.value);
  };

  return (
    <section className="flex flex-col w-[446px] items-start gap-[54px] absolute top-[236px] left-[29px]">
      <div className="relative self-stretch w-full h-[421px]">
        <div className="absolute top-px left-[3px] w-[443px] h-[421px] bg-[#1e1e1e] rounded-[12px]" />
        <h2 className="absolute top-8 left-[27px] [font-family:'Inter',Helvetica] font-semibold text-white text-[32px] text-center tracking-[0] leading-[38.4px] whitespace-nowrap">
          SIGN UP
        </h2>
        <div className="flex flex-col w-[327px] items-start gap-4 absolute top-[102px] left-[27px]">
          <label
            htmlFor="affiliate-id"
            className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-xl tracking-[0] leading-[26.0px]"
          >
            Affiliate ID
          </label>
          <div className="relative self-stretch w-full h-[52px] bg-[#4c454533] rounded-lg overflow-hidden border-[0.5px] border-solid border-[#ffffff8a]">
            <input
              id="affiliate-id"
              type="text"
              value={affiliateId}
              onChange={handleAffiliateIdChange}
              placeholder="abdc....."
              className="absolute top-[13px] left-5 w-[calc(100%_-_40px)] [font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[23.4px] bg-transparent border-0 outline-none placeholder:text-white"
              aria-label="Affiliate ID"
            />
          </div>
        </div>
        <div
          className="absolute top-[294px] left-[calc(50.00%_-_9px)] [font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[23.4px] whitespace-nowrap"
          aria-hidden="true"
        >
          or
        </div>
        <button
          onClick={handleCreateClick}
          className="all-[unset] box-border inline-flex items-start gap-3 px-5 py-3 absolute top-[228px] left-[27px] bg-[#13ef96] rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
          aria-label="Create account"
        >
          <span className="relative w-fit mt-[-1.00px] text-center [font-family:'Poppins',Helvetica] font-bold text-black text-lg tracking-[0] leading-[21.6px] whitespace-nowrap">
            Create
          </span>
        </button>

        <button
          onClick={handleGoogleSignIn}
          className="absolute top-[337px] left-[calc(50.00%_-_169px)] w-[338px] h-[52px] flex items-center gap-[42px] bg-[#4c454533] rounded-lg overflow-hidden border-[0.5px] border-solid border-[#ffffff8a] cursor-pointer hover:bg-[#4c454566] transition-colors"
          aria-label="Continue with Google"
        >
          <img
            className="w-6 h-6 ml-8"
            alt=""
            src="https://c.animaapp.com/mgrn477pA528g8/img/flat-color-icons-google.svg"
            aria-hidden="true"
          />
          <span className="w-[223px] h-6 [font-family:'Montserrat',Helvetica] font-medium text-white text-xl tracking-[0] leading-[24.0px] whitespace-nowrap">
            Continue with Google
          </span>
        </button>
      </div>
      <div className="flex flex-col w-[266px] items-start gap-3 relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
          <span
            className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[32px] text-center tracking-[0] leading-[38.4px] whitespace-nowrap"
            aria-label="Step 1"
          >
            1.
          </span>
          <h3 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[32px] text-center tracking-[0] leading-[38.4px] whitespace-nowrap">
            SIGN UP
          </h3>
        </div>
        <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-white text-xl tracking-[0] leading-[28.4px]">
          Get Instant Access To Your
          <br />
          link And Dashboard
        </p>
      </div>
    </section>
  );
};