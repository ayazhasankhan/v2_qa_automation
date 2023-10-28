Feature: login into application

  Background:
    Given User go to the application

  Scenario: Validate user should be able to login success
    And User enter the username as "ps@deborah.org"
    And User enter the password as "BigC@ctus2020"
    When User click on the login button
    Then Login should be success

  Scenario: Validate logging into the Application using invalid credentials (i.e. Invalid email address and Invalid Password)
    And User enter the username as "@deborah.org"
    And User enter the password as "Bigctus2020"
    When User click on the login button
    Then Warning message with the text 'Username not found' should be displayed

  Scenario: Validate logging into the Application using invalid email address and valid Password)
    And User enter the username as "ps@#$#deborah.org"
    And User enter the password as "BigC@ctus2020"
    When User click on the login button
    Then Warning message with the text 'Username not found' should be displayed

  Scenario: Validate logging into the Application without providing any credentials
    When User click on the login button
    Then Warning message with the text 'Please enter username' and 'Please enter password' should be displayed
