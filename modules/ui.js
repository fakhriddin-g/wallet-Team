export function reload(arr, place) {
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
      title.innerHTML = card.name;
      lang.innerHTML = card.currency;
      div.style.background = getRandomColor();
      //append
      div.append(title, lang);
      place.append(div);
   }
}
export function reloadTable(res, body) {
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
            td.innerText = data.name;
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
export function textError(info, p, text) {
   p.innerText = text;
   info.style.display = 'flex';
   setTimeout(() => {
      info.style.marginBottom = '120px'
      info.style.opacity = 1;
      setTimeout(() => {
         info.style.marginBottom = '0px'
         info.style.opacity = 0;
         setTimeout(() => {
            info.style.display = 'none'
         }, 300);
      }, 1600)
   }, 100)
}
export function getRandomColor() {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

export function selectReload(data, select) {
   for(let item in data){
      let option = document.createElement('option');
      option.value = item;
      option.innerText = item;
      select.append(option);
   }
}
export function carsdReload(data , select){
   data.forEach(item => {
      let option = document.createElement('option');
      option.value = item.name;
      option.innerText = item.name;
      select.append(option)
   });
}