"use client"

import { useState } from "react";
import { MdMenu } from "react-icons/md";

export const Menu = () => {

    const [abrirMenu, setAbrirMenu] = useState('hidden')

    const teste = () => {
        abrirMenu == 'hidden' ? setAbrirMenu('flex flex-col') : setAbrirMenu('hidden')
    }

    return (
        <header className="w-full h-[50px] border-2 px-4 flex items-center justify-between lg:h-[70px] fixed top-0 left-0 z-50 bg-[#242424]">
            <div className="h-full flex items-center justify-center">
                <a href="#">Bruno Santos</a>
            </div>

            <nav className="w-auto h-full flex items-center justify-center relative lg:w-30%">
                <button
                    onClick={teste}
                    className="lg:hidden"
                >
                    <MdMenu size={35} />
                </button>

                <ul className={
                    `w-[60vw] h-[80vh] pl-4 ${abrirMenu} justify-evenly absolute top-[100%] -right-3 border-2 transition-all duration-300
                     lg:flex lg:flex-row lg:items-center lg:relative lg:top-0 lg:h-full bg-[#242424] z-50
                    `
                }>
                    <li>
                        <a href="">Home</a>
                    </li>

                    <li>
                        <a href="#habilidades">Habilidades</a>
                    </li>

                    <li>
                        <a href="">Projetos</a>
                    </li>

                    <li>
                        <a href="">Contatos</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}