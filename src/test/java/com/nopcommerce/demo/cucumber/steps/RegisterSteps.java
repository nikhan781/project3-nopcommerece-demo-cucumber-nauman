package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterSteps {

    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I should navigate to register page successfully$")
    public void iShouldNavigateToRegisterPageSuccessfully() {
        String expectedText = "Register";
        String actualText = new RegisterPage().getRegisterText();
        Assert.assertEquals("Register page is not displayed", expectedText, actualText);
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }

    @Then("^I should see the error message \"([^\"]*)\" for fieldName \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessageForFieldName(String errorMessage, String fieldName) {
        Assert.assertEquals("field error message not displayed", new RegisterPage().getValidationErrorMessageForField(fieldName), errorMessage);
    }

    @And("^I select gender\"([^\"]*)\"$")
    public void iSelectGender(String gender) {
        new RegisterPage().selectGender(gender);
    }

    @And("^I enter firstname \"([^\"]*)\"$")
    public void iEnterFirstname(String firstName) {
        new RegisterPage().enterFirstName(firstName);
    }

    @And("^I enter lastname \"([^\"]*)\"$")
    public void iEnterLastname(String lastName) {
        new RegisterPage().enterLastName(lastName);
    }

    @And("^I select date of birth  \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
    public void iSelectDateOfBirth(String day, String month, String year) {
        new RegisterPage().selectDateOfBirth(day, month, year);
    }

    @And("^I enter random email \"([^\"]*)\"$")
    public void iEnterRandomEmail(String email) {
        new RegisterPage().enterEmail(email);
    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confirmPassword) {
        new RegisterPage().enterConfirmPassword(confirmPassword);
    }

    @Then("^I should see registration confirmation message$")
    public void iShouldSeeRegistrationConfirmationMessage() {
        String expectedMessage = "Your registration completed";
        Assert.assertEquals("Registration not successful", expectedMessage, new RegisterPage().getYourRegCompletedText());
    }

    @And("^I click on product name Build your own computer$")
    public void iClickOnProductNameBuildYourOwnComputer() {
        new DesktopsPage().selectProduct("Build your own computer");
    }


}
