Feature: Economist interview automation around job search page

Background:
  Given I open Economist "job_page"

Scenario: Navigate to Economist job page and validate the navigation bar, search fields, search button and sector lists
  Then I should see "navigationBar" exist
  And I should see "searchFieldByKeyword" exist
  And I should see "searchFieldByLocation" exist
  And I should see "searchFieldByRadial" exist
  And I should see "searchButton" exist
  And I should see "sectorList" exist

Scenario: Validate the Sign In link from job search page
  When I click on "signInLink"
  Then I should see url contains "jobs.economist.com/logon/"
  And I should see "signInSectionHeaderText" as "Sign in"
  And I should see "registerSectionHeaderText" as "Create an account"

Scenario: Validate the Create Account link from job search page
  When I click on "createAccountLink"
  Then I should see url contains "jobs.economist.com/register/"
  And I should see "signInSectionHeaderText" as "Sign in"
  And I should see "registerSectionHeaderText" as "Create an account"

Scenario: Validate the navigation links working fine using a loop
  When I click and validate the navigation links

Scenario: Validate the job detail after clicking on the first job sector
  When I click on the "Banking and finance" job sector on job page
  Then I should see url contains "jobs.economist.com/jobs/banking-and-finance/"
  And I should see "jobSearchHeaderText" as "Banking and finance jobs"
  And I should see "searchResultTextWithCount" as "Found 10 jobs"
  And I should get search result count "10"
  When I click on "firstJobSearchPost"
  Then I should see "applyJobButton" exist
  And I should see "jobDetailSection" exist

Scenario: Validate results after searching a job
  When I search for job with keyword "the business ombudsman for ukraine"
  Then I should see "searchResultText" as "Found 1 job using the term 'the business ombudsman for ukraine'"
  And I should get search result count "1"
