package steps;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selectors.*;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.WebDriverRunner.url;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.MatcherAssert.assertThat;

public class MyStepdefs {
    @Given("^User navigates to \"([^\"]*)\"$")
    public void userNavigatesTo(String url) throws Throwable {
        open(url);
    }

    @When("^User presses \"([^\"]*)\" button$")
    public void userPressesDirectionsButton(String title) throws Throwable {
        $(byTitle(title)).click();
    }

    @Then("^Page with URL \"([^\"]*)\" opens$")
    public void pageWithURLOpens(String url) throws Throwable {
        assertThat(url(), containsString(url));
    }

    @When("^User enters \"([^\"]*)\" to the text field with id \"([^\"]*)\"$")
    public void userEntersToTheTextFieldWithId(String location, String id) throws Throwable {
        $(By.id(id)).setValue(location).pressEnter();
    }

    @And("^Page title contains \"([^\"]*)\"$")
    public void pageTitleContains(String title) throws Throwable {
        sleep(2000);
        assertThat(title(), containsString(title));
    }

    @And("^User presses \"([^\"]*)\" button having xpath \"([^\"]*)\"$")
    public void userPressesButtonHavingXpath(String arg0, String xpath) throws Throwable {
        $(By.xpath(xpath)).click();
        switchTo().defaultContent();
    }


    @When("^User enters following credentials in frame \"([^\"]*)\":$")
    public void userEntersFollowingCredentials(String frame, DataTable table) throws Throwable {
        switchTo().innerFrame(frame);
        List<List<String>> data = table.raw();

        $(By.id(data.get(0).get(0))).setValue(data.get(1).get(0));
        $(By.id(data.get(0).get(1))).setValue(data.get(1).get(1));
    }

    @And("^Page contains user account details \"([^\"]*)\"$")
    public void pageContains(String login) throws Throwable {
        assertThat((byText(login)).toString(), containsString(login));
    }

    @Given("^User is logged in to \"([^\"]*)\" in frame \"([^\"]*)\" using xpath buttons:$")
    public void userIsLoggedInToInFrameUsingXpathButtons(String url, String frame, DataTable table) throws Throwable {
        open(url);
        List<List<String>> data = table.raw();

        $(By.id(data.get(0).get(2))).click();
        $(By.id(data.get(0).get(3))).click();

        switchTo().innerFrame(frame);

        $(By.id(data.get(0).get(0))).setValue(data.get(1).get(0));
        $(By.id(data.get(0).get(1))).setValue(data.get(1).get(1));

        $(By.id(data.get(0).get(4))).click();
        switchTo().defaultContent();
    }
}
