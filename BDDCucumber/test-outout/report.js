$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Jesni/git/BDDCucumber/BDDCucumber/src/main/java/feature/login.feature");
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
  "name": "user should navigate to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.i_should_navigate_to_home_page()"
});
formatter.result({
  "duration": 14188831400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.i_should_click_on_login_button1()"
});
formatter.result({
  "duration": 1216392800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.i_should_verify_the_page_title()"
});
formatter.result({
  "duration": 59524600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.i_should_enter_email_id_and_password()"
});
formatter.result({
  "duration": 419094100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.i_should_click_on_login_button()"
});
formatter.result({
  "duration": 1315174500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_navigate_to_Homepage()"
});
formatter.result({
  "duration": 446455900,
  "status": "passed"
});
});