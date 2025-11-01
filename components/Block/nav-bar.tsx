
import { LanguageDropdown } from "../language-dropdown"
import { ThemeToggle } from "../theme-toggle"

import { MazizLogo } from "../m-aziz-logo"
import { MenuButton } from "../menu-button"



function Navbar() {




    return (
        <header className="fixed z-50 top-6 inset-x-4 max-w-(--breakpoint-xl) mx-auto rounded-full bg-background/10 backdrop-blur-xl px-4 h-16">
            {/* navbar container */}
            <div className="flex items-center justify-between w-full h-full">
                {/* Logo */}
                <MazizLogo />

                {/* Navbar Actions Zone */}
                <div className="flex gap-2 justify-end">
                    <ThemeToggle />
                    <LanguageDropdown />
                    <MenuButton />
                </div>
            </div>
        </header>
    )
}

export { Navbar }