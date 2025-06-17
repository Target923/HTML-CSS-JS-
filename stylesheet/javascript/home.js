// const button = document.getElementById('myButton');
// button.addEventListener('click', () => {
//     alert('ボタンがクリックされました！');
// });

const myObject = {
    message: "Hello from myObject",

    // 通常関数
    logMessageRegular: function() {
        console.log(this.message); // thisはmyObject

        setTimeout(function() {
            // ここでの this は window (または undefined 厳格モードの場合) を指す
            // 外側の myObject を指さないため、this.message は undefined になる
            console.log("Regular function inside setTimeout:", this.message);
        }, 100)
    },

    // アロー関数
    logMessageArrow: function() {
        console.log(this.message) // thisはmyObject

        setTimeout(() => {
            // アロー関数なので、外側のスコープ (logMessageArrowが定義された場所) の this を継承する
            // つまり、ここでの this も myObject を指す
            console.log("Arrow function inside setTimeout:", this.message);
        }, 100)
    }
};
myObject.logMessageRegular();
myObject.logMessageArrow();

// ボタンクリックイベント
const button = document.getElementById('myButton');

// thisは(button)を指す
button.addEventListener('click', function() {
    console.log("Button (regular function):", this);
});

// thisはアロー関数が定義されたスコープを指す
button.addEventListener('click', () => {
    console.log("Button (arrow function):", this);
})

// アロー関数で要素自体にアクセスする際は、eventオブジェクトを使う
button.addEventListener('click', event => {
    console.log("Button (arrow function via event):", event.target); // <button id="myButton">...</button>
})

// 天気によってメッセージを変える
const weather = '晴れ';
const messageElement = document.getElementById('weatherMessage');
if (weather === '晴れ') {
    messageElement.textContent = '今日は素晴らしい晴天です！お出かけしましょう！';
    messageElement.classList.add('weather-sunny');
} else if (weather === '曇り') {
    messageElement.textContent = '今日は曇りです。傘はいるかな？';
    messageElement.classList.add('weather-cloudy');
} else if (weather === '雨') {
    messageElement.textContent = '今日は雨です。傘を忘れずに。';
    messageElement.classList.add('weather-rainy');
} else {
    messageElement.textContent = '天気情報が不明です。';
}

// 送料無料にする計算
const rankA = 165;
const rankB = 300;
const rankC = 10000;
function calculateShippingFee(amount) {
    let shippingFee = 0

    if (amount >= 10000) {
        shippingFee = rankA;
        console.log(`現在の送料は${shippingFee}円です`);
    } else if (amount >= 5000) {
        shippingFee = rankB;
        console.log(`現在の送料は${shippingFee}円です あと${10000 - amount}円で送料が165円になります`);
    } else {
        shippingFee = rankC;
        console.log(`現在の送料は${shippingFee}円です あと${5000 - amount}円で送料が300円になります`);
    }
    return shippingFee;
}

const totalPrice = 2500;
calculateShippingFee(totalPrice);
console.log(`合計金額: ${totalPrice}円`);

// ログイン判定
const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn && isAdmin) {
    console.log('ようこそ！管理者様！');
} else if (isLoggedIn) {
    console.log('一般ユーザーの方、こんにちは');
} else {
    console.log('ログインしなさい');
}

// 果物リストの表示
const fruits = ['りんご', 'バナナ', 'みかん', 'いちご'];
const fruitListUl = document.getElementById('fruitList');
let listItemsHtml = '';

for (let i = 0; i < fruits.length; i++) {
    // length: 配列の要素数
    listItemsHtml += `<li>${fruits[i]}</li>`;
}
fruitListUl.innerHTML = listItemsHtml;

// forEach
const movies = ['千と千尋の神隠し', '君の名は。', '天気の子', 'もののけ姫'];
const movieListUl = document.getElementById('movieList');
let movieItemsHtml = '';

// array.forEach(function(要素, インデックス, 配列全体) {処理})
movies.forEach((movie, index) => {
    movieItemsHtml += `<li>${index + 1}. ${movie}</li>`
});
movieListUl.innerHTML = movieItemsHtml;