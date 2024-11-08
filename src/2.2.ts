// interface

type User = {
    name : string;
    age: number;
}

interface User1 {
    name : string;
    age: number;
}

// add extra property using type 
type userWithRoll = User & {role : String}

const user2 : userWithRoll = {
    name: "Shahin",
    age: 20,
    role: "manager"
}

// add extra property using interface 
interface userWithRoll2 extends User {
    role: string
}

const user3 : userWithRoll2 = {
    name: "Kholil",
    age: 20,
    role: "worker"
}

// type in array 
type Roll = number[];

const rollNumber: Roll = [1,2,3,4]

// interface in array 
interface Roll2 {
    [index : number] : number;
}

const rollNumber2: Roll2 = [1,2,3,4]

// type in object
type Add = (num1: number, num2 : number) => number;

const add : Add = (num1 , num2) => num1 + num2;

// interface in objecet

interface Add2 {
    (num1: number, num2 : number) : number;
}

const add2 : Add2 = (num1 , num2) => num1 + num2;


