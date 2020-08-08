$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Jesni/git/BDDCucumber/BDDCucumber/src/main/java/feature/dataDriven.feature");
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
  "duration": 29631530000,
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
  "duration": 1099851800,
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
  "duration": 160783500,
  "status": "passed"
});
formatter.match({
  "location": "DataDrivenStepDefinition.i_should_click_on_submit_button()"
});
formatter.result({
  "duration": 1450495300,
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
  "duration": 43481767000,
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
  "duration": 605940800,
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
  "duration": 193409100,
  "status": "passed"
});
formatter.match({
  "location": "DataDrivenStepDefinition.i_should_click_on_submit_button()"
});
formatter.result({
  "duration": 4410428300,
  "status": "passed"
});
});