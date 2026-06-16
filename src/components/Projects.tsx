import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/project'

function Projects() {
  const navigate = useNavigate()

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center text-center px-8 bg-white"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-pink-400 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => navigate(`/project/${project.id}`)}
            className="bg-pink-50 rounded-2xl p-6 text-left shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <p className="text-pink-200 text-xs mb-1">{project.type} · {project.year}</p>
            <h3 className="text-pink-500 font-bold text-xl mb-2">{project.title}</h3>
            <p className="text-pink-300 text-sm mb-4 line-clamp-2">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span key={t} className="bg-pink-100 text-pink-400 text-xs px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects