import { makeFirstLetterCapital, randomNumBetween, generateUniqNumber } from '../utils/algoMethods.js';
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
            name: { first, last },
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

        this.#id = generateUniqNumber(users, "_id"); // make this work, 
        this.#name = this.setName(first, last);
        this.#phone = this.checkPhone(phone);
        this.#email = this.checkMail(email, users);
        this.#password = this.checkPassword(password);
        this.#isAdmin = isAdmin;
        this.#isBusiness = isBusiness;
        this.address = { state, country, city, street, houseNumber, zip };

        this.#createdAt = new Date();
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

    changeBusinessStatus(user) {
        if (!user.isAdmin) return null;
        this.#isBusiness = !this.#isBusiness;
    }

    checkPassword(password) {
        const rg = /(?=.*\d{1})(?=.*\d{1})(?=.*\d{1})(?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20}/g;
        if (password.match(rg) !== null) return password;
        throw new Error('the password must contain at least 1 uppercase letter in English, 1 lowercase letter in English. 4 numbers and one of the following characters: !@#$%^&*-');
    }

    checkPhone(phone) {
        const rg = /^0[0-9]{1,2}(\-|\s?)[0-9]{3}(\-|\s?)[0-9]{4}/g;
        if (phone.match(rg) !== null) return phone;
        throw new Error('the phone should be valid');
    }

    checkMail(email, users = []) {
        const rg = /^.+@.+\..{2,}$/g;
        if (email.match(rg) === null) throw new Error('the email should be valid');

        const user = users.find(usr => usr.email === email);
        if (!user) return email;
        throw new Error('this email is already in use');
    }

    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    get password() {
        return this.#password;
    }

    get createdAt() {
        return this.#createdAt;
    }

    get isAdmin() {
        return this.#isAdmin;
    } 

    get isBusiness() {
        return this.#isBusiness;
    }
    get phone() {
        return this.#phone;
    }

    set isBusiness(value) {
        this.#isBusiness = value;
    }
    
    set phone(value) {
        this.#phone = this.checkPhone(value);
    }

    set name({ first, last }) {
        this.#name = this.setName(first, last);
    }
}

export default User;