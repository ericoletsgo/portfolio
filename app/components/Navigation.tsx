import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-[#202020] rounded-full px-6 py-2 inline-flex gap-4 mx-auto">
      <a href="/" className="text-white hover:text-gray-300">Home</a>
      <Link href="/projects" className="text-gray-400 hover:text-gray-300">Projects</Link>
      <Link href="/contact" className="text-gray-400 hover:text-gray-300">Contact</Link>
    </nav>
  )
}
