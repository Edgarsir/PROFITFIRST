
import { motion } from "framer-motion";
import { fadeSlideUp, slideLeftRotate, slideRightRotate, reviewStagger, reviewHover } from "../../../../utils/animations";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: string;
  testimonial: string;
}

export const UserReviewsSection = (): JSX.Element => {
  
  const leftColumnReviews: Review[] = [
    {
      id: 1,
      name: "Ethan Miller",
      role: "Freelancer",
      avatar: "https://c.animaapp.com/L87tdvSe/img/ellipse-197.svg",
      rating: "https://c.animaapp.com/L87tdvSe/img/frame-1315-1.svg",
      testimonial:
        '"The platform is very user friendly, I have been searching a platform like this for a long time. Profit analysis and AI suggestions are just awesome."',
    },
    {
      id: 2,
      name: "Courtney Cox",
      role: "Digital Marketer",
      avatar: "https://c.animaapp.com/L87tdvSe/img/ellipse-197-1.svg",
      rating: "https://c.animaapp.com/L87tdvSe/img/frame-1315-1.svg",
      testimonial:
        '"The platform is very user friendly, I have been searching a platform like this for a long time. \nUsing affiliate business idea I have been successfully able to generate 100 active customers that yielded me approximately 100k"',
    },
  ];

  const rightColumnReviews: Review[] = [
    {
      id: 3,
      name: "Emma Stone",
      role: "Agency Owner",
      avatar: "https://c.animaapp.com/L87tdvSe/img/ellipse-197-2.svg",
      rating: "https://c.animaapp.com/L87tdvSe/img/frame-1315-4.svg",
      testimonial:
        '"I have been making 100k per month and it\'s been just 2 months."',
    },
    {
      id: 4,
      name: "Jennifer Aniston",
      role: "Digital Marketer",
      avatar: "https://c.animaapp.com/L87tdvSe/img/ellipse-197-3.svg",
      rating: "https://c.animaapp.com/L87tdvSe/img/frame-1315-4.svg",
      testimonial:
        "\"I have been making 100k per month and it's been just 2 months, it's been an amazing journey since then\"",
    },
    {
      id: 5,
      name: "Mathew Perry",
      role: "Digital Marketer",
      avatar: "https://c.animaapp.com/L87tdvSe/img/ellipse-197-4.svg",
      rating: "https://c.animaapp.com/L87tdvSe/img/frame-1315-4.svg",
      testimonial: '"Amazing User Interface"',
    },
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.section 
      ref={ref}
      className="w-full min-h-screen relative bg-black responsive-section overflow-hidden py-8 lg:py-12 3xl:py-24"
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

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.h2 
          className="[font-family:'Inter',Helvetica] font-normal text-white text-3xl sm:text-4xl md:text-5xl lg:text-[42px] 3xl:text-[52px] 4xl:text-[68px] 5xl:text-[90px] text-center tracking-[-1.10px] 3xl:tracking-[-1.4px] 4xl:tracking-[-1.8px] 5xl:tracking-[-2.4px] leading-tight lg:leading-[52px] 3xl:leading-[64px] 4xl:leading-[83px] 5xl:leading-[111px] mb-12 lg:mb-16 3xl:mb-20 4xl:mb-26 5xl:mb-35"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2 }}
        >
          <span className="font-medium tracking-[-0.44px] 3xl:tracking-[-0.55px]">See what our</span>
          <span className="font-bold tracking-[-0.44px] 3xl:tracking-[-0.55px]"> </span>
          <span className="font-bold tracking-[-0.44px] 3xl:tracking-[-0.55px]">ELITE USERS</span>
          <span className="font-bold tracking-[-0.44px] 3xl:tracking-[-0.55px]"> </span>
          <span className="font-medium tracking-[-0.44px] 3xl:tracking-[-0.55px]">say</span>
        </motion.h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 3xl:gap-8 4xl:gap-10 5xl:gap-14 max-w-4xl 3xl:max-w-5xl 4xl:max-w-[85rem] 5xl:max-w-[113rem] mx-auto">
          {/* Left Column - Desktop / All Reviews - Mobile */}
          <motion.div 
            className="flex flex-col gap-4 lg:gap-5"
            variants={reviewStagger}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {leftColumnReviews.map((review, index) => (
              <motion.article
                key={review.id}
                data-review-card
                className="w-full flex flex-col items-center bg-[#1e1e1e] rounded-[12px] 3xl:rounded-[16px] 4xl:rounded-[21px] 5xl:rounded-[28px] cursor-pointer p-4 lg:p-5 3xl:p-6 4xl:p-8 5xl:p-11"
                variants={slideLeftRotate}
                whileHover={reviewHover}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  className="h-12 w-12 lg:h-[56px] lg:w-[56px] 3xl:h-[68px] 3xl:w-[68px] 4xl:h-[89px] 4xl:w-[89px] 5xl:h-[118px] 5xl:w-[118px] object-cover rounded-full mb-2 lg:mb-3 3xl:mb-4 4xl:mb-5 5xl:mb-7"
                  alt={`${review.name} avatar`}
                  src={review.avatar}
                />

                <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-base lg:text-[18px] 3xl:text-[22px] 4xl:text-[29px] 5xl:text-[38px] text-center tracking-[0] leading-tight lg:leading-[24px] 3xl:leading-[30px] 4xl:leading-[39px] 5xl:leading-[52px] mb-1.5 3xl:mb-2 4xl:mb-3 5xl:mb-4">
                  {review.name}
                </h3>

                <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm lg:text-[14px] 3xl:text-[16px] 4xl:text-[21px] 5xl:text-[28px] text-center tracking-[0] leading-relaxed lg:leading-[20px] 3xl:leading-[24px] 4xl:leading-[31px] 5xl:leading-[41px] mb-2 lg:mb-3 3xl:mb-4 4xl:mb-5 5xl:mb-7">
                  {review.role}
                </p>

                <img
                  className="h-4 lg:h-[18px] 3xl:h-[22px] 4xl:h-[29px] 5xl:h-[38px] w-auto mb-2 lg:mb-3 3xl:mb-4 4xl:mb-5 5xl:mb-7"
                  alt="5 star rating"
                  src={review.rating}
                />

                <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-xs lg:text-[13px] 3xl:text-[15px] 4xl:text-[20px] 5xl:text-[26px] text-center tracking-[-0.11px] leading-relaxed lg:leading-[18px] 3xl:leading-[22px] 4xl:leading-[29px] 5xl:leading-[38px] max-w-md 3xl:max-w-lg 4xl:max-w-2xl 5xl:max-w-4xl">
                  {index === 1 ? (
                    <>
                      &quot;The platform is very user friendly, I have been
                      searching a platform like this for a long time. <br className="hidden lg:block" />
                      Using affiliate business idea I have been successfully able to
                      generate 100 active customers that yielded me approximately
                      100k&quot;
                    </>
                  ) : (
                    review.testimonial
                  )}
                </p>
              </motion.article>
            ))}

            {/* Show right column reviews on mobile */}
            <div className="lg:hidden flex flex-col gap-4">
              {rightColumnReviews.map((review) => (
                <motion.article
                  key={review.id}
                  data-review-card
                  className="w-full flex flex-col items-center bg-[#1e1e1e] rounded-[12px] cursor-pointer p-4"
                  variants={slideRightRotate}
                  whileHover={reviewHover}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    className="h-12 w-12 object-cover rounded-full mb-2"
                    alt={`${review.name} avatar`}
                    src={review.avatar}
                  />

                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-tight mb-1.5">
                    {review.name}
                  </h3>

                  <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-relaxed mb-2">
                    {review.role}
                  </p>

                  <img
                    className="h-4 w-auto mb-2"
                    alt="5 star rating"
                    src={review.rating}
                  />

                  <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-relaxed">
                    {review.testimonial}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Desktop Only */}
          <motion.div 
            className="hidden lg:flex flex-col gap-5"
            variants={reviewStagger}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {rightColumnReviews.map((review) => (
              <motion.article
                key={review.id}
                data-review-card
                className="w-full"
                variants={slideRightRotate}
              >
                <motion.div
                  className="flex flex-col items-center bg-[#1e1e1e] rounded-[12px] cursor-pointer p-4 lg:p-5"
                  whileHover={reviewHover}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    className="w-12 h-12 lg:w-[56px] lg:h-[56px] object-cover rounded-full mb-2 lg:mb-3"
                    alt={`${review.name} avatar`}
                    src={review.avatar}
                  />

                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-base lg:text-[18px] text-center tracking-[0] leading-tight lg:leading-[24px] mb-1.5">
                    {review.name}
                  </h3>

                  <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm lg:text-[14px] text-center tracking-[0] leading-relaxed lg:leading-[20px] mb-2 lg:mb-3">
                    {review.role}
                  </p>

                  <img
                    className="h-4 lg:h-[18px] w-auto mb-2 lg:mb-3"
                    alt="5 star rating"
                    src={review.rating}
                  />

                  <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-xs lg:text-[13px] text-center tracking-[0.22px] leading-relaxed lg:leading-[18px] max-w-md">
                    {review.testimonial}
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};