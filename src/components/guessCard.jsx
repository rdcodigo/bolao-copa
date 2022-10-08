import { ArrowIcon } from "./icons/arrowIcons"

export function GuessCard({data, timeA, timeB, match}) {
    return (
        <section className=" space-y-6">
            <div className="text-color3-20 font-bold flex items-center justify-center">
                <a href="/">
                    <ArrowIcon name="arrowLeft" className="w-6" />
                </a>
                <span className="px-6 text-color3-30">{data}</span>
                <a href="/">
                    <ArrowIcon name="arrowRight" className="w-6" />
                </a>
            </div>
            <div className="rounded-3xl border border-color4-10 p-4 flex flex-col items-center text-color4-30">
                <span className="p- text-xs md:text-base font-bold">{match}</span>

                <div className="flex items-center space-x-5 p-4">
                    <span className="uppercase">{timeA}</span>
                    <img src={`../public/imgs/bandeiras/${timeA}.png`} className="w-12 md:w-18"></img>

                    <input type="number" className="w-12 h-12 md:w-18 md:h-18 border flex justify-center items-center bg-color3-10/[0.15] text-color3-30 text-xl text-center" />

                    <span className="text-xl text-color3-20 font-bold">X</span>

                    <input type="number" className="w-12 h-12 md:w-18 md:h-18 border flex justify-center items-center bg-color3-10/[0.15] text-color3-30 text-xl text-center" />

                    <img src={`../public/imgs/bandeiras/${timeB}.png`} className="w-12 md:w-18"></img>

                    <span className="uppercase">{timeB}</span>
                </div>
            </div>
        </section>
    )
}