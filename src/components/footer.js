import React from "react";

export function Footer() {

  return (
    <>
      <div className="bg-gray-100 pt-5">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <h3 className="font-bold text-xl text-sky-500">Willian Buqui</h3>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-sky-500 font-bold">Resources</div>
            <a className="my-3 block"  target="_blank"
            href="https://github.com/cryty13">
              GitHub
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-sky-500 font-bold">Support</div>
            <a className="my-3 block"target="_blank"
            href="https://pt-br.reactjs.org/tutorial/tutorial.html" >
              React
            </a>
            <a className="my-3 block" target="_blank"
            href="https://tailwindcss.com/docs/installation">
              Tailwind
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-sky-500 font-bold">Contact us</div>
            <a className="my-3 block" >
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
          <div className="my-1">© Copyright 2023. All Rights Reserved.</div>
        </div>
      </div>



    </>
  );


}
