import axios from "axios";
import { reloadHeader } from "../../modules/header";
import { getData, postData } from "../../modules/http.requests";
// import { regexPattern } from "../../modules/regex";
import { reloadWallet } from "../../modules/ui";
import { user } from "../../modules/user";

let welcomeEmail = document.querySelector(".welcome-email");
let allWallet = document.querySelector(".all-wallets");
let addWalletBtn = document.querySelector(".add-wallet-btn");
let modalBg = document.querySelector(".modal-bg");
let inputs = document.querySelectorAll(".modal input");
let modalBtn = document.querySelector(".modal-btn");
// Close Btn for Modal
let closeBtn = document.querySelector(".close");
let minimizeBtn = document.querySelector(".minimize");
let form = document.forms.wallet;
let selectBox = document.querySelector(".select");

// HEader Reload Function
reloadHeader();

// Welcombox Function
welcomeEmail.innerHTML = user?.email;

// Wallet Reload Function
getData("/cards?user_id=" + user?.id).then((res) => {
  if (res.status === 200 || res.status === 201) {
    if (res.data.length > 0) {
      reloadWallet(res.data, allWallet);
    }
  }
});

addWalletBtn.onclick = () => {
  modalBg.style.display = "flex";
  setTimeout(() => {
    modalBg.style.scale = "1";
  }, 4);
};

form.onsubmit = (e) => {
  e.preventDefault();
};

function save() {
  let walletData = {
    user_id: user?.id,
  };

  let fm = new FormData(form);

  fm.forEach((value, key) => {
    walletData[key] = value;
  });

  postData("/cards", walletData);
  // modalBg.style.display = "none";
}

inputs.forEach((input) => {
  modalBtn.onclick = () => {
    if (input.value) {
      save();
      location.assign('/pages/wallet/')
    } else {
      alert("Fill all the inputs");
    }
  };
});

closeBtn.onclick = () => {
  modalBg.style.scale = "0";
  setTimeout(() => {
    modalBg.style.display = "none";
  }, 200);
};

minimizeBtn.onclick = () => {
  if (modalBg.classList.contains("minimize-bg")) {
    modalBg.classList.remove("minimize-bg");
  } else {
    modalBg.classList.add("minimize-bg");
  }
};

function select(object) {
  for (const key in object) {
    let selectItem = document.createElement("option");
    selectItem.innerHTML = key;
    selectBox.append(selectItem);
  }
}

// axios.get(import.meta.env.VITE_CURRENCY_API, {
//   headers: {
//     apiKey: import.meta.env.VITE_API_KEY
//   }
// })
// .then((res) => {
//   select(res.data.symbols);
// })
