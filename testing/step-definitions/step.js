import { Given, Then, When } from 'cucumber';
import { client } from 'nightwatch-api';

// test data is getting imported
import testData from '../test-data/test-data.json'

// page objects is getting imported which will be used to extract selectors from any file 
import PageObjects from '../page-objects/page-objects'

const selectorsList = new PageObjects()

Given(/^I open Economist "(.*?)"$/, async selector => {
  await client.url(testData[selector]);
});

Then(/^I should see "(.*?)" exist$/, async selector => {
  await client.assert.visible(selectorsList.pageObjects.jobSearchPage.selectors[selector]);
});

When(/^I click on "(.*?)"$/, async selector => {
  await client.click(selectorsList.pageObjects.jobSearchPage.selectors[selector]);
});

Then(/^I should see url contains "(.*?)"$/, async partOfUrl => {
  await client.assert.urlContains(partOfUrl)
});

Then(/^I should see "(.*?)" as "(.*?)"$/, async (selector, expectedText) => {
  let actualText
  await client.getText(
    selectorsList.pageObjects.jobSearchPage.selectors[selector],
    result => {
        actualText = result.value
    }
)
  await client.assert.equal(expectedText, actualText)
});

Then(/^I click and validate the navigation links$/, async () => {
  var totalNavigationElements
  var navigationMenuOption

  // finding the count of navigation elements
  await client.findElements('.primary-nav__items> li', result => {
    totalNavigationElements = result.value.length
  })

  // below loop is click on all navigation links and then validatin gthe url 
  for (var i = 1; i<totalNavigationElements; i++) {
    await client.click('.primary-nav__items> li'.concat(`:nth-child(${i})`))
    await client.getText(
      '.primary-nav__items> li'.concat(`:nth-child(${i})`),
      result => {
        navigationMenuOption = result.value
      })

    if (navigationMenuOption) {
      navigationMenuOption = navigationMenuOption.replaceAll(" ", "_")
      client.assert.urlEquals(testData[navigationMenuOption])
    }
  }
})

When(/^I search for job with keyword "(.*?)"$/, async searchKeyword => {
  await client.setValue(selectorsList.pageObjects.jobSearchPage.selectors.searchFieldByKeyword, searchKeyword)
  await client.click(selectorsList.pageObjects.jobSearchPage.selectors.searchButton)
});

Then(/^I should get search result count "(.*?)"$/, async searchResultCount => {
  await client.findElements(selectorsList.pageObjects.jobSearchPage.selectors.searchResultElements, result => {
    client.assert.equal(result.value.length, searchResultCount)
  })
});

When(/^I click on the "(.*?)" job sector on job page$/, async jobSector => {
  let totalJobSectors
  let jobSectorSelector
  let jobSectorName

  // finding the total count of the sector list
  await client.findElements(selectorsList.pageObjects.jobSearchPage.selectors.sectorList, result => {
    totalJobSectors = result.value.length
  })

  // below loop is to goto sector list and validate the exact position of the entered sector list in that one we are not dependent on position from feature file 
  for (var i = 1; i <= totalJobSectors; i++) {
    await client.getText(
      selectorsList.pageObjects.jobSearchPage.selectors.sectorList.concat(`:nth-child(${i})`),
      result => {
        jobSectorName = result.value
      })
      if (jobSectorName.includes(jobSector)) {
        jobSectorSelector = selectorsList.pageObjects.jobSearchPage.selectors.sectorList.concat(`:nth-child(${i})`)
        break;
      }
  }

  // variable jobSectorSelector store the selector of the sector item that was shared from feature file and click is performed
  await client.click(jobSectorSelector)
});