export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade"
          id="nav"
        >
          <div className="flex items-center gap-2 py-1 px-2 m-1">
            <div className="border-l-2 border-neutral-900 dark:border-neutral-100 h-[34px]"></div>
            <div className="flex flex-col gap-1 h-[34px] justify-between">
              <span className="text-[15px] font-bold text-neutral-900 dark:text-neutral-100 tracking-tight leading-none mt-1">
                Mir
              </span>
              <span className="text-[15px] font-semibold text-neutral-500 dark:text-neutral-500 tracking-tight leading-none">
                Tauhid
              </span>
            </div>
          </div>

          <a
            href="https://mirtauhid.notion.site/MIR-TAUHIDUL-ISLAM-2b5304a80259802ba7d3d1fa31964b05"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
          >
            <img
              src="https://cdn.brandfetch.io/idPYUoikV7/theme/light/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1714126994867"
              alt="Notion"
              className="w-5 h-5 mx-2"
            />
            <span className="md:hidden">Resume</span>
            <span className="hidden md:inline">Check out my resume!</span>
          </a>
        </nav>
      </div>
    </aside>
  );
}
