import React from 'react'
import { Badge, Btn } from 'eswiss'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import { useHeadDataEffect } from '../../../util'
import NPMIcon from '../../../assets/npm.svg'
import { MarkGithubIcon } from '@primer/octicons-react'

/**
 * asset-webpack-list-plugin Project Page
 */
const AWLP = () => {
  useHeadDataEffect()
  const { tags } = getProjectData('alwp')

  return (
    <>
      <BlindFrame nodeType="header" className="cover">
        <h1 className="h-1 md:h-2 sm:h-3">Asset List Webpack&nbsp;Plugin</h1>
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
            <strong>Asset List Webpack Plugin</strong> is an open source{' '}
            <a
              href="https://expressjs.com"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              webpack
            </a>{' '}
            plugin outputs a simple list of generated assets with your webpack
            bundle. The format of the list can be changed with various
            different&nbsp;options.
          </p>
          <p>
            This plugin was originally created for dynamically handling frontend
            bundles on the backend, but it can be useful for other purposes such
            as bundle&nbsp;debugging.
          </p>
        </section>
        <a
          href="https://github.com/mattlean/asset-list-webpack-plugin"
          rel="noreferrer"
          target="_blank"
          className="btn-gh"
        >
          <Btn>
            <MarkGithubIcon className="btn-icon" /> GitHub
          </Btn>
        </a>
        <a
          href="https://npmjs.com/package/asset-list-webpack-plugin"
          rel="noreferrer"
          target="_blank"
          className="btn-npm"
        >
          <Btn outline={true}>
            <NPMIcon className="btn-icon" /> npm
          </Btn>
        </a>
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
            </ul>
          </section>
          <section>
            <h4>Peer Dependencies</h4>
            <ul>
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
        <section>
          <section>
            <h4>License</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/mattlean/asset-list-webpack-plugin/blob/master/LICENSE"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  MIT
                </a>
              </li>
            </ul>
          </section>
        </section>
      </BlindFrame>
    </>
  )
}

export default AWLP