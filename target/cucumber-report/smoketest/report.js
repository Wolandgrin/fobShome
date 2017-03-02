$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("locationCollect.feature");
formatter.feature({
  "line": 2,
  "name": "Add place to collection",
  "description": "",
  "id": "add-place-to-collection",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@locationcollection"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "User could log in to the web page",
  "description": "",
  "id": "add-place-to-collection;user-could-log-in-to-the-web-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"https://wego.here.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User presses \"Menu\" button having css \"button.menu_access_btn.icon_btn\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User presses \"Sign In\" button having css \"button.sign_in_out.sign_in_button\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters following credentials in frame \"here-account-sdk\":",
  "rows": [
    {
      "cells": [
        "sign-in-email",
        "sign-in-password-encrypted"
      ],
      "line": 9
    },
    {
      "cells": [
        "herewego@gafy.net",
        "qwe123"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Page with URL \"https://wego.here.com\" opens",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Page contains user account details \"here-wego test\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://wego.here.com",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.userNavigatesTo(String)"
});
formatter.result({
  "duration": 6327898633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 14
    },
    {
      "val": "button.menu_access_btn.icon_btn",
      "offset": 39
    }
  ],
  "location": "MyStepdefs.userPressesButtonHavingCSS(String,String)"
});
formatter.result({
  "duration": 1907535228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 14
    },
    {
      "val": "button.sign_in_out.sign_in_button",
      "offset": 42
    }
  ],
  "location": "MyStepdefs.userPressesButtonHavingCSS(String,String)"
});
formatter.result({
  "duration": 1552273524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "here-account-sdk",
      "offset": 44
    }
  ],
  "location": "MyStepdefs.userEntersFollowingCredentials(String,DataTable)"
});
formatter.result({
  "duration": 1005816856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://wego.here.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.pageWithURLOpens(String)"
});
formatter.result({
  "duration": 22564693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "here-wego test",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.pageContainsUserAccountDetails(String)"
});
formatter.result({
  "duration": 2659997,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Logged in user can add location to collections",
  "description": "",
  "id": "add-place-to-collection;logged-in-user-can-add-location-to-collections",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User is logged in to \"https://wego.here.com\" in frame \"here-account-sdk\" using buttons:",
  "rows": [
    {
      "cells": [
        "sign-in-email",
        "sign-in-password-encrypted"
      ],
      "line": 16
    },
    {
      "cells": [
        "herewego@gafy.net",
        "qwe123"
      ],
      "line": 17
    },
    {
      "cells": [
        "button.menu_access_btn.icon_btn",
        "button to open menu"
      ],
      "line": 18
    },
    {
      "cells": [
        "button.sign_in_out.sign_out_button",
        "button to sign out"
      ],
      "line": 19
    },
    {
      "cells": [
        "button.sign_in_out.sign_in_button",
        "button to sign in"
      ],
      "line": 20
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enters location \"Prague\" to the textfield with xpath \"//*[@id\u003d\u0027searchbar\u0027]/div/div[1]/input\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User presses \"Collect\" button having xpath \"/html/body/div[1]/div[6]/div/div/div[1]/div[3]/div/div[2]/button\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User presses button \"Start a collection\" or \"New collection\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enters \"My lovely Prague \" to the field with id \"collection_name\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Page contains collection \"My Lovely Prague \"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://wego.here.com",
      "offset": 22
    },
    {
      "val": "here-account-sdk",
      "offset": 55
    }
  ],
  "location": "MyStepdefs.userIsLoggedInToInFrameUsingButtons(String,String,DataTable)"
});
formatter.result({
  "duration": 8444022644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prague",
      "offset": 22
    },
    {
      "val": "//*[@id\u003d\u0027searchbar\u0027]/div/div[1]/input",
      "offset": 59
    }
  ],
  "location": "MyStepdefs.userEntersLocationToTheTextfieldWithXpath(String,String)"
});
formatter.result({
  "duration": 783445716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Collect",
      "offset": 14
    },
    {
      "val": "/html/body/div[1]/div[6]/div/div/div[1]/div[3]/div/div[2]/button",
      "offset": 44
    }
  ],
  "location": "MyStepdefs.userPressesButtonHavingXpath(String,String)"
});
formatter.result({
  "duration": 1585755313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start a collection",
      "offset": 21
    },
    {
      "val": "New collection",
      "offset": 45
    }
  ],
  "location": "MyStepdefs.userPressesOneOfButtons(String,String)"
});
formatter.result({
  "duration": 1364868120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My lovely Prague ",
      "offset": 13
    },
    {
      "val": "collection_name",
      "offset": 54
    }
  ],
  "location": "MyStepdefs.userEntersToTheFieldWithId(String,String)"
});
formatter.result({
  "duration": 1046439462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Lovely Prague ",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.pageContainsCollection(String)"
});
formatter.result({
  "duration": 258393,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Previously added collection could be removed",
  "description": "",
  "id": "add-place-to-collection;previously-added-collection-could-be-removed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User is logged in to \"https://wego.here.com\" in frame \"here-account-sdk\" using buttons:",
  "rows": [
    {
      "cells": [
        "sign-in-email",
        "sign-in-password-encrypted"
      ],
      "line": 29
    },
    {
      "cells": [
        "herewego@gafy.net",
        "qwe123"
      ],
      "line": 30
    },
    {
      "cells": [
        "button.menu_access_btn.icon_btn",
        "button to open menu"
      ],
      "line": 31
    },
    {
      "cells": [
        "button.sign_in_out.sign_out_button",
        "button to sign out"
      ],
      "line": 32
    },
    {
      "cells": [
        "button.sign_in_out.sign_in_button",
        "button to sign in"
      ],
      "line": 33
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User presses \"Menu\" button having css \"button.menu_access_btn.icon_btn\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User presses \"Collections\" button having xpath \"/html/body/div[1]/div[3]/div/div[2]/div/div[1]/div[3]\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User presses \"Edit\" button having xpath \"/html/body/div[1]/div[6]/div/div/div[1]/div/div[1]/button\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User presses \"X\" button having xpath \"/html/body/div[1]/div[6]/div/div/div[2]/div/div/button\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User presses \"Yes\" button having css \"button.btn_link.confirm\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Page contains 1 collection less in \"Collections\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://wego.here.com",
      "offset": 22
    },
    {
      "val": "here-account-sdk",
      "offset": 55
    }
  ],
  "location": "MyStepdefs.userIsLoggedInToInFrameUsingButtons(String,String,DataTable)"
});
formatter.result({
  "duration": 10106528463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 14
    },
    {
      "val": "button.menu_access_btn.icon_btn",
      "offset": 39
    }
  ],
  "location": "MyStepdefs.userPressesButtonHavingCSS(String,String)"
});
formatter.result({
  "duration": 575347759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Collections",
      "offset": 14
    },
    {
      "val": "/html/body/div[1]/div[3]/div/div[2]/div/div[1]/div[3]",
      "offset": 48
    }
  ],
  "location": "MyStepdefs.userPressesButtonHavingXpath(String,String)"
});
formatter.result({
  "duration": 738544536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edit",
      "offset": 14
    },
    {
      "val": "/html/body/div[1]/div[6]/div/div/div[1]/div/div[1]/button",
      "offset": 41
    }
  ],
  "location": "MyStepdefs.userPressesButtonHavingXpath(String,String)"
});
formatter.result({
  "duration": 868558972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "X",
      "offset": 14
    },
    {
      "val": "/html/body/div[1]/div[6]/div/div/div[2]/div/div/button",
      "offset": 38
    }
  ],
  "location": "MyStepdefs.userPressesButtonHavingXpath(String,String)"
});
formatter.result({
  "duration": 670861324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 14
    },
    {
      "val": "button.btn_link.confirm",
      "offset": 38
    }
  ],
  "location": "MyStepdefs.userPressesButtonHavingCSS(String,String)"
});
formatter.result({
  "duration": 662490725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Collections",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.pageContainsLessCollections(String)"
});
formatter.result({
  "duration": 500267750,
  "status": "passed"
});
});