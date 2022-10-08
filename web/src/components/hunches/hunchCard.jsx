
export function HunchCard({ match, timeA, timeB }) {
    
    return (
        <section className=" space-y-6">

            <div className="rounded-3xl border py-4 border-color4-10 flex flex-col items-center text-color4-30">
                <span className="text-xs md:text-base font-bold">{match.time}</span>

                <div className="flex items-center space-x-1.5 sm:space-x-5 p-1">
                    <span className="uppercase">{timeA.name}</span>
                    <img src={`../public/imgs/bandeiras/${timeA.name}.png`} className="w-6 sm:w-10 md:w-18"></img>

                    <input type="number" className="w-6 h-6 sm:w-10 sm:h-10 md:w-18 md:h-18 flex justify-center items-center bg-color3-10/[0.15] text-color3-30 sm:text-xl text-center" />

                    <span className="text-xl text-color3-20 font-bold">X</span>

                    <input type="number" className="w-6 h-6 sm:w-10 sm:h-10 md:w-18 md:h-18 flex justify-center items-center bg-color3-10/[0.15] text-color3-30 text-xl text-center" />

                    <img src={`../public/imgs/bandeiras/${timeB.name}.png`} className="w-6 sm:w-10 md:w-18"></img>

                    <span className="uppercase">{timeB.name}</span>
                </div>
            </div>

        </section>
    )
}