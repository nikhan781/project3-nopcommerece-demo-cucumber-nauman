$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As user I want to explore Computer page of nop commerce website",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to Desktops Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 66057900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 34326400,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:87)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:37)\r\n\tat com.sun.proxy.$Proxy20.iterator(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnMenuTab(HomePage.java:83)\r\n\tat com.nopcommerce.demo.cucumber.steps.ComputerSteps.iClickOnComputerTab(ComputerSteps.java:12)\r\n\tat ✽.When I click on Computer tab(computer.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateToDesktopsPageSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 19,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "london1@gmail.com",
        "london1",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 20,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"london1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"london1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1799400,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnLoginLink(HomePage.java:51)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginSteps.iClickOnLoginLink(LoginSteps.java:17)\r\n\tat ✽.When I click on login link(login.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "london1@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "london1",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As user I want to register to nop commerce website",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\" for fieldName \"\u003cfieldName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;",
  "rows": [
    {
      "cells": [
        "fieldName",
        "errorMessage"
      ],
      "line": 18,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;1"
    },
    {
      "cells": [
        "FirstName",
        "First name is required."
      ],
      "line": 19,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;2"
    },
    {
      "cells": [
        "LastName",
        "Last name is required."
      ],
      "line": 20,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;3"
    },
    {
      "cells": [
        "Email",
        "Email is required."
      ],
      "line": 21,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;4"
    },
    {
      "cells": [
        "Password",
        "Password is required."
      ],
      "line": 22,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;5"
    },
    {
      "cells": [
        "ConfirmPassword",
        "Password is required."
      ],
      "line": 23,
      "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"First name is required.\" for fieldName \"FirstName\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1907400,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnRegisterLink(HomePage.java:60)\r\n\tat com.nopcommerce.demo.cucumber.steps.RegisterSteps.iClickOnRegisterLink(RegisterSteps.java:13)\r\n\tat ✽.When I click on register link(register.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    },
    {
      "val": "FirstName",
      "offset": 72
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Last name is required.\" for fieldName \"LastName\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 16400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1646700,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnRegisterLink(HomePage.java:60)\r\n\tat com.nopcommerce.demo.cucumber.steps.RegisterSteps.iClickOnRegisterLink(RegisterSteps.java:13)\r\n\tat ✽.When I click on register link(register.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 32
    },
    {
      "val": "LastName",
      "offset": 71
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Email is required.\" for fieldName \"Email\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 14600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1487800,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnRegisterLink(HomePage.java:60)\r\n\tat com.nopcommerce.demo.cucumber.steps.RegisterSteps.iClickOnRegisterLink(RegisterSteps.java:13)\r\n\tat ✽.When I click on register link(register.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 32
    },
    {
      "val": "Email",
      "offset": 67
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Password is required.\" for fieldName \"Password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 4598600,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnRegisterLink(HomePage.java:60)\r\n\tat com.nopcommerce.demo.cucumber.steps.RegisterSteps.iClickOnRegisterLink(RegisterSteps.java:13)\r\n\tat ✽.When I click on register link(register.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    },
    {
      "val": "Password",
      "offset": 70
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Password is required.\" for fieldName \"ConfirmPassword\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 19700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1760300,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnRegisterLink(HomePage.java:60)\r\n\tat com.nopcommerce.demo.cucumber.steps.RegisterSteps.iClickOnRegisterLink(RegisterSteps.java:13)\r\n\tat ✽.When I click on register link(register.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    },
    {
      "val": "ConfirmPassword",
      "offset": 70
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "status": "skipped"
});
});