// // DOM(Document Object Modal)
// //? Seçiciler
// // document.getElementById() >> id'sine göre htmlden elementi getirir
// // document.getElementsByClassName() >> aynı class'a sahip hepsini seçer
// // document.getElementsByTagName() >> aynı etikete sahip hepsini seçer
// // document.querySelector() >>> css seçicisine göre seçer
// var paragraf = document.getElementById("parag");
// var form = document.getElementsByClassName("form");
// var ul = document.getElementsByTagName("ul");
// var form1 = document.querySelector(".form");
// var parag = document.querySelector("#parag");

// var baslik = document.querySelector("h2");
// // Elemanın yazı içeriğine müdahale etme
// baslik.innerText = "HTML";
// baslik.innerHTML = "<i>CSS</i>";
// // elemanın stillerini javascriptten değiştirme
// baslik.style.backgroundColor = "red";
// baslik.style.color = "white";
// baslik.style.padding = "20px";
// baslik.style.borderRadius = "5px";
// // class üzerinde oynama yapma
// var parag = document.querySelector("p");
// // class kaldırma
// parag.classList.remove("blue");
// // class ekleme
// parag.classList.add("green");
// parag.classList.add("border");
// // console.log(parag);

// var btn = document.querySelector(".btn");
// var inp = document.querySelector("#inp");
// var ul = document.querySelector("ul");

// console.log(inp);
// function ekranaYaz() {
//   console.log("tıklanıldı");
//   if (inp.value == "") return;
//   // htmle eleman gönderme
//   ul.innerHTML += `<li>${inp.value}</li>`;
//   // inputun içerisine girilen veriyi görme
//   inp.value = "";
// }
// // 1-hangi olayı izleycek
// // 2-olay gerçekleşince hangi fonksiyon çalışacak
// btn.addEventListener("click", ekranaYaz);

// fetch()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((cevap) => cevap.json())
  .then((veri) => console.log(veri));
