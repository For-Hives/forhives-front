import Link from 'next/link'

import { IconLink } from '@/components/IconLink'
import { Logo } from '@/components/Logo'

function BookIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
    </svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  )
}

export function Intro() {
  return (
    <>
      <div>
        <Link href="/">
          <Logo className="inline-block h-8 w-auto" />
        </Link>
      </div>
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
        Collaborative Hive for{' '}
        <span className="text-yellow-300">Innovative Projects</span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
        Where every idea is a bee, and passion is the queen that governs them
        all.
      </p>
      <h2 className="mt-8 text-lg font-semibold text-white">Resources</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink
          href="https://github.com/For-Hives"
          icon={GitHubIcon}
          className="flex-none"
        >
          GitHub
        </IconLink>
        <IconLink
          href="https://publish.obsidian.md/forhives-wiki"
          icon={BookIcon}
          className="flex-none"
        >
          Obsidian Documentation
        </IconLink>
      </div>
      <h2 className="mt-8 text-lg font-semibold text-white">Our Projects</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        <ProjectLink href="https://forvoyez.com/" title="ForVoyez" />
        <ProjectLink href="https://formenu.fr/" title="ForMenu" />
        <ProjectLink href="https://my-makeup.fr/" title="My Makeup" />
        <ProjectLink href="https://artriste.cc/" title="Artriste" />
        <ProjectLink
          href="https://github.com/CinquinAndy/plugin-auto-alt-caption-title-on-images-ai-enhanced"
          title="Strapi Plugin SEO"
        />
        <ProjectLink
          href="https://github.com/For-Hives/forhives-base"
          title="ForHives Base"
        />
        <ProjectLink
          href="https://github.com/CinquinAndy/notes-to-strapi-export-article-ai"
          title="Plugin Obsidian"
        />
        <ProjectLink
          href="https://github.com/CinquinAndy/export-repository-to-prompt-for-llm"
          title="Script Export Repo"
        />
      </div>
      <h2 className="mt-8 text-lg font-semibold text-white">Our Portfolios</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3">
        <ProjectLink href="https://andy-cinquin.fr/" title="Andy" />
        <ProjectLink href="https://brev.al/" title="Bréval" />
        <ProjectLink href="https://wadefade.fr/" title="Mathis" />
      </div>
    </>
  )
}

function ProjectLink({ href, title }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 text-sm text-gray-300 transition-colors duration-200 hover:text-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkIcon className="!h-3 !w-3" />
      <p>{title}</p>
    </Link>
  )
}
