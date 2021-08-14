// This file is used to consolidate all the selectors from different pages objects into one location which is then imported in step definitions
import jobSearch from './job-search'

// define all the imported pages below, which will then be imported in step definition 
const pageObjects = {
    jobSearchPage: new jobSearch(),
}

const PageObjects = function() {
    this.pageObjects = pageObjects
}

export default PageObjects
