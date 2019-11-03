const Sequelize = require("sequelize");
const mysql = require('mysql');
let sequelize = new Sequelize('mysql://root:password@localhost:3306/ood', {logging: true});

let data = {
  "data": [
    {
      "restaurant_phone": "(912) 764-2949",
      "restaurant_name": "Dairy Queen",
      "address": {
        "formatted": "12 Northside Dr E STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Burgers",
        "Ice Cream"
      ]
    },
    {
      "restaurant_phone": "(912) 681-6423",
      "restaurant_name": "Subway",
      "address": {
        "formatted": "1550 Chandler Rd STATESBORO, GA 30458"
      },
      "cuisines": [
        "Sandwiches"
      ]
    },
    {
      "restaurant_phone": "(678) 446-9045",
      "restaurant_name": "Bailey's Sandwich & Juicebar",
      "address": {
        "formatted": "158 E Parrish St Statesboro, GA 30458"
      },
      "cuisines": []
    },
    {
      "restaurant_phone": "(912) 681-4743",
      "restaurant_name": "Mellow Mushroom",
      "address": {
        "formatted": "1098 Bermuda Run Statesboro, GA 30458"
      },
      "cuisines": []
    },
    {
      "restaurant_phone": "(912) 681-4044",
      "restaurant_name": "Huddle House",
      "address": {
        "formatted": "216 Lanier Dr STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Diner"
      ]
    },
    {
      "restaurant_phone": "(912) 489-2811",
      "restaurant_name": "Zaxby's",
      "address": {
        "formatted": "1605 Chandler Rd Statesboro, GA 30458"
      },
      "cuisines": [
        "American"
      ]
    },
    {
      "restaurant_phone": "(912) 681-7827",
      "restaurant_name": "Larry's Giant Subs",
      "address": {
        "formatted": "620 Fair Rd STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Sandwiches",
        "Wraps"
      ]
    },
    {
      "restaurant_phone": "(912) 489-1291",
      "restaurant_name": "Taco Bell",
      "address": {
        "formatted": "729 Northside Dr E Statesboro, GA 30458"
      },
      "cuisines": []
    },
    {
      "restaurant_phone": "(912) 681-1227",
      "restaurant_name": "Baskin-Robbins",
      "address": {
        "formatted": "606 Fair Rd STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Ice Cream"
      ]
    },
    {
      "restaurant_phone": "(912) 764-6197",
      "restaurant_name": "KFC - Kentucky Fried Chicken",
      "address": {
        "formatted": "202 S Main St STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Chicken"
      ]
    },
    {
      "restaurant_phone": "(912) 871-7272",
      "restaurant_name": "Papa John's Pizza",
      "address": {
        "formatted": "620 Fair Rd STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Pizza"
      ]
    },
    {
      "restaurant_phone": "(912) 871-7849",
      "restaurant_name": "Quiznos Sub",
      "address": {
        "formatted": "100 Brampton Ave STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Sandwiches",
        "Wraps"
      ]
    },
    {
      "restaurant_phone": "(912) 681-4289",
      "restaurant_name": "Wendy's",
      "address": {
        "formatted": "10 College Plz STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Burgers"
      ]
    },
    {
      "restaurant_phone": "(912) 764-6688",
      "restaurant_name": "Olive Garden",
      "address": {
        "formatted": "201 Henry Blvd Statesboro, GA 30458"
      },
      "cuisines": []
    },
    {
      "restaurant_phone": "(912) 681-7799",
      "restaurant_name": "Krystal",
      "address": {
        "formatted": "781 Brannen Rd Statesboro, GA 30458"
      },
      "cuisines": []
    },
    {
      "restaurant_phone": "(912) 764-5489",
      "restaurant_name": "Pizza Hut",
      "address": {
        "formatted": "129 S Main St STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Pizza"
      ]
    },
    {
      "restaurant_phone": "(912) 871-3348",
      "restaurant_name": "Subway",
      "address": {
        "formatted": "12399 Us Highway 301 S STATESBORO, GA 30458"
      },
      "cuisines": [
        "Sandwiches"
      ]
    },
    {
      "restaurant_phone": "(912) 764-1444",
      "restaurant_name": "Pizza Inn",
      "address": {
        "formatted": "608 Northside Dr W STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Pizza"
      ]
    },
    {
      "restaurant_phone": "(912) 681-4227",
      "restaurant_name": "Shane's Rib Shack",
      "address": {
        "formatted": "1100 Brampton Avenue Statesboro, GA 30458"
      },
      "cuisines": [
        "Barbecue"
      ]
    },
    {
      "restaurant_phone": "(912) 681-2000",
      "restaurant_name": "Zaxby's",
      "address": {
        "formatted": "502 Fair Rd STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Wings"
      ]
    },
    {
      "restaurant_phone": "(912) 489-3242",
      "restaurant_name": "Sonic",
      "address": {
        "formatted": "880 Buckhead Dr STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Burgers"
      ]
    },
    {
      "restaurant_phone": "(912) 764-9536",
      "restaurant_name": "Daylight Donuts",
      "address": {
        "formatted": "455 S Main St STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Bakery &amp; Pastries",
        "Coffee &amp; Tea"
      ]
    },
    {
      "restaurant_phone": "",
      "restaurant_name": "McDonald's",
      "address": {
        "formatted": "611 Northside Dr E STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Burgers"
      ]
    },
    {
      "restaurant_phone": "(912) 489-5369",
      "restaurant_name": "LongHorn Steakhouse",
      "address": {
        "formatted": "719 Northside Dr W STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Steak"
      ]
    },
    {
      "restaurant_phone": "(912) 764-2161",
      "restaurant_name": "KFC - Kentucky Fried Chicken",
      "address": {
        "formatted": "898 Buckhead Dr STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Chicken"
      ]
    },
    {
      "restaurant_phone": "(912) 764-4333",
      "restaurant_name": "Ruby Tuesdays",
      "address": {
        "formatted": "724 Northside Dr E STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Burgers"
      ]
    },
    {
      "restaurant_phone": "(912) 489-3020",
      "restaurant_name": "Waffle House",
      "address": {
        "formatted": "609 Northside Dr E STATESBORO, GA 30458"
      },
      "cuisines": [
        "American"
      ]
    },
    {
      "restaurant_phone": "(912) 764-3611",
      "restaurant_name": "Subway",
      "address": {
        "formatted": "611a Northside Dr W STATESBORO, GA 30458"
      },
      "cuisines": [
        "Sandwiches"
      ]
    },
    {
      "restaurant_phone": "(912) 764-2661",
      "restaurant_name": "El Sombrero Buckhead",
      "address": {
        "formatted": "879 Buckhead Dr. Statesboro, GA 30458"
      },
      "cuisines": []
    },
    {
      "restaurant_phone": "(912) 681-1078",
      "restaurant_name": "Popeyes Chicken & Biscuits",
      "address": {
        "formatted": "536 Fair Rd STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Wings"
      ]
    },
    {
      "restaurant_phone": "(912) 764-3463",
      "restaurant_name": "Moe's Southwest Grill",
      "address": {
        "formatted": "608 Brannen St STATESBORO, GA 30458"
      },
      "cuisines": [
        "Mexican"
      ]
    },
    {
      "restaurant_phone": "(912) 243-9085",
      "restaurant_name": "Groucho's Deli of Statesboro",
      "address": {
        "formatted": "1200 Brampton Avenue #2 Statesboro, GA 30458"
      },
      "cuisines": [
        "Sandwiches"
      ]
    },
    {
      "restaurant_phone": "(912) 871-5664",
      "restaurant_name": "Your Pie Pizza",
      "address": {
        "formatted": "701 Piedmont Loop, Ste 200 Statesboro, GA 30458"
      },
      "cuisines": []
    },
    {
      "restaurant_phone": "(912) 764-8989",
      "restaurant_name": "Panera Bread",
      "address": {
        "formatted": "810 Buckhead Drive Statesboro, GA 30458"
      },
      "cuisines": []
    },
    {
      "restaurant_phone": "(912) 489-8002",
      "restaurant_name": "Chester's",
      "address": {
        "formatted": "799 Northside Dr W STATESBORO, GA 30458"
      },
      "cuisines": [
        "American"
      ]
    },
    {
      "restaurant_phone": "(912) 681-1414",
      "restaurant_name": "Don Corleone's Diner & Pasta",
      "address": {
        "formatted": "200 Lanier Dr STATESBORO, GA 30458"
      },
      "cuisines": [
        "Diner",
        "Pizza",
        "Wings"
      ]
    },
    {
      "restaurant_phone": "(912) 681-3597",
      "restaurant_name": "Quiznos Sub",
      "address": {
        "formatted": "721 S Main St STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Sandwiches",
        "Wraps"
      ]
    },
    {
      "restaurant_phone": "(912) 681-2002",
      "restaurant_name": "Locos Grill and Pub",
      "address": {
        "formatted": "91 Briarwood Ln STATESBORO, GA 30458"
      },
      "cuisines": [
        "American"
      ]
    },
    {
      "restaurant_phone": "(912) 681-3354",
      "restaurant_name": "McAlister's Deli",
      "address": {
        "formatted": "1100 Brampton Ave STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Deli Food",
        "Salads",
        "Sandwiches",
        "Wraps"
      ]
    },
    {
      "restaurant_phone": "(620) 231-3390",
      "restaurant_name": "Pizza Hut",
      "address": {
        "formatted": "839 Buckhead Dr STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Pizza"
      ]
    },
    {
      "restaurant_phone": "(912) 764-9878",
      "restaurant_name": "Subway",
      "address": {
        "formatted": "510 S Main St STATESBORO, GA 30458"
      },
      "cuisines": [
        "Sandwiches"
      ]
    },
    {
      "restaurant_phone": "(912) 871-6146",
      "restaurant_name": "Sonny's Bar-B-Q",
      "address": {
        "formatted": "1602 Statesboro Place Cir STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Barbecue",
        "Sandwiches",
        "Southern"
      ]
    },
    {
      "restaurant_phone": "(912) 681-6782",
      "restaurant_name": "Arby's",
      "address": {
        "formatted": "622 Fair Rd Statesboro, GA 30458"
      },
      "cuisines": [
        "American",
        "Burgers"
      ]
    },
    {
      "restaurant_phone": "(912) 489-8800",
      "restaurant_name": "Checkers",
      "address": {
        "formatted": "418 Northside Drive East Statesboro, GA 30458"
      },
      "cuisines": [
        "American",
        "Burgers",
        "Hot Dogs",
        "Sandwiches",
        "Wraps"
      ]
    },
    {
      "restaurant_phone": "(912) 681-6436",
      "restaurant_name": "Burger King",
      "address": {
        "formatted": "550 Fair Rd STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Burgers"
      ]
    },
    {
      "restaurant_phone": "(912) 489-3233",
      "restaurant_name": "French Quarter Cafe",
      "address": {
        "formatted": "106 Savannah Ave STATESBORO, GA 30458"
      },
      "cuisines": [
        "French"
      ]
    },
    {
      "restaurant_phone": "(912) 489-4544",
      "restaurant_name": "Sonic",
      "address": {
        "formatted": "322 S Main St STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Burgers"
      ]
    },
    {
      "restaurant_phone": "(912) 243-9260",
      "restaurant_name": "Buffalo Wild Wings",
      "address": {
        "formatted": "442 Northside Drive East Statesboro, GA 30458"
      },
      "cuisines": []
    },
    {
      "restaurant_phone": "",
      "restaurant_name": "McDonald's",
      "address": {
        "formatted": "730 Northside Dr E STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Burgers"
      ]
    },
    {
      "restaurant_phone": "(912) 764-7941",
      "restaurant_name": "Chick-fil-A",
      "address": {
        "formatted": "703 Northside Dr W STATESBORO, GA 30458"
      },
      "cuisines": [
        "American",
        "Chicken",
        "Salads",
        "Sandwiches"
      ]
    }
  ]
};

