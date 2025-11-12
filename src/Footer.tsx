"use client";
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { motion, useInView } from "motion/react";

// import useNewsLetter, { ClientData } from '@/lab/hooks/useNewsLetter'

const brandText = "SOAR LABS";

const sitemapLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#workflow", label: "Workflow" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#pricing", label: "Pricing" },
  { href: "https://docs.soarlabs.tech", label: "Docs" },
] as const;

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  // const [Send, cilentData] = useNewsLetter()
  const [openPopup, setOpenPopUp] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleNewsLetterData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const clientEmail = formData.get("newsletter_email")?.toString().trim();

    if (!clientEmail) {
      return;
    }

    console.info("newsletter signup:", clientEmail);

    // const data: ClientData = {
    //   email: clientEmail.toString(),
    // }

    // Send(data)
    setOpenPopUp(true);
    e.currentTarget.reset();
    window.setTimeout(() => {
      setOpenPopUp(false);
    }, 2000);
  };

  return (
    <>
      {/* <Toast.Provider>
        <Toast.Provider swipeDirection="right">
          <Toast.Root
            className="ToastRoot"
            open={openPopup}
            onOpenChange={setOpenPopUp}
          >
            <Toast.Title className="ToastTitle">
              We Received Your Message, Thanks
            </Toast.Title>
            <Toast.Action
              className="ToastAction"
              asChild
              altText="Goto schedule to undo"
            >
              <button className="bg-white text-black px-3 py-1 rounded-lg">
                ok
              </button>
            </Toast.Action>
          </Toast.Root>
          <Toast.Viewport className="ToastViewport" />
        </Toast.Provider>
        <Toast.Viewport />
      </Toast.Provider> */}
      {/* <hr></hr> */}
      <footer
        id="contact"
        className="relative h-full pt-8 text-[color:var(--text-primary)] sm:pt-14"
        ref={container}
      >
        <div className="sm:container  px-4 mx-auto">
          <div className="md:flex justify-between w-full">
            <div>
              <h1 className="md:text-4xl text-2xl font-semibold">
                Let&lsquo;s do great work together
              </h1>
              <div className="pt-2 pb-6 md:w-99  ">
                <p className="md:text-2xl text-xl  py-4">Stay Updated</p>
                <div className="hover-button glass-panel relative flex items-center overflow-hidden rounded-full text-[color:var(--text-primary)] md:text-2xl">
                  <form
                    onSubmit={(e) => handleNewsLetterData(e)}
                    className="relative z-10 grid h-full w-full grid-cols-6 items-center"
                  >
                    <input
                      type="email"
                      name="newsletter_email"
                      className="col-span-5 border-none bg-transparent py-3 px-6 text-[color:var(--text-primary)] placeholder:text-[color:var(--text-muted)] focus:outline-none"
                      placeholder="Your Email * "
                    />
                    <button
                      type="submit"
                      className="col-span-1 h-full w-full cursor-pointer rounded-none bg-gradient-to-r from-indigo-500 to-violet-500 text-white transition hover:brightness-110"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        className="h-[80%] w-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="#fff"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
                {openPopup && (
                  <p className="mt-2 text-sm font-semibold text-green-600">
                    Thanks for subscribing!
                  </p>
                )}
              </div>
            </div>
            <div className="flex w-full flex-col gap-6 md:max-w-md justify-center text-center">
              <div>
                <p className="text-2xl pb-2 text-[color:var(--text-primary)] font-semibold  ">
                  SITEMAP
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {sitemapLinks.map((link) => (
                    <li className="text-lg font-medium" key={link.href}>
                      <a
                        href={link.href}
                        className="transition-colors hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-2xl pb-2 font-semibold text-[color:var(--text-primary)] justify-center text-center">
                  SOCIAL
                </p>
                <ul className="flex gap-3 justify-center items-center pb-4">
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      aria-label="LinkedIn"
                      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--glass-alt-surface)] text-[color:var(--text-primary)] transition hover:border-[color:var(--text-primary)] hover:bg-[color:var(--glass-hover)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V10.18H5.67V17H8.34M7 9.06C7.91 9.06 8.62 8.33 8.62 7.44C8.62 6.55 7.91 5.81 7 5.81C6.09 5.81 5.38 6.55 5.38 7.44C5.38 8.33 6.09 9.06 7 9.06M18.33 17V13.26C18.33 11.28 17.89 9.78 15.59 9.78C14.48 9.78 13.74 10.39 13.45 10.96H13.41V10.18H10.86V17H13.53V13.62C13.53 12.88 13.67 12.18 14.58 12.18C15.48 12.18 15.5 12.99 15.5 13.67V17H18.33Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      aria-label="X"
                      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--glass-alt-surface)] text-[color:var(--text-primary)] transition hover:border-[color:var(--text-primary)] hover:bg-[color:var(--glass-hover)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.5 3H20.5L14.5 10.34L21.5 21H15.5L11.4 14.82L6.6 21H3.5L10 13.07L3.3 3H9.5L13.2 8.62L17.5 3M16.5 19H18L8.5 4H7L16.5 19Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      aria-label="Instagram"
                      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--glass-alt-surface)] text-[color:var(--text-primary)] transition hover:border-[color:var(--text-primary)] hover:bg-[color:var(--glass-hover)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M7 2C4.2 2 2 4.2 2 7V17C2 19.8 4.2 22 7 22H17C19.8 22 22 19.8 22 17V7C22 4.2 19.8 2 17 2H7M17 4C18.66 4 20 5.34 20 7V17C20 18.66 18.66 20 17 20H7C5.34 20 4 18.66 4 17V7C4 5.34 5.34 4 7 4H17M17.5 5.5C17.1 5.5 16.5 5.5 16.5 6.5S17.1 7.5 17.5 7.5 18.5 7.5 18.5 6.5 17.9 5.5 17.5 5.5M12 7C9.24 7 7 9.24 7 12S9.24 17 12 17 17 14.76 17 12 14.76 7 12 7M12 9C13.66 9 15 10.34 15 12S13.66 15 12 15 9 13.66 9 12 10.34 9 12 9Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      aria-label="Facebook"
                      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--glass-alt-surface)] text-[color:var(--text-primary)] transition hover:border-[color:var(--text-primary)] hover:bg-[color:var(--glass-hover)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M18 5H16.5C14.84 5 13.5 6.34 13.5 8V9.5H12V12H13.5V19H16.5V12H18V9.5H16.5V8C16.5 7.7 16.74 7.5 17 7.5H18V5Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-y-2 md:py-4 border-gray-200">
            <motion.div
              ref={ref}
              className="sm:h-fit h-20 md:px-8 px-2 footer-logo w-full text-center text-6xl font-black tracking-[0.35em] text-[color:var(--text-primary)] md:text-7xl lg:text-8xl "
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 12 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block text-[color:var(--text-primary)]">
                {brandText}
              </span>
            </motion.div>
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-3 justify-between py-2">
            <span className="font-medium">
              &copy; 2025 SOAR LABS. All Rights Reserved.
            </span>
            <a href="#" className="font-semibold">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
