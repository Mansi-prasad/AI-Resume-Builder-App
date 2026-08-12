import React from "react";
import { Link } from "react-router-dom";
import google from "../../assets/google-com.svg";
import microsoft from "../../assets/microsoft-com.svg";
import walmart from "../../assets/walmart-com.svg";
import oracle from "../../assets/oracle-com.svg";
import amazon from "../../assets/amazon-com.svg";
const Hero = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const logos = [google, microsoft, oracle, amazon, walmart];
  return (
    <>
      <div className="min-h-screen pb-20">
        {/* Navbar */}
        <nav className="z-50 flex w-full py-4 px-6 text-sm  items-center justify-between  md:px-16 lg:px-24  xl:px-40  ">
          <a href="https://prebuiltui.com">
            <img
              src="/logo.svg"
              alt="logo"
              className="h-11 w-auto"
            />
          </a>
          <div className=" hidden  text-slate-800  items-center gap-8 transition duration-500 md:flex ">
            <a href="#" className="hover:text-yellow-600 transition">
              Home
            </a>
            <a href="#features" className="hover:text-yellow-600 transition">
              Features
            </a>
            <a
              href="#testimonials"
              className=" hover:text-yellow-600 transition "
            >
              Testimonials
            </a>
            <a href="#cta" className="hover:text-yellow-600 transition ">
              Contact
            </a>
          </div>
          <div className=" flex gap-2 ">
            <Link
              to="/app?state=register"
              className="hidden  px-6 py-2  text-white  bg-yellow-500  rounded-full  transition-all  hover:bg-yellow-700 active:scale-95  md:block "
            >
              Get started
            </Link>
            <Link
              to="/login?state=login"
              to="/login"
              className="hidden  px-6 py-2  text-slate-700  border rounded-full  transition-all active:scale-95 hover:bg-slate-50 hover:text-slate-900  md:block "
            >
              Login
            </Link>
          </div>
          <button
            onClick={() => setMenuOpen(true)}
            className="active:scale-90 transition md:hidden "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide lucide-menu"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={` z-100 flex flex-col text-black text-lg bg-black/40 transition-transform fixed inset-0 backdrop-blur items-center justify-center gap-8 duration-300 md:hidden   ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <a href="#" className=" text-white">
            Home
          </a>
          <a href="#features" className="text-white">
            Features
          </a>
          <a href="#testimonials" className="text-white">
            Testimonials
          </a>
          <a href="#contact" className="text-white">
            Contact
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex p-1 text-white bg-yellow-600  rounded-md active:ring-3 active:ring-white aspect-square size-10 items-center justify-center hover:bg-yellow-700 transition"
          >
            X
          </button>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col px-4 text-sm text-black   relative items-center justify-center md:px-16  lg:px-24 xl:px-40">
          <div className="bg-yellow-300 opacity-30  absolute top-28 -z-10 left-1/4 size-72 blur-[100px] sm:size-96 xl:top-10 xl:size-120 2xl:size-132"></div>

          {/* Avatars + Stars */}
          <div className="flex mt-24 items-center">
            <div className="flex  pr-3 -space-x-3">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user3"
                className="object-cover z-1 rounded-full border-2 border-white size-8 hover:-translate-y-0.5 transition"
              />
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="user1"
                className="object-cover z-2 rounded-full border-2 border-white size-8 hover:-translate-y-0.5 transition"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="user2"
                className="object-cover z-3 rounded-full border-2 border-white size-8 hover:-translate-y-0.5 transition"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user3"
                className="object-cover z-4 rounded-full border-2 border-white  size-8 hover:-translate-y-0.5 transition"
              />
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="user5"
                className="z-5 rounded-full border-2 border-white size-8 hover:-translate-y-0.5 transition"
              />
            </div>
            <div>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="text-transparent lucide lucide-star fill-yellow-600"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  ))}
              </div>
              <p className="text-sm text-gray-700">Used by 10,000+ users</p>
            </div>
          </div>

          {/* Headline + CTA */}
          <h1 className="max-w-5xl mt-4 text-5xl font-semibold text-center md:text-6xl md:leading-17.5">
            Land your dream job with
            <span className="text-transparent text-nowrap bg-linear-to-r from-yellow-700 to-yellow-600 bg-clip-text ">
              AI-Poweyellow
            </span>
            Resumes.
          </h1>
          <p className="max-w-md my-7 text-center text-base">
            Create, edit and download professional resumes with AI-Poweyellow
            assistance.
          </p>

          {/* CTA Buttons */}
          <div className=" flex items-center gap-4 ">
            <Link
              to="/app"
              className="flex h-12 px-9 m-1 text-white bg-yellow-500 rounded-full transition-colors hover:bg-yellow-600 ring-offset-2 ring-1 ring-yellow-400 items-center "
            >
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="ml-1 lucide lucide-arrow-right size-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
            <button className=" flex h-12  px-7  text-slate-700  border border-slate-400 rounded-full items-center gap-2 hover:bg-yellow-50 transition ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="lucide lucide-video size-5"
              >
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                <rect x="2" y="6" width="14" height="12" rx="2"></rect>
              </svg>
              <span>Try demo</span>
            </button>
          </div>
          <p
            className="py-6 mt-14 text-slate-600"
          >
            Trusting by leading brands, including
          </p>
          <div
            id="logo-container"
            className="  flex flex-wrap max-sm:justify-center max-w-3xl w-full  mx-auto py-4  justify-between gap-6"
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="logo"
                className=" h-20 w-auto max-w-xs"
              />
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                    * {
                        font-family: 'Poppins', sans-serif;
                    }
                `}
      </style>
    </>
  );
};

export default Hero;
