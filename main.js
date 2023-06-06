
let wrapper = document.querySelector('.card-container__wrapper');
let body = document.querySelector('tbody');

//arrays
let data = [
   {
      title: 'Visa',
      lang: "RUB",
      color: 'linear-gradient(84.37deg, #D7816A 2.27%, #BD4F6C 92.26%)',
   },
   {
      title: 'Visa',
      lang: "RUB",
      color: 'linear-gradient(84.37deg, #5F0A87 2.27%, #A4508B 92.26%)',
   },
   {
      title: 'Visa',
      lang: "RUB",
      color: 'linear-gradient(84.37deg, #20BF55 2.27%, #01BAEF 92.26%)',
   },
   {
      title: 'Visa',
      lang: "RUB",
      color: 'linear-gradient(84.37deg, #380036 2.27%, #0CBABA 92.26%)',
   },
]
let arr_table = [
   {
      type: "VISA",
      categories: "Автомобиль",
      price: "414,000,000",
      time: "4 дня назад",
   },
   {
      type: "VISA",
      categories: "Автомобиль",
      price: "414,000,000",
      time: "4 дня назад",
   },
   {
      type: "VISA",
      categories: "Автомобиль",
      price: "414,000,000",
      time: "4 дня назад",
   },
   {
      type: "VISA",
      categories: "Автомобиль",
      price: "414,000,000",
      time: "4 дня назад",
   },
   {
      type: "VISA",
      categories: "Автомобиль",
      price: "414,000,000",
      time: "4 дня назад",
   },
];

//function
function reload(arr, place) {
   let doc = document
   place.innerHTML = '';

   for (let card of arr) {
      let div = doc.createElement('div');
      let title = doc.createElement('div');
      let lang = doc.createElement('div');
      //class
      div.classList.add('item');
      title.classList.add('item__title');
      lang.classList.add('item__lang');
      //inner
      title.innerHTML = card.title;
      lang.innerHTML = card.lang;
      div.style.background = card.color;
      //append
      div.append(title, lang);
      place.append(div);
   }
}
function reloadTable(res, body) {
   let doc = document;
   body.innerHTML = ''
   let n = 1;
   for (let data of res) {
      let tr = doc.createElement('tr');
      for (let i = 0; i < 5; i++) {
         let td = doc.createElement('td');
         if (i === 0) {
            td.innerText = n;
         } else if (i === 1) {
            td.innerText = data.type;
         } else if (i === 2) {
            td.innerText = data.categories;
         } else if (i === 3) {
            td.innerText = data.price;
         } else if (i === 4) {
            td.innerText = data.time;
         }
         tr.append(td);
      }
      body.append(tr);
      n++;
   }
}

//вызовы
reload(data, wrapper)
reloadTable(arr_table, body)