if (!Array.prototype.flat) {
    Object.defineProperty(Array.prototype, 'flat',
    {
        value: function(depth = 1, stack = [])
        {
            for (let item of this)
            {
                if (item instanceof Array && depth > 0)
                {
                    item.flat(depth - 1, stack);
                }
                else {
                    stack.push(item);
                }
            }

            return stack;
        }
    });
}


// let cuisines = [...new Set([...data.data.map((info)=>{
//   return info.cuisines
// })].flat())];
//
// // `insert into tags(tagName) values ${cuisines.map((item)=>{return '(item)'})}`
//
// // sequelize.query(`insert into tags(tagName) values ${cuisines.map((value)=>{return '('+value+')'})}`)
//
// console.log(cuisines);
// cuisines.forEach((value)=>sequelize.query('insert ignore into tags(tagName) values ( "'+value+'" )'));

data.data.forEach((value => {
  sequelize.query(`insert ignore into services(serviceName,serviceAddress,imageURI) values ("${value.restaurant_name}", "${value.address.formatted}","")`).then(()=>{
    let sid;

    sequelize.query(`select max(serviceID) as sid from services`).then((results)=>{
      sid = results[0][0].sid;
    }).then(()=>{
      value.cuisines.forEach((value)=>{
        sequelize.query(`select tagID from tags where tagName="${value}"`).then((results)=>{
          sequelize.query(`insert ignore into serviceTags values(${sid}, ${results[0][0].tagID})`)
        })
      });
    });
  });
}));

