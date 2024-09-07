class Storage{
#items = [];

  constructor(params){
     this.#items = params; 
  }

  getItems(){
    return this.#items;
  }

  addItem(newItem){
    this.#items.push(newItem);
  } 

  removeItem(itemToRemove){
    const indexOfItem = this.#items.indexOf(itemToRemove);
    if (indexOfItem !== -1) {
      this.#items.splice(indexOfItem,1);
    {
  } 
    
}

console.log("Task-2:");

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


