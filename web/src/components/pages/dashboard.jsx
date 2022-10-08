import { ProfileIcon } from "../icons/profileIcons"
import { HunchCard } from "../hunches/hunchCard"
import { HunchDate } from "../hunches/hunchDate"

export function Dashboard() {
    return (
        <>

            <header className="py-4 text-color2 bg-color3-20 p-6 " >
                <section className="container max-w-xl flex justify-between">
                    <div className="flex justify-center">
                        <img src="../public/imgs/logo/logo-fundo-vermelho.svg" className="w-20 md:w-28"></img>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <a href="/profile">
                            <ProfileIcon name="profile" className="w-6 md:w-10" />
                        </a>
                    </div>
                </section>
                <section className="container max-w-xl py-6 space-y-6 flex flex-col">
                    <span>Olá Diego</span>
                    <h1 className="text-xl md:text-2xl font-bold">Qual é o seu palpite?</h1>
                </section>
            </header>

            <main className="container max-w-xl p-6 space-y-4">
                <HunchDate />

                <HunchCard
                    timeA={
                        {
                            name: 'sui'
                        }
                    }
                    timeB={
                        {
                            name: 'cam'
                        }
                    }
                    match={
                        {
                            time: '7:00'
                        }
                    }
                />

                <HunchCard
                    timeA={
                        {
                            name: 'uru'
                        }
                    }
                    timeB={
                        {
                            name: 'cor'
                        }
                    }
                    match={
                        {
                            time: '10:00'
                        }
                    }
                />

                <HunchCard
                    timeA={
                        {
                            name: 'por'
                        }
                    }
                    timeB={
                        {
                            name: 'gan'
                        }
                    }
                    match={
                        {
                            time: '13:00'
                        }
                    }
                />
            </main>
        </>
    )
}