// test to see if menu.js is connected

// window.onload = function () {
//   console.log("menu.js is working")
// }

var Menu = {
    Almond_Divinity : {name: 'Almond Divinity', price: .99, history: 'x', availability: 'x'},
    Mango_Sorbet : {name: 'Mango Sorbet', price: .99, history: '', availability: ''},
    Decaf : {name: 'Decaf', price: .99, history: '', availability: ''},
    Almond_Chocolate_Coconut : {name: 'Almond Chocolate Coconut', price: .99, history: '', availability: ''},
    Alpine_Fudge_Crunch : {name: 'Alpine Fudge Crunch', price: .99, history: '', availability: ''},
    Banana_Cream_Pie : {name: 'Banana Cream Pie', price: .99, history: '', availability: ''},
    Birthday_Cake : {name: 'Birthday Cake:', price: .99, history: '', availability: ''},
    Black_Raspberry_Chocolate_Crunch : {name: 'Black Raspberry Chocolate Crunch', price: .99, history: '', availability: ''},
    Blueberry_Cobbler : {name: 'Blueberry Cobbler', price: .99, history: '', availability: ''},
    Black_Walnut : {name: 'Black Walnut', price: .99, history: '', availability: ''},
    Mint_Chocolate_Chip : {name: 'Mint Chocolate Chip', price: .99, history: '', availability: ''},
    Caramel_Apple : {name: 'Caramel Apple:', price: .99, history: '', availability: ''},
    Almond_Divinity : {name: 'Almond Divinity', price: .99, history: '', availability: ''},
    Cherries_Jubilee : {name: 'Cherries Jubilee', price: .99, history: '', availability: ''},
    Tutti_Frutti : {name: 'Tutti Frutti', price: .99, history: '', availability: ''},
    Artic_Roll : {name: 'Artic Roll', price: .99, history: '', availability: ''},
    Dame_Blanche : {name: 'Dame Blanche', price: .99, history: '', availability: ''},
    Sizzling_Brownie : {name: 'Sizzling Brownie', price: .99, history: '', availability: ''},
    Choco_Taco : {name: 'Choco-Taco', price: .99, history: '', availability: ''}

};

window.onload = function () {
  // calls the keys property of the Object to find Menu and it's associated properties, and then uses the sort method to compare them and sort them alphabetically
  const sortedFlavors = Object.keys(Menu).sort((a, b) => - (name[a] - name[b]));
  const table = document.getElementById('table')
  sortedFlavors.map((flavor, i) => {
    var row = `row${i}`;
    row = table.insertRow(i + 1)
    row.innerHTML = `<td>${sortedFlavors[i]}</td><td>$.99</td><td><a href="https://en.wikipedia.org/wiki/Ice_cream">History</a></td>`;
  })

};
