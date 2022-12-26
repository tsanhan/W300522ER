import { randomNumBetween } from "../utils/algoMethods.js";
class Picture {
    #id;
    url;
    alt;
    #createdBy;
    #createdAt;
    #price;
    likes = [];

    constructor(picture, array = []) {
        const { url, credit, alt, price } = picture;
        this.url = url;
        this.alt = alt;
        this.#createdBy = credit;
        this.#price = price;
        this.#createdAt = new Date();
        this.generateId(array);
    }

    generateId(array) {
        const random = randomNumBetween(1_000_000, 9_999_999);
        const pic = array.find(pic => pic._id === random);
        if (!pic) return this.#id = random;
        this.generateId(array);
    }


    get _id() {
        return this.#id;
    }

    get credit() {
        return this.#createdBy;
    }

    set credit(newCredit) {
        this.#createdBy = newCredit;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        if(newPrice <= 15) return console.log("Price is too low");
        this.#price = newPrice;
    }
    
}

export default Picture;