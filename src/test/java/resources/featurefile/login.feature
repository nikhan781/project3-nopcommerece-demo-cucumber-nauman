Feature: Login Test
  As user I want to login into nop commerce website

  @sanity @regression
  Scenario: User should navigate to login page successfully
    Given I am on homepage
    When I click on login link
    Then I should navigate to login page successfully

  @smoke @regression
  Scenario Outline: Verify the error message with invalid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "<email>"
    And I enter password "<password>"
    And I click on login button
    Then I should see the error message "<errorMessage>"
    Examples:
      | email             | password | errorMessage                                                                                |
      | london1@gmail.com | london1  | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |


@regression
  Scenario: User should login successfully with valid credentials
    Given I am on homepage
    When I click on register link
    And I fill all the mandatory fields
    And I click on register button
    And I click on login link
    And I enter email "jhonwick@gmail.com"
    And I enter password "jhonwick"
    And I click on login button
    Then I should see logout link is display

  @regression
  Scenario: User should logout successfully
    Given  I am on homepage
    When I click on register link
    And I fill all the mandatory fields
    And I click on register button
    And I click on login link
    And I enter email "jhonwick@gmail.com"
    And I enter password "jhonwick"
    And I click on login button
    And I click on logout link
    Then I should see login link is display