## A. Go Over:

1. ***the lesson !!!!!!!***
2. go to 'object' branch and finish the homework there
3. [Promise](https://www.youtube.com/watch?v=DHvZLI7Db8E)


## B. Practice Promise:
### exercise from class:  
  * assuming the folowwing Promise objets:
``` js
const houseAddressProm = new Promise((resolve, reject) => {
        setTimeout(() => {
            const addresses = [{
                street: 'ba sharon',
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
```
  1. I want to understand how my market is doing: 
  * please print to the console who is taking what loans for what house
  * for example: "Gez is taking a loan for the house in ba sharon for the tamhil: tzamud and prime" 

  2. I don't want filter out all the client that prime as a loan (prime doesn't really make $$ to us!)
  * do 1. again only fo the clients that don't have prime as a loan


## C. We'll learn next lesson:
* Async Await
* ES6 Modules
* Fetch API

## D. next lesson material
* [Async Await](https://www.youtube.com/watch?v=V_Kr9OSfDeU)
* [ES6 Modules](https://www.youtube.com/watch?v=cRHQNNcYf6s)
* [Fetch API](https://www.youtube.com/watch?v=cuEtnrL9-H0)
