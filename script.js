let firstName = "Merhabalar";

console.log(firstName.length);
console.log(firstName[5]);

let metin =
  "Gercekten Konuşarak İngilizce Ögren. Hemen Başvur Online Eğitim Kampanyayı Yakala. Just English Dil Okulları Online Eğitim Kursu, İngilizce Dil Eğitimi. Uzaktan İngilizce Kursu. Online Eğitim. İngilizce En Baştan Başla. En Yüksek Ders Saatleri. Genel İngilizce Kursları. Özel Kampanyalar. En Kaliteli Dil Okulu. Ödüllü Dil Okulu. Konuşturan Süper Kampanya. Kurslar: Genel İngilizce Kursu, Toefl Kursu";

console.log(metin[metin.length - 1]);
console.log(metin[0]);
console.log(metin.split("."));

const isim = "javaScript";

console.log(isim.toLowerCase());
console.log(isim.toUpperCase());
console.log(isim.substring(3));
console.log(isim.substring(0, 5));
console.log(isim.substring(2, 4));
console.log(isim.split(""));

nam = "merhaba dünya   ";

console.log(nam);
console.log(nam.trim());
console.log(nam.includes("s")); //false
console.log(nam.includes("a")); //true

console.log(nam.charAt(3)); // h
console.log(nam.charAt("8").toUpperCase());

let a = "5.4";
let b = 8;
console.log(a + b);
console.log(Number(a) + b);
console.log(parseFloat(a) + b);
console.log(parseInt(a) + b);
console.log(+a + b);

console.log(a + String(b));
console.log(a + b.toString());
console.log(a + "" + b);

let number2 = Math.PI;
console.log(number2);
console.log(Math.round(number2)); //en yakına 3
console.log(Math.floor(number2)); // zemine 3
console.log(Math.ceil(number2)); // yukarı 4

let randumNumber = Math.random();
console.log(randumNumber * 5);
console.log(Math.floor(randumNumber * 100));
console.log(Math.floor(randumNumber * 47) + 1);

//OPERATORS
let x = 45;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(x + x * y);
console.log((x + x) * y);
console.log(++x);
console.log(--x);

let c = 15;
let d = "15";

console.log(c == d); //true
console.log(c === d); //false
console.log(c !== d); //true

let num1 = 5;
let num2 = 8;
let num3 = 12;

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num2 <= num3);

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(num2 < 15 || num3 === 12);
