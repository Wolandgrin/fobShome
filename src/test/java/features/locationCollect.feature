@locationcollection
Feature: Location

  Scenario: Page to perform directions could be opened
    Given User navigates to "https://wego.here.com"
    When User presses "Menu" button having xpath "//*[@id='searchbar']/div/div/button[1]"
    And User presses "Sign In" button having xpath "/html/body/div[1]/div[3]/div/div[1]/section/div/button[1]"
    And User enters following credentials in frame "here-account-sdk":
      | sign-in-email     | sign-in-password-encrypted  |
      | herewego@gafy.net | qwe123                      |
    And User presses "Sign In" button having xpath "//*[@id='sign-in-form']/div[2]/div[6]/form/fieldset[3]/button"
    Then Page with URL "https://wego.here.com" opens
    And Page contains user account details "here-wego test"

  Scenario:
    Given User is logged in to "https://wego.here.com" in frame "here-account-sdk" using xpath buttons:
      | sign-in-email     | sign-in-password-encrypted  |
      | herewego@gafy.net | qwe123                      |
      | //*[@id='searchbar']/div/div/button[1]                        | |
      | /html/body/div[1]/div[3]/div/div[1]/section/div/button[1]     | |
      | //*[@id='sign-in-form']/div[2]/div[6]/form/fieldset[3]/button | |