// 重整功能
function refresh(second) {
  setTimeout(function () {
    console.log('111')
    window.location.reload();
  }, second * 1000);
}

// 有message 進來的時候監聽
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(request);
      if( request.refreshSecond ) {
       refresh(request.refreshSecond)
           }
    }
  );



