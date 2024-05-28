// a DNA strand is an array of 15 bases 
// DNA is comprised of four bases A, T, C and G
// we have two functions one that returns a random DNA base
// and one that generates and return a whole DNA strand array of 15 bases



//base generator
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
}
//strand generator
const strandGenerator = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
}
//organism generator
const organismFactory = (id, strd) => {
    let organism = {
        specimenId: id,
        strand: strd,
        mutate: function () {
            let ran = returnRandBase();
            let newbase;
            do {
                newbase = returnRandBase();
            } while (newbase === ran);
            this.strand = this.strand.map(a => {
                if (a === ran) {
                    a = newbase;
                    return a;
                }
                else {
                    return a;
                }
            })
        },
        compareDNA: function (org) {
            let strand1 = org.strand;
            let strand2 = this.strand;
            let comp = 0;
            for (let i = 0; i < 15; i++) {
                if (strand1[i] === strand2[i]) {
                    comp += 1 / 15
                }
            }
            return `specimen #${this.specimenId} and specimen #${org.specimenId} have ${comp}% DNA in common`
        },
        willLikelySurvive: function () {
            let strand = this.strand;
            let numofCorD = 0;
            for (i = 0; i < 15; i++) {
                if (strand[i] === 'C' || strand[i] === 'D') {
                    numofCorD++;
                }
                if (numofCorD / 15 >= 0.60) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }

    };

    return organism;
};

console.log("Testing organism functionality\n");

console.log("-----here are two random organisms : \n");
let organism1 = organismFactory(1, strandGenerator());
let organism2 = organismFactory(2, strandGenerator());
console.log(JSON.stringify(organism1, null, 2));
console.log("\n");
console.log(JSON.stringify(organism2, null, 2));
console.log("\n");


console.log("-----let's mutate the strand of the first organism : \n");
organism1.mutate();
console.log("Mutated Organism 1:", JSON.stringify(organism1, null, 2));
console.log("\n");


console.log("-----let's compare organism1 with organism2 : \n");
console.log("DNA Comparison:", organism1.compareDNA(organism2));


console.log("-----let's see the likelyhood of survival of both : \n");
console.log("Organism 1 Survival Likelihood:", organism1.willLikelySurvive());
console.log("Organism 2 Survival Likelihood:", organism2.willLikelySurvive());


console.log("-----lets generate an array of organisms : \n");
// lets create 5 instances and push them to this array
let study = [];
for (let i = 0 ; i < 5 ; i++){
  let instance = organismFactory(i,strandGenerator());
  study.push(instance);
}
study.forEach(organism => {
    console.log(JSON.stringify(organism, null,2));
    console.log("\n");
});