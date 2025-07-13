import React from "react"
import Image from "next/image"
import Header from "../../components/Header"
import Magnetic from "../../common/Magnetic"

const index = () => {
  return (
    <main className="min-h-screen" id="#home">
      <Header />
      <h1 className="absolute sm:-top-5 md:-top-8 lg:-top-12 sm:text-[15vw] text-[14.5vw] 2xl:text-[233px] m-auto font font-semibold tracking-[-5%]">
        PLANN<span className="text-[#0000A3] font-bold italic o-class">O</span>RIUM
      </h1>

      <div className="absolute top-[25%] lg:top-[35%] left-[1%] w-[430] h-[250px] md:w-[725px] md:h-[330px] lg:w-[47vw] lg:h-[23vw] bg-[#0000a3]">
        <div className="w-full h-full flex items-center justify-center">
          <Image src="/images/landing-image.png" width={579} height={0} alt="image" className="w-[400px] md:w-[579px] lg:w-[40vw]" />
        </div>
        <p className="text-[30px] text">Pioneering Digital Excellence</p>
      </div>

      <div className="absolute left-2 lg:left-[57%] top-[70%] sm:top-[80%] lg:top-[40%]">
        <p className="text-[20px] md:text-[23px] xl:text-[30px] text max-w-145">We design and develop modern websites, digital platforms, and interactive experiences for visionary brands.</p>

        <div className="flex absolute top-[125%] xl:top-[120%] gap-10 z-50">
          <Magnetic>
            <button
              className="button button-full"
              onClick={e => {
                e.preventDefault()
                const work = document.querySelector("#work")
                if (work) {
                  const y = work.getBoundingClientRect().top + window.pageYOffset
                  window.scrollTo({ top: y, behavior: "smooth" })
                }
              }}
            >
              see our projects
            </button>
          </Magnetic>
          <button
            className="button button-hover"
            onClick={e => {
              e.preventDefault()
              const contact = document.querySelector("#contact")
              if (contact) {
                const offset = 500
                const y = contact.getBoundingClientRect().top + window.pageYOffset + offset
                window.scrollTo({ top: y, behavior: "smooth" })
              }
            }}
          >
            contact us
          </button>
        </div>
      </div>
    </main>
  )
}

export default index
