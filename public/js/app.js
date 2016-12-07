"use strict";

class App{
  constructor(){
    this.media = [
  {
    "img" : "img/bread2.jpg",
    "alignment" : "caption center-align",
    "slogan" : "<p>Special Breads!</p>"
    
    
    
  },
  {"img" : "img/bread.jpg",
    "alignment" : "caption left-align",
    "slogan" : "<p>Everything you Want</p>"
    
    
  }, 
  {"img" : "img/bread1.jpg",
    "alignment" : "caption right-align",
    "slogan" : "<p>Bigger and Tastier!</p>"
   
    
  } ,
  {"img" : "img/br.jpg",
  "alignment" : "caption center-align",
  "slogan" : "<p>JabzzKillerBread</p>"
  
  
  }
    ];
    this.recipe = [
  { 
    "id": 1,
    "img" : "img/melon.jpg",
    "title" : "<p>Melon Pan</p>",
    "content" : "<p>A Melon Pan is a type of sweet bun from Japan, that is also popular in Taiwan, China and Latin America. They are made from an enriched dough covered in a thin layer of crisp cookie dough. </p>",
    
    "ingredients":[
          {
            "qty": "1 large bunch",
            "name": "spinach"
          },
          {
            "qty": "1/2 small",
            "name": "butternut squash"
          },
          {
            "qty": "200 g",
            "name": "sliced okra"
          },
          {
            "qty": "250 g",
            "name": "fatty minced pork"
          },
          {
            "qty": "6 cups",
            "name": "chicken stock"
          },
          {
            "qty": "1",
            "name": "finely chopped onion"
          },
          {
            "qty": "4 cloves",
            "name": "minced garlic"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "fish sauce"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "1",
            "name": "oil"
          }
        ],
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
        "totaltime": "4-5 servings",
         "directions": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      },
    
    
  
  { "id": 2,
    "img" : "img/british.jpg",
    "title" : "<p>Pesto Pinwheel</p>",
    "content" : "<p>This loaf, filled with homemade pesto, walnuts, is made for sharing and would made a lovely addition to any picnic. </p>",
    
    "ingredients":[
          {
            "qty": "1 large bunch",
            "name": "spinach"
          },
          {
            "qty": "1/2 small",
            "name": "butternut squash"
          },
          {
            "qty": "200 g",
            "name": "sliced okra"
          },
          {
            "qty": "250 g",
            "name": "fatty minced pork"
          },
          {
            "qty": "6 cups",
            "name": "chicken stock"
          },
          {
            "qty": "1",
            "name": "finely chopped onion"
          },
          {
            "qty": "4 cloves",
            "name": "minced garlic"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "fish sauce"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "1",
            "name": "oil"
          }
        ],
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
        "totaltime": "4-5 servings",
         "directions": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      },
    
  
  {
    "id": 3,
    "img" : "img/whats.jpg",
    "title" : "<p>Sourdough bread</p>",
    "content" : "<p>Sourdough bread has a mildly sour taste not present in most breads made with bakers yeast and better inherent keeping qualities than other breads, due to the lactic acid produced by the lactobacilli. </p>",
    
    "ingredients":[
          {
            "qty": "1 large bunch",
            "name": "spinach"
          },
          {
            "qty": "1/2 small",
            "name": "butternut squash"
          },
          {
            "qty": "200 g",
            "name": "sliced okra"
          },
          {
            "qty": "250 g",
            "name": "fatty minced pork"
          },
          {
            "qty": "6 cups",
            "name": "chicken stock"
          },
          {
            "qty": "1",
            "name": "finely chopped onion"
          },
          {
            "qty": "4 cloves",
            "name": "minced garlic"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "fish sauce"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "1",
            "name": "oil"
          }
        ],
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
        "totaltime": "4-5 servings",
        "directions": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      },
    

  {
     "id": 4,
    "img" : "img/aw.jpg",
    "title" : "<p>Rye Pan</p>",
    "content" : "<p>A Melon Pan is a type of sweet bun from Japan, that is also popular in Taiwan, China and Latin America. They are made from an enriched dough covered in a thin layer of crisp cookie dough.</p>",
    
    "ingredients":[
          {
            "qty": "1 large bunch",
            "name": "spinach"
          },
          {
            "qty": "1/2 small",
            "name": "butternut squash"
          },
          {
            "qty": "200 g",
            "name": "sliced okra"
          },
          {
            "qty": "250 g",
            "name": "fatty minced pork"
          },
          {
            "qty": "6 cups",
            "name": "chicken stock"
          },
          {
            "qty": "1",
            "name": "finely chopped onion"
          },
          {
            "qty": "4 cloves",
            "name": "minced garlic"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "fish sauce"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "1",
            "name": "oil"
          }
        ],
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
        "totaltime": "4-5 servings",
         "directions": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      },
 
  {
     "id": 5,
    "img" : "img/ds.jpg",
    "title" : "<p>Fried Bread</p>",
    "content" : "<p>Fried bread is a slice of bread which is fried. A full English breakfast will often include fried bread fried in oil, butter, lard, or bacon drippings.</p>",
    
    "ingredients":[
          {
            "qty": "1 large bunch",
            "name": "spinach"
          },
          {
            "qty": "1/2 small",
            "name": "butternut squash"
          },
          {
            "qty": "200 g",
            "name": "sliced okra"
          },
          {
            "qty": "250 g",
            "name": "fatty minced pork"
          },
          {
            "qty": "6 cups",
            "name": "chicken stock"
          },
          {
            "qty": "1",
            "name": "finely chopped onion"
          },
          {
            "qty": "4 cloves",
            "name": "minced garlic"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "fish sauce"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "1",
            "name": "oil"
          }
        ],
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
       "totaltime": "4-5 servings",
         "directions": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      },
 
  {
    "id": 6,
    "img" : "img/sandwich.jpg",
    "title" : "<p>Navajo Taco</p>",
    "content" : "<p>A frybread taco, Indian taco, or Navajo taco, is a frybread topped with various items normally found in tacos. A typical frybread recipe consists of flour, water, salt, a small amount of oil, and baking powder.</p>",
    
    "ingredients":[
          {
            "qty": "1 large bunch",
            "name": "spinach"
          },
          {
            "qty": "1/2 small",
            "name": "butternut squash"
          },
          {
            "qty": "200 g",
            "name": "sliced okra"
          },
          {
            "qty": "250 g",
            "name": "fatty minced pork"
          },
          {
            "qty": "6 cups",
            "name": "chicken stock"
          },
          {
            "qty": "1",
            "name": "finely chopped onion"
          },
          {
            "qty": "4 cloves",
            "name": "minced garlic"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "fish sauce"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "1",
            "name": "oil"
          }
        ],
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
        "totaltime": "4-5 servings",
        "directions": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      },

   {
    "id": 7,
    "img" : "img/banana bread.jpg",
    "title" : "<p>Banana Bread</p>",
    "content" : "<p></p>",
    
    "ingredients":[
          {
            "qty": "1 large bunch",
            "name": "spinach"
          },
          {
            "qty": "1/2 small",
            "name": "butternut squash"
          },
          {
            "qty": "200 g",
            "name": "sliced okra"
          },
          {
            "qty": "250 g",
            "name": "fatty minced pork"
          },
          {
            "qty": "6 cups",
            "name": "chicken stock"
          },
          {
            "qty": "1",
            "name": "finely chopped onion"
          },
          {
            "qty": "4 cloves",
            "name": "minced garlic"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "fish sauce"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "1",
            "name": "oil"
          }
        ],
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
        "totaltime": "4-5 servings",
         "directions": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      
  },
   {
    "id": 8,
    "img" : "img/cheese buns.jpg",
    "title" : "<p>Cranberry Cream Cheees Bun</p>",
    "content" : "<p> Tasted more like a plain Cranberry bun with a cheese.</p>",
    "ingredients":[
          {
            "qty": "1 large bunch",
            "name": "spinach"
          },
          {
            "qty": "1/2 small",
            "name": "butternut squash"
          },
          {
            "qty": "200 g",
            "name": "sliced okra"
          },
          {
            "qty": "250 g",
            "name": "fatty minced pork"
          },
          {
            "qty": "6 cups",
            "name": "chicken stock"
          },
          {
            "qty": "1",
            "name": "finely chopped onion"
          },
          {
            "qty": "4 cloves",
            "name": "minced garlic"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "fish sauce"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "1",
            "name": "oil"
          }
        ],
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
        "totaltime": "4-5 servings",
         "directions": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      
  },
   {
    "id": 9,
    "img" : "img/corn bread.jpg",
    "title" : "<p>Buttermilk Corn Bread</p>",
    "content" : "<p>These corn bread is the best sweet and moist.</p>",
  
    "ingredients":[
          {
            "qty": "1 large bunch",
            "name": "spinach"
          },
          {
            "qty": "1/2 small",
            "name": "butternut squash"
          },
          {
            "qty": "200 g",
            "name": "sliced okra"
          },
          {
            "qty": "250 g",
            "name": "fatty minced pork"
          },
          {
            "qty": "6 cups",
            "name": "chicken stock"
          },
          {
            "qty": "1",
            "name": "finely chopped onion"
          },
          {
            "qty": "4 cloves",
            "name": "minced garlic"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "fish sauce"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "1",
            "name": "oil"
          }
        ],
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
       "totaltime": "4-5 servings",
        "directions": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      },
  
   {
    "id": 10,
    "img" : "img/cottage loaf.jpg",
    "title" : "<p>Cottage Loaf</p>",
    "content" : "<p>It is caracterised by its shape, which is essentiallythat of two round loaves.</p>",
    
    "ingredients":[
          {
            "qty": "1 large bunch",
            "name": "spinach"
          },
          {
            "qty": "1/2 small",
            "name": "butternut squash"
          },
          {
            "qty": "200 g",
            "name": "sliced okra"
          },
          {
            "qty": "250 g",
            "name": "fatty minced pork"
          },
          {
            "qty": "6 cups",
            "name": "chicken stock"
          },
          {
            "qty": "1",
            "name": "finely chopped onion"
          },
          {
            "qty": "4 cloves",
            "name": "minced garlic"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "fish sauce"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "1",
            "name": "oil"
          }
        ],
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
        "totaltime": "4-5 servings",
         "directions": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      
  },
   {
    "id": 11,
    "img" : "img/manchet loaf.jpg",
    "title" : "<p>Manchet loaf</p>",
    "content" : "<p>is a wheaten yeast bread of every quality, or a small flat circular loaf of same.</p>",
    
    "ingredients":[
          {
            "qty": "1 large bunch",
            "name": "spinach"
          },
          {
            "qty": "1/2 small",
            "name": "butternut squash"
          },
          {
            "qty": "200 g",
            "name": "sliced okra"
          },
          {
            "qty": "250 g",
            "name": "fatty minced pork"
          },
          {
            "qty": "6 cups",
            "name": "chicken stock"
          },
          {
            "qty": "1",
            "name": "finely chopped onion"
          },
          {
            "qty": "4 cloves",
            "name": "minced garlic"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "fish sauce"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "1",
            "name": "oil"
          }
        ],
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
        "totaltime": "4-5 servings",
        "directions": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      
  },
   {
    "id": 12,
    "img" : "img/pepperoni rolls.jpg",
    "title" : "<p>Pepperoni Rolls</p>",
    "content" : "<p>consists of a fairl soft white yeast breadrole with pepperoni baked in the middle</p>",
    
    "ingredients":[
          {
            "qty": "1 large bunch",
            "name": "spinach"
          },
          {
            "qty": "1/2 small",
            "name": "butternut squash"
          },
          {
            "qty": "200 g",
            "name": "sliced okra"
          },
          {
            "qty": "250 g",
            "name": "fatty minced pork"
          },
          {
            "qty": "6 cups",
            "name": "chicken stock"
          },
          {
            "qty": "1",
            "name": "finely chopped onion"
          },
          {
            "qty": "4 cloves",
            "name": "minced garlic"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "fish sauce"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "1",
            "name": "oil"
          }
        ],
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
        "totaltime": "4-5 servings",
        "directions": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      
  },
   {
    "id": 13,
    "img" : "img/red bbang.jpg",
    "title" : "<p>Sweet Red Bean Bbang</p>",
    "content" : "<p>Most popular red bean paste in korea.</p>",
  
    "ingredients":[
          {
            "qty": "1 large bunch",
            "name": "spinach"
          },
          {
            "qty": "1/2 small",
            "name": "butternut squash"
          },
          {
            "qty": "200 g",
            "name": "sliced okra"
          },
          {
            "qty": "250 g",
            "name": "fatty minced pork"
          },
          {
            "qty": "6 cups",
            "name": "chicken stock"
          },
          {
            "qty": "1",
            "name": "finely chopped onion"
          },
          {
            "qty": "4 cloves",
            "name": "minced garlic"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "fish sauce"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "1",
            "name": "oil"
          }
        ],
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
       "totaltime": "4-5 servings",
         "directions": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      
  },
   {
    "id": 14,
    "img" : "img/sourdough.jpg",
    "title" : "<p>Sourdough Barley Bread</p>",
    "content" : "<p> made from barley flour derived from the grain of the barley plant.</p>",
    
    "ingredients":[
          {
            "qty": "22 g 100% hydration sourdough starter, unfed",
            "name": " hydration sourdough starter, unfed"
          },
          {
            "qty": "137 g",
            "name": "water at room temperature"
          },
          {
            "qty": "110 g",
            "name": "wheat flour"
          },
          {
            "qty": "280 g",
            "name": "whole barley flour"
          },
          {
            "qty": "400 g",
            "name": "wheat flour"
          },
          {
            "qty": "6 tbsp",
            "name": "wheat bran"
          },
          {
            "qty": "370 ml",
            "name": "water"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "salt"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "2 tsp",
            "name": "oil"
          }
        ],
        "preparationtime": "55 mins +5 hrs proofing",
        "cookingtime": "35 mins",
        "totaltime": "6 hrs and 30 minutes",
        "directions": [
          "In the morning, in a large bowl mix the flours and wheat bran with water and the overnight starter until well combined. Let the dough rest (autolyse) for 30 minutes.",
          "Add the salt and knead by hand for 5-8 minutes.",
          "Wipe the inside of a wide bowl with a little vegetable oil. Place the dough into this wide bowl so the dough can be stretched and folded without removing it from the bowl. Cover with plastic wrap. ",
          "Let the dough ferment at room temperature for 2.5 hours with folds at 50 minutes. The folding is shown here.",
          "Turn the dough out onto a floured surface. Divide it in two pieces. Shape them in form of a loaf. Sprinkle the loaves with flour, cover  and let rest for 15 minutes.",
          "Preheat the oven to 475 F (240 C) with baking stone or in case you don't have one preheat a baking sheet. Place a small pot with  water at the base of the oven to create steam.",       
        "Bake for 15 minutes with steam then remove the pot with water from the oven and bake for another 20-25 minutes without steam. ",
      "Cool on a wire rack. Let it cool completely before cutting  for at least 2 hrs. "

]
  },
   {
    "id": 15,
    "img" : "img/white bread.jpg",
    "title" : "<p>White Bread</p>",
    "content" : "<p>Made rom the wheat floor from which the bran and germ layers ave been removed from the whole wheatberry as part of the floor grinding</p>",

     "ingredients":[
          {
            "qty": "1 large bunch",
            "name": "spinach"
          },
          {
            "qty": "1/2 small",
            "name": "butternut squash"
          },
          {
            "qty": "200 g",
            "name": "sliced okra"
          },
          {
            "qty": "250 g",
            "name": "fatty minced pork"
          },
          {
            "qty": "6 cups",
            "name": "chicken stock"
          },
          {
            "qty": "1",
            "name": "finely chopped onion"
          },
          {
            "qty": "4 cloves",
            "name": "minced garlic"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "fish sauce"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "1",
            "name": "oil"
          }
        ],
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
       "totaltime": "4-5 servings",
         "directions": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      
  },
  
  {
    "id": 16,
    "img" : "img/milk rolls.jpg",
    "title" : "<p>Milk Bread Rolls</p>",
    "content" : "<p>These rolls are incredibly soft and airy</p>",
    
    "ingredients":[
          {
            "qty": "1 large bunch",
            "name": "spinach"
          },
          {
            "qty": "1/2 small",
            "name": "butternut squash"
          },
          {
            "qty": "200 g",
            "name": "sliced okra"
          },
          {
            "qty": "250 g",
            "name": "fatty minced pork"
          },
          {
            "qty": "6 cups",
            "name": "chicken stock"
          },
          {
            "qty": "1",
            "name": "finely chopped onion"
          },
          {
            "qty": "4 cloves",
            "name": "minced garlic"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "fish sauce"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "1",
            "name": "oil"
          }
        ],
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
        "totaltime": "4-5 servings",
        "directions": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      
  },
   {
    "id": 17,
    "img" : "img/potato bread.jpg",
    "title" : "<p>Sweet potato Bread</p>",
    "content" : "<p>Back in the philippines ube is te purple yam that is famous as a dessert, jam or ice cream</p>",
    
    "ingredients":[
          {
            "qty": "1 large bunch",
            "name": "spinach"
          },
          {
            "qty": "1/2 small",
            "name": "butternut squash"
          },
          {
            "qty": "200 g",
            "name": "sliced okra"
          },
          {
            "qty": "250 g",
            "name": "fatty minced pork"
          },
          {
            "qty": "6 cups",
            "name": "chicken stock"
          },
          {
            "qty": "1",
            "name": "finely chopped onion"
          },
          {
            "qty": "4 cloves",
            "name": "minced garlic"
          },
          {
            "qty": "1 tbsp",
            "name": "minced ginger"
          },
          {
            "qty": "1",
            "name": "fish sauce"
          },
          {
            "qty": "1",
            "name": "freshly ground black pepper"
          },
          {
            "qty": "1",
            "name": "oil"
          }
        ],
        "preparationtime": "15 minutes",
        "cookingtime": "20 minutes",
        "totaltime": "4-5 servings",
         "directions": [
          "In a pot add oil then sauté garlic, ginger and onions.",
          "Add the pork mince and cook until brown in colour.",
          "Add the chicken stock then bring to a boil, simmer for 5 minutes.",
          "Add the squash cook for 3 minutes.",
          "Add the okra and cook for 3 more minutes.",
          "Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
        ]
      },

  ];
  this.state = [
      {
        "bind": {
          "directions":[],
          "ingredients_qty":[],
          "ingredients_name":[]
        }
      }
    ];
  }
    

  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }


