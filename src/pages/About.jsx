import React from 'react';

const sharedClassNames = {
  container: 'p-6 bg-white text-gray-800',
  content: 'max-w-4xl mx-auto my-12',
  title: 'text-4xl md:text-5xl font-extrabold mb-8 text-center text-green-700',
  subtitle: 'text-lg md:text-xl leading-relaxed mb-6 text-gray-600',
};

const About = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 p-6">
      <div className={sharedClassNames.content}>
        <h1 className={sharedClassNames.title}>
          <span className="inline-block transform hover:scale-105 transition-transform duration-300">
            Management of Medicinal Plants and Herbs
          </span>
        </h1>
        <p className={sharedClassNames.subtitle}>
          Welcome to our project dedicated to the sustainable management of
          medicinal plants and herbs. Our mission is to promote the cultivation,
          conservation, and utilization of these valuable resources.
        </p>
        <p className={sharedClassNames.subtitle}>
          At Management of Medicinal Plants and Herbs, we strive to provide
          comprehensive information, research, and solutions for the
          preservation and responsible use of medicinal flora.
        </p>
      </div>

      <div className="flex flex-col space-y-8 bg-custom-light">
        <div className="p-4 text-center bg-custom-light rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
          <div className="flex flex-row-reverse md:flex-row items-center space-x-reverse space-x-4">
            <div className="flex-1">
              <h2 className="text-3xl font-extrabold mb-3 text-customGreen">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 mb-1 text-center  pr-3">
                We aim to create a comprehensive platform that empowers
                individuals and communities with knowledge about the
                cultivation, uses, and benefits of medicinal herbs and plants.
                Through accessible resources, expert insights, and a supportive
                community, we strive to promote sustainable practices and the
                therapeutic potential of medicinal herbs and plants.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <img src="/imageee.jpg" alt="Vision" className="w-full h-auto object-cover rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl" />
            </div>
          </div>
        </div>
        <div className="p-4 text-center bg-custom-light rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
          <div className="flex flex-row-reverse md:flex-row items-center space-x-reverse space-x-4">
            <div className="flex-1">
              <h2 className="text-3xl font-extrabold mb-3 text-customGreen">
                Our Mision
              </h2>
              <p className="text-lg text-gray-700 mb-1 text-center pr-3">
              To promote the sustainable management and use of medicinal herbs and
              plants.To provide comprehensive and reliable information on the benefits
              and cultivation of medicinal herbs.To empower individuals and communities to utilize medicinal plants
              for health and wellness.
              </p>

            </div>
            <div className="w-full md:w-1/3">
              <img src="/imageee.jpg" alt="Vision" className="w-full h-auto object-cover rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Join us in our journey to explore the benefits of nature's pharmacy
          and contribute to the sustainable future of herbal medicine.
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Your message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default About;
