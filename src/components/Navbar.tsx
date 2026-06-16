function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center bg-pink-50 sticky top-0 z-50 shadow-sm">
      <p className="text-pink-400 font-bold text-lg">Mutia ✨</p>
      <ul className="flex gap-6 text-pink-300 font-medium">
        <li className="cursor-pointer hover:text-pink-500 transition-colors" onClick={() => scrollTo('about')}>About</li>
        <li className="cursor-pointer hover:text-pink-500 transition-colors" onClick={() => scrollTo('skills')}>Skills</li>
        <li className="cursor-pointer hover:text-pink-500 transition-colors" onClick={() => scrollTo('projects')}>Projects</li>
        <li className="cursor-pointer hover:text-pink-500 transition-colors" onClick={() => scrollTo('contact')}>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar