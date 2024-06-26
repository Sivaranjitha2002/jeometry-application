import catalyst from 'zcatalyst-sdk-node';
import axios from 'axios';
import { Firestore, Timestamp } from '@google-cloud/firestore';
// const { getDatabase } = require('firebase-admin/database');
// welcome to customized jeometry store
export const jeometry = async( req, res ) => {
    console.log("headers ==> ",req.headers);
    const app = catalyst.initialize(req);
    const cache = app.connection({
        'ConnectorNamegdsg': {
            'client_id': '687165696100-natngusfd65ua6uajm3adn53ma17rif3.apps.googleusercontent.com',
            'client_secret': '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',
            'auth_url': 'https://accounts.google.com/o/oauth2/v2/auth',
            'refresh_url': 'https://oauth2.googleapis.com/token',
        'refresh_token': '1//0gp8nw7jjFkpQCgYIARAAGBASNQF-L9Ir5juCp6wimPg-VQ8XcQo81StBIN6jxfezNGlRPZWc8j1XGj9rJLo-gvXlZDYrVTrP',
             'refresh_in': '1000'
          }
  }).getConnector('ConnectorNamegdsg');
  const cache1 = await app.cache().segment().get('ZC_CONN_ConnectorNamegdsg');
  console.log("cache1", cache1)
    console.log(cache);
    const token = await cache.getAccessToken();
    console.log(token);
  function performAction() {
    console.log("Action performed after the wait time.");
    let apiUrl = "projects/optimum-beach-379907/databases/(default)/collectionGroups/1/fields/Name";
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json', // You can set other headers as needed
    };
    const requestBody = {
      "fields": [
        {
          "fieldPath": "sam1",
          "order": "ASCENDING"
        },
        {
          "fieldPath": "sam2",
          "arrayConfig": "CONTAINS"
        }
      ],
      "queryScope": "COLLECTION"
    };
    apiUrl = "https://content-firestore.googleapis.com/v1beta2/projects/optimum-beach-379907/databases/(default)/collectionGroups/1/indexes";
    axios({
      method: 'post', // Replace with the HTTP method you want to use (e.g., 'get', 'put', 'delete', etc.)
      url: apiUrl,
      headers: headers,
      data: requestBody
    }).then((response) => {
      // console.log("success... response data: ",response.data);
    })
      .catch(error => {
        console.error('Error:', error.response);
      });
    const data = {
      stringExample: 'Hello, World!',
      booleanExample: true,
      numberExample: 3.14159265,
      dateExample: Timestamp.fromDate(new Date('December 10, 1815')),
      arrayExample: [5, true, 'hello'],
      nullExample: null,
      objectExample: {
        a: 5,
        b: true
      }
    };
    //const res = await db.collection('data').doc('one').set(data);
    res.status(200).json({ message: "Welcome to Customized Jeometry Box Store" });
  }

  // Set a wait time of 2 seconds (2000 milliseconds)
  const waitTime = 10;

  // Using setTimeout to delay the execution of performAction
  
    //const token1 = "ya29.a0AfB_byDrWQMunbtfmEqa1FnbCElAMyvfxsd9FTWPf-Qmsgjs6dcJ25uTkxG20ClPpjy07KYlhIsnlk4amNw8tJeYbzWJLEM1hK2HyE7GZml-wye_g5PXRFkYLxkzn3deg1kNhJ-dBHu-9rqqC9jyqJn0AZa61ZmmjDyXaCgYKAeESARESFQGOcNnCia2jjQ5kZ36Bb6YEE2_wWQ0171";
  
    //   axios({
    //     method: 'get', // Replace with the HTTP method you want to use (e.g., 'get', 'put', 'delete', etc.)
    //     url: apiUrl,
    //     headers: headers
    //   }).then(response => {
    //       console.log("success... response data: ",response.data);
    //     })
    //     .catch(error => {
    //       console.error('Error:', error);
    //     });
    //     let requestBody = {
    //             "name": "sample",
    //             "indexConfig": {
    //               "indexes": [
    //                 {
    //                   "fields": [
    //                     {
    //                       "arrayConfig": "CONTAINS",
    //                       "fieldPath": "/1/1"
    //                     }
    //                   ],
    //                   "queryScope": "COLLECTION"
    //                 }
    //               ],
    //               "reverting": false
    //             }
    //     };
        // apiUrl= "projects/optimum-beach-379907/databases/(default)/collectionGroups/1/fields/Name";
        // axios({
        //     method: 'patch', // Replace with the HTTP method you want to use (e.g., 'get', 'put', 'delete', etc.)
        //     url: apiUrl,
        //     headers: headers,
        //     data:requestBody
        //   }).then(response => {
        //       console.log("success... response data: ",response.data);
        //     })
        //     .catch(error => {
        //       console.error('Error:', error);
  // });
  setTimeout(performAction, waitTime);
}

export const addItem = (req, res) => {
    const item = req.params.item_name;
    if(item === 'null') {
        console.log("error");
        res.status(400);
        throw new Error("Provide valid item to jeometry");
    }
    res.status(200).json({ message : `Add a item to the jeometry box : ${item}`});
}

export const updateItem = (req, res) => {
    const item = req.params.item_name;
    if(item === 'null'){
        res.status(400);
        throw new Error("Provide valid item to jeometry");
    }
    res.status(200).json({ message : `Update the item in the jeometry box : ${item}`});
}

export const deleteItem = (req, res) => {
    const item = req.params.item_name;
    if(item === 'null'){
        res.status(400);
        throw new Error("Provide valid item to jeometry");
    }
    res.status(200).json({ message : `Delete the item in the jeometry box : ${item}}`});
}

export const getAllItems = (req, res) => {
    res.status(200).json({ message : "Get all the items in the jeometry box"});
}
