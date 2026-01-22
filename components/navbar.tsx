import Link from 'next/link';
import Image from 'next/image';

const pages = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-start self-start">
            <Image 
              src="/logo.png" 
              alt="Triton Investing Society Logo" 
              width={200} 
              height={128}
              className="h-32 w-auto"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <button className="hidden md:flex space-x-8">
            {pages.map((page) => (
              <Link 
                key={page.href}
                href={page.href} 
                className="text-gray-700 hover:text-[#E9DFC3] hover:bg-[#001f5c] px-4 py-2 rounded-md transition-colors font-bold"
              >
                {page.name}
              </Link>
            ))}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 hover:text-[#001f5c] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

