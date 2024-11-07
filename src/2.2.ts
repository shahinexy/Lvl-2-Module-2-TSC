// interface

type User = {
    name : string;
    age: number;
}

interface User1 {
    name : string;
    age: number;
}

type userWithRoll = User & {role : String}

const user2 : userWithRoll = {
    name: "Kholil",
    age: 20,
    role: "manager"
}