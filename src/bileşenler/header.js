const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const div1 = document.createElement("div");
  div1.setAttribute("class", "header");

  const span1 = document.createElement("span");
  span1.classList.add("date");
  span1.textContent = tarih;
  div1.appendChild(span1);

  const baslik1 = document.createElement("h1");
  baslik1.textContent = baslik;
  div1.appendChild(baslik1);

  const span2 = document.createElement("span");
  span2.setAttribute("class", "temp");
  span2.textContent = yazi;
  div1.appendChild(span2);
  return div1;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const haber = Header(
    "Makine Mühendisliği öğrencileri harika bir başarıya imza attı",
    "10.10.2023",
    "Makine mühendisi öğrencileri,dünya çapında düzenlenen teknoloji yarışmasında birinci oldu."
  );

  const selectedElement = document.querySelector(secici);
  selectedElement.appendChild(haber);
};

export { Header, headerEkleyici };
