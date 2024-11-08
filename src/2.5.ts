{
  // Function generic

  const createArry = (param: string): string[] => {
    return [param];
  };

  const res1 = createArry("bangladesh");

  const createArryWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const resGeneric = createArryWithGeneric<string>("bangladesh");

  type User = { id: number; name: string };
  const resGenericObj = createArryWithGeneric<User>({ id: 121, name: "rifat" });



//   tuple 
  const createArryWithTuple = <T, S>(param1: T, param2: S): [T,S] => {
    return [param1 ,param2] ;
  };

  const resTuple = createArryWithTuple<string, number>("bangladesh", 2341);

  type UserTuple = { id: number; name: string };
  const res2Tuple = createArryWithTuple<UserTuple, string>({ id: 121, name: "rifat" }, 'Bangladesh');



// =============
  const addStudent = <T>(student: T) =>{
    const course = "next lvl web";

    return{
        ...student,
        course
    }
  }

  const student1 = addStudent({name: "Shahin", Car: "BMW"}) 
  const student2 = addStudent({name: "Khalil", Watch: "Apple", haveCar : false}) 

  //
}
