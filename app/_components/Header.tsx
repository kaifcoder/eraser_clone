import Image from "next/image";
import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";

const Header = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <header className="z-10 backdrop-blur-xl w-full fixed">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="flex gap-2" href="#">
          <Image src={"./logo.svg"} alt="Eraser.io" width={30} height={30} />
          <p className="text-white font-semibold">eraser</p>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  Careers{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  History{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  Services{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  Projects{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {user && (
                <Button>
                  <LoginLink>Go to Dashboard</LoginLink>
                </Button>
              )}

              {!user && (
                <>
                  <LoginLink
                    postLoginRedirectURL="/dashboard"
                    className="block rounded-lg  px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500 "
                  >
                    Login
                  </LoginLink>
                  <RegisterLink
                    postLoginRedirectURL="/dashboard"
                    className="hidden md:block rounded-lg  px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700"
                  >
                    Register
                  </RegisterLink>
                </>
              )}
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-black transition hover:text-gray-500/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
