import { useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/project'

function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const currentIndex = projects.findIndex((p) => p.id === id)
  const project = projects[currentIndex]
  const prevProject = projects[currentIndex - 1]
  const nextProject = projects[currentIndex + 1]

  if (!project) return <p className="text-center text-pink-300 mt-20">Project not found 🌸</p>

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      {/* Blur blobs */}
      <div className="fixed top-[-120px] left-[-120px] w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="fixed top-[300px] right-[-100px] w-80 h-80 bg-rose-300 rounded-full blur-3xl opacity-25 pointer-events-none" />
      <div className="fixed bottom-[50px] left-[-80px] w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-35 pointer-events-none" />
      <div className="fixed bottom-[-100px] right-[-100px] w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-30 pointer-events-none" />

      {/* Hero Banner */}
      <div className="w-full h-80 bg-gradient-to-br from-pink-200 via-rose-100 to-white flex flex-col items-center justify-center text-center px-8 relative">
        <div className="absolute top-4 right-12 text-6xl opacity-20 select-none">🌸</div>
        <div className="absolute bottom-4 left-12 text-4xl opacity-10 select-none">🌷</div>

        {/* Project indicator */}
        <div className="flex items-center gap-2 mb-4">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-6 h-2 bg-pink-400'
                  : 'w-2 h-2 bg-pink-200'
              }`}
            />
          ))}
        </div>
        <p className="text-pink-300 text-xs tracking-widest uppercase mb-2">
          Project {currentIndex + 1} of {projects.length}
        </p>
        <p className="text-pink-300 text-sm mb-2 tracking-widest uppercase">{project.type} · {project.year}</p>
        <h1 className="text-6xl font-bold text-pink-500 mb-3">{project.title}</h1>
        <p className="text-pink-400 text-lg">{project.role}</p>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-12 relative">

        {/* Back button */}
      <button
        onClick={() => {
          navigate('/')
          setTimeout(() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        }}
        className="text-pink-300 hover:text-pink-500 transition-colors mb-10 flex items-center gap-2"
      >
        ← Back to Projects
      </button>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-12">
          {project.tools.map((t) => (
            <span key={t} className="bg-pink-100 text-pink-400 text-sm px-4 py-1 rounded-full">{t}</span>
          ))}
        </div>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-pink-400 mb-4">About this project</h2>
          <p className="text-gray-500 leading-relaxed text-lg">{project.summary}</p>
        </section>

        {/* Cover */}
        {project.cover ? (
          project.coverType === "video" ? (
            <div className="relative w-full rounded-3xl mb-12 aspect-video overflow-hidden group">
              <video
                ref={videoRef}
                src={project.cover}
                poster={project.coverPoster}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => {
                    const v = videoRef.current
                    if (!v) return
                    isPlaying ? v.pause() : v.play()
                    setIsPlaying(!isPlaying)
                  }}
                  className="bg-white/80 text-pink-500 px-5 py-2 rounded-full text-sm font-medium hover:bg-white transition-all"
                >
                  {isPlaying ? '⏸ Pause' : '▶ Play'}
                </button>
                <button
                  onClick={() => {
                    const v = videoRef.current
                    if (!v) return
                    v.currentTime = 0
                    v.play()
                    setIsPlaying(true)
                  }}
                  className="bg-white/80 text-pink-500 px-5 py-2 rounded-full text-sm font-medium hover:bg-white transition-all"
                >
                  ↺ Restart
                </button>
              </div>
            </div>
          ) : (
            <img
              src={project.cover}
              alt="Cover"
              className="w-full rounded-3xl mb-12 object-cover aspect-video"
            />
          )
        ) : (
          <div className="w-full aspect-video bg-pink-100 rounded-3xl mb-12 flex items-center justify-center">
            <p className="text-pink-300">Cover Image 🌸</p>
          </div>
        )}

        {/* Impact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-pink-400 mb-4">What I Did</h2>
          <p className="text-gray-500 leading-relaxed text-lg">{project.impact}</p>
        </section>

        {/* Process */}
        {project.process && project.process.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pink-400 mb-8">The Process</h2>
            <div className="flex flex-col gap-10">
              {project.process.map(({ step, title, desc, image }) => (
                <div key={step} className="flex gap-6 items-start">
                  <p className="text-5xl font-bold text-pink-100 shrink-0">{step}</p>
                  <div className="flex-1">
                    <h3 className="text-pink-400 font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{desc}</p>
                    {image ? (
                      <img
                        src={image}
                        alt={title}
                        className="w-full rounded-2xl object-cover aspect-video cursor-pointer hover:scale-105 transition-all duration-300"
                        onClick={() => setSelected(image)}
                      />
                    ) : (
                      <div className="w-full h-48 bg-pink-50 rounded-2xl flex items-center justify-center">
                        <p className="text-pink-200 text-sm">Process Image 🌸</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Demo Video */}
        {project.demoVideo && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pink-400 mb-6">How It Works</h2>
            <div className="rounded-3xl overflow-hidden">
              <video
                src={project.demoVideo}
                className="w-full aspect-video object-cover"
                controls
                playsInline
              />
            </div>
          </section>
        )}

        {/* Project Report */}
        {project.report && (
        <div className="flex justify-center mb-16">
          <a
            href={project.report}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pink-100 text-pink-500 font-medium px-6 py-3 rounded-full hover:bg-pink-200 transition-all mb-16"
          >
            📄 Read Full Report
          </a>
          </div>
        )}

        {/* What I Learned */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-pink-400 mb-4">What I Learned</h2>
          <p className="text-gray-500 leading-relaxed text-lg">{project.learned}</p>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-8 border-t border-pink-100 mb-16">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-pink-50 text-pink-400 text-xs px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>


        {/* Prev / Next navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-pink-100">
          {prevProject ? (
            <button
              onClick={() => navigate(`/project/${prevProject.id}`)}
              className="flex flex-col items-start gap-1 text-left group"
            >
              <span className="text-pink-200 text-xs group-hover:text-pink-400 transition-colors">← Previous</span>
              <span className="text-pink-400 font-semibold group-hover:text-pink-600 transition-colors">{prevProject.title}</span>
            </button>
          ) : <div />}

          {nextProject ? (
            <button
              onClick={() => navigate(`/project/${nextProject.id}`)}
              className="flex flex-col items-end gap-1 text-right group"
            >
              <span className="text-pink-200 text-xs group-hover:text-pink-400 transition-colors">Next →</span>
              <span className="text-pink-400 font-semibold group-hover:text-pink-600 transition-colors">{nextProject.title}</span>
            </button>
          ) : <div />}
        </div>

      </div>

      {/* Footer */}
      <div className="w-full border-t border-pink-100 bg-pink-50 px-12 py-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="text-pink-500 font-bold text-lg">Mutia Nur Khalifa</p>
          <p className="text-pink-300 text-sm">Politeknik Manufaktur Bandung · Teknologi Rekayasa Informatika Industri</p>
        </div>
        <div className="flex gap-6 text-pink-300 text-sm">
          <a href="mailto:mutia.khalifa@gmail.com" className="hover:text-pink-500 transition-colors">mutia.email@gmail.com</a>
          <a href="https://github.com/mutianurkhalifa" className="hover:text-pink-500 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/mutianurkhalifa/" className="hover:text-pink-500 transition-colors">LinkedIn</a>
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-8"
        >
          <img
            src={selected}
            alt="Preview"
            className="max-w-4xl max-h-screen rounded-2xl shadow-2xl"
          />
          <button className="absolute top-6 right-8 text-white text-3xl hover:text-pink-300">✕</button>
        </div>
      )}

    </div>
  )
}

export default ProjectDetail