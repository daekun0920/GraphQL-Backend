export const people = [{
    id:"0",
    name: "Daekun",
    age: 25,
    gender: "male"
},{
    id:"1",
    name: "Sammy",
    age: 22,
    gender: "female"
},{
    id:"2",
    name:"Bruno",
    age: 27,
    gender: "male"
},{
    id:"3",
    name: "Kim",
    age: 21,
    gender: "male"
},{
    id:"4",
    name: "James",
    age: 25,
    gender: "male"
},];

export const getById = id => {
    const filteredPeople = people.filter(person => id === people.id);
    return filteredPeople[0];
}