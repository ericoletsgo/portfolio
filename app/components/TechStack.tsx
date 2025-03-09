export default function TechStack() {
  const technologies = [
    { name: 'JavaScript', icon: 'JS' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'Vue', icon: 'V' },
    { name: 'React', icon: 'React' },
    // Add more technologies as needed
  ]

  return (
    <div className="bg-[#202020] p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Technologies I have worked with</h2>
      <div className="grid grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="bg-gray-700 p-2 rounded-lg flex items-center justify-center">
            {tech.icon}
          </div>
        ))}
      </div>
    </div>
  )
}