import { SignUpSection } from "./sections/SignUpSection/SignUpSection";
import { ShareCard } from "./sections/ShareCard/ShareCard";
import { RefferalSection } from "./sections/RefferalSection/RefferalSection";
import { ResultCard } from "./sections/ResultCard/ResultCard";
import { GetPaid } from "./sections/GetPaid/GetPaid";

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="w-full min-h-screen relative bg-black py-12 md:py-16 lg:py-20 3xl:py-24 4xl:py-32 5xl:py-40 overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute top-[300px] md:top-[350px] 3xl:top-[400px] 4xl:top-[500px] 5xl:top-[600px] left-0 w-[345px] 3xl:w-[460px] 4xl:w-[600px] 5xl:w-[800px] h-[349px] 3xl:h-[465px] 4xl:h-[600px] 5xl:h-[800px] rounded-[172.5px/174.5px] bg-[#2d4022] blur-[100px] -ml-20" />
      <div className="absolute top-0 right-0 w-[344.54px] 3xl:w-[460px] 4xl:w-[600px] 5xl:w-[800px] h-[332px] 3xl:h-[443px] 4xl:h-[580px] 5xl:h-[770px] bg-[#2d4022] rounded-[172.27px/166px] blur-[100px] -mr-20" />

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative">
        {/* Title */}
        <header className="mb-12 md:mb-16 lg:mb-20 3xl:mb-24 4xl:mb-32 5xl:mb-40">
          <h2 className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl md:text-[28px] 3xl:text-[37px] 4xl:text-[48px] 5xl:text-[64px] text-center tracking-[0] leading-tight md:leading-[36px] 3xl:leading-[48px] 4xl:leading-[60px] 5xl:leading-[80px]">
            <span className="[font-family:'Inter',Helvetica] font-normal text-white tracking-[0]">
              HOW IT WORKS ?<br />
            </span>
            <span className="font-bold text-[26px] md:text-[30px] 3xl:text-[40px] 4xl:text-[52px] 5xl:text-[70px] leading-tight md:leading-[38px] 3xl:leading-[51px] 4xl:leading-[66px] 5xl:leading-[88px]">IN 5 SIMPLE STEPS</span>
          </h2>
        </header>

        {/* Steps Container - Desktop: Grid layout with equal spacing */}
        <div className="hidden xl:flex xl:flex-col xl:gap-8 3xl:gap-10 4xl:gap-12 5xl:gap-16">
          {/* Row 1: Steps 1, 2, 3 */}
          <div className="flex justify-between gap-8 3xl:gap-10 4xl:gap-12 5xl:gap-16">
            <SignUpSection />
            <ShareCard />
            <RefferalSection />
          </div>

          {/* Row 2: Steps 4, 5 - Centered with same gap */}
          <div className="flex justify-center gap-8 3xl:gap-10 4xl:gap-12 5xl:gap-16">
            <ResultCard />
            <GetPaid />
          </div>
        </div>

        {/* Mobile/Tablet Layout - Stacked */}
        <div className="xl:hidden flex flex-col gap-12 md:gap-16 items-center">
          <SignUpSection />
          <ShareCard />
          <RefferalSection />
          <ResultCard />
          <GetPaid />
        </div>
      </div>
    </section>
  );
};
