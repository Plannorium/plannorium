import React from "react"
import { slideUp, opacity } from "./animation"
import { useInView, motion } from "framer-motion"
import { useRef } from "react"

const index = () => {
  const phrase = "We turn business ideas into reality with creative, professional web design, development, and AI solutions focused on people."
  const description = useRef(null)
  const isInView = useInView(description)

  return (
    <section className="min-h-screen">
      <h2 className="work-heading">services</h2>
      <div className="box">
        <p ref={description} className="text-[30px] leading-[150%] font-medium">
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className="mask">
                <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>
                  {word}
                </motion.span>
              </span>
            )
          })}
        </p>
      </div>
    </section>
  )
}

export default index
