// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-12">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md z-50">
        <nav className="max-w-4xl mx-auto flex justify-between items-center py-4">
          <h1 className="text-xl font-bold">John De Oliveira</h1>
          <ul className="flex space-x-6 text-sm">
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
            <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 text-center">
        <Image
          src="/profile.jpg"
          alt="John De Oliveira"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
        <h2 className="text-4xl font-bold mt-4">John De Oliveira</h2>
        <p className="mt-2 text-gray-400">Aspiring Cybersecurity Professional & Customer Experience Expert</p>
      </section>

      {/* About Section */}
      <section id="about" className="mt-16 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">About Me</h3>
        <p>
          I’m a fast learner with 3 years of customer service experience, looking to leverage academic knowledge
          and real-world work experience to contribute effectively in the cybersecurity and tech space.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mt-16 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Experience</h3>
        <ul className="space-y-4">
          <li>
            <h4 className="text-xl font-medium">Supervisor – The Renovation Couple</h4>
            <p className="text-gray-400">Fort Myers, Sep 2022 – Dec 2023</p>
            <p>Managed remodeling teams, maintained schedules, and enhanced client satisfaction.</p>
          </li>
          <li>
            <h4 className="text-xl font-medium">Delivery Driver – FedEx</h4>
            <p className="text-gray-400">Fort Myers, Feb 2022 – Sep 2023</p>
            <p>Delivered packages efficiently with a strong emphasis on safety and punctuality.</p>
          </li>
          <li>
            <h4 className="text-xl font-medium">Administrative Assistant – TUPY S.A.</h4>
            <p className="text-gray-400">Brazil, Jul 2019 – Jan 2021</p>
            <p>Supported financial operations and collaborated with banking and invoice processes.</p>
          </li>
        </ul>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mt-16 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Skills</h3>
        <ul className="list-disc list-inside">
          <li>Customer Service</li>
          <li>Cybersecurity Fundamentals</li>
          <li>Excel & Office Suite</li>
          <li>Multilingual: Portuguese, English, Spanish</li>
          <li>Leadership & Team Supervision</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-16 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Contact</h3>
        <p>Email: <a className="text-blue-400" href="mailto:johnkevincompany@gmail.com">johnkevincompany@gmail.com</a></p>
        <p>Phone: (239) 645-3417</p>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} John De Oliveira. All rights reserved.
      </footer>
    </div>
  );
}
