import { motion } from 'framer-motion'

function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-8 bg-white"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-pink-400 mb-6">About Me</h2>
      <p className="text-pink-300 max-w-lg text-lg leading-relaxed">
        Hi! I'm Mutia, a student at Politeknik Manufaktur Bandung, 
        majoring in Industrial Informatics Engineering Technology. 🌸
      </p>
      <p className="text-pink-300 max-w-lg text-lg leading-relaxed mt-4">
        I love exploring new things — especially at the intersection of 
        manufacturing and digital technology. Creative, curious, and always 
        excited to build something from scratch!
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {["IoT 🤖", "Product Design 📦", "Graphic Design 🎨", "Web Development 🌐"].map((item) => (
          <span key={item} className="bg-pink-100 text-pink-400 font-medium px-5 py-2 rounded-full">
            {item}
          </span>
        ))}
      </div>
    </motion.section>
  )
}

export default About