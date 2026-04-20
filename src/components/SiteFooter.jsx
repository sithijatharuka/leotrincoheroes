import { footerColumns } from '../content/siteContent'

function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-[#e4e8ef]/85">
      <div className="mx-auto grid w-full max-w-[1220px] gap-10 px-5 py-10 md:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-[#15171d]">TRINCOMALEE HEROES</h3>
          <p className="mt-4 text-sm leading-relaxed text-[#646974]">
            The Leo Club of Trincomalee Heroes is a part of Lions Clubs International, the world's largest
            service organization.
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
          <h3 className="text-[11px] font-semibold tracking-[0.2em] text-[#9d350f]">CONNECT</h3>
          <p className="mt-4 text-lg tracking-[0.12em] text-[#6c7385]">@RETWEET</p>
          <p className="mt-3 text-sm leading-relaxed text-[#646974]">
            Trincomalee, Eastern Province,
            <br />
            Sri Lanka
          </p>
        </div>
      </div>

      <p className="border-t border-black/5 py-4 text-center text-xs text-[#707784]">
        © 2024 Leo Club of Trincomalee Heroes. All rights reserved.
      </p>
    </footer>
  )
}

export default SiteFooter
