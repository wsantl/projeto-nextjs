export function Header() {
    return (
        <header>
            <div className="flex px-2 py-4 bg-zinc-900 text-white">
                <div className="flex items-center justify-between w-full mx-auto max-w-7x1">
                    NextJS
                </div>

                <nav>
                    <ul className="flex items-center justify-center gap-2">
                        <li>
                            Home
                        </li>
                        <li>
                            Posts
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}