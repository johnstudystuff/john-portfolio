// src/app/index.tsx
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Head>
        <title>John De Oliveira | Portfolio</title>
        <meta name="description" content="Portfolio of John De Oliveira" />
      </Head>

      <header className="flex flex-col items-center justify-center py-12">
        <Image
          src="/profile.jpg"
          alt="John De Oliveira"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4">John De Oliveira</h1>
        <p className="mt-2 text-gray-400">Aspiring Cybersecurity Professional & Customer Experience Expert</p>
      </header>

      <main className="max-w-4xl mx-auto px-6">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">About Me</h2>
          <p>
            I’m a fast learner with 3 years of customer service experience, looking to leverage academic knowledge
            and real-world work experience to contribute effectively in the cybersecurity and tech space.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Experience</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-medium">Supervisor – The Renovation Couple</h3>
              <p className="text-gray-400">Fort Myers, Sep 2022 – Dec 2023</p>
              <p>Managed remodeling teams, maintained schedules, and enhanced client satisfaction.</p>
            </li>
            <li>
              <h3 className="text-xl font-medium">Delivery Driver – FedEx</h3>
              <p className="text-gray-400">Fort Myers, Feb 2022 – Sep 2023</p>
              <p>Delivered packages efficiently with a strong emphasis on safety and punctuality.</p>
            </li>
            <li>
              <h3 className="text-xl font-medium">Administrative Assistant – TUPY S.A.</h3>
              <p className="text-gray-400">Brazil, Jul 2019 – Jan 2021</p>
              <p>Supported financial operations and collaborated with banking and invoice processes.</p>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li>Customer Service</li>
            <li>Cybersecurity Fundamentals</li>
            <li>Excel & Office Suite</li>
            <li>Multilingual: Portuguese, English, Spanish</li>
            <li>Leadership & Team Supervision</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Contact</h2>
          <p>Email: <a className="text-blue-400" href="mailto:johnkevincompany@gmail.com">johnkevincompany@gmail.com</a></p>
          <p>Phone: (239) 645-3417</p>
        </section>
      </main>

      <footer className="text-center py-6 text-gray-600 border-t border-gray-700">
        © {new Date().getFullYear()} John De Oliveira. All rights reserved.
      </footer>
    </div>
  );
}
