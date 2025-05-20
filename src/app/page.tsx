// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <Image
          src="/profile.jpg"
          alt="John De Oliveira"
          width={180}
          height={180}
          className="rounded-full border-4 border-white shadow-lg mb-6"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold">John De Oliveira</h1>
        <p className="text-lg md:text-xl mt-4 text-gray-400 max-w-xl">
          Cybersecurity Enthusiast | Customer Experience Expert | Multilingual
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#contact" className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">Contact Me</a>
          <a href="#projects" className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">Projects</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I’m a fast learner with 3 years of customer service experience, passionate about tech and cybersecurity. My work spans supervision, logistics, and administration—with a strong ability to adapt, communicate, and deliver results.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Experience</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold">Supervisor – The Renovation Couple</h3>
              <p className="text-sm text-gray-400">Fort Myers | Sep 2022 – Dec 2023</p>
              <p className="mt-2 text-gray-300">Managed a remodeling team, controlled workflows, and ensured material orders and client communication were smooth.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Delivery Driver – FedEx</h3>
              <p className="text-sm text-gray-400">Fort Myers | Feb 2022 – Sep 2023</p>
              <p className="mt-2 text-gray-300">Delivered packages with speed, accuracy, and excellent customer service.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Administrative Assistant – TUPY S.A.</h3>
              <p className="text-sm text-gray-400">Brazil | Jul 2019 – Jan 2021</p>
              <p className="mt-2 text-gray-300">Handled banking data, invoice entries, and supported the finance team with reporting and reconciliation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-gray-200">
          <li className="bg-gray-800 py-4 rounded-lg">Customer Service</li>
          <li className="bg-gray-800 py-4 rounded-lg">Cybersecurity Basics</li>
          <li className="bg-gray-800 py-4 rounded-lg">Excel & Office Suite</li>
          <li className="bg-gray-800 py-4 rounded-lg">Portuguese, English, Spanish</li>
          <li className="bg-gray-800 py-4 rounded-lg">Team Supervision</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-6">I’m open to opportunities in tech, cybersecurity, or any role where I can bring value through hard work and communication.</p>
          <p className="text-gray-300">Email: <a className="text-blue-400" href="mailto:johnkevincompany@gmail.com">johnkevincompany@gmail.com</a></p>
          <p className="text-gray-300">Phone: (239) 645-3417</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} John De Oliveira. All rights reserved.
      </footer>
    </div>
  );
}
