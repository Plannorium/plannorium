import styles from "./style.module.scss"
import Image from "next/image"
import Rounded from "../../common/RoundedButton"
import { useRef } from "react"
import { useScroll, motion, useTransform, useSpring } from "framer-motion"
import Magnetic from "../../common/Magnetic"

export default function index() {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0])

  return (
    <motion.div style={{ y }} ref={container} className={styles.contact} id="contact">
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/images/logo.png`} />
            </div>
            <h2 className="font-semibold text-[80px] tracking-[-5%]">Let’s Work Together</h2>
          </span>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded className={styles.button}>
              <p onClick={() => (window.location.href = "https://wa.me/2348068926547")} className="font-medium tracking-[-5%] text-[30px]">
                Get In Touch
              </p>
            </Rounded>
          </motion.div>
        </div>

        <div className={styles.nav}>
          <Rounded backgroundColor={"#0000A3"}>
            <p onClick={() => (window.location.href = "mailto:hello@plannorium.com")} className="font-medium tracking-[-5%] text-[25px]">
              hello@plannorium.com
            </p>
          </Rounded>
          <Rounded backgroundColor={"#0000A3"}>
            <p onClick={() => (window.location.href = "https://wa.me/2348068926547")} className="font-medium tracking-[-5%] text-[25px]">
              +23 4 80 68 92 65 47
            </p>
          </Rounded>
        </div>

        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2025 © Fateme Adiban</p>
            </span>
          </div>

          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <p onClick={() => (window.location.href = "https://linkedin.com/company/plannorium")}>LinkedIn</p>
              </Magnetic>
            </span>

            <Magnetic>
              <p onClick={() => (window.location.href = "https://instagram.com/plannorium")}>Instagram</p>
            </Magnetic>

            <Magnetic>
              <p onClick={() => (window.location.href = "https://x.com/plannorium")}>Twitter</p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
