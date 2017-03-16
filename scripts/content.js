//console.log("CONTENT loaded");

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log("TAB update");
  chrome.tabs.getCurrent(function(tab){
    console.log(tab);
  });
});
