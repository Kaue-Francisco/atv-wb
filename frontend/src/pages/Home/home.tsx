export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <main>
                <section className="py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 space-y-6">
                        <div className="grid max-w-[800px] gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                            <div>
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Gerenciamento de Clientes
                                </h1>
                                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                                    Cadastre seus clientes de forma rápida e eficiente.
                                </p>
                            </div>
                            <div className="flex flex-col items-start space-y-4">
                                <div className="inline-block rounded-lg text-white bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Recursos-Chave
                                </div>
                                <ul className="grid gap-4">
                                    <li className="flex items-center gap-2">
                                        <span>Cadastro de Clientes</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span>Editar Clientes</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span>Listar Clientes</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}