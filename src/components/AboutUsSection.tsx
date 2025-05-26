import React from 'react'
import pasindu from '../assets/MalithMirandaPhotograpy-8976.jpg'
import samantha from '../assets/SamanthaSir.jpg'
import ishara from '../assets/msishara.png'
import kishen from '../assets/kishen.jpg'
import sapna from '../assets/sapna.jpg'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import shehan from '../assets/shehan.jpg'
interface TeamMember {
  name: string
  role: string
  status: string
  university: string
  department: string
  image: string
  social?: {
    linkedin?: string
    github?: string
    email?: string
  }
}

const team: TeamMember[] = [
  {
    name: 'Dr. Samantha Thelijjagoda',
    role: 'Supervisor',
    status: 'Pro Vice-Chancellor (Research & International)',
    university: 'Sri Lanka Institute of Information Technology',
    department: 'Pro Vice-Chancellor (Research & International)',
    image: samantha,
    social: {
      linkedin: '#',
      email: 'samantha.t@sliit.lk'
    }
  },
  {
    name: 'Ms. Ishara Weerathunga',
    role: 'Co-Supervisor',
    status: 'Lecturer',
    university: 'Sri Lanka Institute of Information Technology',
    department: 'Faculty of Computing | Information Technology',
    image: ishara,
    social: {
      linkedin: '#',
      email: 'ishara.w@sliit.lk'
    }
  },
  {
    name: 'RANASINGHE K.G',
    role: 'Group Member',
    status: 'Undergraduate',
    university: 'Sri Lanka Institute of Information Technology',
    department: 'Software Engineering',
    image: kishen,
    social: {
      linkedin: 'https://www.linkedin.com/in/kishen-ranasinghe/',
      github: 'https://github.com/kiiigaaa',
      email: 'it21222290@my.sliit.lk'
    }
  },
  {
    name: 'Annasiwatta S.',
    role: 'Group Member',
    status: 'Undergraduate',
    university: 'Sri Lanka Institute of Information Technology',
    department: 'Information Techonology',
    image: shehan,
    social: {
      linkedin: 'https://www.linkedin.com/in/shehan-annasiwatta/',
      github: 'https://github.com/Shehan-Annasiwatta',
      email: 'it21217968@my.sliit.lk'
    }
  },
  {
    name: 'Fernando P.P.M',
    role: 'Group Member',
    status: 'Undergraduate',
    university: 'Sri Lanka Institute of Information Technology',
    department: 'Software Engineering',
    image: pasindu,
    social: {
      linkedin: 'https://www.linkedin.com/in/pasindu-fernando-525357191/',
      github: 'https://github.com/Pasindu0707',
      email: 'it21221446@my.sliit.lk'
    }
  },
  {
    name: 'De Zoysa A.P.S',
    role: 'Group Member',
    status: 'Undergraduate',
    university: 'Sri Lanka Institute of Information Technology',
    department: 'Software Engineering',
    image: sapna,
    social: {
      linkedin: 'https://www.linkedin.com/in/sapna-de-zoysa-840993215/',
      github: 'https://github.com/sapna1217',
      email: 'it21219634@my.sliit.lk'
    }
  }
]

const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team 👨‍💻👩‍🏫</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our diverse team of experts and researchers is dedicated to making speech therapy more accessible and effective for children.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mt-8 mb-4 object-cover shadow-md border-4 border-white"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 italic mb-3">{member.status}</p>
                <p className="text-sm text-gray-600 mb-1">{member.university}</p>
                <p className="text-sm text-gray-600 mb-4">{member.department}</p>
                
                {member.social && (
                  <div className="flex justify-center space-x-4 mt-4">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-600 transition-colors">
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-gray-600 hover:text-gray-900 transition-colors">
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-red-600 transition-colors">
                        <FaEnvelope className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
