import React from "react";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  return (
    <section
      className="py-20"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Get in Touch
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Have a question or want to work together? Feel free to reach out!
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
