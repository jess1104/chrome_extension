// 抓到chanceColor鈕
let changeColor = document.getElementById("changeColor");
// 改黑背景
changeColor.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

	// chrome.scriptingAPI 將 JavaScript 和 CSS 注入網站
	chrome.scripting.executeScript({
			target: { tabId: tab.id },
			// 引用功能
			function: setPageBackgroundColor,
	});
});


// 抓到原色按鈕
let orign = document.getElementById("orign");
// 改回背景
orign.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // chrome.scriptingAPI 將 JavaScript 和 CSS 注入網站
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: orignBackground,
    });
});

// 黑背景功能
function setPageBackgroundColor(){
	document.body.style.backgroundColor = "#353941";
}
// 原背景
function orignBackground(){
	document.body.style.backgroundColor = '';
}