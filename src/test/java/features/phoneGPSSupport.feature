@phonegpssupport
Feature: Phone

  Scenario: Page to perform directions could be opened
    Given User navigates to "https://wego.here.com"
    When User presses "Directions" button
    Then Page with URL "https://wego.here.com/directions" opens