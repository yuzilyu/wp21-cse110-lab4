let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 21,
    raceCars: 5,
    blackCats: 40,
    rareCars: 2,
};

for(const property in statistics) {
    if(property.startsWith('r') || (statistics[property]) % 2 == 1){
        console.log(statistics[property]);
    }
}