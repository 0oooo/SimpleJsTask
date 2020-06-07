const arrToTry = [{id: 1}, {id: 2}];

const idOrganiser = (arrayToOrganize) => {

    const idFrequency = {};
    const uniqueIds = [];

    // Find new unique id in the original array, push them in a list of unique ids and find their frequency
    while(arrayToOrganize.length > 0){
        const obj = arrayToOrganize[0];
        if (!(obj.id in idFrequency) ) {
            const numToCompare = obj.id;
            uniqueIds.push(obj);
            idFrequency[numToCompare] = arrayToOrganize.filter(obj => {
                return obj.id === numToCompare
            }).length;
            arrayToOrganize = arrayToOrganize.filter(obj => {return obj.id !== numToCompare});
        }
    }

    // Calculate the total amount of possible combinations using the frequency of use of each unique id
    let possibleCombinations =  1;
    for (const [key, value] of Object.entries(idFrequency)) {
        possibleCombinations *= `${value}`;
    }

    // copy the array of unique id the number of times calculated by the possible combinations
    const organizedArrayIds = [];
    while(possibleCombinations > 0){
        organizedArrayIds.push(uniqueIds);
        possibleCombinations--;
    }

    return organizedArrayIds;
};

exports.idOrganiser = idOrganiser;

console.log(idOrganiser(arrToTry));
