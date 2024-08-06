
import React from 'react';
import Navbar from '../components/navbar.jsx';
import herb1 from './images/bg_img1.webp';
import herb3 from './images/herb3.png';
import ImageSlider from './ImageSlider.jsx';
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${herb1})` }}>
        <div className="absolute inset-0 flex items-center justify-center mt-8 mb-8">
          <div className="p-8 rounded-lg shadow-lg w-full h-full mb-16 flex flex-col">
            <div className='mt-40 '>
              <h1 className="text-5xl font-extrabold text-green-900 mb-4 leading-tight">Welcome to GreenIT</h1>
              {/* <h2 className='text-5xl text-green-900 font-bold'>GreenIT</h2> */}
              <p className="text-lg text-gray-700">
                Discover the world of medicinal herbs and plants.<br /> Explore our database, learn about their benefits,<br /> and get valuable information about their  uses.
              </p>
              <a
                href="#explore"
                className="mt-6 inline-block px-6 py-3 bg-green-800 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                Explore Now
              </a>
              <div className="mt-8 mr-4 flex justify-start">
                <input
                  type="text"
                  placeholder="Search for herbs and plants..."
                  className="w-1/2 p-2 border border-green-600 rounded-l-lg focus:outline-none "
                />
                <button className="px-4 bg-green-800 text-white rounded-r-lg hover:bg-green-700">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
  <div className="flex-shrink-0 w-1/2 h-1/2 mr-6">
    <img src={herb3} alt="Medicinal Plants" className="w-full h-auto object-cover rounded-lg"/>
  </div>
  <div className="bg-white p-8 max-w-2xl text-center">
    <h1 className="text-5xl font-extrabold text-green-900 mb-6 leading-tight">Medicinal Plants and Herbs</h1>
    <p className="text-lg text-gray-700 mb-4">
      Medicinal plants, known for their therapeutic properties, can enhance well-being by reducing stress and improving decision-making. Integrating medicinal plants into daily life promotes health and balance, complementing mental activities like online gaming. This ancient wisdom is a natural counter to the fast-paced excitement of casino gaming.
    </p>
    <p className="text-lg text-gray-700">
      Medicinal herbs also offer significant health benefits, helping to alleviate ailments and maintain overall wellness. 
      By incorporating medicinal herbs into everyday routines, individuals can experience a holistic improvement in their physical and mental health, making them a valuable addition to a balanced lifestyle.
    </p>
  </div>
</div>

<ImageSlider/>


    </div>
  );
};

export default Home;
