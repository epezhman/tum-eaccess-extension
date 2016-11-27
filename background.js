chrome.browserAction.onClicked.addListener(function () {
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function (tabs) {
        var tab = tabs[0];
        var url = tab.url;
        console.assert(typeof url == 'string', 'tab.url should be a string');
        var pathArray = url.split('/');
        var protocol = pathArray[0];
        var host = pathArray[2];
        var tempUrl = protocol + '//' + host + '.eaccess.ub.tum.de';
	for(var i = 3; i < pathArray.length; i++)
	{
		tempUrl += '/' + pathArray[i];
	}	
        chrome.tabs.update(tab.id, {url: tempUrl});
    });
});
