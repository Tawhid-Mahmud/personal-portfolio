import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8 z-10">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-4">
          <Image
            src="/placeholder.svg?height=128&width=128"
            alt="Profile"
            width={128}
            height={128}
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px]">
          Web Developer & Designer creating engaging digital experiences
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
