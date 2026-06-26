// ============================================================
// MENU - categories, dishes, prices, allergens
// Edit this file to change the menu
// ============================================================
window.MENU_DATA = {
  "siteName": "Crêpes Haus",
  "tagline": "Frische Waffeln · Knusprige Crêpes · Hausgemachtes Eis",
  "contact": {
    "address": [
      "Eisenbacher Tor",
      "36341 Lauterbach (Hessen)",
      "Deutschland"
    ],
    "phone": "+47 (0) 6641 / 123459",
    "email": "info@crepes-haus.de"
  },
  "categories": [
    {
      "icon": "waffle",
      "id": "waffeln",
      "items": [
        {
          "allergens": "A B C D E",
          "desc": "Nutella, Vanillesauce, Erdbeeren, Bananen, Kirschen, Blaubeeren",
          "id": 1,
          "name": "Favorite Waffel",
          "price": "8.50"
        },
        {
          "allergens": "1 2 3 4 5 A B C D E",
          "desc": "Nutella, saftige Kirschen",
          "id": 2,
          "name": "Cherry Chocco",
          "price": "6.20"
        },
        {
          "allergens": "1 2 3 4 5 A B C D E",
          "desc": "Nutella, Blaubeeren",
          "id": 3,
          "name": "Blueberry Love",
          "price": "6.70"
        },
        {
          "allergens": "1 2 3 4 5 A B C D E",
          "desc": "Nutella, Erdbeeren",
          "id": 4,
          "name": "Strawberry Dream",
          "price": "6.50"
        },
        {
          "allergens": "1 2 3 A B C",
          "desc": "Vanillesauce, Himbeeren, Bueno Creme",
          "id": 5,
          "name": "Berry Vanilla",
          "price": "7.80"
        },
        {
          "allergens": "1 2 3 A B C",
          "desc": "Vanillesauce, fruchtige Kirschen",
          "id": 6,
          "name": "Cherry Vanilla",
          "price": "6.20"
        },
        {
          "allergens": "1 2 3 4 5 A B C D E",
          "desc": "Nutella, Bananen",
          "id": 7,
          "name": "Banana Chocco",
          "price": "5.10"
        },
        {
          "allergens": "1 2 3 A B C",
          "desc": "Vanillesauce, Blaubeeren",
          "id": 8,
          "name": "Blue Vanilla",
          "price": "7.30"
        },
        {
          "allergens": "1 8 A B",
          "desc": "+ Eis (Vanille / Schokolade / Erdbeere) +1,00 €",
          "id": 9,
          "name": "Zucker & Zimt",
          "price": "4.20"
        }
      ],
      "name": "Waffel Genuss"
    },
    {
      "icon": "crepe",
      "id": "sweet-crepes",
      "items": [
        {
          "allergens": "1 2 3 4 5 A B C D E",
          "desc": "Bueno Creme, Keks-Crunch, Erdbeeren",
          "id": 10,
          "name": "Sweet Favorite",
          "price": "8.50"
        },
        {
          "allergens": "1 2 3 4 5 A B C D E",
          "desc": "Kinder Schokolade, Blaubeeren",
          "id": 11,
          "name": "Chocco Dream",
          "price": "8.50"
        },
        {
          "allergens": "1 2 3 A B C",
          "desc": "Aprikose / Erdbeere",
          "id": 12,
          "name": "Marmelade Crêpes",
          "price": "4.00"
        },
        {
          "allergens": "1 2 3 4 5 A B C D",
          "desc": "Nutella, Keks-Crunch, Blaubeeren",
          "id": 13,
          "name": "Berry Bliss",
          "price": "6.50"
        },
        {
          "allergens": "1 2 3 4 5 A B C D E",
          "desc": "Nutella, Keks-Crunch, Banane",
          "id": 14,
          "name": "Banana Heaven",
          "price": "5.50"
        },
        {
          "allergens": "1 2 3 4 5 A B C D E",
          "desc": "Nutella, Keks-Crunch, Erdbeeren",
          "id": 15,
          "name": "Strawberry Love",
          "price": "6.20"
        },
        {
          "allergens": "1 2 3 4 A B C D",
          "desc": "Bueno Creme, Keks-Crunch, saure Kirschen",
          "id": 16,
          "name": "White Delight",
          "price": "5.70"
        },
        {
          "allergens": "1 2 3 4 A B C D",
          "desc": "Pistaziencreme, Himbeeren, Keks-Crunch",
          "id": 17,
          "name": "Pistachio Cream",
          "price": "8.20"
        },
        {
          "allergens": "1 2 3 4 5 A B C D E",
          "desc": "Nutella, Kinder Bueno, Keks-Crunch",
          "id": 18,
          "name": "Kinder Magic",
          "price": "7.50"
        },
        {
          "allergens": "1 2 3 A B C",
          "desc": "Bueno Creme, Himbeeren, Kokosraspeln",
          "id": 19,
          "name": "Coco White",
          "price": "6.00"
        },
        {
          "allergens": "1 2 3 4 5 A B C D E",
          "desc": "Nutella, M&M's",
          "id": 20,
          "name": "Sweet Mix",
          "price": "7.00"
        },
        {
          "allergens": "1 2 3 4 5 A B C D E",
          "desc": "Nutella, Keks-Crunch, Kirschen",
          "id": 21,
          "name": "Cherry Kiss",
          "price": "6.20"
        },
        {
          "allergens": "1 3 A B",
          "desc": "Vanille · Schokolade · Erdbeere",
          "id": 22,
          "name": "+ Eis",
          "price": "1.00"
        }
      ],
      "name": "Süsse Crêpes"
    },
    {
      "icon": "cheese",
      "id": "savory-crepes",
      "items": [
        {
          "allergens": "1 2 3 A B C",
          "desc": "Hähnchen/Puten-Schinken, Gouda, Tomate, saure Sahne",
          "id": 23,
          "name": "Ham – Cheese Crêpe",
          "price": "7.00"
        },
        {
          "allergens": "A B C",
          "desc": "Gouda, Mozzarella, Cheddar, Edammer, saure Sahne",
          "id": 24,
          "name": "Cheese Crêpe",
          "price": "6.50"
        },
        {
          "allergens": "1 2 3 A B C",
          "desc": "Rind-Salami, Käse, saure Sahne",
          "id": 25,
          "name": "Savoury Salami",
          "price": "7.00"
        }
      ],
      "name": "Herzhaft"
    },
    {
      "icon": "",
      "id": "4",
      "items": [
        {
          "allergens": "",
          "desc": "",
          "id": 1,
          "name": "co",
          "price": "200.00"
        }
      ],
      "name": "getränk"
    }
  ],
  "allergens": {
    "groups": [
      {
        "name": "allergens_group_allergens",
        "list": [
          "1. GLUTEN",
          "2. EIER",
          "3. MILCH/LAKTOSE",
          "4. NÜSSE (Hasel, Pistazie)",
          "5. SOJA",
          "6. SELLERIE",
          "7. SENF",
          "8. SESAM",
          "9. SULFITE"
        ]
      },
      {
        "name": "allergens_group_additives",
        "list": [
          "A. GLUTENHALTIG",
          "B. ENTHÄLT KIRSCHEN",
          "C. ENTHÄLT EIER",
          "D. ENTHÄLT FISCH",
          "E. ENTHÄLT ERDNÜSSE",
          "F. ENTHÄLT SOJA",
          "G. ENTHÄLT MILCH",
          "I. ENTHÄLT SELLERIE",
          "J. ENTHÄLT SENF",
          "K. ENTHÄLT SESAM",
          "L. ENTHÄLT SULFITE",
          "M. ENTHÄLT LUPINEN",
          "N. ENTHÄLT WEICHTER",
          "P. sdfdsf"
        ]
      }
    ]
  }
};
