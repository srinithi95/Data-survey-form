var webdriver = require("selenium-webdriver");
var browser = new webdriver.Builder().
                    withCapabilities(webdriver.Capabilities.chrome()).build();
browser.get('http://www.google.com');
var promise= browser.getTitle();

promise.then(function(title) {
    console.log(title);
});

browser.quit();