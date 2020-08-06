package stepDefinition;
import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
	
	public class LoginStepDefinition {
        WebDriver driver;
        @Given("^I should navigate to Home Page$")
        public void i_should_navigate_to_home_page()  {
        	 System.setProperty("webdriver.chrome.driver","D:\\Automation\\chromedriver.exe");
 	 		driver = new ChromeDriver();
 	 		driver.manage().window().maximize();
 	 		driver.get("http://demowebshop.tricentis.com");
            
        }
        @Then("^I should click on Login button$")
        public void i_should_click_on_login_button1(){
        	WebElement lg=driver.findElement(By.xpath("//a[@class='ico-login']"));
        	lg.click();
	       }

        @And("^I should verify the page title$")
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
          
         
	    
          @Then("^I should navigate to Homepage$")
	    public void i_should_navigate_to_Homepage() {
	   
	    	WebElement homeTitle =driver.findElement(By.xpath("//h2[@class='topic-html-content-header']"));
	 	
		   	  assertEquals(homeTitle.getText(),"Welcome to our store");
		   	 driver.close();
	    }

	}

