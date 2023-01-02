import Picture from "../models/PictureModel.js";
import User from "../models/UserModel.js";



const initialData = () => {

    const data = {
        pictures: [
            {
                url: "https://cdn.pixabay.com/photo/2022/03/12/19/14/sea-7064686_960_720.jpg",
                alt: "sunset",
                credit: "Gorge W Bosh",
                price: 1_000,
            },
            {
                url: "https://cdn.pixabay.com/photo/2021/12/21/08/29/owl-6884773_960_720.jpg",
                alt: "owl",
                credit: "Jessica Rabbit",
                price: 5_000,
            },
            {
                url: "https://cdn.pixabay.com/photo/2022/02/26/07/06/butterfly-7035308_960_720.jpg",
                alt: "butterfly",
                credit: "Tyra Banks",
                price: 500,
            },
        ],
        users: [
            {
                "name": { "first": "regular", "last": "user" },
                "address": {
                    "state": "USA",
                    "country": "big",
                    "city": "New York",
                    "street": "52",
                    "houseNumber": "109",
                    "zip": 562145
                },
                "phone": "050-0000000",
                "email": "user@gmail.com",
                "password": "Aa1234!",
                "isBusiness": false
            },
            {
                "name": { "first": "bUsiness", "last": "user" },
                "address": {
                    "state": "USA",
                    "country": "cal",
                    "city": "New Jersey",
                    "street": "bird",
                    "houseNumber": "54",
                    "zip": 123456
                },
                "phone": "050-0000000",
                "email": "business@gmail.com",
                "password": "Aa1234!",
                "isBusiness": true,
                "isAdmin": false
            },
            {
                "name": { "first": "admin", "last": "user" },
                "address": {
                    "state": "Israel",
                    "country": "Israel",
                    "city": "Tel Aviv",
                    "street": "il",
                    "houseNumber": "24",
                    "zip": 4444556
                },
                "phone": "050-0000000",
                "email": "admin@gmail.com",
                "password": "Aa1234!",
                "isBusiness": true,
                "isAdmin": true
            }
        ]
    }
    
    const pictures = data.pictures.map(pic => new Picture(pic, data.pictures));
    const users = data.users.map(user => new User(user));

    return { pictures, users };
};

export default initialData;