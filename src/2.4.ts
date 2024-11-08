{
    // interface & type in generic

    interface Devloper<T, X = null> {
        name : string;
        computer: {
            brand: string;
            releaseYers: number;
        }
        smartWatch: T;
        bike? : X
    }

    // type 
    type EmilabWatch = {
        brand : string;
        price: number;
    }
    const poorDeveloper: Devloper<EmilabWatch> = {
        name: "kholil",
        computer: {
            brand: 'Asus',
            releaseYers: 2016
        },
        smartWatch: {
            brand: 'Emilab',
            price: 2000,
        }
    }

    // interface 
    interface AppleWatch {
        brand : string;
        price: number;
        SleepTracker: boolean
    }

    type YamahaBIke = {
        model : string;
        price: number;
    }
    const richDeveloper: Devloper<AppleWatch, YamahaBIke> = {
        name: "Shahin",
        computer: {
            brand: 'Apple',
            releaseYers: 2023
        },
        smartWatch: {
            brand: 'Apple',
            price: 90000,
            SleepTracker: true
        },

        bike: {
            model: 'Yamaha',
            price: 4000000
        }
    }











    //
}