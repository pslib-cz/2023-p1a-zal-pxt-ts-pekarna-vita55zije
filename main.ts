type Odber = {
    cas: number;//v sekundách
    prikon: number;//ve wattech
}
let data: Array<Odber> = [
    { cas: 10, prikon: 3500 },
    { cas: 30, prikon: 3600 },
    { cas: 50, prikon: 3900 },
    { cas: 20, prikon: 3700 },
    { cas: 14, prikon: 3650 },
    { cas: 19, prikon: 3770 },
];
const cena = 6.70//Kč / kWh
let spotreba: number = 0;
let prumer: number = 0;
let totaltime: number = 0;
for (let i of data) {
    spotreba += (i.cas / 3600) * (i.prikon / 1000);
    totaltime += i.cas;
}

console.log("Pečení stálo:");
console.log(spotreba * cena + ' czk');
console.log("Průměrný odběr el. energie:")
console.log(spotreba / totaltime * 3600 + ' kW');
