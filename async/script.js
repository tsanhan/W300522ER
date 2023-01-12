(function () {

    const cb = () => {
        console.log('cb was called');

    }

    function sendDataToServer(cb) {
        // do something
        cb();
        // do something else

        if (true === true) {
            cb();
        }

    }

    sendDataToServer(cb);

    // how do I make sure I run the callback only once?

    // how do react only after I get response from somewhere?


    const prom = new Promise((resolve, reject) => {
        const age = +prompt('Enter your age');
        setTimeout(() => {
            switch (true) {
                case age > 70:
                    reject("you should not drink 🍻");
                    break;
                case age >= 18:
                    resolve("you can drink 🍻");
                    break;
            }
            reject(new Error("you can't drink 🍻"));
        }, 5000);
    });

    prom.then(res => {
        document.querySelector('#ok').textContent = res;
    }).catch(err => {
        document.querySelector('#ok').style.color = 'red';
        document.querySelector('#ok').textContent = err;
    });


    function job() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("hello world");
            }, 2000);
        });
    }


    // modify the code based on the following rules:
    // 1. the function 'job' must return a Promise object (u can use new Promise)
    // 2. the promise must resolve itself 2 seconds after the call to 'job' and must provide 'hello world' in the data

    job().then(res => {
        console.log(res); // 'hello world' after 2 seconds
    });


    function job(data) {
        return something;
    }

    //1. your function must always return a Promise.
    //2. if 'data' is not a number return a Promise rejected instantly and give the data "error" (in a string)
    //3. if 'data' is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
    //4. if 'data' is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

    // hint: when you code a function returning a promise, 
    // make sure to *always return a promise*. 
    // event if you want to handle an error, just return a promise and reject it.
    // you will have more maintainable code like this. 

    /**
     * this is a function that returns a promise
     * @param {*} data should be anything, because this will be a generic function
     * @returns a promise that will be resolved or rejected immediately or after 1 or 2 seconds
     */
    function evenOddProm(data) {
        return new Promise((resolve, reject) => {
            if (typeof data !== 'number') {
                reject('error');
            } else if (data % 2 === 0) {
                setTimeout(() => {
                    reject('even');
                }, 2000);
            } else {
                setTimeout(() => {
                    resolve('odd');
                }, 1000);
            }
        });
    }

    // eager evaluation: the promise is created and executed immediately
    evenOddProm(4)


    const addressProm = new Promise((resolve, reject) => {
        setTimeout(() => {
            const addresses = [{
                street: 'ba shomron',
                userId: 1
            }, {
                street: 'yavne',
                userId: 2
            }]
            resolve(addresses);
        }, 2000);
    })
    const usersProm = new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = [{
                id: 1,
                name: 'Gez'
            }, {
                id: 2,
                name: 'Katabi'
            }]
            resolve(users);
        }, 1000);
    })
    const productsProm = new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = [{
                id: 1,
                userId: 1,
                name: 'Ozniot'
            }, {
                id: 2,
                userId: 2,
                name: 'Heder'
            }]
            resolve(products);
        }, 1500);
    })


    // when all promises are resolved,
    // print to which address send that what product (with the user name)
    // for example: "send to ba shomron the product Ozniot (Gez)"

    // use Promise.all to wait for all promises to be resolved

    Promise.all([addressProm, usersProm, productsProm]).then(res => {
        const [addresses, users, products] = res;

        products.forEach(product => {
            const user = users.find(user => user.id === product.userId);
            const address = addresses.find(address => address.userId === product.userId);
            console.log(`send product ${product.id} to ${address.street} (${user.name})`);
        });
    });


    const houseAddressProm = new Promise((resolve, reject) => {
        setTimeout(() => {
            const addresses = [{
                street: 'ba shomron',
                id: 1
            }, {
                street: 'yavne',
                id: 2
            }]
            resolve(addresses);
        }, 1000);
    })
    const clientProm = new Promise((resolve, reject) => {
        setTimeout(() => {
            const clients = [{
                name: 'Gez',
                id: 1
            }, {
                name: 'Katabi',
                id: 2
            }]
            resolve(clients);
        }, 3000);
    })
    const halvaaTypeProm = new Promise((resolve, reject) => {
        setTimeout(() => {
            const halvaaType = [{
                name: 'tzamud',
                id: 1
            }, {
                name: 'prime',
                id: 2
            }, {
                name: 'mishtama',
                id: 3
            }]
            resolve(halvaaType);
        }, 0);
    });

    const tamhilimProm = new Promise((resolve, reject) => {
        setTimeout(() => {
            const tamhilim = [{
                halvaoot: [1, 2],
                id: 1
            }, {
                halvaoot: [2, 3],
                id: 2
            }, {
                halvaoot: [1, 3],
                id: 3
            }]
            resolve(tamhilim);
        }, 2500);
    });


    const shukProm = new Promise((resolve, reject) => {
        setTimeout(() => {
            const shuk = [{
                client: 1,
                address: 1,
                tamhil: 1
            },
            {
                client: 2,
                address: 2,
                tamhil: 3
            }
            ]
            resolve(shuk);
        }, 2000);
    });


    // 1. I want to understand how my market is doing:
    // please print to the console who is taking what loans for what house
    // for example: "Gez is taking a loan for the house in ba shomron for the tamhil: tzamud and prime" 


    // 2. I don't want filter out all the client that prime as a loan (prime doesn't really make $$ to us!)
    // do 1. again only fo the clients that don't have prime as a loan  


    // async await

})();