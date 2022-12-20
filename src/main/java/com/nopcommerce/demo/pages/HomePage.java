package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import java.util.List;

/**
 * Created by Jay Vaghani
 */
public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(linkText = "Log in")
    WebElement loginLink;

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Register')]")
    WebElement registerLink;

    @CacheLookup
    @FindBy(xpath = "//img[@alt='nopCommerce demo store']")
    WebElement logo;

    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-account']")
    WebElement myAccountLink;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Log out']")
    WebElement logOutLink;

    @CacheLookup
    @FindBy(xpath = "//div[@class='header-menu']/child::ul[1]/li/a")
    List<WebElement> topMenuList;


    public void clickOnLoginLink() {
        clickOnElement(loginLink);
    }

    public boolean isLogInLinkDisplay() {
        boolean b = loginLink.isDisplayed();
        return b;
    }

    public void clickOnRegisterLink() {
        clickOnElement(registerLink);
    }

    public void clickOnMyAccountLink() {
        clickOnElement(myAccountLink);
    }

    public HomePage clickOnLogOutLink() {
        clickOnElement(logOutLink);
        return new HomePage();
    }

    public boolean isLogOutLinkDisplay() {
        boolean b = logOutLink.isDisplayed();
        return b;
    }

    public boolean isLogoDisplayed() {
        boolean b = logo.isDisplayed();
        return b;
    }

    public void clickOnMenuTab(String tab) {
        for (WebElement menu : topMenuList) {
            if (menu.getText().contains(tab)) {
                Reporter.log("Click on '" + tab + "' tab <br>");
                clickOnElement(menu);
                break;
            }
        }
    }

}
