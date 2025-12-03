Feature: User Authentication
  As a user
  I want to be able to register and sign in to the application
  So that I can access protected resources

  Scenario: Successful user registration
    Given I am on the registration page
    When I enter a valid username "testuser"
    And I enter a valid password "password"
    And I click the register button
    Then I should see a success message

  Scenario: Unsuccessful user registration (duplicate username)
    Given I am on the registration page
    When I enter a username "existinguser"
    And I enter a password "password"
    And I click the register button
    Then I should see a registration error message "Username already exists"

  Scenario: Successful user sign-in
    Given I am on the sign-in page
    When I enter a valid username "testuser"
    And I enter the correct password "password"
    And I click the sign-in button
    Then I should be successfully signed in

  Scenario: Unsuccessful user sign-in (invalid credentials)
    Given I am on the sign-in page
    When I enter an invalid username "wronguser"
    And I enter an invalid password "wrongpassword"
    And I click the sign-in button
    Then I should see a sign-in error message "Invalid credentials"
