import { motion } from 'framer-motion'

const skills = [
  "Arduino 🤖",
  "ESP32 ⚡",
  "IoT 🌐",
  "PHP 🐘",
  "Laravel 🔴",
  "MySQL 🗄️",
  "HTML & CSS 🎨",
  "JavaScript 🌐",
  "React ⚛️",
  "Affinity Illustrator ✏️",
  "UI/UX Design 🖌️",
  "Git & GitHub 🐙",
]

function Skills() {
  return (
    <motion.section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center text-center px-8 bg-pink-50"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-pink-400 mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-lg">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-pink-100 text-pink-400 font-medium px-5 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills