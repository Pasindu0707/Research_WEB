import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 py-16 bg-gray-50"
    >
      {/* Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
          Welcome to <span className="text-blue-600">ArticuLearn</span>
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Personalized AI-powered speech therapy system for children with speech disorders — designed for children, therapists, and parents.
        </p>
        <a
          href="#objectives"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Explore Features
        </a>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://www.speech.lk/wp-content/uploads/2024/06/Sp-Tx-1.jpg"
          alt="ArticuLearn illustration"
          className="max-h-96 w-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}

export default HeroSection
