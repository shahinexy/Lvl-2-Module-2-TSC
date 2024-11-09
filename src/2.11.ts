{
    // Utility types

   
    type Person = {
        name : string;
        age: number;
        email? : string;
        contactNo: number
    }


    // Pick --> take
    type Number = Pick<Person, 'name'|'age'>


    // Omit --> remove
    type ContactInfo = Omit<Person, 'name' | 'age'>

    // Required  --> Make every value required
    type PersonRequir = Required<Person>


    // Partial --> Make every value Optional
    type PersonPartial = Partial<Person>

    // Read Only  --> can not change anything
    type PersonReadOnly = Readonly<Person>

    const person1 : PersonReadOnly = {
        name: 'shahin',
        age: 20,
        contactNo: 1609729909
    }

    // person1.name = 'sin' == cant chnage the value it's read only


    // Record

    // type MyObj ={
    //     a: string;
    //     b: string
    // }

    type MyObj = Record<string, string>

    const EpmtyObj : Record<string, unknown> = {}

    const bij1 : MyObj ={
        a: 'aa',
        b: 'bb',
        c: 'cc',
        d: 'dd'
    }
 






    //
}