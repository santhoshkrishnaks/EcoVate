import React, { useState } from 'react';
import {toast} from 'react-hot-toast';  

const ContactSection = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // Using your Web3 Forms access key
        formData.append("access_key", "e6f3bbf1-402a-4657-b034-f12e2f305805");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
        toast.success("Your request has been received, We will get back to you soon!!"); // Show success toast
        event.target.reset();
    } else {
        console.log("Error", data);
        toast.error("Error is submitting form ."); // Show error toast
    }
    };

    return (
        <section className="min-h-screen bg-green-50 " id="contact">
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-10">
                <div className="mb-4">
                    <div className="max-w-3xl mb-6 text-center sm:text-center md:mx-auto md:mb-12">
                        <p className="text-3xl font-semibold tracking-wide text-green-700 uppercase ">
                            Contact
                        </p>
                        <h2 className="mb-4 text-3xl font-bold tracking-tight font-heading text-neutral-800 sm:text-5xl">
                            Get in Touch
                        </h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-gray-600 ">
                            Feel Free To Reach Us
                        </p>
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2">
                        <div className="h-full pr-6">
                            <p className="mt-3 mb-12 text-lg text-gray-600 ">
                                We'd love to hear from you! Whether you have questions, suggestions, or need more information, our team is here to help. Reach out to us, and together let's build a sustainable future
                            </p>
                            <ul className="mb-6 md:mb-0">
                                <li className="flex">
                                    <div className="flex items-center justify-center w-10 h-10 bg-green-700 rounded text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="mb-4 ml-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">Our Address</h3>
                                        <p className="text-gray-600 ">Sri Krishna College of Technology, Kovaipudur-641042</p>
                                        <p className="text-gray-600 ">TamilNadu, India</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex items-center justify-center w-10 h-10 bg-green-700 rounded text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                                        </svg>
                                    </div>
                                    <div className="mb-4 ml-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">Contact</h3>
                                        <p className="text-gray-600 ">Mobile: +91 8521476935</p>
                                        <p className="text-gray-600 ">Mail: info.ecovate@gmail.com</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex items-center justify-center w-10 h-10 bg-green-700 rounded text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                            <path d="M12 7v5l3 3"></path>
                                        </svg>
                                    </div>
                                    <div className="mb-4 ml-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">Working hours</h3>
                                        <p className="text-gray-600 ">Monday - Friday: 08:00 - 17:00</p>
                                        <p className="text-gray-600 ">Saturday & Sunday: 08:00 - 12:00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="max-w-6xl p-5 card h-fit md:p-12" id="form">
                            <form id="contactForm" onSubmit={onSubmit}>
                                <div className="mb-6">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="name" className="pb-1 text-xs tracking-wider uppercase"></label>
                                            <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="w-full py-2 pl-2 pr-4 mb-2 text-gray-900 border border-gray-400 rounded-md shadow-md sm:mb-0" name="name" required />
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="email" className="pb-1 text-xs tracking-wider uppercase"></label>
                                            <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="w-full py-2 pl-2 pr-4 mb-2 text-gray-900 border border-gray-400 rounded-md shadow-md sm:mb-0" name="email" required />
                                        </div>
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label htmlFor="textarea" className="pb-1 text-xs tracking-wider uppercase"></label>
                                        <textarea id="textarea" name="message" cols="30" rows="5" placeholder="Write your message..." className="w-full py-2 pl-2 pr-4 mb-2 text-gray-900 border border-gray-400 rounded-md shadow-md sm:mb-0" required></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="w-full px-6 py-3 text-white bg-green-700 rounded-md hover:bg-green-900 font-xl sm:mb-0">Send Message</button>
                                </div>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
