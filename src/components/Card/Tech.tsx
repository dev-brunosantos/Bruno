import { ReactNode } from "react"

interface TechInfor {
    children: ReactNode
}

export const CardTech = ({ children }: TechInfor) => {
    return (
        <div className="w-20 h-20 border-2 rounded-md flex items-center justify-center">
            {children}
        </div>
    )
}