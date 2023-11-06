Feature: Specialty Screen Test

  Background:
    Given User login to the application
    Given Redirect to Specialty screen

  Scenario: User should able to add, update and delete single record on specialty screen
    And Redirect to add Specialty screen
    And Enter the proper data Specialty Name, Description and Region Name
    And Click on save button
    Then Verify specialty is created
    When Apply grid filter on specialty name column
    And Open the record in edit mode at Specialty screen
    And Update the Specialty Name, Description and Region Name
    And Click on update button
    Then Verify specialty is updated
    And Select single record
    And Mouse hover on quick link
    And Delete Selected Rows
    Then Verify Row is deleted

  Scenario: User should able to perform show/hide columns in specialty grid
    When Show only column 'SPECIALTY DESC' by filtering
    Then Validate enabled column 'SPECIALTY DESC' is visible

  Scenario: User should able to perform export to excel functionality for specialty
    When Mouse hover On Quick Link
    Then Click on Export to Excel
