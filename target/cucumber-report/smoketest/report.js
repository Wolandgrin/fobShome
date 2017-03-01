$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("locationCollect.feature");
formatter.feature({
  "line": 2,
  "name": "Location",
  "description": "",
  "id": "location",
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
  "name": "Page to perform directions could be opened",
  "description": "",
  "id": "location;page-to-perform-directions-could-be-opened",
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
  "name": "User presses \"Sign In\" button having xpath \"/html/body/div[1]/div[3]/div/div[1]/section/div/button[1]\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters following credentials in frame \"here-account-sdk\":",
  "rows": [
    {
      "cells": [
        "sign-in-email",
        "sign-in-password-encrypted"
      ],
      "line": 8
    },
    {
      "cells": [
        "herewego@gafy.net",
        "qwe123"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User presses \"Sign In\" button having xpath \"//*[@id\u003d\u0027sign-in-form\u0027]/div[2]/div[6]/form/fieldset[3]/button\"",
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
  "duration": 5435506549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 14
    },
    {
      "val": "/html/body/div[1]/div[3]/div/div[1]/section/div/button[1]",
      "offset": 44
    }
  ],
  "location": "MyStepdefs.userPressesButtonHavingXpath(String,String)"
});
formatter.result({
  "duration": 10514511954,
  "error_message": "Element should be visible {By.xpath: /html/body/div[1]/div[3]/div/div[1]/section/div/button[1]}\nElement: \u0027\u003cbutton class\u003d\"sign_in_out sign_in_button\" data-here-svg\u003d\"{path: svgIcons.menu_signin}\" data-ng-click\u003d\"logIn()\" data-ng-if\u003d\"!login.isLoggedIn\" type\u003d\"submit\" displayed:false\u003e\u003c/button\u003e\u0027\nScreenshot: file:/D:/Projects/FOBShome/build/reports/tests/1488326184865.0.png\nTimeout: 10 s.\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:66)\r\n\tat com.codeborne.selenide.impl.WebElementSource.findAndAssertElementIsVisible(WebElementSource.java:72)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:14)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:11)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:140)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:86)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:62)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat steps.MyStepdefs.userPressesButtonHavingXpath(MyStepdefs.java:48)\r\n\tat ✽.When User presses \"Sign In\" button having xpath \"/html/body/div[1]/div[3]/div/div[1]/section/div/button[1]\"(locationCollect.feature:6)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 14
    },
    {
      "val": "//*[@id\u003d\u0027sign-in-form\u0027]/div[2]/div[6]/form/fieldset[3]/button",
      "offset": 44
    }
  ],
  "location": "MyStepdefs.userPressesButtonHavingXpath(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "here-wego test",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.pageContains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "",
  "description": "",
  "id": "location;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User is logged in to \"https://wego.here.com\" in frame \"here-account-sdk\" using xpath buttons \"//*[@id\u003d\u0027sign-in-form\u0027]/div[2]/div[6]/form/fieldset[3]/button\":",
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
    }
  ],
  "keyword": "Given "
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
    },
    {
      "val": "//*[@id\u003d\u0027sign-in-form\u0027]/div[2]/div[6]/form/fieldset[3]/button",
      "offset": 94
    }
  ],
  "location": "MyStepdefs.userIsLoggedInToInFrameUsingXpathButtons(String,String,String)"
});
formatter.result({
  "duration": 710580,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027steps.MyStepdefs.userIsLoggedInToInFrameUsingXpathButtons(String,String,String) in file:/D:/Projects/FOBShome/target/test-classes/\u0027 with pattern [^User is logged in to \"([^\"]*)\" in frame \"([^\"]*)\" using xpath buttons \"([^\"]*)\":$] is declared with 3 parameters. However, the gherkin step has 4 arguments [https://wego.here.com, here-account-sdk, //*[@id\u003d\u0027sign-in-form\u0027]/div[2]/div[6]/form/fieldset[3]/button, Table:[[sign-in-email, sign-in-password-encrypted], [herewego@gafy.net, qwe123]]]. \nStep: Given User is logged in to \"https://wego.here.com\" in frame \"here-account-sdk\" using xpath buttons \"//*[@id\u003d\u0027sign-in-form\u0027]/div[2]/div[6]/form/fieldset[3]/button\":\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
});