import {
  Search,
  BarChart2,
  PenToolIcon as Tool,
  Brain,
  Database,
  PresentationIcon as PresentationChart,
} from "lucide-react"

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
            icon={<Search className="w-10 h-10" />}
            title="🔍 Data Analysis & Manipulation"
            description="SQL, Excel, Pandas, NumPy, Google Sheets"
          />
          <SkillCard
            icon={<BarChart2 className="w-10 h-10" />}
            title="📊 Data Visualization"
            description="Tableau, Power BI, Matplotlib, Seaborn, Excel Charts"
          />
          <SkillCard
            icon={<Tool className="w-10 h-10" />}
            title="🛠 Tools & Platforms"
            description="Jupyter Notebook, VS Code, Git, GitHub, Google Analytics"
          />
          <SkillCard
            icon={<Brain className="w-10 h-10" />}
            title="🧠 Statistical Analysis"
            description="A/B Testing, Descriptive Statistics, Regression Analysis, Hypothesis Testing"
          />
          <SkillCard
            icon={<Database className="w-10 h-10" />}
            title="📦 Data Collection & Cleaning"
            description="Web Scraping (BeautifulSoup, Selenium), Data Wrangling, API Integration"
          />
          <SkillCard
            icon={<PresentationChart className="w-10 h-10" />}
            title="🧪 Data Storytelling & Reporting"
            description="Dashboard Design, KPI Tracking, Business Reporting, Data-Driven Presentations"
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
