{
  // constraints
  const addStudent = <T extends {id: number ; name: string}>(student: T) => {
    const course = "next lvl web";

    return {
      ...student,
      course,
    };
  };

  const student1 = addStudent({ id: 112, name: "Shahin", Car: "BMW" });
  const student2 = addStudent({
    id: 221,
    name: "Khalil",
    Watch: "Apple",
    haveCar: false,
  });

  const student3 = addStudent({
    id: 5652,
    name: "Mr. Z"
  })

  //
}
