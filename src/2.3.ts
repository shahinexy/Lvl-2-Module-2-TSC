{
    // generic type 

    // Generic arrat 
    
    type GenericArray<T> = Array<T>

    // const rollNnmber : number[] = [1,2,3,4];
    // type GenericArray = Array<number>
    // const rollNnmber : Array<number> = [1,2,3,4];
    const rollNnmber : GenericArray<number> = [1,2,3,4];

    const mentor : GenericArray<string> = ["Mr. S", "Mr. E", "Mr. J"];

    const boolArray : GenericArray<boolean> = [true, false, true];


    // Generic array of Object 

    const user : GenericArray<{name: string, age: number}> = [
        {
            name: "Shahin",
            age: 20
        },
        {
            name: "Shifat",
            age: 21
        }
    ]


    // Generic tuple

    type GenericTuple<X,Y> = [X,Y]

    const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"]

    const userWithID : GenericTuple<number, {name:string, email: string}> = [123, {name: 'Shiner', email: "shiner@gmail.com"}]

}