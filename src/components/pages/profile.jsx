import { ArrowIcon } from "../icons/arrowIcons"
import { ProfileIcon } from "../icons/profileIcons"
import { GuessCard } from "../guess/guessCard"
import { GuessDate } from "../guess/guessDate"

export function Profile() {
    return (
        <>
            <header className="py-4 text-color2 bg-color3-20 p-6">
                <section className="container max-w-xl flex justify-between">
                    <div className="flex justify-center">
                        <img src="../public/imgs/logo/logo-fundo-vermelho.svg" className="w-20 md:w-28"></img>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <a href="/dashboard">
                            <ProfileIcon name="profile" className="w-6 md:w-10" />
                        </a>
                    </div>
                </section>
                <section className="bg-color3-20 container max-w-xl">
                    <div className="container max-w-xl py-6 space-y-6 flex flex-col">
                        <a href="/">
                            <ArrowIcon name="arrowBack" className="w-4 md:w-8" />
                        </a>
                        <h1 className="text-xl md:text-2xl font-bold text-white">Diego Rodrigues</h1>
                    </div>
                </section>
            </header>

            <main className="container max-w-xl p-6 space-y-4">
                <h2 className="text-xl font-bold text-color3-20">Seus Palpites</h2>
                <GuessDate />

                <GuessCard
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

                <GuessCard
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

                <GuessCard
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