(async () => {
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
            const shuk = [
                {
                    client: 1,
                    address: 1,
                    tamhil: 1
                },
                {
                    client: 2,
                    address: 2,
                    tamhil: 3
                },
                {
                    client: 1,
                    address: 2,
                    tamhil: 2
                }
            ]
            resolve(shuk);
        }, 2000);
    });

    // Ctrl + shift + [ - to fold all
    // Ctrl + shift + ] - to unfold all

    // Ctrl + k  Ctrl + [  - to fold current
    // Ctrl + k  Ctrl + ]  - to unfold current

    const data = await Promise.all([houseAddressProm, clientProm, halvaaTypeProm, tamhilimProm, shukProm]);
    const [addresses, clients, halvaaType, tamhilim, shuk] = data;
    const toPrint = [];

    shuk.forEach(s => {
        const filteredClients = clients.filter(c => {
            const shukTamhilim = shuk.filter(x => x.client === c.id).map(x => x.tamhil);

            // [1,2] => [{id:1, halvaoot:[1,2]}, {id:2, halvaoot:[2,3]}]
            const tm = shukTamhilim.map(x => tamhilim.find(t => t.id === x))

            // [{id:1, halvaoot:[1,2]}, {id:2, halvaoot:[2,3]}] => [[1,2], [2,3]]
            const hanhilHalvvaot = tm.map(x => x.halvaoot)

            const idToIntercept = halvaaType.find(x => x.name === 'prime').id;

            const isIdExsists = hanhilHalvvaot.some(x => x.includes(idToIntercept));

            return !isIdExsists;
            
        });
        const client = filteredClients.find(c => c.id === s.client);
        const address = addresses.find(a => a.id === s.address);
        const tamhil = tamhilim.find(t => t.id === s.tamhil);
        const halvaoot = tamhil.halvaoot.map(h => {
            return halvaaType.find(ha => ha.id === h)
        });
        const mufradimLeChani = halvaoot.map(x => x.name).join(' and ');
        toPrint.push(`client: ${client.name}, address: ${address.street}, halvaoot: ${mufradimLeChani}`);
    });

    toPrint.forEach(p => console.log(p));


})();