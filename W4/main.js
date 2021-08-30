const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const romanNumEl = document.querySelector('.romanNum');//羅馬數字元素
const tempResultEl = document.querySelector('.tempResult');
const numbersEl = document.querySelectorAll('.number');
// + - * %
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.allClear');
const clearLastEl = document.querySelector('.lastEntityClear');

// 放值
let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
// .不能重複
let haveDot = false;

// 渲染按鈕=>上面顯示
numbersEl.forEach( number =>{
    number.addEventListener('click',(e)=>{
        // 當我有了點要把haveDot變true避免重複
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        };
        // console.log(haveDot);
        // 取值後渲染上去
        dis2Num += e.target.innerText;
        display2El.innerText = dis2Num;
    });
});
// 加減乘除
operationEl.forEach(operation =>{
    operation.addEventListener('click',(e)=>{
        console.log(!dis2Num);
        if(!dis2Num) return;//###大格沒有值會return
    
        haveDot = false;
        const operationName = e.target.innerText;//加減乘除名字
        if(dis1Num && dis2Num && lastOperation){
            mathOperation();
        }else{
            result = parseFloat(dis2Num);//加減乘除及字串轉為數字
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);

    })
})

// 清空大格
function clearVar(name = ''){
    // 顯示於最上方
    dis1Num += dis2Num+ ' ' + name + ' ';
    display1El.innerText = dis1Num;
    display2El.innerText = '';
    dis2Num = '';
    tempResultEl.innerText = result;
}

// 計算函式
// 轉換加減乘除
function mathOperation(){
    if(lastOperation === 'x'){
        result = parseFloat(result) * parseFloat(dis2Num);
    }else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num);
    }else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2Num);
    }else if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2Num);
    }else if(lastOperation === '%'){
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}

// 點擊等於秀值
equalEl.addEventListener('click',(e)=>{
    if(!dis1Num || !dis2Num) return;//當其一裏面沒有值會跳出
    haveDot = false;
    mathOperation();//計算
    clearVar();//清空
    display2El.innerText = result;
    tempResultEl.innerText= '';
    dis2Num = result;
    dis1Num = ''; 
})

// 點擊清空所有值
clearAllEl.addEventListener('click',(e)=>{
    display1El.innerText = '0';
    display2El.innerText = '0';
    tempResultEl.innerText = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
})

// 點擊清空上一個輸入的值
clearLastEl.addEventListener('click',(e)=>{
    display2El.innerText ='';
    dis2Num = '';
})