/* eslint-disable no-undef */
// 上方顯示區
const display1El = document.querySelector('.display-1')
// 中間顯示區
const display2El = document.querySelector('.display-2')
// 羅馬數字元素
const romanNumEl = document.querySelector('.romanNum')
// 試算區
const tempResultEl = document.querySelector('.tempResult')
// 按鈕1-9
const numbersEl = document.querySelectorAll('.number')
// + - * %
const operationEl = document.querySelectorAll('.operation')
// =
const equalEl = document.querySelector('.equal')
// C
const clearAllEl = document.querySelector('.allClear')
// CE
const clearLastEl = document.querySelector('.lastEntityClear')

// 放值
let dis1Num = ''
let dis2Num = ''
let result = null
let lastOperation = ''
// .不能重複
let haveDot = false

// 渲染按鈕=>上面顯示
numbersEl.forEach(number => {
  number.addEventListener('click', (e) => {
    // 當我有了點要把haveDot變true避免重複
    if (e.target.innerText === '.' && !haveDot) {
      haveDot = true
    } else if (e.target.innerText === '.' && haveDot) {
      return
    };
    // console.log(haveDot);
    // 取值後渲染上去
    dis2Num += e.target.innerText
    display2El.innerText = dis2Num
    romanNumEl.innerText = ''
  })
})
// 加減乘除
operationEl.forEach(operation => {
  operation.addEventListener('click', (e) => {
    // console.log(!dis2Num);
    // ###大格沒有值會return
    if (!dis2Num) return

    haveDot = false
    // 加減乘除名字
    const operationName = e.target.innerText
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation()
    } else {
      // 字串轉為數字
      result = parseFloat(dis2Num)
    }
    // console.log(result)
    clearVar(operationName)
    lastOperation = operationName
    // console.log(result);
  })
})

// 清空大格
function clearVar (name = '') {
  // 顯示於最上方
  // console.log(name)
  dis1Num += dis2Num + ' ' + name + ' '
  display1El.innerText = dis1Num
  // 中間大格清空
  display2El.innerText = ''
  // 2儲存空間清空
  dis2Num = ''
  // console.log(dis2Num);
  tempResultEl.innerText = result
}

// 計算函式
// 轉換加減乘除
function mathOperation () {
//     if(lastOperation === 'x'){
//         result = parseFloat(result) * parseFloat(dis2Num);
//     }else if(lastOperation === '+'){
//         result = parseFloat(result) + parseFloat(dis2Num);
//     }else if(lastOperation === '-'){
//         result = parseFloat(result) - parseFloat(dis2Num);
//     }else if(lastOperation === '/'){
//         result = parseFloat(result) / parseFloat(dis2Num);
//     }else if(lastOperation === '%'){
//         result = parseFloat(result) % parseFloat(dis2Num);
//     }
// 轉成switch
  switch (lastOperation) {
    case 'x':
      result = parseFloat(result) * parseFloat(dis2Num)
      break
    case '+':
      result = parseFloat(result) + parseFloat(dis2Num)
      break
    case '-':
      result = parseFloat(result) - parseFloat(dis2Num)
      break
    case '/':
      result = parseFloat(result) / parseFloat(dis2Num)
      break
    case '%':
      result = parseFloat(result) % parseFloat(dis2Num)
      break
  }
}

// 點擊等於秀值
equalEl.addEventListener('click', (e) => {
  if (!dis1Num || !dis2Num) return// 當其一裏面沒有值會跳出
  haveDot = false
  mathOperation()// 計算
  clearVar()// 清空
  display2El.innerText = result
  tempResultEl.innerText = ''
  dis2Num = result
  dis1Num = ''
  // romanNum = parseInt(result);//romanNum要是整數
  romanName = intToRoman(result)
  // console.log(romanName);
  romanNumEl.innerText = romanName// 羅馬數字

  // localStorage存取
  localStorage.setItem('result', result)
  localStorage.setItem('roman', romanName)
})

// 點擊清空所有值
clearAllEl.addEventListener('click', (e) => {
  display1El.innerText = '0'
  display2El.innerText = '0'
  tempResultEl.innerText = '0'
  romanNumEl.innerText = ''
  dis1Num = ''
  dis2Num = ''
  result = ''
  romanNum = ''
})

// 點擊清空上一個輸入的值
clearLastEl.addEventListener('click', (e) => {
  display2El.innerText = ''
  dis2Num = ''
})

// 數字轉羅馬函式
// 先把各種狀況存進陣列中
const ROMANS = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1]
]

function intToRoman (num) {
  num = parseInt(num)
  let result = ''
  // 直接去跑陣列的長度，從1000、900、500、400...處理到1
  for (let i = 0; i < ROMANS.length; i++) {
    // 把這一次處理的數字放進變數中
    const [roman, n] = ROMANS[i]
    /* 跑迴圈，如果num，比這次要處理的數字還大就繼續跑，
          如果num比較小就會跳出這次的迴圈，要處理的數字會慢慢變小，直到1 */
    while (num >= n) {
      // 進入後先加上這次處理數字對應的羅馬字元
      result += roman
      // 之後num就減掉處理過的數字，所以num會越來越小
      num -= n
    }
  }
  // 跑完後num會剩0，result也會是處理對應完的羅馬字元
  return result
};
// console.log(intToRoman(1.5));

// 重整後留值
romanLocal = localStorage.getItem('roman')
resultLocal = localStorage.getItem('result')
display2El.innerText = resultLocal
romanNumEl.innerText = romanLocal
