"use client";

import React from 'react';
import GoogleMapsComponent from '../component/map/page';

// import ContactSection from './components/ContactSection';

const ContactSection = () => {
  return (
    <div className=' pt-20'>

      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-12">Get in Touch</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border-1 border-gray-300 border-dashed rounded-3xl bg-[#ffffff4d] focus:outline-none "
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-Mail"
                    className="w-full px-4 py-3 bg-[#ffffff4d] border-1 border-dashed border-gray-300 rounded-3xl focus:outline-none "
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-[#ffffff4d] border-1 border-dashed border-gray-300 rounded-3xl focus:outline-none "
                />
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 border-1 border-dashed border-gray-300 rounded-3xl focus:outline-none bg-[#ffffff4d]
"
                ></textarea>
              </div>


            </form>
          </div>

          <div className="w-full md:w-1/3 bg-indigo-500 text-white p-8 rounded-3xl">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone:</h3>
                <p className="text-indigo-100">+92 31023414 94</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Email:</h3>
                <p className="text-indigo-100">khadijanaqvi000@gmail.com</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Address:</h3>
                <p className="text-indigo-100">Shah fasial town , Karachi</p>
              </div>
            </div>
          </div>


        </div>
        <div>
          <button
            type="submit"
            className="px-6 py-3 mt-6 bg-gray-800 text-white font-medium rounded-3xl hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Send Message
          </button>
        </div>
      </div>

      {/* //// map ///  */}
    <GoogleMapsComponent />
    </div>

  );
};

export default ContactSection;