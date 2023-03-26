import { useState } from "react";
import { useRouter } from "next/router";
import { FiArrowLeft } from "react-icons/fi";

function Hero() {
  const router = useRouter();

  const [menu, setMenu] = useState(false);
  return (
    <section className="">
      <br />
      <br />
      <br />
      <br />
      {menu && (
        <div className="absolute top-0 rounded-2xl backdrop-blur-lg bg-blue-200/70 drop-shadow-xl ease-in-out delay-200 transition-all  h-screen w-screen z-30">
          <div className="flex flex-col justify-center items-center h-full w-full relative">
            <FiArrowLeft
              onClick={() => setMenu(!menu)}
              size={24}
              className="absolute cursor-pointer m-8 top-5  left-5 text-[color:var(--darker-secondary-color)] hover:text-[color:var(--secondary-color)] "
            />

            <h1 className="h1 m-5 p-3 text-gray-700">
              {"User "}
              <span className="text-[color:var(--darker-secondary-color)]">
                Registration
              </span>
            </h1>
            <div className="flex ">
              <a
                href="/users/signin"
                className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0"
              >
                Signin
              </a>
              <a
                className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                href="/users/signup"
              >
                Signup
              </a>
            </div>
            <a
              onClick={() => router.push("/admin/auth")}
              className="btn-sm  absolute m-8 top-5 right-5 text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] ml-3 cursor-pointer"
            >
              Event Manager
            </a>
          </div>
        </div>
      )}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 m-2 ">
              {"Near"}
              <span className="text-[color:var(--darker-secondary-color)]">
                Us
              </span>
              <p className="mt-3 text-5xl text-blue-500">
                {"Events Made Easy"}
              </p>
            </h1>
            <p className="text-2xl text-gray-500 mb-8">
              "Bringing Your Events to Life: Simplified Registration, Seamless
              Management, and Easy Ticketing."
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div>
                <button
                  // href="/users/signin"
                  onClick={() => setMenu(!menu)}
                  className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0"
                >
                  Get Started
                </button>
              </div>

              {/* <div>
                                <a
                                    className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                                    href="/users/signup"
                                >
                                    Signup
                                </a>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
