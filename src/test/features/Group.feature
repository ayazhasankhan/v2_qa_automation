Feature: Group Screen Test

  Background:
    Given User login to the application
    Given Redirect to Group screen

  Scenario: User should able to add, update and delete single record on group screen
    When Redirect to add Group screen
    And Enter the proper data Group Code, Group Name, Description, Region, Facility and Cost Center
    Then Click on save button
    And verify group is created
    When Apply grid filter on group name column
    And Open the record in edit mode at Group screen
    And Update the Group Code, Group Name, Description, Region, Facility and Cost Center
    Then Click on update button
    And Verify group is updated
    And Select single record
    And Mouse hover on quick link
    Then Delete Selected Rows

  Scenario: User should able to perform show/hide columns in group grid
    When Show only column 'GROUP NAME' by filtering
    Then Validate enabled column 'GROUP NAME' is visible

  Scenario: User should able to perform export to excel functionality for group
    When Mouse hover On Quick Link
    Then Click on Export to Excel
