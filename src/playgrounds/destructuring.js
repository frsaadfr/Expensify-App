// const person = {
    
//     age: 22,
//     location: {
//         city: 'hyd',
//         temp: 20
//     }
// };
// const {name = 'saad', age: ages} = person;
// console.log(`${name} is ${ages}`)
// const {temp, city} = person.location
// if (city && temp)
// {console.log(`its ${temp} in ${city}`)}
// const book = {
//     title: 'hay day',
//     author: 'saad',
//     publisher: {
//         name: 'peguin'
//     }
// };
// const {name: publisherName = 'selfPublished'} = book.publisher
// console.log(publisherName);

// array destructuring
const address = ['1299 S Juniper', , 'punjab', '20089'];

const [street, country = 'afg', state, zip] = address

console.log(`you are in ${country} ${state}`)

// const item = ['coffee (hot)','2', '250', '275'];
// const [name, ,price] = item
// console.log(`${name} costs ${price}`)