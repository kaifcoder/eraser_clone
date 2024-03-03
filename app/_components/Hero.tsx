import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ArrowRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-neutral-900 via-gray-900 to-neutral-900 text-white">
      <div className="absolute top-28 w-full justify-center flex ">
        <div className="py-2 px-2 rounded-3xl border-t-[1.5px] border-l-2 border-white/20  bg-white/20 cursor-pointer shadow-lg">
          <p className="mx-auto text-white text-sm">
            See what's new |{" "}
            <span className="text-sky-500">AI Diagrams {">"} </span>
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-8 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl mt-8 text-center">
          <h1 className="bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600 bg-clip-text p-2 text-3xl font-extrabold text-transparent sm:text-5xl">
            Documents & diagrams
          </h1>
          <p className="sm:block text-5xl font-semibold">
            {" "}
            for engineering teams{" "}
          </p>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            All-in-one markdown editor, collaborative canvas, and
            diagram-as-code builder
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <LoginLink className="flex items-center w-full rounded-lg border border-white bg-neutral-100 px-4 py-2 text-sm font-medium text-black hover:bg-neutral-300 hover:text-neutral-900 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
              Get Started
              <p className="ml-2">
                <ArrowRight size={24} />
              </p>
            </LoginLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
