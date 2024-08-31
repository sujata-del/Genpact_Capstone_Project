// import React from 'react';

// const sharedClassNames = {
//   container: 'p-6 bg-white text-gray-800',
//   content: 'max-w-4xl mx-auto my-12',
//   title: 'text-4xl md:text-5xl font-extrabold mb-8 text-center text-green-700',
//   subtitle: 'text-lg md:text-xl leading-relaxed mb-6 text-gray-600',
// };

// const About = () => {
//   return (
//     <div className="bg-gradient-to-b from-green-50 to-green-100 p-6">
//       <div className={sharedClassNames.content}>
//         <h1 className={sharedClassNames.title}>
//           <span className="inline-block transform hover:scale-105 transition-transform duration-300">
//             Management of Medicinal Plants and Herbs
//           </span>
//         </h1>
//         <p className={sharedClassNames.subtitle}>
//           Welcome to our project dedicated to the sustainable management of
//           medicinal plants and herbs. Our mission is to promote the cultivation,
//           conservation, and utilization of these valuable resources.
//         </p>
//         <p className={sharedClassNames.subtitle}>
//           At Management of Medicinal Plants and Herbs, we strive to provide
//           comprehensive information, research, and solutions for the
//           preservation and responsible use of medicinal flora.
//         </p>
//       </div>

//       <div className="flex flex-col space-y-8 bg-custom-light">
//         <div className="p-4 text-center bg-custom-light rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
//           <div className="flex flex-row-reverse md:flex-row items-center space-x-reverse space-x-4">
//             <div className="flex-1">
//               <h2 className="text-3xl font-extrabold mb-3 text-customGreen">
//                 Our Vision
//               </h2>
//               <p className="text-lg text-gray-700 mb-1 text-center  pr-3">
//                 We aim to create a comprehensive platform that empowers
//                 individuals and communities with knowledge about the
//                 cultivation, uses, and benefits of medicinal herbs and plants.
//                 Through accessible resources, expert insights, and a supportive
//                 community, we strive to promote sustainable practices and the
//                 therapeutic potential of medicinal herbs and plants.
//               </p>
//             </div>
//             <div className="w-full md:w-1/3">
//               <img src="/imageee.jpg" alt="Vision" className="w-full h-auto object-cover rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl" />
//             </div>
//           </div>
//         </div>
//         <div className="p-4 text-center bg-custom-light rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
//           <div className="flex flex-row-reverse md:flex-row items-center space-x-reverse space-x-4">
//             <div className="flex-1">
//               <h2 className="text-3xl font-extrabold mb-3 text-customGreen">
//                 Our Mision
//               </h2>
//               <p className="text-lg text-gray-700 mb-1 text-center pr-3">
//               To promote the sustainable management and use of medicinal herbs and
//               plants.To provide comprehensive and reliable information on the benefits
//               and cultivation of medicinal herbs.To empower individuals and communities to utilize medicinal plants
//               for health and wellness.
//               </p>

//             </div>
//             <div className="w-full md:w-1/3">
//               <img src="/imageee.jpg" alt="Vision" className="w-full h-auto object-cover rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-12">
//         <div className="p-4 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
//           Join us in our journey to explore the benefits of nature's pharmacy
//           and contribute to the sustainable future of herbal medicine.
//           </h2>
//           <form className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//                 placeholder="Your name"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//                 placeholder="Your email"
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows="4"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//                 placeholder="Your message"
//               ></textarea>
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-green-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default About;
import React from 'react';
import about from './images/about.jpeg';
import about1 from './images/about1.jpg';

const About = () => {
  return (
    <div className="relative bg-gradient-to-b from-teal-700 via-green-300 to-green-500 text-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/your-background-image.jpg')" }}></div>
      
      {/* Content Container */}
      <div className="relative p-8 md:p-12 lg:p-20 max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 transform hover:scale-110 transition-transform duration-300">
            Management of Medicinal Plants and Herbs
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Dedicated to the sustainable management and responsible use of medicinal plants and herbs.
          </p>
        </div>
        
        {/* Vision Section */}
        <div className="mb-20 p-10 bg-gradient-to-r from-green-700 to-teal-600 bg-opacity-80 backdrop-filter backdrop-blur-md rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img src={about1} alt="Our Vision" className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4 text-white">Our Vision</h2>
              <p className="text-lg leading-relaxed text-gray-200">
                We envision a world where the therapeutic potential of medicinal herbs and plants is recognized and utilized for the betterment of all. Our platform empowers communities to engage in sustainable cultivation and use of these valuable resources.
              </p>
            </div>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="mb-20 p-10 bg-gradient-to-r from-teal-600 to-green-700 bg-opacity-80 backdrop-filter backdrop-blur-md rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img src={about} alt="Our Mission" className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-lg leading-relaxed text-gray-200">
                Our mission is to promote the sustainable management and use of medicinal herbs and plants. We provide reliable information on their benefits and cultivation, empowering individuals to utilize these plants for health and wellness.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Join Us in Exploring Nature's Pharmacy</h2>
          <p className="text-lg max-w-xl mx-auto mb-8 font-light">
            Together, we can make a difference in the world by harnessing the power of nature's remedies. Contribute to a sustainable future of herbal medicine.
          </p>
          <form className="space-y-6 max-w-lg mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
              <input type="text" id="name" className="mt-2 block w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-md shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
              <input type="email" id="email" className="mt-2 block w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-md shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none" placeholder="Your email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
              <textarea id="message" rows="4" className="mt-2 block w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-md shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none" placeholder="Your message"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full py-3 px-6 bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium rounded-md shadow-md hover:bg-gradient-to-r hover:from-green-700 hover:to-teal-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
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
