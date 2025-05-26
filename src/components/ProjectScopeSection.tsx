import React from 'react'
import { FaBook, FaSearch, FaLightbulb, FaBullseye, FaCode, FaTools } from 'react-icons/fa'

const sections = [
  {
    id: 'literature',
    title: 'Literature Survey',
    icon: FaBook,
    description:
      'Speech sound disorders in children present a range of challenges, from phoneme misarticulation to fluency issues and motor planning deficits. Studies highlight the importance of data-driven methods and digital tools in therapy. Research shows success in automated phonological error detection, adaptive articulation correction, and interactive therapy for childhood apraxia and stuttering. Mobile-based systems like those developed in Sri Lanka for native language intervention and internationally for articulation and CAS demonstrate the efficacy of combining AI with structured therapeutic frameworks.',
  },
  {
    id: 'gap',
    title: 'Research Gap',
    icon: FaSearch,
    description: '',
  },
  {
    id: 'problem',
    title: 'Research Problem & Solution',
    icon: FaLightbulb,
    description:
      'Children with speech sound disorders face difficulties in accurate diagnosis and effective therapy due to fragmented tools and limited clinical resources. The problem lies in the lack of a unified, AI-powered system that addresses multiple speech impairments with personalized therapy. The proposed solution, "ArticuLearn", combines machine learning, deep learning, and real-time feedback mechanisms to detect and intervene in phonological disorders, articulation issues, stuttering, and apraxia through a mobile-friendly, adaptive therapy system tailored to individual needs.',
  },
  {
    id: 'objectives',
    title: 'Research Objectives',
    icon: FaBullseye,
    description: '',
  },
  {
    id: 'methodology',
    title: 'Methodology',
    icon: FaCode,
    description:
      'The study followed an experimental design using machine learning for speech error classification and therapy personalization. Speech data from children aged 4–12 was collected and preprocessed to extract features like MFCCs. Four LSTM-based models were trained to detect phonological errors, while a neural network was developed for articulation issues. For fluency disorder detection, data augmentation and a CNN-BiLSTM model were used. CAS detection used attention-based architectures and reinforcement learning to adjust therapy in real-time. A mobile interface enabled recording, feedback, and progress tracking for end-users.',
  },
  {
    id: 'technologies',
    title: 'Technologies',
    icon: FaTools,
    description: '',
  },
]

const ProjectScopeSection: React.FC = () => {
  return (
    <section id="project-scope" className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Project Scope
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore the comprehensive scope of our research project, from literature review to implementation methodology.
        </p>

        <div className="space-y-16">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="space-y-4">
              <div className="flex items-center mb-6">
                <section.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  {section.title}
                </h3>
              </div>

              {section.id === 'gap' ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 text-blue-700">Multi-disorder Integration</h4>
                    <p className="text-gray-600">
                      Most existing systems address only a single speech disorder. There's a lack of unified platforms that integrate phonological, articulation, fluency, and motor planning deficits (CAS) within one intelligent framework.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 text-blue-700">Adaptive Feedback and Severity Scoring</h4>
                    <p className="text-gray-600">
                      While some models identify errors, very few provide severity assessment or adaptive therapy progression. Systems rarely personalize exercises based on real-time user improvement or regression, especially in pediatric cases.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 text-blue-700">Real-Time Data & Remote Therapy Support</h4>
                    <p className="text-gray-600">
                      Current tools often miss features like progress monitoring, live feedback, or parent-therapist connectivity. Especially in regions like Sri Lanka, accessible mobile-based therapy and real-time communication are underexplored.
                    </p>
                  </div>
                </div>
              ) : section.id === 'objectives' ? (
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <ol className="list-decimal pl-5 text-gray-600 space-y-4">
                    <li className="flex items-start">
                      <span className="font-semibold text-blue-700 mr-2">1.</span>
                      <span>Detect and classify phonological, articulation, stuttering, and apraxia-related errors using AI models.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-blue-700 mr-2">2.</span>
                      <span>Provide real-time, adaptive feedback and targeted therapeutic tasks based on identified errors.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-blue-700 mr-2">3.</span>
                      <span>Enable children, parents, and therapists to track speech improvement progress over time.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-blue-700 mr-2">4.</span>
                      <span>Ensure accessibility and usability across diverse age groups and language backgrounds, both clinically and remotely.</span>
                    </li>
                  </ol>
                </div>
              ) : section.id === 'technologies' ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                  {[
                    { name: 'React Native', url: 'https://reactnative.dev/img/header_logo.svg' },
                    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                    { name: 'TensorFlow', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
                    { name: 'Flask', url: 'https://icon.icepanel.io/Technology/png-shadow-512/Flask.png' },
                    { name: 'Expo', url: 'https://images.seeklogo.com/logo-png/47/1/expo-logo-png_seeklogo-478757.png' },
                    { name: 'Firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
                    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                    { name: 'Azure', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
                  ].map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center group">
                      <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                        <img src={tech.url} alt={tech.name} className="h-16 w-16 object-contain" />
                      </div>
                      <span className="mt-3 text-sm text-gray-700 font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <p className="text-gray-600 text-justify leading-relaxed">{section.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectScopeSection
