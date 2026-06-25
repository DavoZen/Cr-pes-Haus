// ============================================================
// MENU DATA — редагуйте цей файл, щоб додавати/змінювати рецепти
// Всі зміни з'являться на сайті автоматично після перезавантаження
// ============================================================
//
// СТРУКТУРА:
//   categories — масив категорій (наприклад: Waffeln, Süße Crêpes, Herzhaft)
//     icon: назва іконки з js/icons.js (waffle, crepe, cheese тощо)
//     items: масив страв у категорії
//       id: унікальний номер (№ на сайті)
//       name: назва страви
//       desc: опис / склад
//       price: ціна в євро (наприклад "8.50")
//       allergens: перелік алергенів через пробіл (наприклад "1 2 3 A B C")
//
// Щоб додати нову категорію — додайте новий об'єкт у categories.
// Щоб додати нову страву — додайте об'єкт у items потрібної категорії.
// ============================================================

window.MENU_DATA = {
  siteName: "Crêpes Haus",
  tagline: "Frische Waffeln · Knusprige Crêpes · Hausgemachtes Eis",

  allergens: {
    groups: [
      {
        name: "allergens_group_allergens",
        list: [
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
        name: "allergens_group_additives",
        list: [
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
          "N. ENTHÄLT WEICHTER"
        ]
      }
    ]
  },

  categories: [
    {
      id: "waffeln",
      name: "Waffel Genuss",
      icon: "waffle",
      items: [
        { id: 16, name: "Favorite Waffel",  desc: "Nutella, Vanillesauce, Erdbeeren, Bananen, Kirschen, Blaubeeren", price: "8.50", allergens: "A B C D E" },
        { id: 17, name: "Cherry Chocco",    desc: "Nutella, saftige Kirschen", price: "6.20", allergens: "1 2 3 4 5 A B C D E" },
        { id: 18, name: "Blueberry Love",   desc: "Nutella, Blaubeeren", price: "6.70", allergens: "1 2 3 4 5 A B C D E" },
        { id: 19, name: "Strawberry Dream", desc: "Nutella, Erdbeeren", price: "6.50", allergens: "1 2 3 4 5 A B C D E" },
        { id: 20, name: "Berry Vanilla",    desc: "Vanillesauce, Himbeeren, Bueno Creme", price: "7.80", allergens: "1 2 3 A B C" },
        { id: 21, name: "Cherry Vanilla",   desc: "Vanillesauce, fruchtige Kirschen", price: "6.20", allergens: "1 2 3 A B C" },
        { id: 22, name: "Banana Chocco",    desc: "Nutella, Bananen", price: "5.10", allergens: "1 2 3 4 5 A B C D E" },
        { id: 23, name: "Blue Vanilla",     desc: "Vanillesauce, Blaubeeren", price: "7.30", allergens: "1 2 3 A B C" },
        { id: 24, name: "Zucker & Zimt",    desc: "+ Eis (Vanille / Schokolade / Erdbeere) +1,00 €", price: "4.20", allergens: "1 8 A B" }
      ]
    },
    {
      id: "sweet-crepes",
      name: "Süsse Crêpes",
      icon: "crepe",
      items: [
        { id: 1,  name: "Sweet Favorite",  desc: "Bueno Creme, Keks-Crunch, Erdbeeren", price: "8.50", allergens: "1 2 3 4 5 A B C D E" },
        { id: 2,  name: "Chocco Dream",    desc: "Kinder Schokolade, Blaubeeren", price: "8.50", allergens: "1 2 3 4 5 A B C D E" },
        { id: 3,  name: "Marmelade Crêpes", desc: "Aprikose / Erdbeere", price: "4.00", allergens: "1 2 3 A B C" },
        { id: 4,  name: "Berry Bliss",     desc: "Nutella, Keks-Crunch, Blaubeeren", price: "6.50", allergens: "1 2 3 4 5 A B C D" },
        { id: 5,  name: "Banana Heaven",   desc: "Nutella, Keks-Crunch, Banane", price: "5.50", allergens: "1 2 3 4 5 A B C D E" },
        { id: 6,  name: "Strawberry Love", desc: "Nutella, Keks-Crunch, Erdbeeren", price: "6.20", allergens: "1 2 3 4 5 A B C D E" },
        { id: 7,  name: "White Delight",   desc: "Bueno Creme, Keks-Crunch, saure Kirschen", price: "5.70", allergens: "1 2 3 4 A B C D" },
        { id: 8,  name: "Pistachio Cream", desc: "Pistaziencreme, Himbeeren, Keks-Crunch", price: "8.20", allergens: "1 2 3 4 A B C D" },
        { id: 9,  name: "Kinder Magic",    desc: "Nutella, Kinder Bueno, Keks-Crunch", price: "7.50", allergens: "1 2 3 4 5 A B C D E" },
        { id: 10, name: "Coco White",      desc: "Bueno Creme, Himbeeren, Kokosraspeln", price: "6.00", allergens: "1 2 3 A B C" },
        { id: 11, name: "Sweet Mix",       desc: "Nutella, M&M's", price: "7.00", allergens: "1 2 3 4 5 A B C D E" },
        { id: 12, name: "Cherry Kiss",     desc: "Nutella, Keks-Crunch, Kirschen", price: "6.20", allergens: "1 2 3 4 5 A B C D E" },
        { id: 13, name: "+ Eis",           desc: "Vanille · Schokolade · Erdbeere", price: "1.00", allergens: "1 3 A B" }
      ]
    },
    {
      id: "savory-crepes",
      name: "Herzhaft",
      icon: "cheese",
      items: [
        { id: 1, name: "Ham – Cheese Crêpe", desc: "Hähnchen/Puten-Schinken, Gouda, Tomate, saure Sahne", price: "7.00", allergens: "1 2 3 A B C" },
        { id: 2, name: "Cheese Crêpe",       desc: "Gouda, Mozzarella, Cheddar, Edammer, saure Sahne", price: "6.50", allergens: "A B C" },
        { id: 3, name: "Savoury Salami",     desc: "Rind-Salami, Käse, saure Sahne", price: "7.00", allergens: "1 2 3 A B C" }
      ]
    }
  ]
};
