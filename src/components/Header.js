import React, {  } from 'react';


export function Header() {
        return (
            <header className="text-gray-700 body-font border-b border-gray-200 bg-white sticky top-0 z-50">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center hidden md:block  text-gray-900 mb-4 md:mb-0" href="#" >
                            <span className="ml-3 text-xl">WB</span>
                        </a>
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <a href="#" className="mr-5 flex title-font font-medium items-center text-gray-900 md:hidden">WB</a>
                            <a href="#home" className="mr-5 hover:text-gray-900">Home</a>
                            <a href="#about" className="mr-5 hover:text-gray-900">About</a>
                            <a href="#articles-projects" className="mr-5 hover:text-gray-900">Projects</a>
                            <a href="#contact" className="mr-5 hover:text-gray-900">Contact</a>
                        </nav>
                    </div>
                </header>
        )
}
