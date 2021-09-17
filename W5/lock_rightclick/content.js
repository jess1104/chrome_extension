let isRightClickOpen = true;
// 有message 進來的時候監聽
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  if (request.rightClickOpen >= 0) {
    const isOpenValue = request.rightClickOpen == 1 ? true : false;
    isRightClickOpen = isOpenValue;
    console.log(isRightClickOpen);
  }
});

// 鎖右鍵(監聽整個body)
document.addEventListener(
  "contextmenu",
  function (ev) {
    // alert(isRightClickOpen);
    if (!isRightClickOpen) {
      ev.preventDefault();
      // 鎖右鍵為false
      return false;
    }
  },
  false
);
