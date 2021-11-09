// * **Opdracht 4a:** Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één
// enkel tv-object (zoals `inventory[0]` of `inventory[6]`) verwacht en de naam op de volgende manier
// samenvoegt: `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`. Test
// of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.

function createTvName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}
//
// const tvName = createTvName(inventory[2]);
// console.log(tvName);

// * **Opdracht 4b:** Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als
// parameter verwacht (zoals `379`) en daar de volgende string van maakt: `€379,-`. Test of jouw functie ook werkt
// wanneer er een andere tv-prijs wordt meegegeven.

function createTvPrice(price) {
    return `${price.price},-`;
}
//
// const tvPrice = createTvPrice(inventory[1]);
// console.log(tvPrice);


// * **Opdracht 4c:** Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in
// zowel _inches_ als _cm_. Doe dit door een functie te schrijven die één screen-sizes array verwacht (
//     zoals `inventory[0].availableSizes`) en de groottes op de volgende manier
// samenvoegt: `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
// etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
// schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`.
//     Test of jouw functie werkt in alle mogelijke gevallen.

// for loop voor het uitrekenen van inches naar cm's

/* poging 1 */
// function createScreenSize(size) {
//     let sizeInInches = [];
//     let sizeInCms = [];
//     for (let i = 0; i < size.length; i++) {
//         sizeInInches = size.availableSizes;
//         sizeInCms = size.availableSizes * 2.54;
//     }
//     return sizeInInches + sizeInCms;
// }
//
// const screenSizes = createScreenSize(inventory[3]);
// console.log(screenSizes);

/* poging 2 - 9-11 */
function createScreenSizeString(size) {
    let screenSizeString = "";
    for (let i = 0; i < size.availableSizes.length; i++) {
        // if (i === size.availableSizes.length - 1) {
        //     screenSizeString += `${size.availableSizes[i]} inch (${size.availableSizes[i] * 2.54} cm)`;
        // } else {
            screenSizeString += `${size.availableSizes[i]} inch (${size.availableSizes[i] * 2.54} cm)`;
        // }
        if (i < size.availableSizes.length - 1) {
            screenSizeString = `${screenSizeString} | `
        }
    }
    return screenSizeString;
}

// const screenSizeString = createScreenSizeString(inventory[4]);
// console.log(screenSizeString);

// * **Opdracht 4d:** Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
// Gebruik hiervoor de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

/* Poging 1 */
// function tvStringArray(tvArray) {
//     const tvBlockPreview = document.getElementById('inventory-tvs');
//     const tvBlock = tvArray.map((tv) => {
//         return `${tv.brand} ${tv.type} - ${tv.name}
//         ${tv.price},-
//         ${tv.availableSizes[i]} inch (${tv.availableSizes[i] * 2.54} cm) |`
//     })
//     tvBlockPreview.innerHTML = `${tvBlock.join}`
// }
//
// const tvBlockSite = tvStringArray(inventory[2]);
// console.log(tvBlockSite);

/* Poging 2*/
const singleTvContainer = document.getElementById('inventory-tvs');

singleTvContainer.innerHTML = `
    <h3>${createTvName(inventory[3])}</h3>
    <h4>${createTvPrice(inventory[3])}</h4>
    <p>${createScreenSizeString(inventory[3])}</p>
`;

// * **Opdracht 4e:** Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je
// natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
// Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De
// overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan
// te roepen!

function generateTvList(tvArray) {
    const tvModelList = document.getElementById('inventory-models');

    const modelItems = tvArray.map((tvObject) => {
        return `
        <li>
            <h3>${createTvName(tvObject)}</h3>
            <h4>${createTvPrice(tvObject)}</h4>
            <p>${createScreenSizeString(tvObject)}</p>
        
        </li>
        `;
    });
    tvModelList.innerHTML = `${modelItems.join('')}`;
}

generateTvList(inventory);