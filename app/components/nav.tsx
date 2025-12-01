"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "About me",
  },
  "/blog": {
    name: "Blog",
  },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-4 md:pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === "/" 
                ? pathname === path 
                : pathname.startsWith(path);
              const mobileName = path === "/" ? "About" : name;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 ${
                    isActive ? "text-white font-semibold" : "text-neutral-400"
                  }`}
                >
                  <span className="md:hidden">{mobileName}</span>
                  <span className="hidden md:inline">{name}</span>
                </Link>
              );
            })}
          </div>

          <a
            href="https://mirtauhid.notion.site/MIR-TAUHIDUL-ISLAM-2b5304a80259802ba7d3d1fa31964b05"
            target="blank"
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
          >
            <img
              src="https://cdn.brandfetch.io/idPYUoikV7/theme/light/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1714126994867"
              alt="Logo"
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
