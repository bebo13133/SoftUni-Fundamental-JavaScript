function browserHistory(browser, array) {
    array.forEach(x => {
        [command, browserName] = x.split(" ")
        if (command === "Close") {
            if (browser["Open Tabs"].includes(browserName)) {
                browser["Open Tabs"] = browser["Open Tabs"].filter(el => el !== browserName);
                browser["Recently Closed"].push(browserName)
                browser["Browser Logs"].push(x);
            }
                
        } else if (command === "Open") {
            browser["Open Tabs"].push(browserName)
            browser["Browser Logs"].push(x);
         } else if (x === "Clear History and Cache") {
                 browser["Recently Closed"] = []
                 browser["Browser Logs"] = []
                 browser["Open Tabs"] = []       
        }
    });
console.log(browser["Browser Name"])
console.log(`Open Tabs: ${browser["Open Tabs"].join(", ")}` )
console.log(`Recently Closed: ${browser["Recently Closed"].join(", ")}` )
console.log(`Browser Logs: ${browser["Browser Logs"].join(", ")}` )
}