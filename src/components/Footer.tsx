function Footer() {
  return (
    <footer id="contact" className="w-full py-12 flex flex-col items-center gap-3 bg-pink-50">
      <p className="text-pink-400 font-bold text-lg">Mutia Nur Khalifa ✨</p>
      <p className="text-pink-300 text-sm">Let's build something together! 🌸</p>
      <div className="flex gap-6 text-pink-300 text-sm mt-2">
        <a href="mailto:mutia.khalifa@gmail.com" className="hover:text-pink-500 transition-colors">Email</a>
        <a href="https://github.com/mutianurkhalifa" className="hover:text-pink-500 transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/mutianurkhalifa/" className="hover:text-pink-500 transition-colors">LinkedIn</a>
      </div>
      <p className="text-pink-200 text-xs mt-4">© 2026 Mutia Nur Khalifa. All rights reserved.</p>
    </footer>
  )
}

export default Footer