const old_data =  {
  "result": {
    "totalResults": 53,
    "data": [
      {
        "geo": {
          "lon": -81.781764,
          "lat": 32.455386
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "12 Northside Dr E STATESBORO, GA 30458",
          "street": "12 Northside Dr E",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 764-2949",
        "restaurant_id": 172632,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Burgers",
          "Ice Cream"
        ],
        "restaurant_name": "Dairy Queen"
      },
      {
        "geo": {
          "lon": -81.778044,
          "lat": 32.423148
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "1550 Chandler Rd STATESBORO, GA 30458",
          "street": "1550 Chandler Rd",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 681-6423",
        "restaurant_id": 132706,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "Sandwiches"
        ],
        "restaurant_name": "Subway"
      },
      {
        "geo": {
          "lon": -81.770964,
          "lat": 32.461362
        },
        "hours": "",
        "address": {
          "city": "Statesboro",
          "formatted": "158 E Parrish St Statesboro, GA 30458",
          "street": "158 E Parrish St",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(678) 446-9045",
        "restaurant_id": 484691,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [],
        "restaurant_name": "Bailey's Sandwich & Juicebar"
      },
      {
        "geo": {
          "lon": -81.772163,
          "lat": 32.41381
        },
        "hours": "",
        "address": {
          "city": "Statesboro",
          "formatted": "1098 Bermuda Run Statesboro, GA 30458",
          "street": "1098 Bermuda Run",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 681-4743",
        "restaurant_id": 420974,
        "price_range": "$$$$",
        "menus": [],
        "price_range_100": 4,
        "cuisines": [],
        "restaurant_name": "Mellow Mushroom"
      },
      {
        "geo": {
          "lon": -81.781399,
          "lat": 32.412904
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "216 Lanier Dr STATESBORO, GA 30458",
          "street": "216 Lanier Dr",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 681-4044",
        "restaurant_id": 101734,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Diner"
        ],
        "restaurant_name": "Huddle House"
      },
      {
        "geo": {
          "lon": -81.77943,
          "lat": 32.4224
        },
        "hours": " ",
        "address": {
          "city": "Statesboro",
          "formatted": "1605 Chandler Rd Statesboro, GA 30458",
          "street": "1605 Chandler Rd",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 489-2811",
        "restaurant_id": 505348,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American"
        ],
        "restaurant_name": "Zaxby's"
      },
      {
        "geo": {
          "lon": -81.780284,
          "lat": 32.431878
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "620 Fair Rd STATESBORO, GA 30458",
          "street": "620 Fair Rd",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 681-7827",
        "restaurant_id": 219372,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Sandwiches",
          "Wraps"
        ],
        "restaurant_name": "Larry's Giant Subs"
      },
      {
        "geo": {
          "lon": -81.758748,
          "lat": 32.436438
        },
        "hours": "",
        "address": {
          "city": "Statesboro",
          "formatted": "729 Northside Dr E Statesboro, GA 30458",
          "street": "729 Northside Dr E",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 489-1291",
        "restaurant_id": 527111,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [],
        "restaurant_name": "Taco Bell"
      },
      {
        "geo": {
          "lon": -81.780489,
          "lat": 32.432171
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "606 Fair Rd STATESBORO, GA 30458",
          "street": "606 Fair Rd",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 681-1227",
        "restaurant_id": 243077,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Ice Cream"
        ],
        "restaurant_name": "Baskin-Robbins"
      },
      {
        "geo": {
          "lon": -81.783894,
          "lat": 32.44421
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "202 S Main St STATESBORO, GA 30458",
          "street": "202 S Main St",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 764-6197",
        "restaurant_id": 189963,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Chicken"
        ],
        "restaurant_name": "KFC - Kentucky Fried Chicken"
      },
      {
        "geo": {
          "lon": -81.780284,
          "lat": 32.431878
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "620 Fair Rd STATESBORO, GA 30458",
          "street": "620 Fair Rd",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 871-7272",
        "restaurant_id": 80925,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Pizza"
        ],
        "restaurant_name": "Papa John's Pizza"
      },
      {
        "geo": {
          "lon": -81.767196,
          "lat": 32.413064
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "100 Brampton Ave STATESBORO, GA 30458",
          "street": "100 Brampton Ave",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 871-7849",
        "restaurant_id": 123979,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Sandwiches",
          "Wraps"
        ],
        "restaurant_name": "Quiznos Sub"
      },
      {
        "geo": {
          "lon": -81.781405,
          "lat": 32.434932
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "10 College Plz STATESBORO, GA 30458",
          "street": "10 College Plz",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 681-4289",
        "restaurant_id": 180828,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Burgers"
        ],
        "restaurant_name": "Wendy's"
      },
      {
        "geo": {
          "lon": -81.78549,
          "lat": 32.4452
        },
        "hours": "",
        "address": {
          "city": "Statesboro",
          "formatted": "201 Henry Blvd Statesboro, GA 30458",
          "street": "201 Henry Blvd",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 764-6688",
        "restaurant_id": 473436,
        "price_range": "$",
        "menus": [],
        "price_range_100": 1,
        "cuisines": [],
        "restaurant_name": "Olive Garden"
      },
      {
        "geo": {
          "lon": -81.758039,
          "lat": 32.430924
        },
        "hours": "",
        "address": {
          "city": "Statesboro",
          "formatted": "781 Brannen Rd Statesboro, GA 30458",
          "street": "781 Brannen Rd",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 681-7799",
        "restaurant_id": 498357,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [],
        "restaurant_name": "Krystal"
      },
      {
        "geo": {
          "lon": -81.783696,
          "lat": 32.446177
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "129 S Main St STATESBORO, GA 30458",
          "street": "129 S Main St",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 764-5489",
        "restaurant_id": 70790,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Pizza"
        ],
        "restaurant_name": "Pizza Hut"
      },
      {
        "geo": {
          "lon": -81.800665,
          "lat": 32.416354
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "12399 Us Highway 301 S STATESBORO, GA 30458",
          "street": "12399 Us Highway 301 S",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 871-3348",
        "restaurant_id": 132705,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "Sandwiches"
        ],
        "restaurant_name": "Subway"
      },
      {
        "geo": {
          "lon": -81.791496,
          "lat": 32.46156
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "608 Northside Dr W STATESBORO, GA 30458",
          "street": "608 Northside Dr W",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 764-1444",
        "restaurant_id": 66331,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Pizza"
        ],
        "restaurant_name": "Pizza Inn"
      },
      {
        "geo": {
          "lon": -81.77145,
          "lat": 32.41154
        },
        "hours": "",
        "address": {
          "city": "Statesboro",
          "formatted": "1100 Brampton Avenue Statesboro, GA 30458",
          "street": "1100 Brampton Avenue",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 681-4227",
        "restaurant_id": 388740,
        "price_range": "$",
        "menus": [],
        "price_range_100": 1,
        "cuisines": [
          "Barbecue"
        ],
        "restaurant_name": "Shane's Rib Shack"
      },
      {
        "geo": {
          "lon": -81.782145,
          "lat": 32.434567
        },
        "hours": " ",
        "address": {
          "city": "STATESBORO",
          "formatted": "502 Fair Rd STATESBORO, GA 30458",
          "street": "502 Fair Rd",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 681-2000",
        "restaurant_id": 153674,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Wings"
        ],
        "restaurant_name": "Zaxby's"
      },
      {
        "geo": {
          "lon": -81.757576,
          "lat": 32.433498
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "880 Buckhead Dr STATESBORO, GA 30458",
          "street": "880 Buckhead Dr",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 489-3242",
        "restaurant_id": 191546,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Burgers"
        ],
        "restaurant_name": "Sonic"
      },
      {
        "geo": {
          "lon": -81.784923,
          "lat": 32.434121
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "455 S Main St STATESBORO, GA 30458",
          "street": "455 S Main St",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 764-9536",
        "restaurant_id": 231103,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Bakery & Pastries",
          "Coffee & Tea"
        ],
        "restaurant_name": "Daylight Donuts"
      },
      {
        "geo": {
          "lon": -81.76338,
          "lat": 32.439208
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "611 Northside Dr E STATESBORO, GA 30458",
          "street": "611 Northside Dr E",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "",
        "restaurant_id": 202575,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Burgers"
        ],
        "restaurant_name": "McDonald's"
      },
      {
        "geo": {
          "lon": -81.792128,
          "lat": 32.463621
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "719 Northside Dr W STATESBORO, GA 30458",
          "street": "719 Northside Dr W",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 489-5369",
        "restaurant_id": 33328,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Steak"
        ],
        "restaurant_name": "LongHorn Steakhouse"
      },
      {
        "geo": {
          "lon": -81.757337,
          "lat": 32.434501
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "898 Buckhead Dr STATESBORO, GA 30458",
          "street": "898 Buckhead Dr",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 764-2161",
        "restaurant_id": 189975,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Chicken"
        ],
        "restaurant_name": "KFC - Kentucky Fried Chicken"
      },
      {
        "geo": {
          "lon": -81.759336,
          "lat": 32.436224
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "724 Northside Dr E STATESBORO, GA 30458",
          "street": "724 Northside Dr E",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 764-4333",
        "restaurant_id": 50737,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Burgers"
        ],
        "restaurant_name": "Ruby Tuesdays"
      },
      {
        "geo": {
          "lon": -81.76341,
          "lat": 32.439051
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "609 Northside Dr E STATESBORO, GA 30458",
          "street": "609 Northside Dr E",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 489-3020",
        "restaurant_id": 95687,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American"
        ],
        "restaurant_name": "Waffle House"
      },
      {
        "geo": {
          "lon": -81.791392,
          "lat": 32.461685
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "611a Northside Dr W STATESBORO, GA 30458",
          "street": "611a Northside Dr W",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 764-3611",
        "restaurant_id": 132708,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "Sandwiches"
        ],
        "restaurant_name": "Subway"
      },
      {
        "geo": {
          "lon": -81.758553,
          "lat": 32.433655
        },
        "hours": " ",
        "address": {
          "city": "Statesboro",
          "formatted": "879 Buckhead Dr. Statesboro, GA 30458",
          "street": "879 Buckhead Dr.",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 764-2661",
        "restaurant_id": 444366,
        "price_range": "$$",
        "menus": [],
        "price_range_100": 2,
        "cuisines": [],
        "restaurant_name": "El Sombrero Buckhead"
      },
      {
        "geo": {
          "lon": -81.781582,
          "lat": 32.433754
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "536 Fair Rd STATESBORO, GA 30458",
          "street": "536 Fair Rd",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 681-1078",
        "restaurant_id": 174870,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Wings"
        ],
        "restaurant_name": "Popeyes Chicken & Biscuits"
      },
      {
        "geo": {
          "lon": -81.768981,
          "lat": 32.435432
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "608 Brannen St STATESBORO, GA 30458",
          "street": "608 Brannen St",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 764-3463",
        "restaurant_id": 33322,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "Mexican"
        ],
        "restaurant_name": "Moe's Southwest Grill"
      },
      {
        "geo": {
          "lon": -81.77165,
          "lat": 32.40988
        },
        "hours": "",
        "address": {
          "city": "Statesboro",
          "formatted": "1200 Brampton Avenue #2 Statesboro, GA 30458",
          "street": "1200 Brampton Avenue #2",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 243-9085",
        "restaurant_id": 336157,
        "price_range": "$",
        "menus": [],
        "price_range_100": 1,
        "cuisines": [
          "Sandwiches"
        ],
        "restaurant_name": "Groucho's Deli of Statesboro"
      },
      {
        "geo": {
          "lon": -81.75968,
          "lat": 32.432197
        },
        "hours": " ",
        "address": {
          "city": "Statesboro",
          "formatted": "701 Piedmont Loop, Ste 200 Statesboro, GA 30458",
          "street": "701 Piedmont Loop, Ste 200",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 871-5664",
        "restaurant_id": 409903,
        "price_range": "$$",
        "menus": [],
        "price_range_100": 2,
        "cuisines": [],
        "restaurant_name": "Your Pie Pizza"
      },
      {
        "geo": {
          "lon": -81.757869,
          "lat": 32.431173
        },
        "hours": "",
        "address": {
          "city": "Statesboro",
          "formatted": "810 Buckhead Drive Statesboro, GA 30458",
          "street": "810 Buckhead Drive",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 764-8989",
        "restaurant_id": 493092,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [],
        "restaurant_name": "Panera Bread"
      },
      {
        "geo": {
          "lon": -81.793184,
          "lat": 32.466489
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "799 Northside Dr W STATESBORO, GA 30458",
          "street": "799 Northside Dr W",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 489-8002",
        "restaurant_id": 147396,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American"
        ],
        "restaurant_name": "Chester's"
      },
      {
        "geo": {
          "lon": -81.781128,
          "lat": 32.413078
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "200 Lanier Dr STATESBORO, GA 30458",
          "street": "200 Lanier Dr",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 681-1414",
        "restaurant_id": 271338,
        "price_range": "$$",
        "menus": [],
        "price_range_100": 2,
        "cuisines": [
          "Diner",
          "Pizza",
          "Wings"
        ],
        "restaurant_name": "Don Corleone's Diner & Pasta"
      },
      {
        "geo": {
          "lon": -81.787217,
          "lat": 32.428027
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "721 S Main St STATESBORO, GA 30458",
          "street": "721 S Main St",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 681-3597",
        "restaurant_id": 124629,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Sandwiches",
          "Wraps"
        ],
        "restaurant_name": "Quiznos Sub"
      },
      {
        "geo": {
          "lon": -81.760973,
          "lat": 32.40695
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "91 Briarwood Ln STATESBORO, GA 30458",
          "street": "91 Briarwood Ln",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 681-2002",
        "restaurant_id": 92178,
        "price_range": "$$",
        "menus": [],
        "price_range_100": 2,
        "cuisines": [
          "American"
        ],
        "restaurant_name": "Locos Grill and Pub"
      },
      {
        "geo": {
          "lon": -81.770084,
          "lat": 32.407713
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "1100 Brampton Ave STATESBORO, GA 30458",
          "street": "1100 Brampton Ave",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 681-3354",
        "restaurant_id": 93002,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Deli Food",
          "Salads",
          "Sandwiches",
          "Wraps"
        ],
        "restaurant_name": "McAlister's Deli"
      },
      {
        "geo": {
          "lon": -81.757631,
          "lat": 32.43299
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "839 Buckhead Dr STATESBORO, GA 30458",
          "street": "839 Buckhead Dr",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(620) 231-3390",
        "restaurant_id": 70809,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Pizza"
        ],
        "restaurant_name": "Pizza Hut"
      },
      {
        "geo": {
          "lon": -81.785004,
          "lat": 32.433303
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "510 S Main St STATESBORO, GA 30458",
          "street": "510 S Main St",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 764-9878",
        "restaurant_id": 132707,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "Sandwiches"
        ],
        "restaurant_name": "Subway"
      },
      {
        "geo": {
          "lon": -81.77611,
          "lat": 32.409438
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "1602 Statesboro Place Cir STATESBORO, GA 30458",
          "street": "1602 Statesboro Place Cir",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 871-6146",
        "restaurant_id": 101437,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Barbecue",
          "Sandwiches",
          "Southern"
        ],
        "restaurant_name": "Sonny's Bar-B-Q"
      },
      {
        "geo": {
          "lon": -81.778491,
          "lat": 32.43037
        },
        "hours": "",
        "address": {
          "city": "Statesboro",
          "formatted": "622 Fair Rd Statesboro, GA 30458",
          "street": "622 Fair Rd",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 681-6782",
        "restaurant_id": 158364,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Burgers"
        ],
        "restaurant_name": "Arby's"
      },
      {
        "geo": {
          "lon": -81.76551,
          "lat": 32.441275
        },
        "hours": "",
        "address": {
          "city": "Statesboro",
          "formatted": "418 Northside Drive East Statesboro, GA 30458",
          "street": "418 Northside Drive East",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 489-8800",
        "restaurant_id": 163337,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Burgers",
          "Hot Dogs",
          "Sandwiches",
          "Wraps"
        ],
        "restaurant_name": "Checkers"
      },
      {
        "geo": {
          "lon": -81.781359,
          "lat": 32.43343
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "550 Fair Rd STATESBORO, GA 30458",
          "street": "550 Fair Rd",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 681-6436",
        "restaurant_id": 160674,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Burgers"
        ],
        "restaurant_name": "Burger King"
      },
      {
        "geo": {
          "lon": -81.77964,
          "lat": 32.448396
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "106 Savannah Ave STATESBORO, GA 30458",
          "street": "106 Savannah Ave",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 489-3233",
        "restaurant_id": 113990,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "French"
        ],
        "restaurant_name": "French Quarter Cafe"
      },
      {
        "geo": {
          "lon": -81.784167,
          "lat": 32.44155
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "322 S Main St STATESBORO, GA 30458",
          "street": "322 S Main St",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 489-4544",
        "restaurant_id": 191548,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Burgers"
        ],
        "restaurant_name": "Sonic"
      },
      {
        "geo": {
          "lon": -81.76198,
          "lat": 32.439365
        },
        "hours": "",
        "address": {
          "city": "Statesboro",
          "formatted": "442 Northside Drive East Statesboro, GA 30458",
          "street": "442 Northside Drive East",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 243-9260",
        "restaurant_id": 551668,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [],
        "restaurant_name": "Buffalo Wild Wings"
      },
      {
        "geo": {
          "lon": -81.758942,
          "lat": 32.435848
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "730 Northside Dr E STATESBORO, GA 30458",
          "street": "730 Northside Dr E",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "",
        "restaurant_id": 202576,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Burgers"
        ],
        "restaurant_name": "McDonald's"
      },
      {
        "geo": {
          "lon": -81.792336,
          "lat": 32.464704
        },
        "hours": "",
        "address": {
          "city": "STATESBORO",
          "formatted": "703 Northside Dr W STATESBORO, GA 30458",
          "street": "703 Northside Dr W",
          "state": "GA",
          "postal_code": "30458"
        },
        "restaurant_phone": "(912) 764-7941",
        "restaurant_id": 179949,
        "price_range": "",
        "menus": [],
        "price_range_100": 0,
        "cuisines": [
          "American",
          "Chicken",
          "Salads",
          "Sandwiches"
        ],
        "restaurant_name": "Chick-fil-A"
      }
    ],
    "numResults": 50,
    "page": 1,
    "pages": 2,
    "morePages": true
  }
};
