export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <div className="w-20 h-1 bg-primary"></div>
          <p className="text-muted-foreground max-w-[700px] mt-6">
            I'm an aspiring data analyst with a strong interest in turning raw data 
            into meaningful insights. Proficient in tools like SQL, Excel, and Tableau, 
            I enjoy exploring data, identifying trends, and helping teams make informed decisions.
          </p>
          <p className="text-muted-foreground max-w-[700px] mt-4">
            I'm currently building my skills through hands-on projects and continuously 
            learning data visualization, analytics, and storytelling techniques. When 
            I'm not analyzing data, I enjoy diving into tech blogs, learning new tools, 
            and working on personal growth.
          </p>
        </div>
      </div>
    </section>
  )
}

