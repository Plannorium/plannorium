import React, { useRef } from "react"
import Image from "next/image"
import { useInView, motion } from "framer-motion"
import { slideIn } from "./animation"

const index = () => {
  const works = useRef(null)
  const isInView = useInView(works)

  return (
    <section className="work min-h-screen" id="work">
      <h2 className="work-heading">work</h2>

      <div ref={works} className="grid-container">
        <div className="large margin-large w-[914px] h-[418px] bg-[#E9DED9] overflow-hidden">
          <motion.div variants={slideIn} initial="initial" animate={isInView ? "open" : "closed"} className="w-full h-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0"></div>
            <Image className="grid-item" src="/images/work-1.png" width={837} height={0} alt="image" />
          </motion.div>
        </div>

        <div className="top-right">
          <div className="margin-top w-[448px] h-[200px] bg-[#E9DED9] overflow-hidden">
            <motion.div variants={slideIn} initial="initial" animate={isInView ? "open" : "closed"} className="w-full h-full flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0"></div>
              <Image className="grid-item" src="/images/work-2.png" width={402} height={0} alt="image" />
            </motion.div>
          </div>

          <div className="w-[448px] h-[200px] bg-[#E9DED9] overflow-hidden">
            <motion.div variants={slideIn} initial="initial" animate={isInView ? "open" : "closed"} className="w-full h-full flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0"></div>
              <Image className="grid-item" src="/images/work-3.png" width={402} height={0} alt="image" />
            </motion.div>
          </div>
        </div>

        <div className="bottom-row">
          <div className="margin-small w-[448px] h-[200px] bg-[#E9DED9] overflow-hidden">
            <motion.div variants={slideIn} initial="initial" animate={isInView ? "open" : "closed"} className="w-full h-full flex items-center justify-center overflow-hidden">
              <Image className="grid-item" src="/images/work-6.png" width={402} height={0} alt="image" />
            </motion.div>
          </div>

          <div className="margin-left w-[448px] h-[200px] bg-[#E9DED9] overflow-hidden">
            <motion.div variants={slideIn} initial="initial" animate={isInView ? "open" : "closed"} className="w-full h-full flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0"></div>
              <Image className="grid-item" src="/images/work-5.png" width={402} height={0} alt="image" />
            </motion.div>
          </div>

          <div className="margin-left-bottom w-[448px] h-[200px] bg-[#E9DED9] overflow-hidden">
            <motion.div variants={slideIn} initial="initial" animate={isInView ? "open" : "closed"} className="w-full h-full flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0"></div>
              <Image className="grid-item" src="/images/work-4.png" width={402} height={0} alt="image" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="responsive-grid flex flex-col gap-10 2xl:hidden">
        <div className="w-full h-full flex items-center justify-center">
          <Image className="grid-item border-15 border-[#E9DED9] w-[402px] sm:w-[65vw]" src="/images/work-2.png" width={402} height={0} alt="image" />
        </div>

        <div className="w-full h-full flex items-center justify-center">
          <Image className="grid-item border-15 border-[#E9DED9] w-[402px] sm:w-[65vw]" src="/images/work-3.png" width={402} height={0} alt="image" />
        </div>

        <div className="w-full h-full flex items-center justify-center">
          <Image className="grid-item border-15 border-[#E9DED9] w-[402px] sm:w-[65vw]" src="/images/work-6.png" width={402} height={0} alt="image" />
        </div>

        <div className="w-full h-full flex items-center justify-center">
          <Image className="grid-item border-15 border-[#E9DED9] w-[402px] sm:w-[65vw]" src="/images/work-5.png" width={402} height={0} alt="image" />
        </div>
      </div>
    </section>
  )
}

export default index
