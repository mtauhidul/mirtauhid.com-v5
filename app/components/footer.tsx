import { MailIcon } from "lucide-react";
import { Divider } from "./divider";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-8 md:mb-16">
      <Divider />
      <ul className="font-sm mt-4 md:mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 md:justify-end dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/mirtauhid"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/mtauhidul"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
      </ul>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 md:mt-6 gap-4">
        <p className="text-sm flex items-center order-2 md:order-1">
          <span className="mr-1 mt-1 leading-none align-middle">©</span>
          <span className="leading-none">MIR TAUHIDUL ISLAM</span>
        </p>
        <a
          className="inline-flex items-center space-x-2 order-1 md:order-2"
          href="mailto:mislam.tauhidul@gmail.com"
        >
          <MailIcon
            size={18}
            className="text-neutral-600 dark:text-neutral-300 self-center flex-shrink-0"
          />
          <p className="text-sm leading-none break-all">
            mislam.tauhidul@gmail.com
          </p>
        </a>
      </div>
    </footer>
  );
}
