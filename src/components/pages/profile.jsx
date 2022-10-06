import { ArrowIcon } from "../icons/arrowIcons"
import { ProfileIcon } from "../icons/profileIcons"

export function Profile() {
    return (
        <div className="text-white bg-color3-20 p-6">
            <header className="py-4" >
                <div className="container max-w-xl flex justify-between">
                    <div className="flex justify-center">
                        <img src="../public/imgs/logo/logo-fundo-vermelho.svg" className="w-20 md:w-28"></img>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <a href="/profile">
                            <ProfileIcon name="profile" className="w-6 md:w-10" />
                        </a>
                    </div>
                </div>
            </header>
            <main className="bg-color3-20 container max-w-xl">
                <div className="py-6 space-y-6 flex flex-col">
                    <a href="/">
                        <ArrowIcon name="arrowBack" className="w-4 md:w-8" />
                    </a>
                    <h2 className="text-xl md:text-2xl font-bold text-white">Diego Rodrigues</h2>
                </div>
            </main>
        </div>
    )
}