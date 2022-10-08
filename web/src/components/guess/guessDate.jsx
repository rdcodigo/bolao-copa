import { useState } from "react"
import { ArrowIcon } from "../icons/arrowIcons"
import {addDays, subDays, format} from 'date-fns'
import { ptBR } from 'date-fns/locale'

const initialDate = '2022-11-20T00:00:00Z'

export function GuessDate() {

    const [currentDate, setCurrentDate] = useState(new Date(initialDate))

    function nextDay(){
        const nextDate = addDays(currentDate, 1)
        setCurrentDate(nextDate)
    }

    function prevDay(){
        const prevDate = subDays(currentDate, 1)
        setCurrentDate(prevDate)
    }

    return (
        <div className="text-color3-20 font-bold flex items-center justify-center p-4">
            <ArrowIcon onClick={prevDay} name="arrowLeft" className="w-6" />
            <span className="px-6 text-color3-30">{format(currentDate, "d 'de' MMMM", { locale: ptBR })}</span>
            <ArrowIcon onClick={nextDay} name="arrowRight" className="w-6" />
        </div>
    )
}
