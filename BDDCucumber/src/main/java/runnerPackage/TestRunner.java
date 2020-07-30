
	package runnerPackage;

	import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(
			features ="C:\\Users\\Jesni\\Work_Cucumber\\src\\main\\java\\feature\\login.feature", // to set the feature file [path
			glue = {"stepDefinition"} // to set step definition path
			)
	public class TestRunner {
		

	}


