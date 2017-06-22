
var cocktailList = [];
var yourCocktailList = [];
var yourCocktailnames = [];

//function for creating your own cocktail in app
export function Cocktail(photo, type, name, ing, steps){
  this.photo = photo;
  this.type = type;
  this.name = name;
  this.ing = ing;
  this.steps = steps;
  cocktailList.push(this);
};

export function YourCocktail(photo, type, name, ing, steps){
  this.photo = photo;
  this.type = type;
  this.name = name;
  this.ing = ing;
  this.steps = steps;
  yourCocktailList.push(this);
};

var oldFashioned = new Cocktail(
  this.photo = 'none',
  this.type = "Whiskey",
  this.name = "Old Fashioned",
  this.ing = ["bitters", "sugar", "orange wheel", "cherry", "soda", "bourbon"],
  this.steps = ["muddle all but bourbon and cherry", "remove rind", "garnish"]
);

var oldFashioned2 = new Cocktail(
  this.photo = "none",
  this.type = "Whiskey",
  this.name = "Old Fashioned2",
  this.ing = ["bitters", "sugar", "orange wheel", "cherry", "soda", "bourbon"],
  this.steps = ["muddle all but bourbon and cherry", "remove rind", "garnish", "serve"]
);

export {cocktailList};
export {yourCocktailList};
export {yourCocktailnames};
