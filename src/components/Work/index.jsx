import React, { useRef } from "react"
import Image from "next/image"
import { useInView, motion } from "framer-motion"
import { slideIn } from "./animation"

const index = () => {
  const works = useRef(null)
  const isInView = useInView(works)

  return (
    <section className="min-h-screen" id="work">
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
    </section>
  )
}

export default index

// @media (max-width: 768px) {
//   .grid-container {
//     grid-template-columns: 1fr;
//     grid-template-rows: auto auto auto;
//   }
//   .grid-item.large,
//   .grid-item.top-right,
//   .grid-item.bottom-row {
//     grid-column: 1 / 2;
//   }
//   .grid-item.bottom-row {
//     grid-template-columns: 1fr;
//   }
// }