createRecipe(){
    let id = document.getElementById('recipe_id');
    let name = document.getElementById('recipe_title');
    let description = document.getElementById('recipe_description');
    let img = document.getElementById('recipe_img');
    let preparationtime = document.getElementById('recipe_preparationtime');
    let cookingtime = document.getElementById('recipe_cookingtime');
    let totaltime = document.getElementById('recipe_totaltime');
    
    let dummyIngredients = [];
    for(let i=0;i<this.state[0].bind.ingredients_qty.length;i++){
      dummyIngredients.push({
        "qty" : this.state[0].bind.ingredients_qty[i],
        "name" : this.state[0].bind.ingredients_name[i]
      });
    }
    let ingredients = dummyIngredients;

    let dummydirections = [];
    for(let i=0;i<this.state[0].bind.directions.length;i++){
      dummydirections.push(this.state[0].bind.directions[i]);
    }
    let directions = dummydirections;

    let recipe = {      
      "id": id.value,
      "title": title.value,
      "content": content.value,
      "img": img.value,
      "ingredients":ingredients,
      "preparationtime": preparationtime.value,
      "cookingtime": cookingtime.value,
      "totaltime": totaltime.value,
      "directions": directions
    };


    this.recipe.push(recipe);

    //Clear Fields
    this.state[0].bind.directions = this.state[0].bind.ingredients_qty = this.state[0].bind.ingredients_name = [];
    id.value = title.value = content.value = img.value = preparationtime.value = cookingtime.value = totaltime.value = ''; 
  } 

  deleteRecipe(key){
    let r = this.recipe;
    for(let i=0;i<r.length;i++){
      if(r[i].id == key){
        this.recipe.splice(i,1);
        break;
      }
    }   
    this.recipeLayout();
  }

  findRecipeByID(id){
    let r = this.recipe;
    for(let i=0;i<r.length;i++){
      if(id==r[i].id){
        return r[i];
      }
    }
  } 

  findRecipeByTitle(title){
    let objects = [];
    let r = this.recipe;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].title.toUpperCase().indexOf(title.toUpperCase()) > -1);
     
      if(expr){
        objects.push(r[i]);
      }
    }
    return objects;
  }

  bindRecipeNewDirections(val,id){
    let bind = this.state[0].bind.directions;
    bind[id] = val;
    // console.log(bind);
  } 

  bindRecipeNewIngredients(val,id,obj){
    let bind = null;
    if(obj === "qty"){
      bind = this.state[0].bind.ingredients_qty;
    }
    else if(obj === "name"){
      bind = this.state[0].bind.ingredients_name;
    }
    bind[id] = val;
   
  } 
}

class Component extends App{
  constructor(){
    super();
  }
  recipeLayout(){
    let html =`
      
</nav>
       <nav>
    <div class="nav-wrapper yellow darken-4">
    <a href="#" onclick="component.recipeLayout()" class="brand-logo">&nbsp;&nbsp;Bread Market</a>
<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
            
        

      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="#" onclick="component.recipeList()"><i class="waves-effect waves-light btn-large">Bread List</i></a></li>
        <li><a href="#" onclick="component.recipeCreate()"><i class="waves-effect waves-light btn-large">Create Bread</i></a></li>
 </ul>
 <ul class="side-nav" id="mobile-demo">
   <li><a href="#" onclick="component.recipeList()"><i class="waves-effect waves-light btn-large">Bread List</i></a></li>
        <li><a href="#" onclick="component.recipeCreate()"><i class="waves-effect waves-light btn-large">Create Bread</i></a></li>
        
        
      </ul>
    </div>  
  </nav>
  
  
  <div id="recipeSlides"></div>
    <div id="recipeRecent"></div>
        <div id="recipeView"></div>
        <div id="recipeList"></div>
        <div id="recipeCreate"></div>
    


        <footer class="page-footer yellow darken-4">
          <div class="container ">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">JabzzKillerBread</h5>
                <p class="grey-text text-lighten-4">Jabzz Killer Bread is an International company based in Milwaukie, Oregon, which makes organic whole-grain breads. It was founded in 2005 by jab Dahl, who learned the baking trade growing up in his family bakery

                .</p>
              </div>
              <div class="col l4 offset-20 s2">
                <h5 class="white-text">Categories</h5>
                <ul>
                  <li>
                    <a class="grey-text text-lighten-3" href="#" onclick="component.recipeLayout()">
                      <!-- <i class="material-icons left">dashboard</i> -->
                      Home</a></li>
                      <li><a class="grey-text text-lighten-3" href="#" onclick="component.recipeList()">
                        <!-- <i class="material-icons left">assignment</i> -->
                        Recipes</a></li>
                        <li><a class="grey-text text-lighten-3" href="#" onclick="component.recipeCreate()">
                          <!-- <i class="material-icons left">dashboard</i> -->
                          Create</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            
            </div>
          </div>
        </footer>

       `;
this.reRender(`
      ${html}

      `,document.getElementById("app"));
     this.recipeSlides();
    this.recipeRecent();
   

  }
   recipeSlides(){
    let html =`
    <div class="slider">
    <ul class="slides">
      <li>
        <img src="${this.media[0].img}"> <!-- random image -->
  <div class="${this.media[0].alignment}">
         <h3>${this.media[0].slogan}</h3>
          
        </div>
      </li>
      <li>
              <img src="${this.media[1].img}"> <!-- random image -->
  <div class="${this.media[1].alignment}">
          <h3>${this.media[1].slogan}</h3>
         
        </div>
      </li>
      <li>
              <img src="${this.media[2].img}"> <!-- random image -->
  <div class="${this.media[2].alignment}">
          <h3>${this.media[2].slogan}</h3>
         
        </div>
      </li>
      <li>
        <img src="${this.media[3].img}"> <!-- random image -->
  <div class="${this.media[3].alignment}">     
          <h3>${this.media[3].slogan}</h3>
          <h5 class="light grey-text text-lighten-3">"Makes Everday Delicious"</h5>
        </div>
      </li>
    </ul>
  </div>
  `;
 html += `</div>`;

    this.render(`   
      ${html}
      `,document.getElementById("recipeSlides"));
  }

      recipeRecent(){
    
    let html = `
      <h5 class="center-align">Recent Recipes</h5>
      <div class="row">
    `;

    let r = this.recipe;
    let count = 0;
    for(let i=(r.length-1);i>=0;i--){
      if(count++ === 6)break;
      html+= `
       
      <div class="row">
 <div class="col s4 m4">
          <div class="card">
            <div class="card-image">
              <img src="${r[i].img}">
              <span class="card-title ">${r[i].title}</span>
            </div>
            <div class="card-content">
              <p>${r[i].content}</p>
              
            <div class="card-action">
        <a href="#" onclick="component.recipeView(${r[i].id})">More</a>
            </div>
          </div>
        </div>
        </div>
        



      `;
    }
    html += `</div>`;

    this.render(`   
      ${html}
      `,document.getElementById("recipeRecent"));
     $('#recipeView').show();
     
  }
  
      

  recipeView(id){
    let r = this.findRecipeByID(id);

    let html = `
      
      <h5 class="center-align">${r.title}</h5>
      <div class="row">       
        <div class="col s12 m12">
          <div class="card horizontal small">
            <div class="card-image">
              <img src="${r.img}">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>${r.content}</p>
              </div>
              <div class="card-action small">               
                <span onclick="component.deleteRecipe(${r.id})" class="waves-effect waves-light btn-large "">DELETE</span>
                <span onclick="component.recipeLayout()" class="waves-effect waves-light btn-large red""><--HOME</span>
              </div>
            </div>          
          </div>        
        </div>      
      </div>
    `;

    html += `
      <div class="row">
        <table class="striped">
          <thead>
            <tr>
              <th>Preparation Time</th>
              <th>Cooking Time</th>
              <th>Total Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${r.preparationtime}</td>
              <td>${r.cookingtime}</td>
              <td>${r.totaltime}</td>
            </tr>         
          </tbody>
        </table>
      </div>
    `;

    html += `
      <div class="row">       
        <div class="col s6 m6">
          <h6>Ingredients</h6>
          <ul class="collection">
    `;

    for(let i=0;i<r.ingredients.length;i++){
      let ri = r.ingredients[i];
      html += `
            <li class="collection-item avatar">
              <i class="material-icons circle">star</i>
              <span class="title">${ri.qty}</span>
              <p>${ri.title}<br>
                
              </p>
              
            </li>
      `;
    }

    html += `       
          </ul>
        </div>
        <div class="col s6 m6">
          <h6>Directions</h6>
          <ul class="collection">
    `;

    for(let i=0;i<r.directions.length;i++){
      let rp = r.directions[i];
      html += `
            <li class="collection-item avatar">
              <i class="material-icons circle">done</i>
              <span class="title">Step ${i+1}</span>
              <p>${rp}<br>
                
              </p>
              
            </li>
      `;
    } 

    html += `
          </ul>
        </div>      
      </div>
    `;

    this.reRender(`   
      ${html}     
      `,document.getElementById("recipeView"));
    $('#recipeView').show();
    
    $('#recipeRecent').hide();
    $('#recipeList').hide();
    $('#recipeCreate').hide();
   
  }


