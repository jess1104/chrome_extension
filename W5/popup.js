// 假資料
// const items = [{"item":"inject AZ","status":0},{"item":"inject Mordernaz",status:1}];
// // 陣列轉字串
// const itemStr = JSON.stringify(items);

// console.log(items);
// console.log(itemStr);

// 打開或關閉輸入todo的input框
document.querySelector('.createTodo').addEventListener('click',function(){
  // input跟save鈕
	var newItem = document.querySelector('.newItem');
  // 一開始預設為display: none;
	if(newItem.style.display === "none"){
    // 顯示
		newItem.style.display = "block"
	}else{
		newItem.style.display = "none"
	}
});

// 點擊save鈕
document.querySelector('.newItem button').addEventListener('click',function(){
  // 拿到input的值
	var itemName = document.querySelector('.newItem input').value;
  // 當input不是空（有值的狀態）
	if(itemName != ''){
		var items = localStorage.getItem('todoItems');
    // console.log(items);
    var itemsArr = [];
    if(items){
        // 要先將字串轉為陣列
        itemsArr = JSON.parse(items);
    }
		itemsArr.push({"item":itemName,"status":0});
    // console.log(itemsArr)
    // 儲存
		saveItems(itemsArr);
		fetchItems();
		document.querySelector('.newItem input').value = '';
	}
})

function fetchItems(){

	const itemsList = document.querySelector('ul.todoItems');
	itemsList.innerHTML = '';
	var newItemHTML = '';
    try{
    	var items = localStorage.getItem('todoItems');
			var itemsArr = JSON.parse(items);
            if(itemsArr){
                for(var i = 0; i < itemsArr.length; i++){
                    var status = '';
                    if(itemsArr[i].status == 1){
                        status = 'class="done"';
                        console.log(itemsArr[i]);
                    }
                    newItemHTML+=`
                    <li data-itemindex="${i}" ${status}> 
                        <span class="item">${itemsArr[i].item}</span> 
                        <div><span class="itemComplete"><i class="far fa-check-circle"></i></span><span class="itemDelete"> <i class="far fa-trash-alt"></i></span></div> 
                    </li>
                    `
                }
                itemsList.innerHTML = newItemHTML;
    
                var itemsListUL = document.querySelectorAll('ul li');
                // console.log(itemsListUL.length)
                //將所有li遍歷
                for(var i = 0; i < itemsListUL.length; i++ ){
                    itemsListUL[i].querySelector(".itemComplete").addEventListener('click',function(){
                        var index = this.parentNode.parentNode.dataset.itemindex;
                        console.log(index);
                        itemComplete(index);
                    });
    
                    itemsListUL[i].querySelector(".itemDelete").addEventListener('click',function(){
                        var index = this.parentNode.parentNode.dataset.itemindex;
                        console.log(index);
                        itemDelete(index);
                    });
                }
            }
			

    }catch(e){

		}
}

fetchItems();
// 完成畫線
function itemComplete(index){
	var items = localStorage.getItem('todoItems');
	var itemsArr = JSON.parse(items);
	// 將該筆的status改為一，因為改為1會添加class="done"的效果
	itemsArr[index].status = 1;
	// 改完之後再將這array重新儲存
	saveItems(itemsArr);
	// 加class done(因為一開始沒有class所以不行用class.add())
	document.querySelector('li[data-itemindex="'+index+'"]').classList='done';
}

// 垃圾桶
function itemDelete(index){
	var items = localStorage.getItem('todoItems');
	var itemsArr = JSON.parse(items);

	itemsArr.splice(index,1);

	saveItems(itemsArr);
	document.querySelector('li[data-itemindex="'+index+'"]').remove();
	
}

// 儲存功能
function saveItems(obj){
	// 將物件轉為字串
	let string = JSON.stringify(obj);
	// 設置進去localStorage
	localStorage.setItem('todoItems',string);
}
