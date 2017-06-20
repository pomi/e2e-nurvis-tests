$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("findPackageHoliday.feature");
formatter.feature({
  "line": 1,
  "name": "Create Order",
  "description": "",
  "id": "create-order",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2881712995,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Find Package Holiday",
  "description": "",
  "id": "create-order;find-package-holiday",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m at the start page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter search criteria",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I see available packages",
  "keyword": "Then "
});
formatter.match({
  "location": "findPackageHolidays.groovy:10"
});
formatter.result({
  "duration": 1055083969,
  "error_message": "groovy.lang.MissingMethodException: No signature of method: geb.navigator.NonEmptyNavigator.waitForWindowWithTitleAndElement() is applicable for argument types: (java.lang.String, java.lang.String, java.util.ArrayList) values: [Neckermann Reizen \u003e Start je vakantie \u003e Let\u0027s Go!, id#SearchbarForm-subInputForm, ...]\r\n\tat geb.navigator.NonEmptyNavigator.methodMissing(NonEmptyNavigator.groovy:568)\r\n\tat geb.content.PageContentSupport.methodMissing(PageContentSupport.groovy:33)\r\n\tat geb.content.PageContentSupport$methodMissing.call(Unknown Source)\r\n\tat geb.Page.methodMissing(Page.groovy:112)\r\n\tat com.thomascook.ids.e2e.pages.MainPage.waitForWindowWithTitleAndElement(MainPage.groovy:20)\r\n\tat com.thomascook.ids.e2e.pages.MainPage.waitForWindowWithTitleAndElement(MainPage.groovy)\r\n\tat com.thomascook.ids.e2e.pages.MainPage$__clinit__closure1.doCall(MainPage.groovy:8)\r\n\tat com.thomascook.ids.e2e.pages.MainPage$__clinit__closure1.doCall(MainPage.groovy)\r\n\tat geb.Page.verifyThisPageAtOnly(Page.groovy:245)\r\n\tat geb.Page.getAtVerificationResult(Page.groovy:223)\r\n\tat geb.Page.verifyAt(Page.groovy:194)\r\n\tat geb.Page$verifyAt$0.call(Unknown Source)\r\n\tat geb.Browser.doAt(Browser.groovy:457)\r\n\tat geb.Browser.at(Browser.groovy:339)\r\n\tat geb.binding.BindingUpdater$InvocationForwarding.doCall(BindingUpdater.groovy:73)\r\n\tat com.thomascook.ids.e2e.steps.findPackageHolidays$_run_closure1.doCall(findPackageHolidays.groovy:12)\r\n\tat ✽.Given I\u0027m at the start page(findPackageHoliday.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "findPackageHolidays.groovy:15"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "findPackageHolidays.groovy:20"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9535926,
  "status": "passed"
});
});