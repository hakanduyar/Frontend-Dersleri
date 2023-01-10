// let isim = "Ahmet";
const isim = "Ahmet"; /*const değiştirelemez*/
var soyisim = "Yılmaz";
var tamisim = isim + " " + soyisim;
// var yas = "25" + "1";
var yas = 25 + 1;
// yas += 10; yas 26 nın üzerine 20 ekle
// var buYil = 2023;
var buYil = new Date().getFullYear();
var yetiskinMi = yas > 18;
// {
//   let isim = "Ahmet"; let sadece bloğun içinde çalışır. var ise blok dışında çalışmaya devam eder.
//   var isim = "Ahmet";
//   console.log("isim", isim);
// }
// isim = "Mehmet";
console.log(yas > 18);
console.log(yetiskinMi);
console.log("isim", isim);
console.log("selam Dünya!");
// console.log(2 ** 3); 2 üzeri 3 demek
// console.log(++yas); önce yaşı 1 arttır sonra ekrana yaz demek.
// console.log(yas++); önce yaşı ekrana yaz sonra 1 arttır demek.
console.log(isim, soyisim);
console.log(tamisim, yas);
console.log("Doğum yılı:", buYil - yas);

//   function scrollFn() {
//     if (window.pageYOffset > 100) {
//       document.getElementById("menu").classList.add("menu-scroll");
//     } else {
//       document.getElementById("menu").classList.remove("menu-scroll");
//     }
//   }
