export default function Navbar() {
    return (
      <header className="flex h-16 w-full items-center justify-between bg-gray-900 px-4 md:px-6">
        <a href="/" className="flex items-center gap-2 text-white">
          <span className="text-lg font-semibold">Técnicas de Programação</span>
        </a>
        <nav className="flex items-center gap-4">
          <a
            href="/cadastrar"
            className="rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Cadastrar
          </a>
          <a
            href="/clientes"
            className="rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Listar
          </a>
        </nav>
      </header>
    );
}
