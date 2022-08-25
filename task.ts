interface department {
    modelNumber: string;
    modelName: string;
    count: number;
    
}

var Baked_food: department = {
    modelName: "Super Strong",
    modelNumber:"18EE257",
    count:10,
    
}

class Beverages implements department {
    modelNumber: string;
    modelName: string;
    count: number;
    constructor(modelNumber: string, modelName: string, count: number) {
        this.modelNumber = modelNumber; 
        this.modelName = modelName;
        this.count = count;
    }
    brand: string = 'Beverages';
    
}
class Chips implements department{
    modelNumber: string;
    modelName: string;
    count: number;
    constructor(modelNumber: string, modelName: string, count: number) {
        this.modelNumber = modelNumber; 
        this.modelName = modelName;
        this.count = count;
    }
    
    brand: string = 'Chips';
}

var Beverages1 = new Beverages('1', 'Rose water',25);

var Beverages2 = new Beverages('2', 'French Toast Roll',17);

var Chips1 = new Chips('1','Tomota',11);

var Chips2 = new Chips('2','Fired-stone',12);

var Chips3 = new Chips('3','Raspberry',10);

delete Chips3['modelNumber']; 
console.log("--------------------------");

function getKey(Beverages1,Beverages2){
  const arr = [],
  obj = Object.keys(Beverages1);
  for (var count in obj){
    if(Beverages1[obj[count]] > 5){
      arr.push(obj[count]);
    }
  }
  return arr;
}

 var Beverages5 = [{brand:"Beverages", modelNumber:"2",modelName:"Sprit",count:25},
 {brand:"Beverages", modelNumber:"3",modelName:"soda",count:21}];

 const result = Beverages5.filter((obj) => {
  return obj.count > 5;
});

console.log(result);
console.log(".....................................................");
console.log("Pandian Stores");
console.log(Baked_food);
console.log(Beverages1,Beverages2,Chips1,Chips2);
console.log("......................................................");
console.log("delete");
// console.log(Beverages);
console.log(Chips3);
console.log("......................................................");
console.log("ADDITIONAL");
console.log(Beverages5);
console.log("......................................................");
console.log("threshold");
console.log(getKey(Beverages1 ,Beverages2));
console.log(result);
console.log("......................................................");