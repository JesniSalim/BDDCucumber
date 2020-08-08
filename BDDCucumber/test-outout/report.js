$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Jesni/git/BDDCucumber/BDDCucumber/src/main/java/feature/simpleDataDriven.feature");
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
  "duration": 19454574100,
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
  "duration": 502987300,
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
  "duration": 248236600,
  "status": "passed"
});
formatter.match({
  "location": "SimpleDataDrivenStepDefinition.i_should_select_the_submit_button()"
});
formatter.result({
  "duration": 2110858000,
  "status": "passed"
});
});