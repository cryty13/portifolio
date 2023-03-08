import React from "react";
import { ReactComponent as Html } from "../assets/svg/html.svg";
import { ReactComponent as Css } from "../assets/svg/css.svg";
import { ReactComponent as Js } from "../assets/svg/js.svg";
import { ReactComponent as Ts } from "../assets/svg/ts.svg";
import { ReactComponent as Node } from "../assets/svg/node.svg";
import { ReactComponent as Reacti } from "../assets/svg/react.svg";
import { ReactComponent as TAILWIND } from "../assets/svg/tailwind.svg";
import { ReactComponent as Git } from "../assets/svg/git.svg";
import { ReactComponent as GoLang } from "../assets/svg/golang.svg";
import { ReactComponent as Jenkins } from "../assets/svg/jenkins.svg";
import { ReactComponent as Docker } from "../assets/svg/docker.svg";
import { ReactComponent as AWS } from "../assets/svg/aws.svg";

import { ReactComponent as FrontEnd } from "../assets/svg/frontend.svg";
import { ReactComponent as Infrastructure } from "../assets/svg/infrastructure.svg";
import { ReactComponent as Backend } from "../assets/svg/backend.svg";

export function About({ children }) {

    return (
        <>
            <section id="about" className="text-gray-700 body-font border-t border-gray-200">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">About Me</h1>
                        <p className="pb-10">I am Fullstack Developer</p>
                    </div>
                    <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-16 md:mb-0 items-center text-center">

                            <div className="flex flex-col text-center w-full mb-20">
                                <p>
                                    My name is Willian Almeida Buqui I'm 28 years old and I've been working with system development for +7 years , I've worked for some big companies like IBM, Santander and Itau. Today I work at a startup focused on the energy sector.
                                    I have a bachelor of computer science and working with node.js and GoLang in backend and front with React.js.
                                    My best experiences are with node.js,GoLang, .net, Docker, AWS, Linux, MySQL, Jenkins, React.js e Angular 2+.
                                    At the moment I'm studying clean architecture, microservices with golang and with studies focused on CI/CD to automate deploy with jenkins using container architecture</p>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <div className="port_out port4About">
                                <div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="grid justify-center">
                                            <div className='flex justify-center'>
                                                <Html className="w-10" />
                                            </div>
                                            <div className='flex justify-center'>
                                                <p>HTML5</p>
                                            </div>

                                        </div>
                                        <div className="grid justify-center">
                                            <div className='flex justify-center'>
                                                <Css className="w-10" />
                                            </div>
                                            <div className='flex justify-center'>
                                                <p>CSS3</p>
                                            </div>
                                        </div>

                                        <div className="grid justify-center">
                                            <div className='flex justify-center'>
                                                <Js className="w-10" />
                                            </div>
                                            <div className='flex justify-center'>
                                                <p>JavaScript</p>
                                            </div>
                                        </div>

                                        <div className="grid justify-center">
                                            <div className='flex justify-center'>
                                                <GoLang className="w-10" />
                                            </div>
                                            <div className='flex justify-center'>
                                                <p>GoLang</p>
                                            </div>
                                        </div>
                                        <div className="grid justify-center">
                                            <div className='flex justify-center'>
                                                <Node className="w-10" />
                                            </div>
                                            <div className='flex justify-center'>
                                                <p>NodeJS</p>
                                            </div>
                                        </div>
                                        <div className="grid justify-center">
                                            <div className='flex justify-center'>
                                                <Git className="w-10" />
                                            </div>
                                            <div className='flex justify-center'>
                                                <p>Git</p>
                                            </div>
                                        </div>

                                        <div className="grid justify-center">
                                            <div className='flex justify-center'>
                                                <Reacti className="w-10" />
                                            </div>
                                            <div className='flex justify-center'>
                                                <p>React</p>
                                            </div>
                                        </div><div className="grid justify-center">
                                            <div className='flex justify-center'>
                                                <TAILWIND className="w-10" />
                                            </div>
                                            <div className='flex justify-center'>
                                                <p>Tailwind</p>
                                            </div>
                                        </div><div className="grid justify-center">
                                            <div className='flex justify-center'>
                                                <Ts className="w-10" />
                                            </div>
                                            <div className='flex justify-center'>
                                                <p>TypeScript</p>
                                            </div>
                                        </div>

                                        <div className="grid justify-center">
                                            <div className='flex justify-center'>
                                                <AWS className="w-10" />
                                            </div>
                                            <div className='flex justify-center'>
                                                <p>Aws</p>
                                            </div>
                                        </div>
                                        <div className="grid justify-center">
                                            <div className='flex justify-center'>
                                                <Jenkins className="w-10" />
                                            </div>
                                            <div className='flex justify-center'>
                                                <p>Jenkins</p>
                                            </div>
                                        </div>
                                        <div className="grid justify-center">
                                            <div className='flex justify-center'>
                                                <Docker className="w-10" />
                                            </div>
                                            <div className='flex justify-center'>
                                                <p>Docker</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap pt-16">
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div
                                        className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-sky-500 text-white flex-shrink-0">
                                        <FrontEnd />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">Front</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        I use React to create my applications and with it redux to manage states.
                                        This portfolio was created in react and tailwind and can be accessed at the link.
                                    </p>
                                    <a className="mt-3 text-sky-500 inline-flex items-center"
                                        href='https://github.com/cryty13/portifolio' target="_blank">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div
                                        className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-sky-500 text-white flex-shrink-0">
                                        <Backend />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">Backend</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        Today my Stack is focused on using the golang tool, because its speed and performance
                                        caught my attention, but I have knowledge in creating a backend in nodejs and .net.
                                    </p>
                                    <a className="mt-3 text-sky-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div
                                        className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-sky-500 text-white flex-shrink-0">
                                        <Infrastructure />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">Infra</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        Knowledge to manage an AWS account using the main tools being them
                                        EC2, cloudfront, s3, RDS, Route 53 and GuardDuty. I have knowledge to create docker for
                                        upload database and applications using the same network.
                                    </p>
                                    <a className="mt-3 text-sky-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );


}
