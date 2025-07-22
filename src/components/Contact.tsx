"use client";

import React, { useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import { Icon } from "@iconify/react";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<null | boolean>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");
    setIsSuccess(null);

    emailjs
      .sendForm(
        "service_2k4k3ng",
        "template_g4zkx7v",
        e.target as HTMLFormElement,
        "D2IUmyjQrmBIv9ari"
      )
      .then(
        () => {
          setIsLoading(false);
          setIsSuccess(true);
          setStatusMessage("🎉 Message sent successfully!");
          (e.target as HTMLFormElement).reset();
        },
        () => {
          setIsLoading(false);
          setIsSuccess(false);
          setStatusMessage("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="w-full bg-gray-900/50 h-full pb-20 relative">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="h-96 relative">
        <div className="absolute inset-0 bg-[size:60px]" />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 -mt-72">
        <BackgroundGradient className="rounded-[22px] p-2">
          <div className="bg-black/90 backdrop-blur-3xl w-full shadow-2xl rounded-2xl p-8 sm:p-12">
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-400 text-center mb-8">
              I&apos;d love to hear from you. Send me a message!
            </p>

            <form onSubmit={sendEmail}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="font-medium text-gray-200 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Wick"
                    required
                    className="px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium text-gray-200 mb-2">Email address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="johnwickchapter5@gmail.com"
                    required
                    className="px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-6">
                <label className="font-medium text-gray-200 mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-center mt-8 flex-col gap-4">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none flex items-center gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Icon icon="line-md:loading-twotone-loop" className="text-white text-xl animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {statusMessage && (
                  <p
                    className={`text-center text-base font-medium ${isSuccess ? "text-green-400" : "text-red-400"
                      }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
};

export default Contact;