        recipeList(){
          let html =`
         
        
          <div class="nav-wrapper green lighten-4">
  <form>
    <div center class="input-field">
     <input onkeyup="component.recipeListItems(this.value)" id="search" type="search" placeholder="Search Bread here ..." required>
      <label for="search"><i class="material-icons"></i> </label>
      <i class="material-icons">close</i>
    </div>
  </form>
</div>


`;

html +=`
<div class="row" id="recipeListItems">
    `;
      let r = this.recipe;
    for(let i=0;i<r.length;i++){
      html+= `
       <div class="row">
 <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="${r[i].img}">
              <span class="card-title dark black-text text-darken-3">${r[i].title}</span>
            </div>
            <div class="card-content">
              <p>${r[i].content}</p>
            <div class="card-action">
          <a href="#" onclick="component.recipeView(${r[i].id})">More</a>
            </div>
          </div>
        </div>
        </div>

 `;
}
      

        html +=
        `</div>`;
        
        this.reRender(`
          ${html}
          `,document.getElementById("recipeList"));
       $('#recipeList').show();
   
    $('#recipeView').hide();
    $('#recipeRecent').hide();
       
    $('#recipeCreate').hide(); 
       
  }
           recipeListItems(title){
    let html = ``;
    let r = this.findRecipeByTitle(title);
    for(let i=0;i<r.length;i++){
      html+= `
        <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].img}">
              <span class="card-title">${r[i].title}</span>
            </div>
            <div class="card-content">
              <p>${r[i].content}</p>
            </div>
            <div class="card-action">
              <a href="#" onclick="component.recipeView(${r[i].id})">More</a>
            </div>
          </div>
        </div>
      `;
    }   
    this.reRender(`
      ${html}
      `,document.getElementById("recipeListItems"));
    $('#recipeList').show();
    
    $('#recipeView').hide();
    $('#recipeRecent').hide();  
    $('#recipeCreate').hide();
    
  }

