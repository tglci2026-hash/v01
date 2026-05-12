/* ================================================= */
/* AJOUTS FINAUX script.js */
/* PARTIE 1 */
/* ================================================= */

/* ========================= */
/* POPUP NIVEAUX */
/* ========================= */

const badgeBtn =
document.getElementById("badgeBtn");

const levelPopup =
document.getElementById("levelPopup");

const closeLevelPopup =
document.getElementById("closeLevelPopup");

if(badgeBtn){

badgeBtn.addEventListener("click", ()=>{

levelPopup.classList.remove("hidden");

});

}

if(closeLevelPopup){

closeLevelPopup.addEventListener("click", ()=>{

levelPopup.classList.add("hidden");

});

}

/* ========================= */
/* CONTACT */
/* ========================= */

const contactBtn =
document.getElementById("contactBtn");

const contactInfo =
document.getElementById("contactInfo");

if(contactBtn){

contactBtn.addEventListener("click", ()=>{

contactInfo.classList.toggle("hidden");

});

}

/* ========================= */
/* SERVICES */
/* ========================= */

const sendBtn =
document.getElementById("sendBtn");

const receiveBtn =
document.getElementById("receiveBtn");

const scanBtn =
document.getElementById("scanBtn");

const convertBtn =
document.getElementById("convertBtn");

const sendModal =
document.getElementById("sendModal");

const receiveModal =
document.getElementById("receiveModal");

const scanModal =
document.getElementById("scanModal");

const convertModal =
document.getElementById("convertModal");

/* ENVOYER */

if(sendBtn){

sendBtn.addEventListener("click", ()=>{

sendModal.classList.remove("hidden");

});

}

/* RECEVOIR */

if(receiveBtn){

receiveBtn.addEventListener("click", ()=>{

receiveModal.classList.remove("hidden");

});

}

/* SCANNER */

if(scanBtn){

scanBtn.addEventListener("click", ()=>{

scanModal.classList.remove("hidden");

});

}

/* CONVERTIR */

if(convertBtn){

convertBtn.addEventListener("click", ()=>{

convertModal.classList.remove("hidden");

});

}
/* ================================================= */
/* AJOUTS FINAUX script.js */
/* PARTIE 2 FINALE */
/* ================================================= */

/* ========================= */
/* FERMER MODALS */
/* ========================= */

document.querySelectorAll(".close-service")
.forEach(button=>{

button.addEventListener("click", ()=>{

const modalId =
button.getAttribute("data-close");

const modal =
document.getElementById(modalId);

if(modal){

modal.classList.add("hidden");

}

});

});

/* FERMER EN CLIQUANT AUTOUR */

document.querySelectorAll(".service-modal")
.forEach(modal=>{

modal.addEventListener("click",(e)=>{

if(e.target === modal){

modal.classList.add("hidden");

}

});

});

/* ========================= */
/* CALCUL ENVOI */
/* ========================= */

const sendAmount =
document.getElementById("sendAmount");

const sendResult =
document.getElementById("sendResult");

if(sendAmount){

sendAmount.addEventListener("input", ()=>{

const amount =
parseFloat(sendAmount.value) || 0;

const finalAmount =
amount - (amount * 0.01);

sendResult.innerText =
"Montant reçu = " +
finalAmount.toFixed(2) +
" BCC";

});

}

/* ========================= */
/* CALCUL RECEVOIR */
/* ========================= */

const receiveAmount =
document.getElementById("receiveAmount");

const receiveResult =
document.getElementById("receiveResult");

if(receiveAmount){

receiveAmount.addEventListener("input", ()=>{

const amount =
parseFloat(receiveAmount.value) || 0;

const finalAmount =
amount - (amount * 0.01);

receiveResult.innerText =
"Montant reçu = " +
finalAmount.toFixed(2) +
" BCC";

});

}

/* ========================= */
/* AMELIORATION POPUP */
/* ========================= */

function showPopup(text){

popup.innerText = text;

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

},2000);

}

/* ========================= */
/* SECURITE */
/* ========================= */

window.addEventListener("error",(e)=>{

console.log(
"Erreur détectée : ",
e.message
);

});

/* ========================= */
/* FIN SCRIPT */
/* ========================= */
