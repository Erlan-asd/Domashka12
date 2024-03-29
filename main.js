// 1) Напишите функцию getFullName, которая принимает объект user 
// с полями firstName и lastName, и возвращает полное имя. 
// Если какое-либо из полей отсутствует, используйте значения по умолчанию.

// function getFullName(user) {
//     const { firstName = 'Erlan', lastName = 'Diykanov' } = user;
//     return `${firstName} ${lastName}`;
// }


// const user2 = { firstName: 'Alice', lastName: 'Smith' };
// console.log(getFullName(user2));

// const user3 = { firstName: 'Ruslan'};
// console.log(getFullName(user3));



// 2) Напишите функцию printCoordinates, которая принимает объект point
//  с полями x и y, и выводит координаты точки.

// let point = { x: 5, y: 10 };

// function printCoordinates(point) {
//     console.log(`Coordinates: x = ${ point.x }, y = ${ point.y }`);
// }

// printCoordinates(point);



// 3) У вас есть вложенный массив const data = {

//     products : [
  
//       { id: 1, name: 'Product 1' },
  
//       { id: 2, name: 'Product 2' }
  
//     ]
//   Напишите функцию, используя деструктуризацию выводите название продуктов:
//   name: Product1
//   name: Product2


// const data = {
//     products: [
//         { id: 1, name: 'Product 1' },
//         { id: 2, name: 'Product 2' }
//     ]
// };

// function printProductNames(data) {
//     data.products.forEach(({ name }) => {
//         console.log(`name: ${ name }`);
//     });
// }

// printProductNames(data);