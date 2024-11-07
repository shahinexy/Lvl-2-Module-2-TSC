// Type assertion

let anything : any;

anything = 'Web Developer' ;

(anything as string)

const kgTogm = (value: string | number) : string | number | undefined =>{
    if(typeof value === "string"){
        const convertedValue = parseFloat(value)*1000;
        return `The coverted value is : ${convertedValue}`;
    }
    else if ( typeof value === "number") {
        return value * 1000;
    }
}

const result = kgTogm(1000) as number;
const result2 = kgTogm('1000') as string;