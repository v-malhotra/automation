// This file is created to save all the selectors of job search page

const selectors = {
    navigationBar: '.primary-nav__items',
    searchFieldByKeyword: "#keywords",
    searchFieldByLocation: "#location",
    searchFieldByRadial: "#RadialLocation",
    searchButton: ".submit",
    sectorList: ".browse__items > .facet-links > .facet-links__link",
    signInLink: ".jobseekers__item--sign-in",
    createAccountLink: ".jobseekers__item--create-account",
    signInSectionHeaderText: ".grid .grid > .palm-one-whole:nth-child(1) > h1",
    registerSectionHeaderText: "#create-account",
    searchResultElements: "#listing > .lister__item",
    searchResultText: "#searching",
    searchResultTextWithCount: "h2",
    jobSearchHeaderText: "#browsing",
    firstJobSearchPost: "#listing > .lister__item:nth-child(1) .lister__view-details",
    applyJobButton: ".job-actions__action--applylink",
    jobDetailSection: ".job-description"
}

const jobSearch = function() {
    this.selectors = selectors
}

export default jobSearch
