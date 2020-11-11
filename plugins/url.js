// ./url.js
import * as url from 'url'

// Create the URL contructor for node or use the existing one for the browser
const urlConstructor = process.server ? url.URL : URL

// Create the URLSearchParams contructor for node or use the existing one for the browser
const paramsConstructor = process.server ? url.URLSearchParams : URLSearchParams

export { urlConstructor as URL }

export { paramsConstructor as URLSearchParams }
