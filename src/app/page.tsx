// app/page.tsx
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold">John De Oliveira</span>
          <ul className="flex gap-6 text-sm text-gray-300">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <Image
          src="/profile.jpg"
          alt="John De Oliveira"
          width={180}
          height={180}
          className="rounded-full border-4 border-white shadow-lg mb-6"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold">Hi, I'm John</h1>
        <p className="text-lg md:text-xl mt-4 text-gray-400 max-w-xl">
          I build experiences in tech, operations, and cybersecurity. Driven by curiosity and powered by purpose.
        </p>
        <a href="#projects" className="mt-6 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          View Projects <ArrowRight size={18} />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 text-gray-300">
          <p>
            I’m a fast learner with 3+ years of experience in customer service, field supervision, logistics, and admin work.
            I thrive in dynamic environments and am currently pivoting into cybersecurity, where I aim to merge people skills with technical solutions.
          </p>
          <ul className="space-y-2">
            <li><strong>Languages:</strong> Portuguese, English, Spanish</li>
            <li><strong>Tech:</strong> Excel, SAP, Google Cert in Cybersecurity</li>
            <li><strong>Soft Skills:</strong> Communication, Leadership, Adaptability</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-2">Renovation Ops Dashboard</h3>
              <p className="text-gray-400">A project management tool prototype built to track remodeling workflows and supply ordering.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-2">Logistics Tracker</h3>
              <p className="text-gray-400">A conceptual FedEx route optimizer for improved delivery efficiency and time logging.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Study Site</h3>
              <p className="text-gray-400">An interactive learning portal for newcomers to explore topics in digital security and privacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-6">I'm currently open to freelance, full-time, or collaborative opportunities. Let’s build something meaningful together.</p>
          <div className="space-y-2 text-lg">
            <p>Email: <a className="text-blue-400" href="mailto:johnkevincompany@gmail.com">johnkevincompany@gmail.com</a></p>
            <p>Phone: (239) 645-3417</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} John De Oliveira — Made with Next.js & Tailwind CSS
      </footer>
    </div>
  );
}
