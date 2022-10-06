import { ArrowIcon } from "../icons/arrowIcons"
import { Input } from "../inputs/dataInputs"

export function Login() {

    return (
        <div>
            <header className="p-4 border-b border-color3-10">
                <div className="container max-w-xl flex justify-center">
                    <img src="../public/imgs/logo/logo-fundo-branco.svg" width={100}></img>
                </div>
            </header>

            <main className="container max-w-xl p-4">
                <section>
                    <div className="p-4 flex space-x-4 items-center">
                        <a href="/">
                            <ArrowIcon name="arrowBack" />
                        </a>
                        <h2 className="text-xl font-bold">Entre na sua conta</h2>
                    </div>

                    <form className="p-4 space-y-6">
                        <Input
                            type="text"
                            name="email"
                            label="Seu E-mail"
                            placeholder="Digite seu e-mail"
                        />

                        <Input
                            type="password"
                            name="password"
                            label="Sua senha"
                            placeholder="********"
                        />

                        <button className='w-full text-center text-color2 bg-color3-20 p-3 rounded-xl'>
                            Acessar conta
                        </button>
                    </form>
                </section>
            </main>
        </div>
    )
}