  recipeCreate(){
    let html = `
      <div class="row">
        <form class="col s12">
        <h5 class="center-align">Create New Recipe</h5>
        <button onclick="component.createRecipe()" class="btn waves-effect waves-light">Save</button>
          <div class="row">
            <div class="input-field col s6">
              <input disabled value="${this.recipe.length+1}" id="recipe_id" type="text" class="validate">
            </div>
            <div class="input-field col s6">
              <input id="recipe_name" type="text" class="validate">
              <label for="recipe_name">NAME</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="recipe_description" type="text" class="validate">
              <label for="recipe_description">DESCRIPTION</label>
            </div>
            <div class="input-field col s6">
              <input id="recipe_photo" type="text" class="validate">
              <label for="recipe_photo">PHOTO</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s4">
              <input id="recipe_preparationtime" type="text" class="validate">
              <label for="recipe_preparationtime">PREPARATION TIME</label>
            </div>
            <div class="input-field col s4">
              <input id="recipe_cookingtime" type="text" class="validate">
              <label for="recipe_cookingtime">COOKING TIME</label>
            </div>
            <div class="input-field col s4">
              <input id="recipe_totaltime" type="text" class="validate">
              <label for="recipe_totaltime">TOTAL TIME</label>
            </div>
          </div>


          <div class="row">
            <div class="input-field col s6">
              <h6> INGREDIENTS</h6>
              <button onclick="component.recipeNewIngredients()" class="btn-floating waves-effect waves-light"><i class="material-icons">add</i></button>
              <div id="recipeNewIngredients"></div>
            </div>
            <div class="input-field col s6">
              <h6>PROCEDURES</h6>
              <button onclick="component.recipeNewDirections()" class="btn-floating waves-effect waves-light"><i class="material-icons">add</i></button>
              <div id="recipeNewDirections"></div>
            </div>
          </div>          
        </form>
      </div>      
    `;

    this.reRender(`
      ${html}
      `,document.getElementById("recipeCreate"));
    $('#recipeCreate').show();
    $('#recipeSlides').show();
    $('#recipeList').hide();
    $('#recipeView').hide();
    $('#recipeRecent').hide();
    
    this.state[0].bind.directions = [];   
    this.state[0].bind.ingredients_qty = [];    
    this.state[0].bind.ingredients_name = [];   
  }

