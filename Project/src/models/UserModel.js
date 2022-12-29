import { makeFirstLetterCapital, randomNumBetween } from '../utils/algoMethods.js';
class User {
    //#region props
    #id;
    #name;
    address = {
        state: '',
        country: '',
        city: '',
        street: '',
        houseNumber: '',
        zip: ''
    };
    #phone;
    #email;
    #password;
    #createdAt;
    #isAdmin = false;
    #isBusiness = false;
    //#endregion
    
    constructor(user, users = []) {
        const {
            name,
            address: {
                state,
                country,
                city,
                street,
                houseNumber,
                zip
            },
            phone,
            email,
            password,
            isAdmin = false,
            isBusiness = false
        } = user;

        this.generateId(users);
        this.#name = name;
        this.#phone = phone;
        this.#email = email;
        this.#password = password;
        this.#isAdmin = isAdmin;
        this.#isBusiness = isBusiness;
        this.address = { state, country, city, street, houseNumber, zip };

        this.#createdAt = new Date();
    }

    generateId(array) {
        const random = randomNumBetween(1_000_000, 9_999_999);
        const user = array.find(usr => usr._id === random);
        if (!user) return this.#id = random;
        this.generateId(array);
    }

    get _id() {
        return this.#id;
    }

    setName(first, last) {
        const rg = /([^A-Za-z ])*/g;
        const leanFirstName = first.replace(rg, "");
        const leanLastName = last.replace(rg, "");
        const firstName = makeFirstLetterCapital(leanFirstName);
        const lastName = makeFirstLetterCapital(leanLastName);
        this.#name = `${firstName} ${lastName}`;
    }

    
}

export default User;