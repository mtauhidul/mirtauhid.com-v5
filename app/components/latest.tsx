export function Latest() {
  return (
    <div className="my-8">
      <h2 className="text-3xl mb-6">Blog</h2>
      <a
        href="https://mtauhidul.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-4 px-6 py-4 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl transition-all duration-200 hover:shadow-md"
      >
        <div className="flex-shrink-0">
          <img
            src="/images/Medium-Icon-Black.svg"
            alt="Medium"
            className="w-12 h-12 dark:hidden rounded-lg"
          />
          <img
            src="/images/Medium-Icon-White.svg"
            alt="Medium"
            className="w-12 h-12 hidden dark:block rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold text-lg group-hover:text-black dark:group-hover:text-white transition-colors">
            Read my articles on Medium
          </span>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            @mtauhidul
          </span>
        </div>
      </a>
    </div>
  );
}
