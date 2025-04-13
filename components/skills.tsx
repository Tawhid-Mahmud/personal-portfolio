import { Code, Palette, Smartphone, Globe, Database, Server } from "lucide-react"

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            icon={<Code className="w-10 h-10" />}
            title="Frontend Development"
            description="React, Next.js, HTML, CSS, JavaScript, TypeScript, Tailwind CSS"
          />
          <SkillCard
            icon={<Server className="w-10 h-10" />}
            title="Backend Development"
            description="Node.js, Express, RESTful APIs, GraphQL"
          />
          <SkillCard
            icon={<Database className="w-10 h-10" />}
            title="Database"
            description="MongoDB, PostgreSQL, MySQL, Firebase"
          />
          <SkillCard
            icon={<Palette className="w-10 h-10" />}
            title="UI/UX Design"
            description="Figma, Adobe XD, Responsive Design, Accessibility"
          />
          <SkillCard
            icon={<Smartphone className="w-10 h-10" />}
            title="Mobile Development"
            description="React Native, Progressive Web Apps"
          />
          <SkillCard
            icon={<Globe className="w-10 h-10" />}
            title="Deployment & DevOps"
            description="Vercel, Netlify, Git, GitHub Actions, CI/CD"
          />
        </div>
      </div>
    </section>
  )
}

function SkillCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-sm border transition-all duration-200 hover:shadow-md">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  )
}
