package stepDefinition;
import cucumber.api.PendingException;
	import cucumber.api.java.en.Given;
	import cucumber.api.java.en.Then;
	import cucumber.api.java.en.And;
	import cucumber.api.junit.Cucumber;

import static org.junit.Assert.assertEquals;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
	
	public class LoginStepDefinition {
        WebDriver driver;
	    @Given("^user should navigate to Login Page$")
	    public void user_should_navigate_to_login_page(){
	    	 System.setProperty("webdriver.chrome.driver","D:\\Automation\\chromedriver.exe");
	 		driver = new ChromeDriver();
	 		driver.manage().window().maximize();
	 		driver.get("http://demowebshop.tricentis.com/login");
	       
	    }

	    @Then("^I should verify the page title$")
	    public void i_should_verify_the_page_title(){
	    	 WebElement title =driver.findElement(By.xpath("//h1[text()='Welcome, Please Sign In!']"));
	 		
	   	  assertEquals(title.getText(), "Welcome, Please Sign In!");
	       
	    }

	    @Then("^I should enter email id and password$")
	    public void i_should_enter_email_id_and_password(){
	    	WebElement user=driver.findElement(By.xpath("//input[@id='Email']"));
	  	  user.sendKeys("jesni.jeni@gmail.com");
	  	  WebElement password=driver.findElement(By.xpath("//input[@id='Password']"));
	  	  password.sendKeys("jesni123");
	  	     	
	       
	    }
          @And("^I should click on login button$")
	    public void i_should_click_on_login_button() {
	    	 WebElement login=driver.findElement(By.xpath("//input[@class='button-1 login-button']"));
	   	  login.click();
	  	JavascriptExecutor js=(JavascriptExecutor)driver;
	   	js.executeScript("window.scrollBy(0,500)");
	    }
	    
          @Then("^user should navigate to Homepage$")
	    public void user_should_navigate_to_Homepage() {
	   
	    	WebElement homeTitle =driver.findElement(By.xpath("//h2[@class='topic-html-content-header']"));
	 	
		   	  assertEquals(homeTitle.getText(),"Welcome to our store");
		   	 driver.close();
	    }

	}

