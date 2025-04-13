export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <div className="w-20 h-1 bg-primary"></div>
          <p className="text-muted-foreground max-w-[700px] mt-6">
            I'm a passionate web developer with a focus on creating beautiful, functional, and user-friendly websites.
            With expertise in modern web technologies like React, Next.js, and Tailwind CSS, I build responsive and
            accessible web applications that deliver exceptional user experiences.
          </p>
          <p className="text-muted-foreground max-w-[700px] mt-4">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            enjoying outdoor activities. I believe in continuous learning and staying updated with the latest industry
            trends.
          </p>
        </div>
      </div>
    </section>
  )
}
