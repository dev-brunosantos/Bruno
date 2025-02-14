import Image from "next/image";
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

import Logo1 from '../../../public/img/logo-1.jpeg'
import Logo2 from '../../../public/img/logo-2.jpeg'
import Link from "next/link";

export function Home() {
    return (
        <section>
            {/* <div className="w-[200px] h-[300px] relative"> */}
            <div className="w-full h-[100vh] relative md:hidden z-20">
                <Image
                    src={Logo1}
                    alt="Logo teste"
                    priority
                    quality={100}
                    className="w-full h-full object-contain opacity-60"
                />


                <div className="w-full h-full px-10 absolute top-0 left-0 z-50 flex flex-col items-start justify-center">
                    <h1>
                        Olá, eu sou o
                        <span>Bruno</span>
                    </h1>

                    <h2>
                        Sou desenvolvedor
                        <span>Front-end</span>
                    </h2>

                    <p>
                        Desenvolvedor com experiência em Javascript, 
                        dedicado em transformar ideias em soluções inovadoras 
                        por meio do domínio desta poderosa linguagem de programação
                    </p>

                    <div className="w-[100%] h-[60px] mt-10 border-2 flex items-center justify-evenly">
                        <Link href='https://github.com/dev-brunosantos' target="_blank">
                            <FaGithub  size={35}/>
                        </Link>
                        <Link href='https://www.linkedin.com/in/dev-bruno-santos/' target="_blank">
                            <FaLinkedin size={35}/>
                        </Link>
                        <Link href='https://wa.me/+5511985706834' target="_blank">
                            <FaWhatsapp  size={35}/>
                        </Link>
                    </div>
                </div>
                <div className="w-full h-full absolute top-0 left-0 md:hidden bg-[#00000050]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">

                <div className="w-[45%]">

                </div>
                <div className="hidden w-[45%] md:block">
                    <Image
                        src={Logo1}
                        alt="Logo teste"
                        priority
                        quality={100}
                        className="w-full h-full object-contain opacity-80"
                    />
                </div>

            </div>
        </section>
    )
}