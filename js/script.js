

const findVowel = (letter) => {
    const vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) {
            return true;
        }
    }
    return false;
};
let resultat = findVowel("e");
console.log(resultat);

const moTcompLet = (opticien) => {
    const vowels = ["a", "e", "i", "o", "u"];
    
    for (let i = 0; i < vowels.length; i++) {

        if (opticien !== vowels[i]) {
            return true;
        }
    }
    return false;
};
let premier = moTcompLet("opticien");
console.log(premier);

const noteTable = [4, 14, 20, 12];

for (let i = 0; i < noteTable.length; i++) {
    
}
    

