import React from "react";
import { slideUp } from "./animation";
import { useInView, motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const index = () => {
  const phrase =
    "We turn business ideas into reality with creative, professional web design, development, and AI solutions focused on people.";
  const services = [
    "Custom Software Development",
    "Mobile App Development",
    "UX/UI Design",
    "AI Integration",
    "Automation",
    "Platform & Infrastructure",
  ];
  const description = useRef(null);
  const isInView = useInView(description);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <section className="min-h-screen services-section" ref={container}>
      <h2 className="services-heading">services</h2>
      <div className="services-box box">
        <p ref={description} className="text-[32px] leading-[150%] font-normal">
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className="mask">
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
      </div>

      <div className="items">
        <motion.div
          className="top-border"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {services.map((service, index) => (
          <div className="item font-normal" key={index}>
            <p>{service}</p>
            <Image
              src="/images/arrow.png"
              width={52.34}
              height={0}
              alt="icon"
            />
            <motion.div
              className="border-line bottom"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
        ))}
      </div>

      <motion.div style={{ height }} className="circleContainer">
        <div className="circle-services"></div>
      </motion.div>
    </section>
  );
};

export default index;
