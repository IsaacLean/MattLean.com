import React, { useEffect, useRef } from 'react'
import { Badge, Btn } from 'eswiss'
import { Link } from 'react-router-dom'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import { ROUTE_PREFIX } from '../../../../common/data/route/project'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../../components/Blind/initAnimUtil'
import { usePageLoadEffect } from '../../../util'
import { MarkGithubIcon } from '@primer/octicons-react'

const { name, tags } = getProjectData('owl')

/**
 * Project Owl Project Page
 */
const Owl = () => {
  usePageLoadEffect()

  const srStartRef = useRef(null)
  const {
    blindVisibleStates,
    blindStates,
    initAnimComplete,
    observerData,
    runInitAnim,
  } = useInitAnim(5)

  // Setup effect which is only run once
  useEffect(() => {
    // Focus starting element on page load
    if (srStartRef.current) srStartRef.current.focus()

    const observers = setupBlindObservers(
      [0.5, 0.1, 0.1, 0.1, 0.1],
      observerData,
      blindVisibleStates
    )

    window.setTimeout(runInitAnim, 100)

    // Disconnect all observers on unmount
    return () => observers.forEach((observer) => observer.disconnect())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <BlindFrame
        ref={observerData[0].ref}
        nodeType="header"
        delay={blindStates[0].delay}
        observer={observerData[0].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[0].isVisible
            : blindStates[0].play
        }
        className="cover"
      >
        <h1 ref={srStartRef} tabIndex="-1" className="h-1 md:h-2 sm:h-3">
          {name}
        </h1>
        <ul aria-label="Categories" className="badge-list">
          {tags.map((t) => (
            <Badge nodeType="li" wide={true} key={t.id}>
              {t.name}
            </Badge>
          ))}
        </ul>
      </BlindFrame>
      <BlindFrame
        ref={observerData[1].ref}
        nodeType="h2"
        delay={blindStates[1].delay}
        observer={observerData[1].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[1].isVisible
            : blindStates[1].play
        }
        className="project-overview h-2 md:h-4"
      >
        Project Overview
      </BlindFrame>
      <BlindFrame
        ref={observerData[2].ref}
        nodeType="section"
        delay={blindStates[2].delay}
        observer={observerData[2].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[2].isVisible
            : blindStates[2].play
        }
        className="subgrid-project-desc grid"
      >
        <section className="c-grey-1">
          <p>
            <strong>Project Owl</strong> is a personal scheduling and finance
            management application. It has an{' '}
            <a
              href="https://android.com"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Android
            </a>{' '}
            mobile app and web app that connects to a server in the{' '}
            <a
              href="https://cloud.google.com"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Google&nbsp;Cloud
            </a>
            .
          </p>
          <p>
            This project originally released as a school assignment, but was
            eventually discontinued. The overall concept continues on as&nbsp;
            <Link to={`${ROUTE_PREFIX}recha`} className="a-grey-1 txtw-bold">
              Recha
            </Link>
            .
          </p>
        </section>
        <a
          href="https://github.com/mattlean/project-owl"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Btn className="btn-gh">
            <MarkGithubIcon className="btn-icon" /> Server
          </Btn>
        </a>
        <a
          href="https://github.com/mattlean/project-owl_android"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Btn outline={true} className="btn-gh">
            <MarkGithubIcon className="btn-icon" /> Mobile
          </Btn>
        </a>
      </BlindFrame>
      <BlindFrame
        ref={observerData[3].ref}
        nodeType="h3"
        delay={blindStates[3].delay}
        observer={observerData[3].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[3].isVisible
            : blindStates[3].play
        }
        className="project-details-header"
      >
        Project Details
      </BlindFrame>
      <BlindFrame
        ref={observerData[4].ref}
        nodeType="section"
        className="subgrid-project-details grid mb-0 c-grey-1"
        delay={blindStates[4].delay}
        observer={observerData[4].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[4].isVisible
            : blindStates[4].play
        }
      >
        <section>
          <section>
            <h4>Released</h4>
            <ul>
              <li>Jun 9, 2014</li>
            </ul>
          </section>
          <section>
            <h4>Languages</h4>
            <ul>
              <li>
                <a
                  href="https://java.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Java
                </a>
              </li>
              <li>
                <a
                  href="https://python.org"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Python
                </a>
              </li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </section>
          <section>
            <h4>Mobile</h4>
            <ul>
              <li>
                <a
                  href="https://android.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Android
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Tooling</h4>
            <ul>
              <li>
                <a
                  href="http://browserify.org"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Browserify
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/andreypopp/reactify"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  reactify
                </a>
              </li>
              <li>
                <a
                  href="https://gulpjs.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Gulp
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Updated</h4>
            <ul>
              <li>Oct 3, 2015</li>
            </ul>
          </section>
          <section>
            <h4>Backend</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/GoogleCloudPlatform/webapp2"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  webapp2
                </a>
              </li>
              <li>
                <a
                  href="https://cloud.google.com/datastore"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Google Cloud Datastore
                </a>
              </li>
              <li>
                <a
                  href="https://cloud.google.com/appengine/docs/standard/python/datastore/api-overview"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Google DB Client&nbsp;Library
                </a>
              </li>
              <li>
                <a
                  href="https://palletsprojects.com/p/jinja/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Jinja
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Web Frontend</h4>
            <ul>
              <li>
                <a
                  href="https://reactjs.org"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.github.io/flux"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Flux
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/strml/react-router-component"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  React Router Component
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/async-library/react-async"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  React Async
                </a>
              </li>
              <li>
                <a
                  href="https://getbootstrap.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Bootstrap
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4>License</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/mattlean/project-owl/blob/master/LICENSE"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
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

export default Owl
