import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4" id="114">
      <form className="max-w-md mx-auto bg-green-200 rounded-lg p-8 shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-green-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-green-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Your Email"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-green-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="">
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
