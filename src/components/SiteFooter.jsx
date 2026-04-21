import { footerColumns } from '../content/siteContent'

function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-[#dde2e9]">
      <div className="mx-auto grid w-full max-w-[1220px] gap-10 px-5 py-10 md:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-[#15171d]">Trincomalee Heroes</h3>
          <p className="mt-4 text-sm leading-relaxed text-[#646974]">
            Empowering youth, transforming communities, and building a legacy of service in the heart of
            Trincomalee.
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] text-[#9d350f]">{column.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#4f5562]">
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-[11px] font-semibold tracking-[0.2em] text-[#9d350f]">STAY CONNECTED</h3>
          <div className="mt-4 flex items-center gap-3 text-[#647082]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#c4ccd7]">
              f
            </span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#c4ccd7]">
              ◦
            </span>
          </div>
        </div>
      </div>

      <p className="border-t border-black/5 py-4 text-center text-xs text-[#707784]">
        © 2024 Leo Club of Trincomalee Heroes. All rights reserved.
      </p>
    </footer>
  )
}

export default SiteFooter
