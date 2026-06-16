import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/project'

function ProjectDetailApple() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  if (!project) return <p className="text-center text-pink-300 mt-20">Project not found 🌸</p>

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Top bar */}
      <div className="w-full px-12 py-4 border-b border-gray-100 flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-gray-600 transition-colors text-sm">
          ← Back
        </button>
        <p className="text-gray-300 text-sm">Project {projects.findIndex(p => p.id === id) + 1} of {projects.length}</p>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-12 py-10">
        <div className="grid grid-cols-4 gap-10">

          {/* Left column — info */}
          <div className="col-span-1 flex flex-col gap-8">
            <div>
              <p className="text-xs font-bold text-gray-800 mb-1">Artwork/Project Title</p>
              <p className="text-xs text-gray-500 italic">{project.title}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800 mb-1">Year Accomplished</p>
              <p className="text-xs text-gray-500 italic">{project.year}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800 mb-1">Role/Position</p>
              <p className="text-xs text-gray-500 italic">{project.role}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800 mb-1">Type</p>
              <p className="text-xs text-gray-500 italic">{project.type}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800 mb-1">Tools</p>
              <div className="flex flex-col gap-1">
                {project.tools.map((t) => (
                  <p key={t} className="text-xs text-gray-500 italic">{t}</p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800 mb-1">Publication Link</p>
              <p className="text-xs text-gray-400 italic">your-portfolio-link.com</p>
            </div>
          </div>

          {/* Right column — content */}
          <div className="col-span-3 flex flex-col gap-8">

            {/* Description */}
            <div>
              <p className="text-xs font-bold text-gray-800 mb-2">Artwork/Project Description</p>
              <p className="text-xs text-gray-500 leading-relaxed">{project.summary}</p>
            </div>

            {/* Cover image */}
            <div className="w-full h-80 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center px-8">
              <p className="text-gray-400 font-semibold mb-2">Artwork/project photo/picture</p>
              <p className="text-gray-300 text-xs leading-relaxed max-w-sm">
                Photo or picture that shows craftsmanship and command of techniques, whether digital or handmade, with careful attention to detail.
              </p>
            </div>

            {/* Impact */}
            <div>
              <p className="text-xs font-bold text-gray-800 mb-2">Impact & Contribution</p>
              <p className="text-xs text-gray-500 leading-relaxed">{project.impact}</p>
            </div>

            {/* What I Learned */}
            <div>
              <p className="text-xs font-bold text-gray-800 mb-2">What I Learned</p>
              <p className="text-xs text-gray-500 leading-relaxed">{project.learned}</p>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full border-t border-gray-100 px-12 py-6 grid grid-cols-4 gap-6 mt-8">
        <div>
          <p className="text-xs font-bold text-gray-800 mb-1">Your name</p>
          <p className="text-xs text-gray-500">Mutia Nur Khalifa</p>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-800 mb-1">Your university/school name</p>
          <p className="text-xs text-gray-500">Politeknik Manufaktur Bandung</p>
          <p className="text-xs text-gray-400">Semester 2, 2024</p>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-800 mb-1">Your contact information</p>
          <p className="text-xs text-gray-500">mutia.email@gmail.com</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Portfolio Submission for</p>
          <p className="text-xs font-bold text-gray-800">Apple Developer Academy Indonesia</p>
        </div>
      </div>

    </div>
  )
}

export default ProjectDetailApple