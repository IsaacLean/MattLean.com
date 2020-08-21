import React from 'react'
import { Badge, Btn } from 'eswiss'
import { Link } from 'react-router-dom'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import { useHeadDataEffect } from '../../../util'
import DCExample from '../../../assets/projects/gridnik/example.jpg'
import LogoGridnik from '../../../assets/projects/gridnik/gridnik-logo.jpg'
import { MarkGithubIcon } from '@primer/octicons-react'

/**
 * Gridnik Project Page
 */
const Gridnik = () => {
  useHeadDataEffect()
  const { company, name, tags } = getProjectData('gridnik')

  return (
    <>
      <BlindFrame nodeType="header" className="cover">
        <h1 className="h-1 md:h-2 sm:h-3">{name}</h1>
        {company && (
          <h2 className="h-4 sm:h-6 c-grey-2 dispw-roman">{company}</h2>
        )}
        <ul className="badge-list">
          {tags.map((t) => (
            <Badge nodeType="li" wide={true} key={t.id}>
              {t.name}
            </Badge>
          ))}
        </ul>
      </BlindFrame>
      <BlindFrame nodeType="h2" className="project-overview h-2 md:h-4">
        Project Overview
      </BlindFrame>
      <BlindFrame nodeType="section" className="subgrid-project-desc grid">
        <section className="c-grey-1">
          <p>
            <strong>Gridnik</strong> is an{' '}
            <a
              href="https://www.adobe.com/products/xd.html"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1 txtw-roman"
            >
              Adobe XD
            </a>{' '}
            plugin that extends the program’s grid generation capabilities. It
            allows grids to be generated over any object: artboards, rectangles,
            text, etc. Auto-calculations make sure your grids hold your desired
            structure while still being&nbsp;valid.
          </p>
          <p>
            The project is named after{' '}
            <a
              href="https://en.wikipedia.org/wiki/Wim_Crouwel"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1 txtw-roman"
            >
              Wim Crouwel
            </a>
            , a Dutch graphic designer whose work is rooted in the{' '}
            <a
              href="https://en.wikipedia.org/wiki/International_Typographic_Style"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1 txtw-roman"
            >
              Swiss and International Typographic Styles
            </a>
            . He was also known as Mr. Gridnik&mdash;a nickname his friends gave
            to him due to his obsession with&nbsp;grids.
          </p>
        </section>
        <a
          href="https://github.com/mattlean/gridnik"
          rel="noreferrer"
          target="_blank"
        >
          <Btn className="btn-gh">
            <MarkGithubIcon className="btn-icon" /> GitHub
          </Btn>
        </a>
      </BlindFrame>
      <BlindFrame
        nodeType="figure"
        duration={0.1}
        threshold={0.2}
        className="ss ss-lg"
      >
        <img src={`/${LogoGridnik}`} alt="" />
        <figcaption className="c-grey-2">
          The Gridnik logo&mdash;created with a grid generated by the plugin.
          Inspired by{' '}
          <a
            href="https://sfmoma.org/artwork/2015.658"
            rel="noreferrer"
            target="_blank"
            className="a-grey-2"
          >
            Wim Crouwel’s Vormgevers&nbsp;piece
          </a>
          .
        </figcaption>
      </BlindFrame>
      <BlindFrame
        nodeType="figure"
        duration={0.1}
        threshold={0.2}
        className="ss ss-lg project-details-gap"
      >
        <img src={`/${DCExample}`} alt="" />
        <figcaption className="c-grey-2">
          A Gridnik-generated grid being used to compose the{' '}
          <Link to="/about" className="a-grey-2">
            ”About” page
          </Link>{' '}
          on{' '}
          <Link to="/projects/ml2020" className="a-grey-2">
            MattLean.com
          </Link>
          .
        </figcaption>
      </BlindFrame>
      <BlindFrame nodeType="h3" className="project-details-header">
        Project Details
      </BlindFrame>
      <BlindFrame
        nodeType="section"
        className="subgrid-project-details grid c-grey-1"
      >
        <section>
          <section>
            <h4>Languages</h4>
            <ul>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Tooling</h4>
            <ul>
              <li>
                <a
                  href="https://jestjs.io"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Jest
                </a>
              </li>
              <li>
                <a
                  href="https://webpack.js.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  webpack
                </a>
              </li>
            </ul>
          </section>
        </section>
      </BlindFrame>
      <BlindFrame
        nodeType="a"
        href="https://github.com/mattlean/gridnik"
        rel="noreferrer"
        target="_blank"
        className="btn-option-a"
      >
        <Btn className="btn-gh">
          <MarkGithubIcon className="btn-icon" /> GitHub
        </Btn>
      </BlindFrame>
    </>
  )
}

export default Gridnik
