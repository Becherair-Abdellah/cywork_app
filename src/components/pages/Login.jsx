import React from "react";
import Logo from "../../../public/logo.png";
import { Link } from "react-router-dom";
function Signin() {
    return (
        <div className=" ">
            <div className="parent  flex justify-center  items-center">
                <div className="md:w-full min-h-[90vh] md:min-h-fit">
                    <div
                        href="#"
                        className="hidden items-center mb-6 text-2xl font-semibold md:flex text-gray-900  flex-col"
                    >
                        <img
                            className="w-[400px] h-[350px]"
                            src={Logo}
                            alt="logo"
                        />
                        <h1 className="text-3xl relative text-white bg-primaryColor">
                            CNTIC Login
                            <span className="w-[40px] h-[3px] absolute top-[-.43rem] right-[-.43rem]  bg-primaryColor"></span>
                            <span className="w-[3px] h-[30px] absolute top-[-.43rem] right-[-.43rem] bg-primaryColor"></span>
                            <span className="w-[40px] h-[3px] absolute bottom-[-.43rem] left-[-.43rem] bg-primaryColor"></span>
                            <span className="w-[3px] h-[30px] absolute bottom-[-.43rem] left-[-.43rem] bg-primaryColor"></span>
                        </h1>
                    </div>
                </div>
                <section className="z-[11]  w-full -translate-x-[50%] -translate-y-[50%] absolute top-[50%] left-[50%] md:relative md:left-0 md:top-0 md:translate-x-0 md:translate-y-0">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 relative">
                                <span className="w-[40px] h-[4px] absolute top-[-.43rem] right-[-.43rem] bg-primaryColor"></span>
                                <span className="w-[4px] h-[30px] absolute top-[-1.4rem] md:top-[-1.7rem] right-[-.43rem] bg-primaryColor"></span>
                                <span className="w-[40px] h-[4px] absolute bottom-[-.43rem] left-[-.43rem] bg-primaryColor"></span>
                                <span className="w-[4px] h-[30px] absolute bottom-[-.43rem] left-[-.43rem] bg-primaryColor"></span>
                                <h1 className=" font-bold leading-tight tracking-tight text-gray-900 text-3xl ">
                                    Hi! welecom back! 👋
                                </h1>
                                <form
                                    className="space-y-4 md:space-y-6"
                                    action="#"
                                >
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-600 "
                                        >
                                            email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400   dark:focus:border-blue-500"
                                            placeholder="name@company.com"
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-600 "
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500"
                                            required=""
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="remember"
                                                    aria-describedby="remember"
                                                    type="checkbox"
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                    required=""
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label
                                                    htmlFor="remember"
                                                    className="text-gray-500 dark:text-gray-300"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <Link
                                            to="/ResetPassword"
                                            className="text-sm font-medium text-primary-600 hover:underline text-blue-500"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full  bg-primary-600 hover:bg-primary-700  focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 bg-blue-600 text-white "
                                    >
                                        Sign in
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-[120px] h-[120px] rounded-br-full bg-primaryColor left-0 top-[60px] absolute "></div>
            <div className="w-[150px] h-[150px] rounded-tl-full bg-primaryColor right-0  bottom-0 md:bottom-[-2px] absolute z-0 "></div>
        </div>
    );
}

export default Signin;
