//zadanie 8


let massivMap = new Map([
 ["car", "toyota"], 
  ["engine", "1.6 gasoline"], 
  ["gear", "six steps robotic"], 
  ["wheels", "all season, micheline"], 
  ["color", "red"], 
  ["model", "corolla"], 
  ["sterring wheel", "left"]
]);


for (let name of massivMap.keys()) {
    console.log(`Ключ:- ${name}, значение:- ${massivMap.get(name)}`); 

}
