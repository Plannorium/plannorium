import Rounded from "../../common/RoundedButton";
import { slideUp, opacity } from "./animation";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function index() {
  const phrase1 =
    "We’re a team of strategists, designers, and developers who love turning great ideas into powerful digital experiences. We work with businesses to help them grow and succeed in today’s digital world.";
  const phrase2 =
    "We start by understanding your goals to shape the right plan. Then we design smart solutions and create quick prototypes to bring ideas to life. Using agile development, we build the product step by step with your input along the way. Once it’s ready, we launch, support, and help your business grow.";
  const description1 = useRef(null);
  const description2 = useRef(null);
  const isInView1 = useInView(description1);
  const isInView2 = useInView(description2);

  return (
    <section className="about min-h-screen" id="about">
      <div className="box">
        <h2 className="uppercase text-[60px] lg:text-[100px] xl:text-[150px] font-semibold">
          about
        </h2>
        <p
          ref={description1}
          className="text-[32px] leading-[150%] font-normal"
        >
          {phrase1.split(" ").map((word, index) => {
            return (
              <span key={index} className="mask">
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView1 ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
      </div>

      <Rounded className="circle">
        <p
          className=""
          onClick={() =>
            (window.location.href =
              "http://calendly.com/team-plannorium_/30min")
          }
        >
          Have <br /> questions? Let’s talk
        </p>
      </Rounded>

      <div className="second-box">
        <h2 className="uppercase text-[45px] lg:text-[60px] xl:text-[80px] font-semibold">
          our process
        </h2>
        <p
          ref={description2}
          className="text-[30px] leading-[150%] font-normal"
        >
          {phrase2.split(" ").map((word, index) => {
            return (
              <span key={index} className="mask">
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView2 ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
