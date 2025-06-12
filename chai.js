function chaiIngridients(){
const waterPercup = 200*numberOfCups;
const milkPercup =50*numberOfCups;
const teaLeavesPercup =1*numberOfCups;
const sugarPercup = 2*numberOfCups;
console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon${totalTeaLeaves > 1 ? 's' : ''}`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoon${totalSugar > 1 ? 's' : ''}`);
    console.log("\nEnjoy your Chai Bora!")
}
const Input = prompt('karibun! How many cups of Chai Bora would you like');
const numberOfCups =Number(3);
if ((numberOfCups) numberOfCups <= 2){
    console.log("please enter a valid number of cups greater than 2.");
} else {
    calculatingchaiIngridients(numberOfCups);
}



