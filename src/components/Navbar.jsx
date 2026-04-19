import { useState } from 'react'
import Container from './Container'
import { iconMap } from './iconMap'

const MenuIcon = iconMap.Menu
const XIcon = iconMap.X
const DownloadIcon = iconMap.Download

function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-sky-400/20 bg-sky-400/10 font-display text-sm font-bold tracking-[0.3em] text-sky-100">
            AP
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-sky-200">
              Ashish Pagare
            </span>
            <span className="text-xs text-slate-400">Cloud &amp; DevOps Engineer</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href="/Ashish_Pagare_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-2.5 text-sm font-semibold text-sky-100 transition hover:border-sky-300/50 hover:bg-sky-400/15"
          >
            <DownloadIcon className="h-4 w-4" />
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-100 transition hover:border-sky-400/30 hover:bg-sky-400/10 md:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-[28rem] border-t border-white/10' : 'max-h-0'
        }`}
      >
        <Container className="py-4">
          <nav className="glass-panel grid gap-2 p-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Ashish_Pagare_CV.pdf"
              download
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-sky-400/30 bg-sky-400/10 px-4 py-3 text-sm font-semibold text-sky-100"
            >
              <DownloadIcon className="h-4 w-4" />
              Resume
            </a>
          </nav>
        </Container>
      </div>
    </header>
  )
}

export default Navbar
