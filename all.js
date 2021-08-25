// 足球假資料
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
// 電競假資料
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
// 網球假資料
let tennisData = [
  {
    tittleF: "Cabal J-S / Farah R",
    tittleS: "Krajinovic F / Martin F",
    date: "8/20/2021 17:45",
    score: [1.655, 2.22],
    score2: [+1.5, -1.5],
    score3: [1.671, 2.35],
    num: +65,
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
    // console.log(str);
  });
  gamesList.innerHTML = str;
}
init();

// 足球選單點擊事件
const socerBut = document.querySelector(".soc");
socerBut.addEventListener("click", function () {
  init();
});

// 電競選單點擊事件
const lolBut = document.querySelector(".lol");
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

// 網球點擊事件
const tennisBut = document.querySelector(".tennis");
tennisBut.addEventListener("click", function () {
    let str = "";
    tennisData.forEach(function (item) {
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

// 足球選單(內部)點擊事件
const socGroup = document.querySelector("#soc_group");
socGroup.addEventListener("click", function (e) {
//   console.log(e.target.innerText);

  let str = "";
  socerData.forEach(function (item) {
    // console.log(item.event == e.target.innerText);
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

// footer 假資料
let footerData = [
  {
    tittle: "體育博彩",
    content: [
      "足球博彩",
      "籃球博彩",
      "棒球博彩",
      "美式足球博彩",
      "網球博彩",
      "冰上曲棍球博彩",
    ],
  },
  {
    tittle: "關於Pinnacle(畢諾克）",
    content: ["企業", "報導", "合作夥伴", "B2B", "為何選畢諾克"],
  },
  {
    tittle: "政策",
    content: ["責任博彩", "條款和條件", "隱私政策", "cookie政策"],
  },
  {
    tittle: "說明與資源",
    content: [
      "聯絡我們",
      "博彩歸則",
      "說明",
      "系統狀態",
      "網站地圖",
      "付款選項",
    ],
  },
  {
    tittle: "社群",
    content: [
      "Facebook",
      "Twitter",
      "Linkedin",
      "YouTube",
      "Apple Podcast",
      "Spotify",
      "Soundcloud",
    ],
  },
];
// footer卡關區因為tittle跟content數不同（08.24OK)
const footer = document.querySelector(".footer");
let str = "";
footerData.map(function(item,index){
    const filteredContent = footerData.find((el)=>el.tittle===item.tittle)
    
    // console.log(filteredContent)
    // console.log(filteredContent.content)
    // const rContent = item.content.map((item)=>console.log(item))
    const renderContent = item.content.map((content)=>`<a href ="#">${content}</a>`).join('');
    // console.log(renderContent)
    // console.log(renderContent)
    str += `
    <div >
        <h3>${item.tittle}</h3>
        ${renderContent}
    </div>`;
});
footer.innerHTML = str;



// 中間 精華 賽中盤 聯盟橘條
const myTabs = document.querySelectorAll(".data > a.dataA");
// console.log(myTabs);

// 點擊移除橘條
 function myTabClicks(tabClickEvent) {
//   console.log(myTabs[1]);
  for (var i = 0; i < myTabs.length; i++) {
   myTabs[i].classList.remove("active");
  }

  const clickedTab = tabClickEvent.currentTarget; 

  clickedTab.classList.add("active");

  tabClickEvent.preventDefault();

 }
// 點擊事件
for (let i = 0; i < myTabs.length; i++) {
  myTabs[i].addEventListener("click", myTabClicks)
}
// 左側選單手風琴
const accordion = document.querySelectorAll(".contentBx ");
// console.log(accordion);
const label = document.querySelectorAll('span');
// console.log(label[1].innerText)
for(i=0 ; i<accordion.length; i++){
  // console.log(accordion[i])
  accordion[i].addEventListener('click',function(e){
    // console.log(e.target.value==undefined);
    if(e.target.value==undefined){
        this.classList.toggle('active');
    }
  })
}
// 漢堡選單
$(document).ready(function(){
    $('#icon').click(function(){
        $('.nav2').toggleClass('showBar')
    })
})