@routecreation
Feature: Route between 2 locations can be created for different route options

  Scenario: Page to perform directions could be opened
    Given User navigates to "https://wego.here.com"
    When User presses "Directions" button
    Then Page with URL "https://wego.here.com/directions" opens

  Scenario: Mixed drive route direction could be created
    Given User navigates to "https://wego.here.com/directions/mix"
    When User enters "Tallinn, Estonia" to the text field with id "itinerary_item_input_0"
    And User enters "Tartu, Estonia" to the text field with id "itinerary_item_input_1"
    Then Page with URL "https://wego.here.com/directions/mix" opens
    And Page title contains "Tallinn, Estonia"
    And Page title contains "Tartu, Estonia"

  Scenario: Car drive route direction could be created
    Given User navigates to "https://wego.here.com/directions/drive"
    When User enters "Tallinn, Estonia" to the text field with id "itinerary_item_input_0"
    And User enters "Tartu, Estonia" to the text field with id "itinerary_item_input_1"
    Then Page with URL "https://wego.here.com/directions/drive" opens
    And Page title contains "Tallinn, Estonia"
    And Page title contains "Tartu, Estonia"

  Scenario: Public transport route direction could be created
    Given User navigates to "https://wego.here.com/directions/publicTransport"
    When User enters "Tallinn, Estonia" to the text field with id "itinerary_item_input_0"
    And User enters "Tartu, Estonia" to the text field with id "itinerary_item_input_1"
    Then Page with URL "https://wego.here.com/directions/publicTransport" opens
    And Page title contains "Tallinn, Estonia"
    And Page title contains "Tartu, Estonia"

  Scenario: Bicycle drive route direction could be created
    Given User navigates to "https://wego.here.com/directions/bicycle"
    When User enters "Tallinn, Estonia" to the text field with id "itinerary_item_input_0"
    And User enters "Tartu, Estonia" to the text field with id "itinerary_item_input_1"
    Then Page with URL "https://wego.here.com/directions/bicycle" opens
    And Bicycle page title contains "Tallinn, Estonia"
    And Page title contains "Tartu, Estonia"