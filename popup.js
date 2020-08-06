window.onload = function() {
    var searchbox = document.getElementById("searchbox");
    searchbox.addEventListener("keyup", search);
    searchbox.focus();
}

function search () {
    var searchExpression = document.getElementById("searchbox").value;
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": searchExpression});
    });
}

