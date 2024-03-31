var form = document.querySelector("form");
var main = document.querySelector("main");
console.log(main);
function parseDate(date) {
  var dateObject = new Date(date);
  var day = dateObject.getDate();
  var month = dateObject.getMonth() + 1; // javascriptte aylar 0'dan başlar,bu yüzden 1 ekliyoruz
  var year = dateObject.getFullYear();
  return day + "-" + month + "-" + year;
}

//! ekrana gelen sonuçları aktaracak fonksiyon yapısı
function renderProfile(user) {
  console.log(user);
  main.innerHTML = `
  <section id="left">
    <img
      src="${user.avatar_url}"
      alt=""
    />
    <a href="${user.html_url}" target="_blank">Profili Göster</a>
  </section>
  <section id="right">
    <div>
      <span>Açık Repolar:${user.public_repos}</span>
      <span>Açık Gistler:${user.public_gists}</span>
      <span>Takipçiler:${user.followers}</span>
      <span>Takip Edilenler:${user.following}</span>
    </div>
    <ul>
      <li>Hakkında:${user.bio}</li>
      <li>Şirket:${user.company}</li>
      <li>Website:${user.blog}</li>
      <li>Konum:${user.location}</li>
      <li>Hesap Oluşturma:${parseDate(user.created_at)}</li>
    </ul>
  </section>
  
  `;
}

//! form olayı gönderildiğinde çalışacak fonksiyon
function getInput(event) {
  // sayfanın yenilenmesini engeller
  event.preventDefault();
  // formdan kullanici ismine erişme
  var username = event.target[0].value;

  fetch(`https://api.github.com/users/${username}`)
    // gelen cevabı json yapısına çevir ve işle
    .then((res) => res.json())
    // veriyi yakala ve renderProfile fonksiyonuna parametre olarak gönder
    .then((data) => renderProfile(data));
}

// forma bir gönderilme olayı ekleme ve gönderildiğinde getInput fonksiyonunu çalıştırma
form.addEventListener("submit", getInput);
