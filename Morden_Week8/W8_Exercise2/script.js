
const jsonString = '{"name": "Jovan", "age": 21, "hobbies":["eating","sleeping"]}';

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); 
console.log(jsonObject.age);  
console.log(jsonObject.hobbies);


const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString);  