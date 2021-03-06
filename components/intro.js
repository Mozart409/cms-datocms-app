import { CMS_NAME, CMS_URL } from "@/lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between my-6 md:my-8 lg:my-16">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration"
        >
          incremental statically regenerated
        </a>{" "}
        blog using{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={CMS_URL}
          className="underline hover:text-success duration-200 transition-colors"
        >
          {CMS_NAME}
        </a>
        .
      </h4>
    </section>
  );
}
