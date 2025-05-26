import React from 'react'

const sections = [
  {
    id: 'literature',
    title: 'Literature Survey',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?fit=crop&w=600&q=80',
  },
  {
    id: 'gap',
    title: 'Research Gap',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fit=crop&w=600&q=80',
  },
  {
    id: 'problem',
    title: 'Research Problem & Solution',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image:
      'https://images.unsplash.com/photo-1532619187600-ecf2e9b6c58c?fit=crop&w=600&q=80',
  },
  {
    id: 'objectives',
    title: 'Research Objectives',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image:
      'https://images.unsplash.com/photo-1581090700227-1e8a6a5883d0?fit=crop&w=600&q=80',
  },
  {
    id: 'methodology',
    title: 'Methodology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus.',
    image:
      'https://images.unsplash.com/photo-1612831661749-d8f1e7e30d2a?fit=crop&w=600&q=80',
  },
  {
    id: 'technologies',
    title: 'Technologies',
    description:
      'Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.',
    image:
      'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?fit=crop&w=600&q=80',
  },
]

const ProjectScopeSection: React.FC = () => {
  return (
    <section id="project-scope" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Project Scope
        </h2>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } items-center gap-8`}
            >
              <div className="md:w-1/2">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-justify">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectScopeSection
