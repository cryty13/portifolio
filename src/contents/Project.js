import React, { useMemo } from "react";
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

export function Project({ children }) {

    return (
        <>
            <section id="articles-projects" className="text-gray-700 body-font border-t border-gray-200">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Articles/Projects</h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-base">
                        Some projects and articles that are to help the community
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-300 p-6 rounded-lg">
                                <div
                                    className="w-full inline-flex items-center justify-center rounded-full bg-sky-100 text-sky-500 mb-4">
                                    <img className="object-cover object-center h-full w-full" src="https://i.ibb.co/ZHGrn4B/work4.jpg" />
                                </div>
                                <div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">A/B test react.js with nginx and docker.</h2>
                                    <p></p>
                                    <p className="leading-relaxed text-base">
                                        In this article, we'll see how to do an A/B Test using nginx to balance and docker
                                        to upload applications, each one in its respective container.
                                    </p>
                                    <a href="https://medium.com/@willian.buqui/teste-a-b-react-js-com-nginx-e-docker-1aef402461a4"
                                        target="_blank" className="mt-3 text-sky-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-300 p-6 rounded-lg">
                                    <div
                                        className="w-full inline-flex items-center justify-center rounded-full bg-sky-100 text-sky-500 mb-4">
                                        <img className="object-cover object-center h-full w-full" src="https://i.ibb.co/ZHGrn4B/work4.jpg" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Blog Title</h2>
                                        <p></p>
                                        <p className="leading-relaxed text-base">Lorem ipsum dolor sit, amet consectetur adipisicing
                                            elit. Beatae distinctio tenetur eaque aspernatur aut molestias amet natus temporibus
                                            quaerat odio.</p>
                                        <a href="#" className="mt-3 text-sky-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-300 p-6 rounded-lg">
                                    <div
                                        className="w-full inline-flex items-center justify-center rounded-full bg-sky-100 text-sky-500 mb-4">
                                        <img className="object-cover object-center h-full w-full" src="https://i.ibb.co/ZHGrn4B/work4.jpg" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Blog Title</h2>
                                        <p></p>
                                        <p className="leading-relaxed text-base">Lorem ipsum dolor sit, amet consectetur adipisicing
                                            elit. Beatae distinctio tenetur eaque aspernatur aut molestias amet natus temporibus
                                            quaerat odio.</p>
                                        <a href="#" className="mt-3 text-sky-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div> */}

                    </div>

                </div>
            </section>
        </>
    );


}
