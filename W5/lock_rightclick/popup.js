// 把訊息傳送至背景或content
function sendMessage(action, value) {
  // 使用參數聲明物件key的值
  var msgObj = { [action]: value };
  // console.log(msgObj);
  // 跑背景
  chrome.runtime.sendMessage(msgObj);
  // console.log(activeTab,msgObj)
}

// 開啟鎖右鍵
document
  .getElementById("rightClickToggle")
  .addEventListener("click", function () {
    const isOpen = this.getAttribute("data-open");

    // 當我開的時候(data-open=1)
    if (isOpen == 1) {
      // ui改關並且改data-open變成0
      this.innerText = "右鍵已鎖";
      this.setAttribute("data-open", 0);
      sendMessage("rightClickOpen", 0);
    } else {
      this.innerText = "右鍵沒鎖";
      this.setAttribute("data-open", 1);
      sendMessage("rightClickOpen", 1);
    }
  });
