import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/project'

function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  if (!project) return <p className="text-center text-pink-300 mt-20">Project not found 🌸</p>

  return (
    <div className="min-h-screen bg-pink-50 p-8">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-pink-300 hover:text-pink-500 transition-colors mb-6 flex items-center gap-2"
      >
        ← Back to Projects
      </button>

      {/* Bento Grid */}
      <div className="grid grid-cols-4 grid-rows-auto gap-4 max-w-6xl mx-auto">

        {/* Cover — spans 2 cols 2 rows */}
        <div className="col-span-2 row-span-2 bg-pink-200 rounded-3xl flex items-center justify-center h-80">
          <p className="text-pink-400 font-medium">Cover Image 🌸</p>
        </div>

        {/* Title */}
        <div className="col-span-2 bg-white rounded-3xl p-6 flex flex-col justify-center shadow-sm">
          <p className="text-pink-300 text-sm mb-1">{project.type} · {project.year}</p>
          <h1 className="text-3xl font-bold text-pink-500">{project.title}</h1>
          <p className="text-pink-400 mt-1">{project.role}</p>
        </div>

        {/* Tools */}
        <div className="col-span-2 bg-white rounded-3xl p-6 shadow-sm">
          <h2 className="text-pink-400 font-bold mb-3">Tools</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span key={t} className="bg-pink-100 text-pink-400 text-sm px-4 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </div>

        {/* Summary — spans 3 cols */}
        <div className="col-span-3 bg-white rounded-3xl p-6 shadow-sm">
          <h2 className="text-pink-400 font-bold mb-3">About this Project</h2>
          <p className="text-gray-400 leading-relaxed">{project.summary}</p>
        </div>

        {/* Tags — 1 col */}
        <div className="col-span-1 bg-pink-100 rounded-3xl p-6 shadow-sm">
          <h2 className="text-pink-400 font-bold mb-3">Tags</h2>
          <div className="flex flex-col gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="text-pink-400 text-xs">#{tag}</span>
            ))}
          </div>
        </div>

        {/* Impact — spans 2 cols */}
        <div className="col-span-2 bg-white rounded-3xl p-6 shadow-sm">
          <h2 className="text-pink-400 font-bold mb-3">What I Did</h2>
          <p className="text-gray-400 leading-relaxed text-sm">{project.impact}</p>
        </div>

        {/* What I Learned — spans 2 cols */}
        <div className="col-span-2 bg-rose-50 rounded-3xl p-6 shadow-sm">
          <h2 className="text-pink-400 font-bold mb-3">What I Learned</h2>
          <p className="text-gray-400 leading-relaxed text-sm">{project.learned}</p>
        </div>

        {/* Process — spans full width */}
        <div className="col-span-4 bg-white rounded-3xl p-6 shadow-sm">
          <h2 className="text-pink-400 font-bold mb-6">The Process</h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { step: "01", title: "Research & Ideation", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
              { step: "02", title: "Sketching & Drafting", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
              { step: "03", title: "Final Execution", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col gap-3">
                <div className="w-full h-36 bg-pink-50 rounded-2xl flex items-center justify-center">
                  <p className="text-pink-200 text-sm">Process Image 🌸</p>
                </div>
                <p className="text-4xl font-bold text-pink-100">{step}</p>
                <h3 className="text-pink-400 font-semibold">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectDetail