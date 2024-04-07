// HTML'den aldığımız etiketler
var menuList = document.querySelector(".menu-area");
// bütün butonları çağırma
var buttons = document.querySelectorAll(".filter-btn");
console.log(buttons);

//! Olay İzleyicileri
// sayfanın yüklenme anını izleme
document.addEventListener("DOMContentLoaded", getMenu);
// döndüğümüz her bir buton için tıklanma olayını izledim
buttons.forEach(function (btn) {
  btn.addEventListener("click", filterCategory);
});
// Menu değişkenine bütün fonksiyonlarda erişebilmek için globalde tanımladık
var menu = [];

// try-catch
// try: veritabanına istek atmamızı sağlar
// catch: hata ayıklama
async function getMenu() {
  try {
    // apiye istek atma
    var res = await fetch("db.json");
    // json formatındaki verileri js objesine çevir
    var data = await res.json();
    // ürünler verisini güncelle
    menu = data.menu;
    // api'den gelen cevabı ekrana aktaracak fonksiyona veriyi gönderdik
    console.log(data.menu);
    renderMenu(data.menu);
  } catch (error) {
    // try kısmındaki kod hata olursa çalışır
    console.log(error);
  }
}
// apiden gelen ürünleri ekrana basacak
function renderMenu(data) {
  // diziyi dönüp bir değişkene aktardık
  var menuHtml = data.map(function (item) {
    return `
    <div id="card">
        <img src="${item.img}" alt="" />
        <div class="card-info">
        <div class="name">
            <h3>${item.title}</h3>
            <p>$ ${item.price}</p>
        </div>
        <p class="desc">
            ${item.desc}
        </p>
        </div>
    </div>
    
    `;
  });
  // diziyi stringe çevirdik
  menuHtml = menuHtml.join(" ");
  //oluşan kartları html'e gönderdik.
  menuList.innerHTML = menuHtml;
}
// ürünleri filtreler
function filterCategory(e) {
  // seçtiğimiz kategori
  var selected = e.target.dataset.category;
  // tıkladığımız butonun dataset özelliğindeki category ile menu dizisindeki category eşit ise bunu filtrele
  var filtred = menu.filter(function (item) {
    return item.category === selected;
  });
  console.log(filtred);

  console.log(selected);
  if (selected === "all") {
    // hepsi seçilirse bütün ürünleri ekrana bas
    renderMenu(menu);
  } else {
    renderMenu(filtred);
  }
}
// === verinin type nı ve değerini denetler
// == verinin değerini denetler
if (10 === "10") {
  console.log("eşit");
}
