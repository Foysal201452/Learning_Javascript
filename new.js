// var firstName = 'Matilda';


//  const jonas = {
//      firstName: 'Jonas',
//      year: 1991,
//      calcAge : function(){
//         console.log(this);
//         console.log(2037-this.year);

//         const isMillenial = function(){
//             console.log(this.year >= 1981 && this.year<=1996);

//         };
//         isMillenial();
        
//  },
//  greet: function (){
//      console.log(this);
//      console.log(`Hey ${this.firstName}`);
     
//  },
//  };
 
// jonas.calcAge();


// const fo ={
//     fName:'jessica',
//     lName:'williams',
//     age :27,
// };
// console.log('before',fo);
// const marriedJessica=fo;
// marriedJessica.lName='migga';
// console.log('before',fo);

// console.log('after',marriedJessica);
// const jessica ={
//     firstName:'Jessica',
//     lastName: 'Williams',
//     age: 27,
// };
// function marryPerson(originalPerson,newLastName){
//     originalPerson.name=newLastName;
//     return originalPerson;
// }
// const marriedJessica = marryPerson(jessica,'Davis');
// console.log('Before:',jessica);
// console.log('After:',marriedJessica);

// Use StructuredClone







// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],



const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    
    },
    orderDelivery: function({starterIndex=1,mainIndex=0,time=9.00,address}){
        console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}will be delivered
            to ${address} at ${time}`);

    },
    
    
};

const openingHours= {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};


// const arr = [2,3,4]
// const [x,y,z] = arr;
// console.log(x,y,z);




// let [main,, secondary]= restaurant.categories;
// console.log(main,secondary);


// const temp = main;
// main=secondary;
// secondary=temp;
// const[starter,mainCourse]=restaurant.order(2 ,0);
// console.log(starter,mainCourse);


// const {name,openingHours,categories} = restaurant;
// console.log(name,openingHours,categories);

// const{
//     name:restaurantName,
//     openingHours: hours,
//     categories:tags,
// }=restaurant;
// console.log(restaurantName,hours,tags);

// const{ menu =[] ,starterMenu: starters=[] }= restaurant;
// console.log(menu,starters);


//Mutating Variables

// let a =111;
// let b=222;
// const obj= {a:23,b:7,c:14};
// const {
//     a:foys,
//     b:far,
// }=obj;
// ({a,b}=obj);
// console.log(foys,far);
// restaurant.orderDelivery({
//     time:'12.40',
//     address:'Vita-dela,21',
//     mainIndex:2,
//     starterIndex:2,
// });
// restaurant.orderDelivery({
//     address:'Vita-dela,21',
    
//     starterIndex:2,
    
// })

// const arr = [7,8,9];
// const badNewArr = [1,2,arr];
// console.log(badNewArr);

// const newArr = [1,2,...arr];
// console.log(newArr);


// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const arr = [1,2, ...[3,4]];
// const [a,b,...others]= [1,2,3,4,5];
// console.log(a,b, others);


// console.log(3|| 'jonas');

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests ||10;

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

//5
// const{odds:{team1,x:draw,team2}} = game;
// console.log(`Odd of victory Bayern Munichch ${team1}`);
// console.log(`Odd of draw ${draw}`);
// console.log(`Odd of victory Brussia Dortmund${team2}`);




const printGoals = function(...players){
console.log(`${players.length}goals were scored`);
console.log(...players);
};
printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
printGoals('Davis','Muller');


// const days =['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of days){
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open;
//   console.log(`On ${day}, we open at ${open}`);

// }

// console.log(restaurant.order?.(0,1)?? 'Method Doesnot Exist');
// const users = [{name:'Jonas', email:'jonas@.com'}];
// console.log(users[1]?.name ?? 'user array empty');




const properties = Object.keys(openingHours);
console.log(properties);
let openstr=`We are open on ${properties.length} days:`;
for(const day of properties){
  openstr += `${day},`;
}
console.log(openstr);


// for(const item of game.scored.entries()){
//   console.log(item[0]+1,item[1]);// IN array just .entries
// }

for(const[i, player] of game.scored.entries()){
  console.log(`Goal ${i+1}: ${player}`);// IN array just .entries
}




// Challenge 2 



const{odds:{team1,x:draw,team2}} = game;
const {t1,t2} = game;
console.log(`Odd of ${t1} ${team1}`);
console.log(`Odd of draw ${draw}`);
console.log(`Odd of ${t2} ${team2}`);

// let message = `Odd of victory Bayern Munich `
const odds = Object.values(game.odds);// for object.values
let average = 0;
for(const odd of odds)average += odd;

average/=odds.length;

console.log(average);




// Little Hard 
for(const [team,oddsValue] of Object.entries(game.odds)){
  const teamStr = team === 'x'? 'draw' :` victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${oddsValue}`);

}