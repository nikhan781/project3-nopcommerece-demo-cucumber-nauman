package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        String expectedMessage = "Welcome, Please Sign In!";
        String actualMessage = new LoginPage().getWelcomeText();
        Assert.assertEquals("Login page not displayed", expectedMessage, actualMessage);
    }

//    @And("^I enter email \"([^\"]*)\"$")
//    public void iEnterEmail(String email){
//        new RegisterPage().enterEmail(email);
//    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password){
        new LoginPage().enterPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errorMessage)  {
        Assert.assertEquals("Error message not displayed",errorMessage, new LoginPage().getErrorMessage());
    }

    @Then("^I should see logout link is display$")
    public void iShouldSeeLogoutLinkIsDisplay() {
        Assert.assertEquals("Log out link is not displayed",true,new HomePage().isLogOutLinkDisplay());
    }

    @And("^I click on logout link$")
    public void iClickOnLogoutLink() {
        new HomePage().clickOnLogOutLink();
    }

    @Then("^I should see login link is display$")
    public void iShouldSeeLoginLinkIsDisplay() {
        Assert.assertEquals("Log in link is not displayed", true, new HomePage().isLogInLinkDisplay());
    }


    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email)  {
        new RegisterPage().enterEmail(email);

    }

    @And("^I fill all the mandatory fields$")
    public void iFillAllTheMandatoryFields() {
        new RegisterPage().selectGender("Male");
        new RegisterPage().enterFirstName("Jhon");
        new RegisterPage().enterLastName("Wick");
        new RegisterPage().selectDateOfBirth("1", "December", "2000");
        new RegisterPage().enterEmail("jhonwick@gmail.com");
        new LoginPage().enterPassword("jhonwick");
        new RegisterPage().enterConfirmPassword("jhonwick");

    }
}
