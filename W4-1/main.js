let input_amount = document.getElementById("original-currency-amount");//輸入的量
let exchange_rate = document.getElementById("exchange-rate");//匯率
let from_currency = document.getElementById("from_currency");//select
let to_currency = document.getElementById("to_currency");//select

let output_amount = document.getElementById("output-text");//最底部輸出
let exchange = document.getElementById("exchange");//中間圓按鈕
let output_from = document.getElementById("from");
let output_to = document.getElementById("to");

exchange.addEventListener("click",()=>{
    [from_currency.value, to_currency.value] = [to_currency.value, from_currency.value];
    calculate();
});

var to_amount = 0;
function calculate(){
    const from_currency_value = from_currency.value;
    const to_currency_value = to_currency.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/3b0ea361e3bbb6b38bf6228c/latest/${from_currency_value}`)
    .then(res => res.json())
    .then(res => {
        // console.log(res)
        const rate = res.conversion_rates[to_currency_value];
        // console.log(rate)
        exchange_rate.value = `${rate}`//匯率帶進去
        to_amount = (input_amount.value * rate).toFixed(3);//輸入要換算的金額會去乘以匯率（取到小數第三位）＝換算後的價格
        output_from.innerText= `${input_amount.value} ${from_currency_value}`;
        output_to.innerText = `${to_amount} ${to_currency_value}`;
        output_amount.style.display="block";
    })
}
// 點擊最下面按鈕進行計算
document.getElementById("exchange_button").addEventListener("click",()=>{
    calculate();
});
