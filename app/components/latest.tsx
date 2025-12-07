export function Latest() {
  return (
    <div className="my-8">
      <h2 className="text-3xl mb-6">Blog</h2>
      <a
        href="https://mtauhidul.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 px-4 py-3 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-all duration-200 hover:shadow-sm"
      >
        <div className="flex-shrink-0">
          <img
            src="/images/Medium-Icon-Black.svg"
            alt="Medium"
            className="w-10 h-10 dark:hidden rounded-md"
          />
          <img
            src="/images/Medium-Icon-White.svg"
            alt="Medium"
            className="w-10 h-10 hidden dark:block rounded-md"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold text-base group-hover:text-black dark:group-hover:text-white transition-colors">
            Read my articles on Medium
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            @mtauhidul
          </span>
        </div>
      </a>
    </div>
  );
}
