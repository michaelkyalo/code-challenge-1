function calculateBodafare(distance in kilometers){
    const baseFare=50;
    const chargePerkm=15;
    const totalFare=baseFare+(distanceInKm*chargePerkm)

    console.log("Uko kwote? Io ni ${distance in km} km;");
    console.log('ukikalia pikipiki:KES ${baseFare}');
    console.log('Mpaka uko: KES ${distance in km*chargePerkm}');
    console.log('Total: KES ${totalFare}');
}
const userInput= prompt('unafika wapi Mkubwa? kilometere ngapi?:');
const distanceInKm= parseFloat(userInput);
if (!isNaN(distanceInKm) && distanceInKm > 0){
    calculateBodafare(distanceInKm);
} else{
console.log("Tafadhali ingiza nambari halali ya kilomita.");
}
