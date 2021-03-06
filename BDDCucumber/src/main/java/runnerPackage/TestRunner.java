
	package runnerPackage;

	import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(
			features ="classpath:feature/tagsLogin.feature", // to set the feature file [path
			glue = {"stepDefinition"}, // to set step definition path
			
	dryRun =false, //checks the mapping between feature and stepdefinitions
	strict = true, //checks the mapping between feature and stepdefinitions
	//tags= {"@SmokeTest"},
	//tags= {"@SmokeTest,@InvalidTest"},
	//tags= {"@SmokeTest,@FeatureTest"},
	//tags= {"@InvalidTest","@FeatureTest"},
	tags= {"~@SmokeTest"},
	monochrome = true, // to make readable output in console
	format = {"pretty","html:test-outout"})
	public class TestRunner {
		

	}


