$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/DemoRegister.feature");
formatter.feature({
  "line": 1,
  "name": "Registration",
  "description": "",
  "id": "registration",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify Register functionality",
  "description": "",
  "id": "registration;verify-register-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I have to launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should click on Register Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I should select Gender",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I should enter data",
  "rows": [
    {
      "cells": [
        "FName",
        "LName",
        "Email",
        "Password",
        "CPassword"
      ],
      "line": 8
    },
    {
      "cells": [
        "Jesni",
        "AS",
        "jesni123@gmail.com",
        "jes123",
        "jes123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should click on Register button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoRegisterStepDefinition.i_have_to_launch_application()"
});
formatter.result({
  "duration": 45845761400,
  "status": "passed"
});
formatter.match({
  "location": "DemoRegisterStepDefinition.i_should_click_on_Register_Menu()"
});
formatter.result({
  "duration": 3974527600,
  "status": "passed"
});
formatter.match({
  "location": "DemoRegisterStepDefinition.i_should_select_Gender()"
});
formatter.result({
  "duration": 280310200,
  "status": "passed"
});
formatter.match({
  "location": "DemoRegisterStepDefinition.i_should_enter_data(DataTable)"
});
formatter.result({
  "duration": 1996478200,
  "status": "passed"
});
formatter.match({
  "location": "DemoRegisterStepDefinition.i_should_click_on_Register_button()"
});
formatter.result({
  "duration": 1512674200,
  "status": "passed"
});
formatter.match({
  "location": "DemoRegisterStepDefinition.i_should_close_browser()"
});
formatter.result({
  "duration": 952008200,
  "status": "passed"
});
});