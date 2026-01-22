import { ArrowDown, Instagram } from 'lucide-react';
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
          <p className="text-2xl sm:text-3xl lg:text-4xl text-[#E9DFC3] mb-6">
            The only club at UCSD that looks out for your best financial interests.
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.instagram.com/tritoninvestingsociety/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#E9DFC3] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={32} />
            </a>
            <a 
              href="https://discord.gg/EvDx57ZpnR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#E9DFC3] transition-colors"
              aria-label="Discord"
            >
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
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
