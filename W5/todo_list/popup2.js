// popup2
function init() {
  // input(幾秒)
  const newFreshSecond = document.getElementById("newFreshSecond");
  // 拿到dataset-open
  const isOpen = document
    .getElementById("newFreshToggle")
    .getAttribute("data-open");
  if (isOpen == 1) {
    let second = newFreshSecond.value;
    sendMessage("refreshSecond", second);
  }

  // 設置完幾秒再去refresh
  newFreshSecond.addEventListener("keyup", function () {
    const isOpen = document
      .getElementById("newFreshToggle")
      .getAttribute("data-open");
    if (isOpen == 1) {
      let second = newFreshSecond.value;
      sendMessage("refreshSecond", second);
    }
  });

  // 一直自動重整，重新撈取這個popup裡的值
  setInterval(() => {
    const isOpen = document
      .getElementById("newFreshToggle")
      .getAttribute("data-open");
    if (isOpen == 1) {
      sendMessage("refreshSecond", newFreshSecond.value);
    }
  }, newFreshSecond.value * 1000);
}

init();

// 開關鈕
document
  .getElementById("newFreshToggle")
  .addEventListener("click", function () {
    const isOpen = this.getAttribute("data-open");
    // 當我開的時候(data-open=1)
    if (isOpen == 1) {
      // ui改關並且改data-open變成0
      this.innerText = "關";
      this.setAttribute("data-open", 0);
    } else {
      const newFreshSecond = document.getElementById("newFreshSecond").value;
      sendMessage("refreshSecond", newFreshSecond);
      this.innerText = "開";
      this.setAttribute("data-open", 1);
    }
  });

// 把訊息傳送至content
function sendMessage(action, value) {
  // currentWindow(目前視窗)
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    // activeTab當下那個分頁
    var activeTab = tabs[0];
    // 使用參數聲明物件key的值
    var msgObj = { [action]: value };
    chrome.tabs.sendMessage(activeTab.id, msgObj);
    // console.log(activeTab,msgObj)
  });
}
