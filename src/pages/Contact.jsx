import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center mt-2 mb-8">
      <div className="w-full max-w-xl p-8 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-[#0EA106] mb-6 text-center">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA106]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA106]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA106]"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0EA106] text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
