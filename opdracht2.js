// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

// #### Opdracht 2 - Elementen in de DOM plaatsen
// _Tip_: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon
// een oude vertrouwde for-loop voor!
//
// * **Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

// aantal verkochte tv's per type berekenen
// totaal aantal verkochte tv's berekenen --> opslaan in een nieuwe variabele


// for (let i = 0; i < inventory.length; i++) {
//     let soldPerType = inventory.originalStock - inventory.sold;
//     let totalSold = 0;
//     totalSold = totalSold + soldPerType;
// }
//
// console.log(totalSold);

// const totalSoldTvs = inventory.map((sold) => {
//     let totalSold = 0;
//     for (let i = 0; i < inventory.length; i++) {
//         let perType = sold.originalStock - sold.sold;
//         totalSold = totalSold + perType;
//     }
//     return totalSold;
// })
//
// console.log(totalSoldTvs);

// const totalSoldTvs = inventory.map((sold) => {
//     return sold.originalStock - sold.sold;
//     let totalSold = 0;
//     for (let i = 0; i < totalSoldTvs.length; i++) {
//         totalSold = totalSold + sold[i];
//     }
//     return totalSold;
// })
//
// console.log(totalSoldTvs);

// console.log(totalSold);

/* dit berekent hoeveel er nog over zijn?? */
// const totalSoldTvs = inventory.map((sold) => {
//     return sold.originalStock - sold.sold;
// })
//
// let totalSold = 0;
// for (let i = 0; i < totalSoldTvs.length; i++) {
//     totalSold = totalSold + totalSoldTvs[i];
// }
//
// console.log(totalSold);

const totalSoldTvs = inventory.map((sold) => {
    return sold.sold;
})

let totalSold = 0;
for (let i = 0; i < totalSoldTvs.length; i++) {
    totalSold = totalSold + totalSoldTvs[i];
}

console.log(totalSold);

// * **Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.
// * **Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
// console.

const totalBoughtTvs = inventory.map((bought) => {
    return bought.originalStock;
})

let totalBougth = 0;
for (let i = 0; i < totalBoughtTvs.length; i++) {
    totalBougth = totalBougth + totalBoughtTvs[i];
}

console.log(totalBougth);

// * **Opdracht 2d:** Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.
// * **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.

const totalLeftTvs = inventory.map((sold) => {
    return sold.originalStock - sold.sold;
})

let totalLeft = 0;
for (let i = 0; i < totalLeftTvs.length; i++) {
    totalLeft = totalLeft + totalLeftTvs[i];
}

console.log(totalLeft);