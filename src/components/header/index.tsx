import Link from "next/link";

export function Header() {
    return (
        <header className="w-full flex justify-between items-center p-6 bg-white shadow-md">
            <a href="/"><h1 className="text-2xl font-bold text-blue-600">SuperCestas</h1></a>
            <nav>
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li><a href="/" className="hover:text-blue-600">Home</a></li>
                    <li><a href="/contatos" className="hover:text-blue-600">Contatos</a></li>
                    <li><a href="/dashboard" className="hover:text-blue-600">Dashboard</a></li>
                </ul>
            </nav>
        </header>
    )
}