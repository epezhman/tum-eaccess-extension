chrome.browserAction.onClicked.addListener(function () {
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function (tabs) {
        var tab = tabs[0];
        console.assert(typeof tab.url == 'string', 'tab.url should be a string');
        chrome.tabs.update(tab.id, {url: 'https://eaccess.ub.tum.de/login?url=' + tab.url});
    });
});
