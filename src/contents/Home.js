import React, { Component } from 'react';
import mainLogo from '../assets/img/Eu.jpeg';

import { Header } from '../components/Header';
import { Footer } from '../components/footer';
import { About } from './About';
import { Project } from './Project';
import { Contact } from './Contact';

class Home extends Component {
    render() {
        const { t } = this.props;
        console.log(t)
        return (
            <>
                <Header />

                <section id="home" className="text-gray-700 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:py-48 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">Hi<br />I'm Willian <br />Fullstack Developer </h1 >
                            <p className="mb-8 leading-relaxed">
                                I'm 28 years old. I have 2 loves technology and game.
                            </p>
                            <div className="flex justify-center">
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img src={mainLogo} className="rounded-full" />
                        </div>
                    </div>
                </section>

                <About />

                <Project />
                
                <Contact/>

                <Footer />

            </>
        )
    }
}

export default Home
