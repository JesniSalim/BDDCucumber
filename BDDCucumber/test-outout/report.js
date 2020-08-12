$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/tagsLogin.feature");
formatter.feature({
  "line": 1,
  "name": "tags",
  "description": "",
  "id": "tags",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "TagsLoginStepDefinition.launch_the_browser()"
});
formatter.result({
  "duration": 8193369600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "verify login with invalid emailid and valid password",
  "description": "",
  "id": "tags;verify-login-with-invalid-emailid-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@InvalidTest"
    },
    {
      "line": 12,
      "name": "@FeatureTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Launch the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user should enter invalid email id and valid password",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "TagsLoginStepDefinition.launch_the_Home_Page()"
});
formatter.result({
  "duration": 3850818799,
  "status": "passed"
});
formatter.match({
  "location": "TagsLoginStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 958300200,
  "status": "passed"
});
formatter.match({
  "location": "TagsLoginStepDefinition.user_should_enter_invalid_email_id_and_valid_password()"
});
formatter.result({
  "duration": 340064600,
  "status": "passed"
});
formatter.match({
  "location": "TagsLoginStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 1228317400,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "TagsLoginStepDefinition.launch_the_browser()"
});
formatter.result({
  "duration": 6188733400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verify login with blank emailid and password",
  "description": "",
  "id": "tags;verify-login-with-blank-emailid-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@InvalidTest"
    },
    {
      "line": 26,
      "name": "@FeatureTest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user should navigate to Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user should click on Login",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user should enter blank email id and blank password",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "click on login",
  "keyword": "Then "
});
formatter.match({
  "location": "TagsLoginStepDefinition.user_should_navigate_to_login_Page()"
});
formatter.result({
  "duration": 3435540500,
  "status": "passed"
});
formatter.match({
  "location": "TagsLoginStepDefinition.user_should_click_on_Login()"
});
formatter.result({
  "duration": 827814401,
  "status": "passed"
});
formatter.match({
  "location": "TagsLoginStepDefinition.user_should_enter_blank_email_id_and_blank_password()"
});
formatter.result({
  "duration": 181743501,
  "status": "passed"
});
formatter.match({
  "location": "TagsLoginStepDefinition.click_on_login_()"
});
formatter.result({
  "duration": 2698017499,
  "status": "passed"
});
});