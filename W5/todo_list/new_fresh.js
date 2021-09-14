// 重整功能
function refresh(second) {
  setTimeout(function () {
    window.location.reload();
  }, second * 1000);
}

// 有message 進來的時候監聽
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    
      if( request.refreshSecond ) {
       refresh(request.refreshSecond)
           }
    }
  );



