package steps;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;
import org.openqa.selenium.By;

import java.util.List;
import java.util.Random;

import static com.codeborne.selenide.Condition.exist;
import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selectors.*;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.WebDriverRunner.url;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.Assert.assertTrue;

public class MyStepdefs {
    Random randomGenerator = new Random();
    int randomInt = randomGenerator.nextInt(1000);
    String collectRemoval = "";

    @Given("^User navigates to \"([^\"]*)\"$")
    public void userNavigatesTo(String url) throws Throwable {
        open(url);
    }

    @When("^User enters \"([^\"]*)\" to the text field with id \"([^\"]*)\"$")
    public void userEntersToTheTextFieldWithId(String location, String id) throws Throwable {
        sleep(500);
        $(By.id(id)).setValue(location).pressEnter();
    }

    @When("^User enters \"([^\"]*)\" to the field with id \"([^\"]*)\"$")
    public void userEntersToTheFieldWithId(String collection, String id) throws Throwable {
        sleep(500);
        $(By.id(id)).setValue(collection + randomInt).pressEnter();
    }

    @Then("^User enters location \"([^\"]*)\" to the textfield with xpath \"([^\"]*)\"$")
    public void userEntersLocationToTheTextfieldWithXpath(String location, String xpath) throws Throwable {
        $(By.xpath(xpath)).setValue(location).pressEnter();
    }

    @When("^User enters following credentials in frame \"([^\"]*)\":$")
    public void userEntersFollowingCredentials(String frame, DataTable table) throws Throwable {
        switchTo().innerFrame(frame);
        List<List<String>> data = table.raw();

        $(By.id(data.get(0).get(0))).setValue(data.get(1).get(0));
        $(By.id(data.get(0).get(1))).setValue(data.get(1).get(1)).pressEnter();

        switchTo().defaultContent();
        sleep(1000);
    }

    @When("^User presses \"([^\"]*)\" button$")
    public void userPressesDirectionsButton(String title) throws Throwable {
        //TODO: update all assertions for Selenide
        $(byTitle(title)).click();
    }

    @And("^User presses button \"([^\"]*)\" or \"([^\"]*)\"$")
    public void userPressesOneOfButtons(String add, String append) throws Throwable {
        sleep(1000);

        if ($(byText(append)).exists()) {
            $(byText(append)).click();
        } else
            $(byText(add)).click();
    }

    @And("^User presses \"([^\"]*)\" button having xpath \"([^\"]*)\"$")
    public void userPressesButtonHavingXpath(String arg0, String xpath) throws Throwable {
        sleep(500);
        $(By.xpath(xpath)).click();
    }

    @And("^User presses \"([^\"]*)\" button having css \"([^\"]*)\"$")
    public void userPressesButtonHavingCSS(String arg0, String xpath) throws Throwable {
        sleep(500);
        $(By.cssSelector(xpath)).click();
    }

    @And("^User presses 'Yes' button having css \"([^\"]*)\" where title in xpath \"([^\"]*)\"$")
    public void userPressesYesButtonHavingCSS(String css, String xpath) throws Throwable {
        sleep(500);
        collectRemoval = $(By.xpath(xpath)).getText();
        $(By.cssSelector(css)).click();
    }

    @Given("^User is logged in to \"([^\"]*)\" in frame \"([^\"]*)\" using buttons:$")
    public void userIsLoggedInToInFrameUsingButtons(String url, String frame, DataTable table) throws Throwable {
        open(url);
        List<List<String>> data = table.raw();

        $(By.cssSelector(data.get(2).get(0))).click(); // Menu
        sleep(500);

        if ($(By.cssSelector(data.get(3).get(0))).exists()) {
            $(By.cssSelector(data.get(3).get(0))).click(); // Sign out
            sleep(500);
            $(By.cssSelector(data.get(2).get(0))).click(); // Menu
            sleep(500);
        }

        $(By.cssSelector(data.get(4).get(0))).click();
        sleep(500);

        switchTo().innerFrame(frame);

        $(By.id(data.get(0).get(0))).setValue(data.get(1).get(0));
        $(By.id(data.get(0).get(1))).setValue(data.get(1).get(1)).pressEnter();

        switchTo().defaultContent();
        sleep(1000);
    }

    @Then("^Page with URL \"([^\"]*)\" opens$")
    public void pageWithURLOpens(String url) throws Throwable {
        assertThat(url(), containsString(url));
    }

    @And("^Page title contains \"([^\"]*)\"$")
    public void pageTitleContains(String title) throws Throwable {
        //TODO: update all sleeps with do-while cycle or similar
        sleep(1500);
        assertTrue(title().contains(title));
    }

    @And("^Page contains user account details \"([^\"]*)\" in menu \"([^\"]*)\"$")
    public void pageContainsUserAccountDetails(String login, String css) throws Throwable {
        $(byCssSelector(css)).click();
        $(byText(login)).shouldHave(text(login));
    }

    @Then("^Page contains collection \"([^\"]*)\" with xpath \"([^\"]*)\"$")
    public void pageContainsCollection(String collection, String xpath) throws Throwable {
        collection = collection + randomInt;
        $(By.xpath(xpath)).shouldHave(text(collection));
    }

    @Then("^Page does not contain removed collection with xpath \"([^\"]*)\"$")
    public void pageContainsLessCollections(String xpath) throws Throwable {
        sleep(500);
        $(byText(collectRemoval)).shouldNot(exist);
    }

    @And("^Page contains \"([^\"]*)\" for element \"([^\"]*)\"$")
    public void pageContainsForElement(String gps, String xpath) throws Throwable {
        $(byXpath(xpath)).shouldHave(text(gps));
    }
}