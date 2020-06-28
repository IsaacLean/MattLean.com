import React from 'react'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import CTA from '../../components/CTA'
import MainFooter from '../../components/MainFooter'
import { pageVariants } from '../../visuals/animation'
import FeaturedES from '../../assets/eswiss-featured-project.jpg'
import FeaturedG from '../../assets/gridnik-featured-project.jpg'
import FeaturedLS from '../../assets/lean-space-featured-project.jpg'
import FeaturedSOT from '../../assets/spectral-overlay-tool-featured-project.jpg'

const Landing = () => {
  // const initAnimState = __isServer__ || window.isInitLoad ? 'in' : 'out'

  return (
    <motion.main
      animate="initial"
      in="initial"
      exit="out"
      initial="initial"
      variants={pageVariants}
      className="container grid-landing"
    >
      <section className="cover">
        <BlindFrame>
          <h1 className="headline">Hi, I&apos;m Matt Lean!</h1>
        </BlindFrame>
        <BlindFrame delay={0.3}>
          <p className="txt-lg txt-grey-a">
            I’m a developer who works at the intersection of engineering and
            design. I’ve been building web-based products for Silicon Valley
            since 2015 and am currently looking for new opportunities.
          </p>
        </BlindFrame>
        <BlindFrame delay={0.8}>
          <CTA to="/about" type="lg" className="svg-primary link-primary">
            Learn more about me
          </CTA>
        </BlindFrame>
      </section>
      <BlindFrame className="featured-projects-header">
        <h2 className="tracked-header">Featured Projects</h2>
      </BlindFrame>
      <section className="featured featured-projects">
        <figure className="featured-a">
          <BlindFrame>
            <img
              src={FeaturedG}
              alt="Featured image for Gridnik: a screenshot of a grid generated by the project"
              className="featured-gridnik"
            />
          </BlindFrame>
          <figcaption>
            <BlindFrame>
              <h3 className="header-md">Gridnik</h3>
            </BlindFrame>
            <BlindFrame>
              <p className="txt-grey-a">
                Extend Adobe XD&apos;s grid generation capabilities.
              </p>
            </BlindFrame>
          </figcaption>
        </figure>
        <figure className="featured-b">
          <BlindFrame>
            <img
              src={FeaturedES}
              alt="Featured image for eswiss project: the eswiss logo"
            />
          </BlindFrame>
          <figcaption>
            <BlindFrame>
              <h3 className="header-md">eswiss</h3>
            </BlindFrame>
            <BlindFrame>
              <p className="txt-grey-a">
                A design system built on Swiss/International style design
                principles.
              </p>
            </BlindFrame>
          </figcaption>
        </figure>
      </section>
      <BlindFrame className="view-more-projects">
        <CTA to="/about" type="sm" className=" svg-grey-c link-grey-c">
          View all projects
        </CTA>
      </BlindFrame>
      <BlindFrame className="featured-case-studies-header">
        <h2 className="tracked-header">Featured Case Studies</h2>
      </BlindFrame>
      <BlindFrame nodeType="section" className="featured featured-case-studies">
        <figure className="featured-a">
          <BlindFrame>
            <img
              src={FeaturedSOT}
              alt="Featured image for Spectral Overlay Tool case study: a screenshot of one of the tool's charts"
            />
          </BlindFrame>
          <figcaption>
            <BlindFrame>
              <h3 className="header-md">Spectral Overlay Tool</h3>
            </BlindFrame>
            <BlindFrame>
              <p className="txt-grey-a">
                Building a biotech data visualization tool.
              </p>
            </BlindFrame>
          </figcaption>
        </figure>
        <figure className="featured-b">
          <BlindFrame>
            <img
              src={FeaturedLS}
              alt="Featured image for Lean Space case study: the project's logo"
            />
          </BlindFrame>
          <figcaption>
            <BlindFrame>
              <h3 className="header-md">Lean Space</h3>
            </BlindFrame>
            <BlindFrame>
              <p className="txt-grey-a">
                Learnings from building my personal website in 2015.
              </p>
            </BlindFrame>
          </figcaption>
        </figure>
      </BlindFrame>
      <BlindFrame className="view-more-case-studies">
        <CTA to="/about" type="sm" className="link-grey-c svg-grey-c">
          View all case studies
        </CTA>
      </BlindFrame>
      <BlindFrame className="featured-posts-header">
        <h2 className="tracked-header">Featured Posts</h2>
      </BlindFrame>
      <BlindFrame className="featured-posts">
        <ol>
          <li>
            <h4 className="header-md">
              Cat Proofing Your Computer Work Station
            </h4>
            <p className="time txt-grey-a">January 11, 2020 • 5 min read</p>
            <p className="txt-grey-a">
              How to cat proof your computer work station.
            </p>
          </li>
          <li>
            <h4 className="header-md">Exploring China: Sichuan</h4>
            <p className="time txt-grey-a">January 11, 2020 • 5 min read</p>
            <p className="txt-grey-a">
              My visual journey through the Sichuan province.
            </p>
          </li>
          <li>
            <h4 className="header-md">
              Neopets: Strange Origins of a New Generation of Designers &
              Developers
            </h4>
            <p className="time txt-grey-a">January 11, 2020 • 5 min read</p>
            <p className="txt-grey-a">
              How a kids game spawned a new generation of designers and
              developers.
            </p>
          </li>
          <li>
            <h4 className="header-md">Falling in Love with Zelda Again</h4>
            <p className="time txt-grey-a">January 11, 2020 • 5 min read</p>
            <p className="txt-grey-a">
              How Breath of the Wild revitalized my love for Zelda games again.
            </p>
          </li>
          <li>
            <h4 className="header-md">Amerikajin Ramen</h4>
            <p className="time txt-grey-a">January 11, 2020 • 5 min read</p>
            <p className="txt-grey-a">
              How to make filthily American ramen using only stuff from Costco.
            </p>
          </li>
        </ol>
        <CTA
          to="/about"
          type="sm"
          className="view-latest-blog-posts link-grey-c svg-grey-c"
        >
          View latest blog posts
        </CTA>
      </BlindFrame>
      <MainFooter />
    </motion.main>
  )
}

export default Landing
