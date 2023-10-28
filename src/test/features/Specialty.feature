Feature: Specialty Screen Test

  Background:
    Given User login to the application

  Scenario: User should able to add, update and delete single record
    Given Redirect to Specialty screen
    When Redirect to add Specialty screen
    And Enter the proper data Specialty Name, Description and Region Name
    Then Click on save button and verify
    When Apply grid filter on specialty name column
    Then Validate filter is applied properly
    And Open the record in edit mode at Specialty screen 
    And Update the Specialty Name, Description and Region Name
    Then Click on update button and verify
    And Perform the single record delete functionality and verified it is working or not at Specialty screen

  Scenario: User should able to perform show/hide columns in speciality grid
    Given Redirect to Specialty screen
    When Show only column 'SPECIALTY DESC' by filtering
    Then Validate enabled column 'SPECIALTY DESC' is visible

  Scenario: User should able to perform export to excel functionality
    Given Redirect to Specialty screen
    When Mouse hover On Quick Link
    Then Click on Export to Excel

  Scenario: User should able to perform audit log functionality 
    Given Redirect to Specialty screen
    When Select first record in specialty grid
    And Mouse hover On Quick Link
    And Click on Show Audit Log
    Then Click on cancel

  Scenario: User should able to upload specialty 
    Given Redirect to Specialty screen
    When Click on upload specialty icon
    And Mouse hover On Quick Link
    And Click on Show Audit Log
    Then Click on cancel