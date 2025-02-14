import { FaHtml5, FaCss3, FaJsSquare, FaReact } from 'react-icons/fa'
import { RiNextjsFill, RiTailwindCssFill, RiBootstrapFill, RiFirebaseFill, RiNodejsLine } from 'react-icons/ri'
import { DiMysql, DiPostgresql, DiSqllite, DiMongodb, DiSass } from 'react-icons/di'
import { BiLogoTypescript } from 'react-icons/bi'
import { SiApachenifi, SiOracle, SiNestjs } from 'react-icons/si'
import { CardTech } from '@/src/components/Card/Tech'

const icones = [
    {
        icone: FaHtml5
    },
    {
        icone: FaCss3
    },
    {
        icone: RiBootstrapFill
    },
    {
        icone: DiSass
    },
    {
        icone: RiTailwindCssFill
    },
    {
        icone: FaJsSquare
    },
    {
        icone: BiLogoTypescript
    },
    {
        icone: FaReact
    },
    {
        icone: RiNextjsFill
    },
    {
        icone: DiMongodb
    },
    {
        icone: DiMysql
    },
    {
        icone: SiOracle
    },
    {
        icone: DiPostgresql
    },
    {
        icone: DiSqllite
    },
    {
        icone: RiFirebaseFill
    },
    {
        icone: SiNestjs
    },
    {
        icone: SiApachenifi
    }
]



export function Habilidades() {
    return (
        <section>
            <h1>Habilidades</h1>

            <div className='w-[100%] h-[100px] border-2 px-4 overflow-x-auto flex items-center gap-4'>
                {icones.map((card) => (
                    <CardTech>
                        <div>
                            <card.icone size={40} />
                        </div>
                    </CardTech>
                ))}
            </div>
        </section>
    )
}