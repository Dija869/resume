// // pages/index.js
// import Head from 'next/head'
// import Image from 'next/image'


// export default function Home() {
//   return (
//     <div className="min-h-screen bg-[#f1f5fa] pt-17">
//       <Head>
//         <title>Best Workplaces Blog</title>
//         <meta name="description" content="Blog about the best workplaces" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="container mx-auto px-4 py-12">

//         <div className="max-w-7xl mx-auto mb-12">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//             <div className="md:col-span-2">
//               <div className="inline-block text-sm text-gray-500 rounded-full border border-dashed px-4 py-2 bg-white/50 mb-4">
//                 Posted on: Aug 24
//               </div>

//               <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
//                 Best Workplaces
//               </h1>

//               <p className="text-gray-600 text-lg">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
//                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                 laboris nisi ut aliquip
//               </p>
//             </div>


//             <div className="bg-white p-6 rounded-lg shadow-sm h-fit md:mt-8">
//               <div className="mb-4">
//                 <h3 className="text-lg font-medium mb-2">Category:</h3>
//                 <p className="text-gray-700">Travel</p>
//               </div>

//               <div>
//                 <h3 className="text-lg font-medium mb-2">Posted by:</h3>
//                 <p className="text-gray-700">flatheme</p>
//               </div>
//             </div>
//           </div>
//         </div>


//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="aspect-video bg-gray-200 rounded-3xl overflow-hidden">
//             <Image
//               src="/images/blog-6.webp"
//               alt="People working on laptops"
//               width={640}
//               height={360}
//               className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
//             />
//           </div>
//           <div className="aspect-video bg-gray-200 rounded-3xl overflow-hidden">
//             <Image
//               src="/images/blog-5.webp"
//               alt="Team having a discussion"
//               width={640}
//               height={360}
//               className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
//             />
//           </div>
//         </div>


//         <section className=" py-16">
//           <div >

//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit
//             </h2>


//             <div className="grid grid-cols-1  gap-8 mb-10">

//               <div>
//                 <p className="text-gray-600 leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//                   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//                   ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//                   aliquip
//                 </p>
//               </div>

//             </div>


//             <div className="rounded-3xl overflow-hidden bg-gray-200 relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
//               <video
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 controls
//                 autoPlay
//                 muted
//                 loop
//               >
//                 <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>

//             <div className="grid grid-cols-1 gap-8 pt-10">

//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit
//                 </h2>
//                 <p className="text-gray-600 leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//                   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//                   ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//                   aliquip
//                 </p>
//               </div>

//             </div>
//           </div>
//         </section>
//       </main>
//     </div >
//   )
// }
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Page = async ({ params }: { params: Promise<{ blogs: string }> }) => {
  const { blogs } = await params;

  const response = await axios.post(
    "https://backoffice.orio.digital/api/blogs/details.php",
    { "slug": blogs }
  )


  if (!response.data.payload) {

    return (
      <section className="h-screen flex flex-col justify-center items-center gap-y-6">
        <h1 className="text-midnight font-semibold lg:text-[22px] sm:text-2xl text-xl lg:leading-7">
          OOPS! No Blog Avaliable
        </h1>
        <p>
          Go back to{" "}
          <Link
            href="/"
            className="text-azure-100 underline underline-offset-2"
          >
            Home
          </Link>
        </p>
      </section>);

  }
  return (
    <section className='conteiner max-w-7xl mx-auto py-16 px-4'>
      <div className='grid grid-cols-1 place-items-center justify-center '>
        <h1 className='font-bold text-3xl '>{response.data.payload.title}</h1>
        <p className='text-gray-600 text-lg pt-6 pb-10'>Published by Khadija Naqvi on {response.data.payload.created_at}</p>
        <Image src={`https://backoffice.orio.digital/assets/uploads/${response.data.payload.featured_image}`}
          width={500}
          height={300}
          alt={response.data.payload.title}
          className='rounded-3xl ' />

        <p className=' max-w-3xl text-gray-600 text-lg pt-6' dangerouslySetInnerHTML={{
          __html: response.data.payload.detailed_content,
        }}></p>

      </div>
    </section>
  )
}

export default Page;

