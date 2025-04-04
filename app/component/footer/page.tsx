'use client';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className=" bg-[#f1f5fa]">
            <footer className="container mx-auto px-5">
                <div className="bg-gray-800 py-5 px-8 justify-between flex text-center text-white rounded-t-4xl text-md w-full">
                    <p>© {new Date().getFullYear()} Khadija Naqvi Resume</p>
                    <button
                        onClick={scrollToTop}
                        className="mt-2 text-white cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                     Scroll Top
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default Footer;