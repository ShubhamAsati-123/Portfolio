import React from "react";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="pt-24 pb-16 md:pb-0" id="contact">
      <div className="my-4 min-h-[calc(100vh-8rem)] flex flex-col justify-center items-center ring-1 p-4 md:p-10 rounded-3xl drop-shadow-lg shadow-lg">
        <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight my-3">Contact Me</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
