import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8 z-10">
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-primary mb-8 mt-4">
              <div className="absolute w-[200px] h-[240px] -top-1 left-1/2 -translate-x-1/2 relative">
                <Image
                  src="/profile.JPG"
                  alt="Mohammad Mahmud"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Hi, I'm <span className="text-primary">Mohammad Mahmud</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px]">
          Data Analyst <br />
          Turning raw data into clear insights that drive smart decisions
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] opacity-20"></div>
    </section>
  )
}
