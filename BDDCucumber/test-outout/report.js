$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/dataDriven.feature");
formatter.feature({
  "line": 1,
  "name": "login DataDriven",
  "description": "",
  "id": "login-datadriven",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "verify login functionality",
  "description": "",
  "id": "login-datadriven;verify-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have navigate to application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid username \"\u003cuname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I should enter valid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should click on submit button",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-datadriven;verify-login-functionality;",
  "rows": [
    {
      "cells": [
        "uname",
        "password"
      ],
      "line": 12,
      "id": "login-datadriven;verify-login-functionality;;1"
    },
    {
      "cells": [
        "jesni",
        "jesni123"
      ],
      "line": 13,
      "id": "login-datadriven;verify-login-functionality;;2"
    },
    {
      "cells": [
        "anu",
        "anu123"
      ],
      "line": 14,
      "id": "login-datadriven;verify-login-functionality;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "verify login functionality",
  "description": "",
  "id": "login-datadriven;verify-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have navigate to application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid username \"jesni\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I should enter valid password \"jesni123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "DataDrivenStepDefinition.i_have_navigate_to_application()"
});
formatter.result({
  "duration": 17602635100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jesni",
      "offset": 24
    }
  ],
  "location": "DataDrivenStepDefinition.i_enter_valid_username(String)"
});
formatter.result({
  "duration": 232964100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jesni123",
      "offset": 31
    }
  ],
  "location": "DataDrivenStepDefinition.i_should_enter_valid_password_something(String)"
});
formatter.result({
  "duration": 295194100,
  "status": "passed"
});
formatter.match({
  "location": "DataDrivenStepDefinition.i_should_click_on_submit_button()"
});
formatter.result({
  "duration": 1804537400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "verify login functionality",
  "description": "",
  "id": "login-datadriven;verify-login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have navigate to application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid username \"anu\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I should enter valid password \"anu123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "DataDrivenStepDefinition.i_have_navigate_to_application()"
});
formatter.result({
  "duration": 16419045800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anu",
      "offset": 24
    }
  ],
  "location": "DataDrivenStepDefinition.i_enter_valid_username(String)"
});
formatter.result({
  "duration": 315164400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anu123",
      "offset": 31
    }
  ],
  "location": "DataDrivenStepDefinition.i_should_enter_valid_password_something(String)"
});
formatter.result({
  "duration": 1063677900,
  "status": "passed"
});
formatter.match({
  "location": "DataDrivenStepDefinition.i_should_click_on_submit_button()"
});
formatter.result({
  "duration": 674972100,
  "status": "passed"
});
formatter.uri("feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Login Page with valid email id and password",
  "description": "",
  "id": "login;verify-login-page-with-valid-email-id-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I should navigate to Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I should verify the page title",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should enter email id and password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.i_should_navigate_to_home_page()"
});
formatter.result({
  "duration": 10651814800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.i_should_click_on_login_button1()"
});
formatter.result({
  "duration": 1007941300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.i_should_verify_the_page_title()"
});
formatter.result({
  "duration": 176832200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.i_should_enter_email_id_and_password()"
});
formatter.result({
  "duration": 604901800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.i_should_click_on_login_button()"
});
formatter.result({
  "duration": 1383011100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.i_should_navigate_to_Homepage()"
});
formatter.result({
  "duration": 4319284800,
  "status": "passed"
});
formatter.uri("feature/register.feature");
formatter.feature({
  "line": 1,
  "name": "Register",
  "description": "",
  "id": "register",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify Register functionality",
  "description": "",
  "id": "register;verify-register-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I should have navigate to application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should click on Register menu",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I should enter the Contact Information",
  "rows": [
    {
      "cells": [
        "Jesni",
        "AS",
        "9947865210",
        "jesni123@gmail.com"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should enter the Mailing Information",
  "rows": [
    {
      "cells": [
        "As villa",
        "Trivandrum",
        "kerala",
        "695142",
        "INDIA"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should enter the User Information",
  "rows": [
    {
      "cells": [
        "JesniJes",
        "jesni123",
        "jesni123"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should click on submit menu",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStepDefinition.i_should_have_navigate_to_application()"
});
formatter.result({
  "duration": 14203711000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.i_should_click_on_Register_menu()"
});
formatter.result({
  "duration": 1558542600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.i_should_enter_the_Contact_Information(DataTable)"
});
formatter.result({
  "duration": 814523000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.i_should_enter_the_Mailing_Information(DataTable)"
});
formatter.result({
  "duration": 1443418100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.i_should_enter_the_User_Information(DataTable)"
});
formatter.result({
  "duration": 3605560300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.i_should_click_on_submit_menu()"
});
formatter.result({
  "duration": 2467748300,
  "status": "passed"
});
formatter.uri("feature/simpleDataDriven.feature");
formatter.feature({
  "line": 2,
  "name": "Login Using Simple DataDriven",
  "description": "",
  "id": "login-using-simple-datadriven",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Verify Login with valid credential",
  "description": "",
  "id": "login-using-simple-datadriven;verify-login-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I should launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should enter username \"jesnijesni\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should enter password \"jesni123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should select the submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "SimpleDataDrivenStepDefinition.i_should_launch_application()"
});
formatter.result({
  "duration": 19876597500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jesnijesni",
      "offset": 25
    }
  ],
  "location": "SimpleDataDrivenStepDefinition.i_should_enter_username(String)"
});
formatter.result({
  "duration": 217697500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jesni123",
      "offset": 25
    }
  ],
  "location": "SimpleDataDrivenStepDefinition.i_should_enter_password(String)"
});
formatter.result({
  "duration": 167981100,
  "status": "passed"
});
formatter.match({
  "location": "SimpleDataDrivenStepDefinition.i_should_select_the_submit_button()"
});
formatter.result({
  "duration": 2114708100,
  "status": "passed"
});
});