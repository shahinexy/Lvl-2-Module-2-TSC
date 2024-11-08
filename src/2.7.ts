{
    // gewneric constraints with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    // manually
    type Owner = "bike" | "car" | "ship";

    const person : Owner = "car"

    // using keyof 
    type Owner2 = keyof Vehicle;

    const person2 : Owner2 = "ship"



    const getPropertyValue = <X, Y extends keyof X> (obj : X, key: Y) =>{
        return obj[key];
    }

    const user = {
        name : "Shahin",
        age: 20,
        address: "Narayanganj"
    }

    const result = getPropertyValue(user, "name")

    const car ={
        model: "BMW",
        year: 2006
    }

    const  resultOfCar = getPropertyValue(car, "year")

    //
}