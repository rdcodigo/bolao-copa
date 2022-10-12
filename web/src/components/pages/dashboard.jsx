import { BaseURL } from "../../router"

import { ProfileIcon } from "../icons/profileIcons"
import { HunchCard } from "../hunches/hunchCard"
import { HunchDate } from "../hunches/hunchDate"

import { useAsyncFn, useLocalStorage } from "react-use"
import {useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { format, formatISO } from "date-fns"

import axios from "axios"

export function Dashboard() {

    const [currentDate, setCurrentDate] = useState(formatISO(new Date(2022, 10, 20)))

    const [auth] = useLocalStorage('auth', {})

    const [state, doFetch] = useAsyncFn(
        async (params) => {
            const res = await axios(
                {
                    methoc: 'get',
                    baseURL: BaseURL(),
                    url: '/games',
                    params
                }
            )

            return res.data
        }
    )

    useEffect(
        ()=>{
            doFetch({gameTime: currentDate})
        },
        [currentDate]
    )

    if (!auth?.user?.id) {
        return <Navigate to="/login" replace={true} />
    }

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
                <HunchDate currentDate={currentDate} onChange={setCurrentDate}/>

                {state.loading && 'Carregando jogos...'}
                {state.error && 'Ops, Algo deu errado'}
                {!state.loading && !state.error && state.value?.map(
                    game => (
                        <HunchCard
                            key={game.homeTeam+game.awayTeam}
                            gameId={game.id}
                            homeTeam={game.homeTeam }
                            awayTeam={game.awayTeam}
                            gameTime={format(new Date(game.gameTime), 'H:mm')}
                        />
                    )
                )}
            </main>
        </>
    )
}