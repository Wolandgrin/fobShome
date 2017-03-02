@locationcollection
Feature: Add place to collection

  Scenario: User could log in to the web page
    Given User navigates to "https://wego.here.com"
    When User presses "Menu" button having css "button.menu_access_btn.icon_btn"
    And User presses "Sign In" button having css "button.sign_in_out.sign_in_button"
    And User enters following credentials in frame "here-account-sdk":
      | sign-in-email     | sign-in-password-encrypted  |
      | herewego@gafy.net | qwe123                      |
    Then Page with URL "https://wego.here.com" opens
    And Page contains user account details "here-wego test"

  Scenario: Logged in user can add location to collections
    Given User is logged in to "https://wego.here.com" in frame "here-account-sdk" using buttons:
      | sign-in-email                       | sign-in-password-encrypted  |
      | herewego@gafy.net                   | qwe123                      |
      | button.menu_access_btn.icon_btn     | button to open menu         |
      | button.sign_in_out.sign_out_button  | button to sign out          |
      | button.sign_in_out.sign_in_button  | button to sign in            |
    Then User enters location "Prague" to the textfield with xpath "//*[@id='searchbar']/div/div[1]/input"
    And User presses "Collect" button having xpath "/html/body/div[1]/div[6]/div/div/div[1]/div[3]/div/div[2]/button"
    And User presses button "Start a collection" or "New collection"
    And User enters "My lovely Prague " to the field with id "collection_name"
    Then Page contains collection "My Lovely Prague "

  Scenario: Previously added collection could be removed
    Given User is logged in to "https://wego.here.com" in frame "here-account-sdk" using buttons:
      | sign-in-email                       | sign-in-password-encrypted  |
      | herewego@gafy.net                   | qwe123                      |
      | button.menu_access_btn.icon_btn     | button to open menu         |
      | button.sign_in_out.sign_out_button  | button to sign out          |
      | button.sign_in_out.sign_in_button   | button to sign in           |
    When User presses "Menu" button having css "button.menu_access_btn.icon_btn"
    And User presses "Collections" button having xpath "/html/body/div[1]/div[3]/div/div[2]/div/div[1]/div[3]"
    And User presses "Edit" button having xpath "/html/body/div[1]/div[6]/div/div/div[1]/div/div[1]/button"
    And User presses "X" button having xpath "/html/body/div[1]/div[6]/div/div/div[2]/div/div/button"
    And User presses "Yes" button having css "button.btn_link.confirm"
    Then Page contains 1 collection less in "Collections"

