import { genTagIDNameArray } from './tag'
import FeaturedEswiss from '../../front/assets/featured/eswiss-featured-project.jpg'
import FeaturedGridnik from '../../front/assets/featured/gridnik-featured-project.jpg'

export const ROUTE_PREFIX = '/projects/'

const ORDER = [
  'sot',
  'ml2020',
  'gridnik',
  'eswiss',
  'ljas',
  'recha',
  'ffuh',
  'checkpoint',
  'crush',
  'adam',
  'alwp',
  'lean-space',
  'lantern',
  'themeboot',
  'owl',
]
const PROJECTS = {
  adam: {
    id: 'adam',
    name: 'Adam Engine',
    long: 'A browser-based 2D game engine.',
    tags: ['game-engine', 'frontend'],
  },
  alwp: {
    id: 'alwp',
    name: 'Asset List Webpack Plugin',
    long:
      'A webpack plugin that output a list of generated assets with your bundle',
    tags: ['webpack-plugin', 'tooling'],
  },
  checkpoint: {
    id: 'checkpoint',
    name: 'Checkpoint.js',
    long: 'A data validation and transformation library.',
    tags: ['lib', 'frontend', 'backend'],
  },
  crush: {
    id: 'crush',
    name: 'qPCR Crush',
    company: 'LGC Biosearch Technologies',
    long: 'An LGC Biosearch Technologies-branded tile-matching game.',
    tags: ['game', 'backend', 'design', 'frontend'],
  },
  eswiss: {
    id: 'eswiss',
    name: 'eswiss',
    short:
      'A design system built on Swiss/International style design principles.',
    long:
      'A design system built on Swiss & International style design principles.',
    featured: {
      img: FeaturedEswiss,
      alt: 'Featured image for eswiss project: the eswiss logo',
    },
    tags: ['design-system', 'design', 'frontend'],
  },
  ffuh: {
    id: 'ffuh',
    name: 'express-ffuh',
    long:
      'An Express middleware that handles Amazon S3 and local file system uploads.',
    tags: ['express-middleware', 'aws', 'backend'],
  },
  gridnik: {
    id: 'gridnik',
    name: 'Gridnik',
    short: "Extend Adobe XD's grid generation capabilities.",
    long: 'An Adobe XD plugin that extends its grid generation capabilities.',
    featured: {
      img: FeaturedGridnik,
      alt:
        'Featured image for Gridnik: a screenshot of a grid generated by the project',
    },
    tags: ['xd-plugin', 'design', 'frontend'],
  },
  lantern: {
    id: 'lantern',
    name: 'Lantern.js',
    long: 'A simple-to-use, lightweight, and customizable image lightbox.',
    tags: ['lib', 'frontend'],
  },
  'lean-space': {
    id: 'lean-space',
    name: 'Lean Space',
    long: 'The previous iteration of my personal website built in 2015.',
    tags: ['website', 'design', 'frontend'],
  },
  ljas: {
    id: 'ljas',
    name: 'Lean JavaScript Application Starter',
    long:
      'A starter project to kickoff development for your next web, Node.js, or native desktop app.',
    tags: ['tooling', 'backend', 'desktop-app', 'frontend', 'web-app'],
  },
  ml2020: {
    id: 'ml2020',
    name: 'MattLean.com',
    long: 'The latest iteration of my personal website.',
    tags: ['website', 'backend', 'design', 'design-system', 'frontend'],
  },
  owl: {
    id: 'owl',
    name: 'Project Owl',
    long: 'A personal scheduling and finance management app.',
    tags: ['mobile-app', 'web-app', 'backend', 'frontend'],
  },
  sot: {
    id: 'sot',
    name: 'Spectral Overlay Tool',
    company: 'LGC Biosearch Technologies',
    long:
      'A tool for visualizing absorption and emission spectra for fluorescent dyes and quenchers.',
    tags: ['web-app', 'vis', 'design', 'frontend', 'tooling'],
  },
  recha: {
    id: 'recha',
    name: 'Recha',
    long:
      'A personal task and schedule management app that helps you achieve your goals.',
    tags: ['desktop-app', 'backend', 'frontend'],
  },
  themeboot: {
    id: 'themeboot',
    name: 'ThemeBoot',
    long:
      'A Bootstrap-powered website layout built for use as a WordPress theme or a static HTML & CSS template.',
    tags: ['wp-theme', 'template', 'backend', 'frontend'],
  },
}

// Format tag data
for (const key in PROJECTS) {
  PROJECTS[key].tags = genTagIDNameArray(PROJECTS[key].tags)
}

/**
 * Get all project data
 * @return {Array} Array of all project data in order
 */
export const getAllProjectData = () => {
  const data = []
  for (const id of ORDER) {
    data.push(getProjectData(id))
  }
  return data
}

/**
 * Get project data associated with given ID
 * @param {string} id Project ID
 * @return {Object} Project data
 */
export const getProjectData = (id) => {
  return PROJECTS[id]
}
/**
 * Get property value in project data associated with given ID
 * @param {string} id Project ID
 * @param {string} prop Project data property name
 * @return {Array|string} Value stored at project data property
 */
export const getProjectProp = (id, prop) => {
  if (PROJECTS[id]) {
    return PROJECTS[id][prop]
  }
}
