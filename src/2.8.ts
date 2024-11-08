{
    // 'https://jsonplaceholder.typicode.com/todos/1'

    const createPromise = (): Promise<string> =>{
        return new Promise<string>((resolve, reject) =>{
            const data: string = "something";
            if(data) {
                resolve(data)
            } else{
                reject("faild to loaded data")
            }
        });
    };


    // calling created promise function
    const showData = async() : Promise<string> =>{
        const data : string = await createPromise();
        return data;
        // console.log(data);
    }
    
    showData();


    // Using API

    type Todo ={
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }

    const getTodo = async (): Promise<Todo> =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json()
        return data;
  
    }

    getTodo()

    //
}