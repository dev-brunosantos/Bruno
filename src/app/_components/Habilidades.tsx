import { FaHtml5, FaCss3, FaJsSquare, FaReact } from 'react-icons/fa'
import { RiNextjsFill, RiTailwindCssFill,RiBootstrapFill,RiFirebaseFill,RiNodejsLine } from 'react-icons/ri'
import { DiMysql, DiPostgresql, DiSqllite, DiMongodb,DiSass   } from 'react-icons/di'
import { BiLogoTypescript } from 'react-icons/bi'
import { SiApachenifi, SiOracle, SiNestjs  } from 'react-icons/si'
import { CardTech } from '@/src/components/Card/Tech'

export function Habilidades() {
    return(
        <section>
            <h1>Habilidades</h1>

            <div className='w-[100%] h-[100px] border-2 px-4 overflow-x-auto flex items-center gap-4'>
                <CardTech>
                    <FaHtml5 size={50} />
                </CardTech>

                <CardTech>
                    <FaCss3 size={40} />
                </CardTech>

                <CardTech>
                    <DiSass size={40} />
                </CardTech>

                <CardTech>
                    <RiBootstrapFill size={40} />
                </CardTech>

                <CardTech>
                    <RiTailwindCssFill size={40} />
                </CardTech>

                <CardTech>
                    <FaJsSquare size={50} />
                </CardTech>

                <CardTech>
                    <FaReact size={40} />
                </CardTech>
            </div>
        </section>
    )
}