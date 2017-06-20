package com.thomascook.ids.e2e.steps

import com.thomascook.ids.e2e.pages.MainPage
import cucumber.api.PendingException
import static cucumber.api.groovy.EN.*

/**
 * Created by omm on 6/19/2017.
 */
Given(~/^I'm at the start page$/) { ->
    // Write code here that turns the phrase above into concrete actions
    at MainPage
}

When(~/^I enter search criteria$/) { ->
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException()
}

Then(~/^I see available packages$/) { ->
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException()
}
