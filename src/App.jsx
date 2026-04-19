import AboutSection from './components/AboutSection'
import ArchitectureSection from './components/ArchitectureSection'
import ContactSection from './components/ContactSection'
import Container from './components/Container'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import ScrollProgress from './components/ScrollProgress'
import SkillsSection from './components/SkillsSection'
import TerminalSection from './components/TerminalSection'
import { navLinks } from './data/portfolioData'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(29,78,216,0.16),transparent_22%),linear-gradient(180deg,#020617_0%,#020617_42%,#000000_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      </div>

      <ScrollProgress />
      <Navbar links={navLinks} />

      <main className="relative z-10">
        <HeroSection />
        <ArchitectureSection />
        <ProjectsSection />
        <TerminalSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/70">
        <Container className="flex flex-col gap-3 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>Built to feel like a cloud product launch page while staying recruiter-friendly.</p>
          <p>&copy; {new Date().getFullYear()} Ashish Pagare</p>
        </Container>
      </footer>
    </div>
  )
}

export default App