  recipeNewDirections(){
    let bind = this.state[0].bind.directions;
    bind.push("");    
    
    let html = ``;
    for(let i=0;i<bind.length;i++){
      let decode_bind = `onkeyup="component.bindRecipeNewDirections(this.value,${i})"`;
      html += `
        <div class="row">
          <div class="input-field col s12">
            <input ${decode_bind} value="${bind[i]}" type="text" />         
          </div>
        </div>    
      `;
    }

    this.reRender(`
      ${html}
      `,document.getElementById("recipeNewDirections"));
  }

  recipeNewIngredients(obj){
    let bind_qty = this.state[0].bind.ingredients_qty;
    let bind_name = this.state[0].bind.ingredients_name;
    bind_qty.push("");    
    bind_name.push("");   
    
    let html = ``;
    for(let i=0;i<bind_qty.length;i++){
      let decode_bind_qty = `onkeyup="component.bindRecipeNewIngredients(this.value,${i},'qty')"`;
      let decode_bind_name = `onkeyup="component.bindRecipeNewIngredients(this.value,${i},'name')"`;
      html += `
        <div class="row">
          <div class="input-field col s12">
            <input ${decode_bind_qty} value="${bind_qty[i]}" type="text" />         
          </div>
        </div>  
        <div class="row">
          <div class="input-field col s12">
            <input ${decode_bind_name} value="${bind_name[i]}" type="text" />         
          </div>
        </div>    
      `;
    }

    this.reRender(`
      ${html}
      `,document.getElementById("recipeNewIngredients"));
  } 


}

let component = new Component();
component.recipeLayout();