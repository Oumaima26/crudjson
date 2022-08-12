const express = require('express');
const cors = require('cors');
const validation = require('./lib/middlewares/schemaValidation');
const userSchema = require('./models/user');
const contractSchema = require('./models/contract');
const itemSchema = require('./models/item');
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json())

const fs = require("fs");
const { uuid } = require('uuidv4');
/**
 * Users
 */

//read the user data from json file
const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('./database/users.json', stringifyData)
}
//get the user data from json file
const getUserData = () => {
    const jsonData = fs.readFileSync('./database/users.json')
    return JSON.parse(jsonData)
}
app.post('/', validation(userSchema.userPostSchema), (req, res) => {
    
    const existUsers = getUserData()
    const receivedData = req.body;
    receivedData.card.id = uuid();
    const uid = uuid()
    existUsers[uid] = receivedData;
    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
        
        localStorage.setItem('uid', uid);
    }
    localStorage.setItem('uid', uid);
    console.log('uid '+localStorage.getItem('uid'));
    saveUserData(existUsers);
    res.send({ uid: 'To generate' })
});
app.get('/', (req, res) => {
    const users = getUserData()
    res.send(users)
    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }
    console.log('uid '+localStorage.getItem('uid'));
})
app.put('/:uid', validation(userSchema.userPutSchema), (req, res) => {
    const uid = req.params.uid
    const existUsers = getUserData()
    const updateUser = existUsers
    updateUser[uid] = req.body;
    saveUserData(updateUser)
    res.send({ uid: req.params.uid })
})
app.delete('/:uid', validation(userSchema.userDeleteSchema), (req, res) => {
    const uid = req.params.uid
    const existUsers = getUserData()
    delete existUsers[uid]
    saveUserData(existUsers)
    res.send({ uid: req.params.uid })
}
)

/**
 * Contracts
 */
//read the user data from json file
const saveContractData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('./database/contracts.json', stringifyData)
}
//get the Contract data from json file
const getContractData = () => {
    const jsonData = fs.readFileSync('./database/contracts.json')
    return JSON.parse(jsonData)
}
app.post('/:uid/contracts', validation(contractSchema.contractPostSchema), (req, res) => {
    const uid = req.params.uid
    const existContracts = getContractData()
    const receivedData = req.body;
        const items = getItemData()
        const keys = Object.keys(items);        
        receivedData.item={}
    for (var i = 0; i < Object.keys(items).length; i++) {
        receivedData.item[i]=keys[i]
    }
    existContracts[uuid()] = receivedData;
    receivedData.uid = uid;
    saveContractData(existContracts);
    res.send({ uid: 'To generate' })
});

app.get('/:uid/contracts', (req, res) => {
    const puid = req.params.uid
    const contracts = getContractData()
    const contractsuid = {}    
    const values = Object.values(contracts);
    for(var i = 0; i < Object.keys(values).length; i++){
        if (values[i].uid === puid) {
            contractsuid[Object.keys(contracts)[i]]=values[i]  
        }
    }  
    res.send(contractsuid)
})
app.put('/:uid/contracts/:cid', validation(contractSchema.contractPutSchema), (req, res) => {
    const cid = req.params.cid
    const existContracts = getContractData()
    const updateContract = existContracts
    updateContract[cid] = req.body;
    saveContractData(updateContract)
    res.send({ uid: req.params.uid, cid: req.params.cid })
})

app.delete('/:uid/contracts/:cid', validation(contractSchema.contractDeleteSchema), (req, res) => {
    const cid = req.params.cid
    const existContracts = getContractData()
    delete existContracts[cid]
    saveContractData(existContracts)
    res.send({ uid: req.params.uid, cid: req.params.cid })
})

/**
 * Items
 */
//read the user data from json file
const saveItemData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('./database/items.json', stringifyData)
}
//get the Contract data from json file
const getItemData = () => {
    const jsonData = fs.readFileSync('./database/items.json')
    return JSON.parse(jsonData)
}
app.post('/:uid/items', validation(itemSchema.itemPostSchema), (req, res) => {
    const existItems = getItemData()
    const receivedData = req.body;
    existItems[uuid()] = receivedData;
    saveItemData(existItems);
    res.send({ uid: req.params.uid, iid: 'To generate' })
});
app.get('/:uid/items', (req, res) => {
    const items = getContractData()
    res.send(items)
});
app.put('/:uid/items/:iid', validation(itemSchema.itemPutSchema), (req, res) => {
    const iid = req.params.iid
    const existItems = getItemData()
    const updateItem = existItems
    updateItem[iid] = req.body;
    saveItemData(updateItem)
    res.send({ uid: req.params.uid, iid: req.params.iid })
})
app.delete('/:uid/items/:iid', validation(itemSchema.itemDeleteSchema), (req, res) => {
    const iid = req.params.iid
    const existItems = getItemData()
    delete existItems[iid]
    saveItemData(existItems)
    res.send({ uid: req.params.uid, iid: req.params.iid })
})

const port = 8080;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

