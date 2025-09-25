import Image from "next/image"
import Link from "next/link"
import Copy from "./gsap/Copy"
import GsapAnimate from "./gsap/GsapAnimate"

const Footer = () => {
    return (
        <div className='grid grid-cols-4 md:text-xl items-center py-[13vh] px-5 md:px-10 dark:bg-[#000000e1] bg-[#efefef] dark:text-[#E1E1E1]  md:space-y-0 space-y-7 '>
            <div className="col-span-4 md:col-span-1 ">
                <GsapAnimate from="bottom">
                    <Image
                        data-cursor-text="Itachi Uchia"
                        src="/itachi.gif"
                        alt="contact me"
                        width={100}
                        height={100}
                        className=" w-30 h-45 cursor-hover-target -mx-5"
                    />
                </GsapAnimate>
            </div>
            <div className="md:text-center col-span-4 md:col-span-1">
                <Copy>
                    <Link data-cursor-text="LnkedIn" target="_blank" href="https://www.linkedin.com/in/sagar-raghav-6890582a0/" className="cursor-hover-target cursor-hover-social flex items-center gap-2  hover:translate-x-2 transition-transform">
                        LinkedIn
                    </Link>
                    <Link data-cursor-text="Instagram" target="_blank" href="#" className=" cursor-hover-target cursor-hover-social flex items-center gap-2 hover:translate-x-2 transition-transform">
                        Instagram
                    </Link>
                    <Link data-cursor-text="Github" target="_blank" href="https://github.com/sagarRaghav-0" className=" cursor-hover-target cursor-hover-social flex items-center gap-2 hover:translate-x-2 transition-transform">
                        Github
                    </Link>
                </Copy>
            </div>

            <div className="md:text-center col-span-4 md:col-span-1">
                <Copy>

                    <Link data-cursor-text="Email" target="_blank" href="mailto:rajatb9355@gmail.com?subject=Hello&body=Hi, I’d like to get in touch!"
                        className="cursor-hover-target cursor-hover-social flex items-center gap-2 hover:translate-x-2 transition-transform">
                        Email
                    </Link>
                </Copy>

            </div>

            <div className="md:text-right col-span-4 md:col-span-1">
                <Copy>

                    <p className="cursor-hover-target cursor-hover-social" data-cursor-text="Me"  >© {new Date().getFullYear()} Sagar Raghav</p>
                </Copy>


            </div>
        </div>
    )
}

export default Footer
