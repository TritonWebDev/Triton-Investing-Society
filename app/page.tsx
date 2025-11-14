import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import geisel from '@/public/geisel.jpg';

export default function Home() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <Image 
        src={geisel} 
        alt="Geisel" 
        priority
        fill
        objectFit="cover"
        className="z-[-2]"
        />
        <div className="absolute inset-0 bg-black/50 z-[-1]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#ffffff] mb-6">
            Triton Investing Society
          </h1>
          {/* TODO: Add socials here */}
        </div>
        <ArrowDown className="animate-bounce absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white z-10" size={40} />
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#001f5c] mb-6">
                About Us
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus voluptas ullam iure culpa maxime maiores repellat temporibus tenetur quo fugiat quaerat beatae perferendis, reprehenderit molestiae eveniet labore consectetur aliquid.
              </p>
              <p className="text-gray-700 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus voluptas ullam iure culpa maxime maiores repellat temporibus tenetur quo fugiat quaerat beatae perferendis, reprehenderit molestiae eveniet labore consectetur aliquid.
              </p>
            </div>
            <div className="bg-[#001f5c] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Our Events</h3>
              <p className="text-lg leading-relaxed">
                Something, another thing, and more! Check out our events page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#001f5c]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Learn Investing?
          </h2>
          <button className="bg-white text-[#001f5c] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            See Upcoming Events
          </button>
        </div>
      </section>
    </main>
  );
}
