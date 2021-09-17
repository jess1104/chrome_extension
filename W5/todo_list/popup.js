// 假資料
// const items = [{"item":"inject AZ","status":0},{"item":"inject Mordernaz",status:1}];
// // 陣列轉字串
// const itemStr = JSON.stringify(items);

// console.log(items);
// console.log(itemStr);

// 打開或關閉輸入todo的input框
document.querySelector(".createTodo").addEventListener("click", function () {
  // input跟save鈕
  let newItem = document.querySelector(".newItem");
  // 一開始預設為display: none;
  if (newItem.style.display == "none") {
    // 顯示
    newItem.style.display = "block";
  } else {
    newItem.style.display = "none";
  }
});

// 點擊save鈕
document
  .querySelector(".newItem button")
  .addEventListener("click", function () {
    // 拿到input的值
    let itemName = document.querySelector(".newItem input").value;
    // 當input不是空（有值的狀態）
    if (itemName != "") {
      let items = localStorage.getItem("todoItems");
      // console.log(items);
      let itemsArr = [];
      if (items) {
        // 要先將字串轉為陣列
        itemsArr = JSON.parse(items);
      }
      itemsArr.push({ item: itemName, status: 0 });
      // console.log(itemsArr)
      // 儲存
      saveItems(itemsArr);
      fetchItems();
      document.querySelector(".newItem input").value = "";
    }
  });
// 遍歷資料
function fetchItems() {
  const itemsList = document.querySelector("ul.todoItems");
  itemsList.innerHTML = "";
  let newItemHTML = "";
  try {
    // 先將localk的值抓出來
    let items = localStorage.getItem("todoItems");
    // 將local裡的值轉為相對應的object(這邊是陣列)
    let itemsArr = JSON.parse(items);

    if (itemsArr) {
      for (let i = 0; i < itemsArr.length; i++) {
        let status = "";
        if (itemsArr[i].status == 1) {
          // 如果狀態是一將status設置
          status = 'class="done"';
          // console.log(itemsArr)
        }
        newItemHTML += `
                    <li data-itemindex="${i}" ${status}> 
                        <span class="item">${itemsArr[i].item}</span> 
                        <div><span class="itemComplete"><i class="far fa-check-circle"></i></span><span class="itemDelete"> <i class="far fa-trash-alt"></i></span></div> 
                    </li>
                    `;
      }
      // 印出
      itemsList.innerHTML = newItemHTML;

      // 抓到li
      let itemsListUL = document.querySelectorAll("ul li");
      // console.log(itemsListUL.length)
      //將所有li遍歷
      for (let i = 0; i < itemsListUL.length; i++) {
        // 抓到勾勾✅鈕
        itemsListUL[i]
          .querySelector(".itemComplete")
          .addEventListener("click", function () {
            // 勾勾鈕的上層再上層才是li
            let index = this.parentNode.parentNode.dataset.itemindex;
            // 完成
            itemComplete(index);
          });
        // 抓到🗑
        itemsListUL[i]
          .querySelector(".itemDelete")
          .addEventListener("click", function () {
            let index = this.parentNode.parentNode.dataset.itemindex;
            // 刪除
            itemDelete(index);
          });
      }
    }
  } catch (e) {
    alert("wrong!");
  }
}

fetchItems();

// 完成畫線
function itemComplete(index) {
  let items = localStorage.getItem("todoItems");
  let itemsArr = JSON.parse(items);
  // 將該筆的status改為一，因為改為1會添加class="done"的效果
  itemsArr[index].status = 1;
  // 改完之後再將這array重新儲存
  saveItems(itemsArr);
  // 加class done(因為一開始沒有class所以不行用class.add())
  document.querySelector('li[data-itemindex="' + index + '"]').classList =
    "done";
}

// 垃圾桶
function itemDelete(index) {
  let items = localStorage.getItem("todoItems");
  let itemsArr = JSON.parse(items);

  itemsArr.splice(index, 1);

  saveItems(itemsArr);
  // 抓到那個index去移除
  document.querySelector('li[data-itemindex="' + index + '"]').remove();
}

// 儲存功能
function saveItems(obj) {
  // 將物件轉為字串
  let string = JSON.stringify(obj);
  // 設置進去localStorage
  localStorage.setItem("todoItems", string);
}
