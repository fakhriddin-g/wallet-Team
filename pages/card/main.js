import { reloadHeader } from "../../modules/header";
import { getData } from "../../modules/http.requests";
import { reloadTransaction } from "../../modules/ui";
import { user } from "../../modules/user";

let container = document.querySelector(".card-image")
let inner = document.getElementById("inner")
let cardName = document.querySelector(".card-name")
let cardUserName = document.querySelector(".card-user-name")
let cardBalance = document.querySelector(".card-balance")
let cardCurrency = document.querySelector(".card-currency")
let transactionContainer = document.querySelector(".transaction .container")

reloadHeader()

const card_id = location.search.split('=').at(-1)

getData('/cards/' + card_id).then(res => {
  inner.innerHTML = res.data.name,
  cardName.innerHTML = 'Карта: ' + res.data.name
  cardBalance.innerHTML = 'Баланс: ' + res.data.balance + '$'
  cardCurrency.innerHTML = 'Валюта: ' + res.data.currency
})
cardUserName.innerHTML = 'ФИО: ' + user?.name


getData('/transactions?wallet.id=' + card_id).then(res => {
  reloadTransaction(res.data, transactionContainer)
})


function styleCss() {
  // Init


  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function(event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function() {
      return "(" + this.x + ", " + this.y + ")";
    }
  };

  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(container);

  //-----------------------------------------

  var counter = 0;
  var updateRate = 10;
  var isTimeToUpdate = function() {
    return counter++ % updateRate === 0;
  };

  //-----------------------------------------

  var onMouseEnterHandler = function(event) {
    update(event);
  };

  var onMouseLeaveHandler = function() {
    inner.style = "";
  };

  var onMouseMoveHandler = function(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //-----------------------------------------

  var update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight / 2).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
  };

  var updateTransformStyle = function(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTransform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

  //-----------------------------------------

  container.onmouseenter = onMouseEnterHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmousemove = onMouseMoveHandler;
};
styleCss()