@phonegpssupport
Feature: Phones with GPS support could be verified

  Scenario: GPS support could be verified for Nexus 5X
    Given User navigates to "http://www.gsmarena.com"
    When User enters "LG Nexus 5X" to the text field with id "topsearch-text"
    Then Page with URL "http://www.gsmarena.com/lg_nexus_5x-7556.php" opens
    And Page contains "Yes" for element "//*[@id='specs-list']/table[9]/tbody/tr[3]/td[2]"

  Scenario: GPS support could be verified Galaxy S
    Given User navigates to "http://www.gsmarena.com"
    When User enters "Samsung I9000 Galaxy S" to the text field with id "topsearch-text"
    Then Page with URL "http://www.gsmarena.com/samsung_i9000_galaxy_s-3115.php" opens
    And Page contains "Yes" for element "//*[@id='specs-list']/table[9]/tbody/tr[3]/td[2]"