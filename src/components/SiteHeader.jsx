import { navItems } from '../content/siteContent'

function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-[#f2f1f4]/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-[1220px] items-center justify-between px-5 py-4 lg:px-8">
        <p className="font-['Space_Grotesk'] text-sm font-semibold tracking-wide text-[#16171b]">
          Trincomalee Heroes
        </p>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item, idx) => (
            <li key={item}>
              <a
                href="#"
                className={`text-xs tracking-[0.11em] text-[#272a31] transition-colors hover:text-[#bf3f12] ${
                  idx === 0 ? 'border-b border-[#bf3f12] pb-1 text-[#bf3f12]' : ''
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button className="rounded-full bg-gradient-to-r from-[#9e2d08] to-[#cf4b1e] px-6 py-2 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(156,46,12,0.35)] transition-transform duration-300 hover:-translate-y-0.5">
          JOIN US
        </button>
      </nav>
    </header>
  )
}

export default SiteHeader
