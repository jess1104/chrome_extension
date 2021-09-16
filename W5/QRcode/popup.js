document.querySelector("button").addEventListener("click", function () {
  // tabs api抓到當前頁面陣列
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // tabs[0]為一個物件裡面有url的值
    // console.log(tabs[0]);
    let url = tabs[0].url;
    if (url) {
      document.querySelector(
        ".pic"
      ).innerHTML = `<img src="http://chart.apis.google.com/chart?cht=qr&choe=UTF-8&chs=150x150&chl=${url}" />`;
    }
  });
});
