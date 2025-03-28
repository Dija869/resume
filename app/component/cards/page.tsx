import Link from 'next/link'
import React from 'react'

const cards = () => {
    return (
        <div className='my-10'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* <!-- Card 1 --> */}
                    <div className="bg-white p-12 rounded-2xl shadow-lg relative">
                        <div className="text-gray-500 text-4xl mb-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke=" rgba(44, 57, 67, .4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        </div>
                        <h3 className="font-medium leading-[35px] mb-3 text-2xl">Creating marketing strategies, and campaigns</h3>
                        <div className="absolute bottom-0 right-0 bg-gray-800 text-white p-4 rounded-tl-3xl rounded-br-2xl">
                            <Link href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 24 24" fill="none" stroke=" rgba(255, 255, 255, 1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </Link>
                        </div>
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div className="bg-white p-14 rounded-2xl shadow-lg relative">
                        <div className="text-gray-500 text-4xl mb-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(44, 57, 67, .4)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
                        </div>
                        <h3 className="font-medium leading-[35px] mb-3 text-2xl">Enhancing brand awareness, and generating leads</h3>
                        <div className="absolute bottom-0 right-0 bg-gray-800 text-white p-4 rounded-tl-3xl rounded-br-2xl">
                            <Link href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 24 24" fill="none" stroke=" rgba(255, 255, 255, 1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- Card 3 --> */}
                    <div className="bg-[#9c7ece] p-18 rounded-2xl shadow-lg text-white flex items-center justify-center flex-col">
                        <h1 className="text-5xl font-bold  text-transparent bg-clip-text stroke-text">4,000+</h1>
                        {/* <h1 className="poppins text-6xl font-bold text-transparent bg-gradient-to-b from-white to-purple-500 bg-clip-text stroke-text"
                            style={{
                                WebkitTextStroke: "2px transparent",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}>
                            4,000+
                        </h1> */}


                        <p className="text-lg mt-2">Satisfied customers around the world during the past 10 years</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default cards
