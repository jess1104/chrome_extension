let socerData = [
  {
    tittleF: "年輕人",
    tittleS: "費倫斯滑落世",
    date: "8/20/2021 03:00",
    score: [3.188, 2.012, 2.001],
    score2: [+2.5, -2.0],
    score3: [1.99, 1.862],
    num: +9,
    event: "冠軍聯賽",
  },
  {
    tittleF: "馬爾默足球會",
    tittleS: "盧多格德斯",
    date: "8/20/2021 03:00",
    score: [3.138, 2.012, 2.001],
    score2: [+2.0, -2.0],
    score3: [1.97, 1.562],
    num: +10,
    event: "德甲",
  },
  {
    tittleF: "西班牙人",
    tittleS: "比利雅雷拉爾體育",
    date: "8/20/2021 03:00",
    score: [2.188, 2.812, 2.301],
    score2: [+1.5, -3.0],
    score3: [1.49, 1.862],
    num: +29,
    event: "冠軍聯賽",
  },
];
let gamesData = [
  {
    tittleF: "英勇",
    tittleS: "Allstar 戰隊",
    date: "8/20/2021 03:45",
    score: [1.655, 2.22],
    score2: [+1.5, -1.5],
    score3: [1.671, 2.35],
    num: +65,
  },
  {
    tittleF: "英勇(Map 3)",
    tittleS: "Allstar 戰隊",
    date: "8/20/2021 17:45",
    score: [1.765, 1.22],
    score2: [+2.5, -1.5],
    score3: [1.881, 2.35],
    num: +55,
  },
];
let tennisData = [
  {
    tittleF: "Cabal J-S / Farah R",
    tittleS:"Krajinovic F / Martin F"
  },
];
// 初始足球資料
let gamesList = document.querySelector(".allgames");
function init() {
  let str = "";
  socerData.forEach(function (item, index) {
    let content = `
    <div class="games"> 
        <div class="metaData">
            <p>${item.tittleF}</p>
            <p>${item.tittleS}</p>
            <p>${item.date}</p>
        </div>
        <div class="score">
            <button><span>${item.score[0]}</span></button>
            <button><span>${item.score[1]}</span></button> 
            <button><span>${item.score[2]}</span></button>
        </div>
        <div class="handicap">
            <button>
                <span>${item.score2[0]}</span>
                <span>${item.score3[0]}</span>
            </button>
            <button>
                <span>${item.score2[1]}</span>
                <span>${item.score3[1]}</span>
            </button>
        </div>
        <div class="empty">
            <p>+${item.num}</p>
        </div>
    </div>`;
    str += content;
    console.log(str);
  });
  gamesList.innerHTML = str;
}
init();
const socerBut = document.querySelector(".soc");
console.log(socerBut);
socerBut.addEventListener("click", function () {
  init();
});
const lolBut = document.querySelector(".lol");
console.log(lolBut);
lolBut.addEventListener("click", function () {
  let str = "";
  gamesData.forEach(function (item) {
    let content = `
        <div class="games"> 
        <div class="metaData">
            <p>${item.tittleF}</p>
            <p>${item.tittleS}</p>
            <p>${item.date}</p>
        </div>
        <div class="score">
            <button><span>${item.score[0]}</span></button>
            <button><span>${item.score[1]}</span></button> 
        </div>
        <div class="handicap">
            <button>
                <span>${item.score2[0]}</span>
                <span>${item.score3[0]}</span>
            </button>
            <button>
                <span>${item.score2[1]}</span>
                <span>${item.score3[1]}</span>
            </button>
        </div>
        <div class="empty">
            <p>+${item.num}</p>
        </div>
    </div>`;
    str += content;
  });
  gamesList.innerHTML = str;
});

const socGroup = document.querySelector("#soc_group");
console.log(socGroup);

socGroup.addEventListener("click", function (e) {
  console.log(e.target.innerText);

  let str = "";
  socerData.forEach(function (item) {
    console.log(item.event == e.target.innerText);
    if (e.target.innerText == item.event) {
      str += `
            <div class="games"> 
                <div class="metaData">
                    <p>${item.tittleF}</p>
                    <p>${item.tittleS}</p>
                    <p>${item.date}</p>
                </div>
                <div class="score">
                    <button><span>${item.score[0]}</span></button>
                    <button><span>${item.score[1]}</span></button> 
                    <button><span>${item.score[2]}</span></button>
                </div>
                <div class="handicap">
                    <button>
                        <span>${item.score2[0]}</span>
                        <span>${item.score3[0]}</span>
                    </button>
                    <button>
                        <span>${item.score2[1]}</span>
                        <span>${item.score3[1]}</span>
                    </button>
                </div>
                <div class="empty">
                    <p>+${item.num}</p>
                </div>
            </div>`;
    }
  });
  gamesList.innerHTML = str;
});

// footer
let footerData =[
    {
        tittle:"體育博彩",
        content:["足球博彩","籃球博彩","棒球博彩","美式足球博彩","網球博彩","冰上曲棍球博彩"]
    },
    {
        tittle:"關於Pinnacle(畢諾克）",
        content:["企業","報導","合作夥伴","B2B","為何選畢諾克"]
    },
    {
        tittle:"政策",
        content:["責任博彩","條款和條件","隱私政策","cookie政策"]
    },
    {
        tittle:"說明與資源",
        content:["聯絡我們","博彩歸則","說明","系統狀態","網站地圖","付款選項"]
    },
    {
        tittle:"社群",
        content:["Facebook","Twitter","Linkedin","YouTube","Apple Podcast","Spotify","Soundcloud"]
    }
]
// footer卡關區因為tittle跟content數不同
const footer = document.querySelector('.footer');
let str = "";
footerData.forEach(function(item){
    let content = `<div><h3>${item.tittle}</h3>
    <a href="#">${item.content[0]}</a>
    <a href="#">${item.content[1]}</a>
    <a href="#">${item.content[2]}</a>
    <a href="#">${item.content[3]}</a>
    <a href="#">${item.content[4]}</a>
    <a href="#">${item.content[5]}</a>
    <a href="#">${item.content[6]}</a>
    </div>`
    str+=content;
    console.log(str);
});
footer.innerHTML=str;