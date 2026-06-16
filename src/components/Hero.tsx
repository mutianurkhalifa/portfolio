import { TypeAnimation } from 'react-type-animation'

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-8 bg-gradient-to-b from-pink-100 via-rose-50 to-white">
      <p className="text-pink-300 font-medium mb-2">Hi, I'm</p>
      <h1 className="text-5xl font-bold text-pink-500 mb-4">Mutia Nur Khalifa</h1>
      <TypeAnimation
        sequence={[
          'Industrial Informatics Student 🎓', 2000,
          'Creative & love building things 🌸', 2000,
          'Future Engineer ⚙️', 2000,
        ]}
        wrapper="p"
        speed={50}
        repeat={Infinity}
        className="text-pink-400 text-xl mb-2"
      />
      <p className="text-pink-300 text-lg max-w-md mt-2">
        Building things from scratch — from automation systems to pretty websites 🌸
      </p>
    </section>
  )
}

export default Hero