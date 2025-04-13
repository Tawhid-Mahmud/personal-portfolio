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
      <div className="container mx-auto px-4 md:px-6 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">My Skills</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <SkillCard
            icon={<Search className="w-8 h-8 sm:w-10 sm:h-10" />}
            title="🔍 Data Analysis & Manipulation"
            description="SQL, Excel, Pandas, NumPy, Google Sheets"
          />
          <SkillCard
            icon={<BarChart2 className="w-8 h-8 sm:w-10 sm:h-10" />}
            title="📊 Data Visualization"
            description="Tableau, Power BI, Matplotlib, Seaborn, Excel Charts"
          />
          <SkillCard
            icon={<Tool className="w-8 h-8 sm:w-10 sm:h-10" />}
            title="🛠 Tools & Platforms"
            description="Jupyter Notebook, VS Code, Git, GitHub, Google Analytics"
          />
          <SkillCard
            icon={<Brain className="w-8 h-8 sm:w-10 sm:h-10" />}
            title="🧠 Statistical Analysis"
            description="A/B Testing, Descriptive Statistics, Regression Analysis, Hypothesis Testing"
          />
          <SkillCard
            icon={<Database className="w-8 h-8 sm:w-10 sm:h-10" />}
            title="📦 Data Collection & Cleaning"
            description="Web Scraping (BeautifulSoup, Selenium), Data Wrangling, API Integration"
          />
          <SkillCard
            icon={<PresentationChart className="w-8 h-8 sm:w-10 sm:h-10" />}
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
    <div className="flex flex-col items-center p-4 sm:p-6 bg-background rounded-lg shadow-sm border transition-all duration-200 hover:shadow-md">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-muted-foreground text-center text-sm sm:text-base">{description}</p>
    </div>
  )
}
