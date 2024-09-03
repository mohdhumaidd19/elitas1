import React from "react";
import { useEffect, useState } from 'react';
import ProductCard from "../ProductCard";
import productsData from '../products.json'
import "./Header.css"
const Header = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (Array.isArray(productsData) && productsData.length > 0) {
      setProducts(productsData);
    }
  }, []);

  return (
    <section
     
      className="py-12 bg-green-100 text-center font "
      style={{
        background: 'linear-gradient(177.14deg, rgba(129, 170, 172, 0.25) -7.23%, rgba(239, 239, 239, 0.332828) 47.23%, rgba(129, 170, 172, 0.42) 104.55%)',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <h2 className="text-3xl font-bold mb-4">Why Choose Elitas Air Conditioners?</h2>
      <p className="text-lg text-gray-700 max-w-xl mx-auto mb-10">
        Choose Elitas Air Conditioners for unparalleled cooling performance and efficiency, tailored to your comfort needs. With cutting-edge technology and a commitment to excellence, elevate your surroundings with the pinnacle of cooling sophistication.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
     
        <div className="flex flex-col space-y-8 items-center">
          <div className="text-center">
            <img src="image7.png" alt="" className="mx-auto mb-4 w-16" />
            <h3 className="font-semibold text-[21px] leading-[32px] text-gray-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Intelligent Climate Control
            </h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              Experience personalized climate control with our intelligent smart feature, adapting to your comfort needs.
            </p>
          </div>
          <div className="text-center">
            <img src="image7.png" alt="" className="mx-auto mb-4 w-16" />
            <h3 className="font-semibold text-[21px] leading-[32px] text-gray-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              5 in 1 Convertible Functionalities
            </h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              Experience adaptable comfort with our 5-in-1 convertible feature, offering versatile cooling modes tailored to your preferences.
            </p>
          </div>
        </div>

      
        <div className="flex justify-center">
          <img src="./image8.png" alt="Elitas Air Conditioner" className="rounded-lg max-w-full h-auto shadow-cyan-400" />
        </div>

    
        <div className="flex flex-col space-y-8 items-center">
          <div className="text-center">
            <img src="image7.png" alt="" className="mx-auto mb-4 w-16" />
            <h3 className="font-semibold text-[21px] leading-[32px] text-gray-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Rapid Turbo Boost
            </h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              Experience instant relief with our rapid turbo boost feature, providing swift and powerful cooling when you need it most.
            </p>
          </div>
          <div className="text-center">
            <img src="image7.png" alt="" className="mx-auto mb-4 w-16" />
            <h3 className="font-semibold text-[21px] leading-[32px] text-gray-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Smart Home Integration
            </h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              Control your air conditioner effortlessly from anywhere, ensuring comfort and convenience at your fingertips.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 flex justify-center font-bold text-5xl  ">
      Our Air Conditioner Range
      </div>
      <div className="py-10 flex justify-center font-thin text-1xl items-center  ">
      <span>Experience unparalleled comfort and sophistication with the Elitas Air Conditioner range,</span>
      <span>engineered for optimal performance and efficiency.</span>
      </div>
      <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          image={product.image} 
          title={product.title} 
        />
      ))}
    </div>
  
   
    </section>
  );
};

export default Header;




