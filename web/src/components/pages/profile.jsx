import { BaseURL } from "../../router"

import { ArrowIcon } from "../icons/arrowIcons"
import { HunchCard } from "../hunches/hunchCard"
import { HunchDate } from "../hunches/hunchDate"

import { useAsyncFn, useLocalStorage } from "react-use"
import {useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { format, formatISO } from "date-fns"

import axios from "axios"

export function Profile() {

    const [currentDate, setCurrentDate] = useState(formatISO(new Date(2022, 10, 20)))

    const [auth] = useLocalStorage('auth', {})

    const [hunches, fetchHunches] = useAsyncFn(
        async () => {
            const res = await axios(
                {
                    methoc: 'get',
                    baseURL: BaseURL(),
                    url: `/${auth.user.username}`
                }
            )
            
            const hunches = res.data.reduce(
                (acc, hunch)=>{
                    acc[hunch.gameId] = hunch
                    return acc
                },
                {}
            )
            return hunches
        }
    )

    const [games, fetchGames] = useAsyncFn(
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
    
    const isLoading = games.loading || hunches.loading
    const hasError = games.error || hunches.error
    const isDone = !isLoading && !hasError

    useEffect(
        ()=>{
            fetchHunches()
        },
        []
    )

    useEffect(
        ()=>{
            fetchGames({gameTime: currentDate})
        },
        [currentDate]
    )

    if (!auth?.user?.id) {
        return <Navigate to="/login" replace={true} />
    }

    return (
        <>
            <header className="py-4 text-color2 bg-color3-20 p-6">
                <section className="container max-w-xl flex justify-between">
                    <div className="flex justify-center">
                        <img src="../public/imgs/logo/logo-fundo-vermelho.svg" className="w-20 md:w-28"></img>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <div onClick={() => setAuth({})} className="cursor-pointer">
                            Sair
                        </div>
                    </div>
                </section>
                <section className="bg-color3-20 container max-w-xl">
                    <div className="container max-w-xl py-6 space-y-6 flex flex-col">
                        <a href="/home" className="flex space-x-3">
                            <ArrowIcon name="arrowBack" className="w-4" /> <span>Palpitar</span>
                        </a>
                        <h1 className="text-xl md:text-2xl font-bold text-white">{auth.user.name}</h1>
                    </div>
                </section>
            </header>

            <main className="container max-w-xl p-6 space-y-4">
                <h2 className="text-xl font-bold text-color3-20">Seus Palpites</h2>

                <HunchDate currentDate={currentDate} onChange={setCurrentDate} />

                {isLoading && 'Carregando jogos...'}
                {hasError && 'Ops, Algo deu errado'}

                
                {isDone && games.value?.map(
                    game => (
                        <HunchCard
                            key={game.id}
                            gameId={game.id}
                            homeTeam={game.homeTeam }
                            awayTeam={game.awayTeam}
                            gameTime={format(new Date(game.gameTime), 'H:mm')}
                            homeTeamScore={hunches?.value?.[game.id]?.homeTeamScore || ''}
                            awayTeamScore={hunches?.value?.[game.id]?.awayTeamScore || ''}
                            disabled={true}
                        />
                    )
                )}
            </main>
        </>
    )
}