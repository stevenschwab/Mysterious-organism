// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand;
  }
  
  const pAequorFactory = (aNumber, anArrayOfDna) => {
    return pAequor = {
      specimenNum: aNumber,
      dna: anArrayOfDna,
      mutate() {
        randomBase = Math.floor(Math.random() * 15);
        const dnaBases = ['A', 'T', 'C', 'G'];
        dnaBases.pop(this.dna[randomBase]);
        returnaRandBase = dnaBases[Math.floor(Math.random() * 3)]
        this.dna[randomBase] = returnaRandBase;
        return this.dna;
      },
      compareDNA(pAequor) {
        let elementsInCommon = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === pAequor.dna[i]) {
            elementsInCommon++;
          }
        }
        const percentage = ((elementsInCommon / this.dna.length) * 100).toFixed(2);
        return `specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common.`
      },
      willLikelySurvive() {
        const cAndGbases = this.dna.filter(base => base === 'C' || base === 'G');
        const percentageCandG = ((cAndGbases.length / this.dna.length) * 100).toFixed(2);
        if (percentageCandG >= 60) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  
  console.log(pAequorFactory(1, mockUpStrand()));
  console.log(pAequor.mutate());
  console.log(pAequor.compareDNA(pAequorFactory(2, mockUpStrand())));
  console.log(pAequor.willLikelySurvive());
  
  const factoryFunction = (num, arr) => {
    let instancesOfpAequor = [];
  
    while (instancesOfpAequor.length < 30) {
      pAequorFactory(num, arr);
      pAequor.mutate()
      if (pAequor.willLikelySurvive()) {
        instancesOfpAequor.push(pAequor)
      }
      num ++;
    }
    return instancesOfpAequor;
  }
  
  console.log(factoryFunction(1, mockUpStrand()));