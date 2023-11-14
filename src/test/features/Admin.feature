@admin
Feature: Specialty Screen Test

  Background:
    Given User login to the application
    Given Redirect to DTU config screen

  Scenario Outline: TC_Admin_DTU Data File Settings_User should not be able to create the <test case>
    And User enter the ETL file name as "<name>"
    And User enter the ETL file description as "<description>"
    And User select the ETL file table as "<table>"
    Examples:
      | test case                                                                 | name | description | table
      | DTU Data File Settings without putting mandatory fields                   | name | description | Result Name Master
      | DTU Data File Settings with blank Name                                    | name | description | Result Name Master
      | DTU Data File Settings by putting special character in ETL File Name      | name | description | Result Name Master
      | DTU Data File Settings by putting space in ETL File Name                  | name | description | Result Name Master
      | DTU Data File Settings by putting invalid file extension in ETL File Name | name | description | Result Name Master
