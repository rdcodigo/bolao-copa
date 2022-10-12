import { ArrowIcon } from "../icons/arrowIcons"
import { HunchCard } from "../hunches/hunchCard"
import { HunchDate } from "../hunches/hunchDate"

import { useLocalStorage } from "react-use"
import { Navigate } from "react-router-dom"

export function Profile() {

    const [auth, setAuth] = useLocalStorage('auth', {})

    function logout() {
        setAuth({})
    }

    if (!auth?.user?.id) {
        return <Navigate to="/home" replace={true} />
    }

    return (
        <>
            <header className="py-4 text-color2 bg-color3-20 p-6">
                <section className="container max-w-xl flex justify-between">
                    <div className="flex justify-center">
                        <img src="../public/imgs/logo/logo-fundo-vermelho.svg" className="w-20 md:w-28"></img>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <div onClick={logout} className="cursor-pointer">
                            Sair
                        </div>
                    </div>
                </section>
                <section className="bg-color3-20 container max-w-xl">
                    <div className="container max-w-xl py-6 space-y-6 flex flex-col">
                        <a href="/home" className="flex space-x-3">
                            <ArrowIcon name="arrowBack" className="w-4" /> <span>Palpitar</span>
                        </a>
                        <h1 className="text-xl md:text-2xl font-bold text-white">Diego Rodrigues</h1>
                    </div>
                </section>
            </header>

            <main className="container max-w-xl p-6 space-y-4">
                <h2 className="text-xl font-bold text-color3-20">Seus Palpites</h2>
            </main>
        </>
    )
}