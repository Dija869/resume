// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
// import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-50">
      <Head>
        <title>Best Workplaces Blog</title>
        <meta name="description" content="Blog about the best workplaces" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-18">
        {/* Blog Header */}
        <div className="max-w-6xl mx-auto mb-12 relative">
          <div className="inline-block text-sm text-gray-500 rounded-full border-1 border-dashed px-4 py-2 bg-white/50 mb-4">
            Posted on: Aug 24
          </div>
          
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            Best Workplaces
           
          </h1>
          
          <p className="text-gray-600 text-lg w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip
          </p>

          {/* Right sidebar info card */}
          <div className="absolute top-8 right-8 bg-white p-6 rounded-lg shadow-sm max-w-xs">
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Category:</h3>
              <p className="text-gray-700">Travel</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Posted by:</h3>
              <p className="text-gray-700">flatheme</p>
            </div>
          </div>
        </div>

        {/* Blog Image Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <Image 
              src="/workplace-meeting.jpg" 
              alt="People working on laptops" 
              width={640} 
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <Image 
              src="/team-discussion.jpg" 
              alt="Team having a discussion" 
              width={640} 
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  )
}