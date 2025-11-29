export function Work() {
  return (
    <>
      <h2 className="text-3xl mb-6">Work</h2>
      <div>
        <h3>
          <a href="https://www.provider-link.com">ProviderLINK</a>
        </h3>
        <small className="leading-7 mt-[-6px] block mb-4 text-neutral-200">
          <em>Frontend Developer - Remote (2023 - Present)</em>
        </small>
        <p className="mb-4 text-justify leading-7" style={{ color: "#909090" }}>
          {`Though I joined here as a frontend developer, I sometimes have to handle backend tasks too because I work as the solo developer. While working here, I have built around 4+ medium-scale projects, including a job applicant tracking system, automated invoice document management for accounts payable, and hospital staff and patient task and flow management, and patient check-in application. Some projects are still under development, such as a FHIR application integrating eClinicalWorks and an EOD platform.`}
        </p>
      </div>
      <div>
        <h3>
          <a href="https://www.upwork.com">Upwork</a>
        </h3>
        <small className="leading-7 mt-[-6px] block mb-4 text-neutral-200">
          <em>Frontend Developer - Freelance (2021 - 2023)</em>
        </small>
        <p className="mb-4 text-justify leading-7" style={{ color: "#909090" }}>
          {`Though I joined here as a frontend developer, I sometimes have to handle backend tasks too because I work as the solo developer. While working here, I have built around 50+ small to medium-scale projects, including landing pages, dashboards, admin panels, and e-commerce sites for various clients worldwide. My primary focus has been on creating responsive and user-friendly interfaces using React and Next.js.`}
        </p>
      </div>
    </>
  );
}
