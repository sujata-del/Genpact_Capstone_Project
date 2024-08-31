// src/App.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-xl max-w-lg w-full border-4 border-green-600">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Contact Us</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg text-green-800">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="mt-2 block w-full px-4 py-2 bg-green-100 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600" 
              required 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg text-green-800">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="mt-2 block w-full px-4 py-2 bg-green-100 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600" 
              required 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg text-green-800">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              className="mt-2 block w-full px-4 py-2 bg-green-100 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600" 
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-3 px-4 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};



export default Contact;