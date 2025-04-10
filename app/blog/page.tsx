import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

// const blogPosts = [
//   {
//     title: 'Best Workplaces',
//     category: 'Travel',
//     date: 'Aug 24',
//     image: '/images/blog_1.jpg',
//     url: '/blogs/Best-Workplaces',
//   },
//   // {
//   //   title: 'Minimalism in Workspace',
//   //   category: 'Tips',
//   //   date: 'Aug 24',
//   //   image: '/images/blog_2.jpg',
//   //   url: '/blogs/Minimalism-in-Workspace',
//   // },
//   // {
//   //   title: 'Bring nature to your room',
//   //   category: 'Lifestyle',
//   //   date: 'Aug 24',
//   //   image: '/images/blog_3.jpg',
//   //   url: '/blogs/Bring-nature-to-your-room',
//   // },
//   // {
//   //   title: 'Tips for a healthy mindset',
//   //   category: 'Health',
//   //   date: 'Aug 24',
//   //   image: '/images/blog_4.jpg',
//   //   url: '/blogs/Tips-for-a-healthy-mindset'
//   // },
//   // {
//   //   title: 'Efficient Teamwork',
//   //   category: 'Career',
//   //   date: 'Aug 24',
//   //   image: '/images/blog_5.jpg',
//   //   url: '/blogs/Efficient-Teamwork'
//   // },
//   // {
//   //   title: 'Getting more done',
//   //   category: 'Career',
//   //   date: 'Aug 24',
//   //   image: '/images/blog_6.jpg',
//   //   url: '/blogs/Getting-more-done'
//   // },
// ];

type PostType = {
  id: string;
  slug: string;
  author: string;
  title: string;
  short_content: string;
  featured_image: string;
  category_type: string | null; // It can be either a string or null
  created_at: string;
  linkedin_url: string;
  status: string;
};


export default async function BlogSection() {

  const response = await axios.get('https://backoffice.orio.digital/api/blogs/list.php')


  return (
    <section className=" py-30 md:px-16 px-4 bg-[#f1f5fa]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2  gap-8">
          {response.data.payload.map((post: PostType, index: number) => {

            if (post.status == "1") {
              return (
                <div key={index} className="overflow-hidden">
                  <div className="relative ">
                    <Image
                      src={`https://backoffice.orio.digital/assets/uploads/${post.featured_image}`}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-full rounded-3xl object-cover"
                    />
                    {/* <span className="absolute top-3 right-3 bg-black/50 text-white text-normal font-semibold px-3 py-1 rounded-full">
            {post.category}
          </span> */}
                  </div>
                  <div className="p-6">
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-2xl font-semibold mb-2 relative group cursor-pointer">
                        {post.title}
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-800 transition-all duration-300 group-hover:w-1/3"></span>
                      </h3>
                    </Link>
                    <p className="text-normal text-gray-600 mb-4">
                      {post.short_content}
                    </p>
                    <i className="text-xs text-gray-500 italic">Posted on {post.created_at}</i>
                  </div>
                </div>
              );
            }


            return null;
          })}

        </div>
      </div>
    </section>
  );
}
