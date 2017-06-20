package com.thomascook.ids.e2e.pages

import geb.Page

class MainPage extends Page {

    static at = {
        waitForWindowWithTitleAndElement("Neckermann Reizen > Start je vakantie > Let's Go!", 'id#SearchbarForm-subInputForm')
    }

    static content = {
        emailAddressInput { $("input#emailAddress") }
        okInput { $("input", type: "submit") }
        cancelInput { $("#post input") }
    }

    def waitForWindowWithTitleAndElement(def windowTitle, String elementSelector, String frame = '') {
        def frames = []
        if (frame.length() > 0) frames = [frame]
        waitForWindowWithTitleAndElement(windowTitle, elementSelector, frames)
    }

}