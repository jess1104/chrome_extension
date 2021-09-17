// 背景的監聽
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.rightClickOpen >= 0) {
    // 抓到object第0個的key name
    const action = Object.getOwnPropertyNames(request)[0];
    sendMessage(action, request.rightClickOpen);
  }
});

function sendMessage(action, value) {
  // 使用參數聲明物件key的值
  let msgObj = { [action]: value };
  // currentWindow(抓到目前視窗)
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    // activeTab當下那個分頁
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, msgObj);
  });
}
