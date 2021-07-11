let onSearch = (info, tab)=>{
  chrome.tabs.create({  
    url: "https://caniuse.com/?search=" + encodeURIComponent(info.selectionText)
  });
};

chrome.runtime.onInstalled.addListener(() => {
});

chrome.contextMenus.create({
  id:'caniusemenu',
  title:'Search caniuse.com with "%s"',
  contexts:['selection']
});  

chrome.contextMenus.onClicked.addListener(onSearch);