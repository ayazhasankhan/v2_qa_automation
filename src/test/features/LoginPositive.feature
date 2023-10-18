Feature: login into application

  Background: 
    Given User go to the application

  Scenario: Login should be success
    And User enter the username as "ps@deborah.org"
    And User enter the password as "BigC@ctus2020"
    When User click on the login button
    Then Login should be success


