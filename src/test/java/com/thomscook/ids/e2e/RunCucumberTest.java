package com.thomscook.ids.e2e;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by omm on 6/19/2017.
 */


@RunWith(Cucumber.class)
@CucumberOptions(
        format = {"pretty", "html:reports", "json:reports/cucumber.json"},
        strict = true,
        glue = {"src/test/resources/env.groovy", "src/test/groovy/com/thomascook/ids/e2e"},
        features = "src/test/cucumber/",
        tags = {"~@Ignore"})

public class RunCucumberTest {
}
