import { randomNumBetween } from '../utils.js';
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
    phone;
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
        this.phone = phone;
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
}

export default User;