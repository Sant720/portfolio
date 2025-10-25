import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import SwipeCards from "@/components/SwipeCards";
import { Button } from "@/components/ui/Button";
import { getPosts } from "@/lib/posts";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRightIcon,
  FileDown,
} from "lucide-react";
import Link from "next/link";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content");
const SANTIAGO_BIRTH_YEAR = 1997;
const LIMIT = 2; // max show 2

export default async function Home() {
  const posts = await getPosts(blogDirectory, LIMIT);

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <SwipeCards className="md:mr-8" />

        <div className="flex max-w-[320px] flex-col sm:max-w-full">
          <h1 className="title text-balance text-4xl sm:text-5xl">
            Hi I&apos;m Santiago 👋
          </h1>

          <p className="mt-2 whitespace-nowrap text-sm font-medium sm:text-base">
            {/* {new Date().getFullYear() - SANTIAGO_BIRTH_YEAR} */}
            Senior Technical Writer from Lima, Peru 🇵🇪
          </p>

          <ul className="mt-4 max-w-sm text-xs sm:text-sm list-disc pl-3 space-y-1">
            <li><strong>Currently working at Uber</strong> managing large-scale documentation ecosystems for GenAI and SaaS tools.</li>
            <li>4+ years of experience working with <strong>U.S.-based engineering teams</strong>.</li>
            <li>Native-level English and exceptional collaboration skills.</li>
          </ul>

          <section className="mt-6 flex flex-wrap items-center gap-4">
            <Link href="/Santiago-Bolivar-Technical-Writer-Resume-2025.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl scroll-mt-20" id="featured-projects">featured projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-3xl">recent posts</h2>
          <LinkWithIcon
            href="/blog"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Posts posts={posts} />
      </section>
    </article>
  );
}
