// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (spiecimenNum, dna) => {
  return { 
    spiecimenNum: spiecimenNum,
    dna: dna,
    // Randomly select base in object dna and chenge current base to a diffrent base (can't be the same as was)
    mutate () {
      const randomElement = Math.floor(Math.random() * this.dna.length)
      let newBase = returnRandBase()
      // console.log(randomElement)
      // console.log(newBase)
      while (this.dna[randomElement] === newBase){
        
        newBase = returnRandBase()
      }
        this.dna[randomElement] = newBase
        // console.log(this.dna[randomElement])
        return this.dna

    },
    // Find common DNA and log a message that states the percentage of DNA the two objects have in common.
    compareDNA (pAequor) {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]){
        counter +=1
        console.log(i, this.dna[i])
        
        }
      }
      console.log(counter)
      let commonDNA = (counter / this.dna.length * 100).toFixed(0)
      console.log(`Specimen #1 and Specimen #2 have ${commonDNA}% DNA in common.`)
    },

    // Check if the object’s .dna array contains at least 60% 'C' or 'G' bases. Return true if yes.
    willLikelySurvive () {
    //  let counterC = this.dna.count("C")
    let counterC = this.dna.filter(base => base === "C").length
     console.log(counterC)
    //  let counterG = this.dna.count("G")
    let counterG = this.dna.filter(base => base === "G").length
     console.log(counterG)
     let allDNA = this.dna.length
     if ((counterC/allDNA >= 0.6) || (counterG/allDNA >= 0.6)){
      return true;
     } else {
      return false;
     }
    }
  }
  
}

let specimen1 = pAequorFactory(1,mockUpStrand())
let specimen2 = pAequorFactory(2,mockUpStrand())
// console.log(pAequorFactory.mutate)

// console.log("Sp1:", specimen1.dna);
// console.log("Sp2:", specimen2.dna);
// console.log(specimen1.compareDNA(specimen2))
// specimen.mutate();
// console.log("After mutation:", specimen.dna);
console.log(specimen1.willLikelySurvive())

let pAequor30 = []
let i = 1

// With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. 
// Store these instances in an array for your team to study later.
while (pAequor30.length < 30) {
  let  spiecimen = pAequorFactory(i,mockUpStrand())
  if  (spiecimen.willLikelySurvive()) {
    pAequor30.push(spiecimen)
  }
  i++;
}
console.log(pAequor30)



const x = 23





