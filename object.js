// const mayislar = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

// const toplamMayis = mayislar.reduce((toplam, deger) => toplam + deger, 0);

// console.log("TOPLAM MAYIS:", toplamMayis);

// const zamliMaasToplami = mayislar
//   .filter((m) => m >= 6000 && m <= 10000)
//   .map((m) => m * 1.1)
//   .reduce((t, m) => t + m);

// console.log("ZAMLI MAASLAR:", zamliMaasToplami);

// const ages = [18, 22, 78, 34, 78, 79, 15];
// const check = ages.every((age) => age >= 18);
// check ? console.log("All ages are over 18") : console.log("Sum are under 18");

// const over80 = ages.some((a) => a >= 80);
// console.log(over80);

// const ageBigThan30First = ages.find((age) => age >= 30);
// const ageBigThan30Last = ages.findLast((age) => age >= 30);
// console.log(ageBigThan30First, ageBigThan30Last);

// console.log(ages.find((age) => age >= 80));

// const foundIndex = ages.findIndex((age) => age > 18);
// console.log(foundIndex);

const car = {
  brand: "Meredes",
  model: 2020,
  engine: 2000,
  speed: 5,
  color: ["pink", "black", "blue", "green"],
};
console.log(car);

console.log(car.brand);
console.log(car.color[0]);

console.log(car.color);
car.color.forEach((c) => console.log(c));

console.log(car.Engine);

car.speed = 7;
car.color = "Morcivert";
car.class = "E";

console.log(car);

// console.log("ENGINE:", car["engine"]);

// const myKey = prompt(
//   "Araba ile ilgili Neyi ogrenmek istersiniz: speed, color,engine ..."
// );

// alert(car[myKey]);

const myCar = new Object();
myCar.brand = "Mercedes";
myCar.model = 2022;
myCar.speed = 7;

console.log(myCar.speed);
console.log(myCar["model"]);

console.log(myCar);


function