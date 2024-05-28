# DNA Simulation Project

## Overview
This project simulates the genetic processes of a newly discovered marine organism called Pila aequor. Using JavaScript, we create a model to generate DNA strands, simulate mutations, compare genetic data, and evaluate the organism's likelihood of survival based on its genetic makeup. The project employs JavaScript functions and object-oriented concepts to represent and manipulate genetic data.

## Key JavaScript Techniques
- **Factory Functions**: Used to encapsulate the creation of each organism instance with unique properties and methods.
- **Array Manipulation**: Manipulates arrays to model DNA strands and perform genetic mutations.
- **Object Methods**: Implements functionality within objects to simulate biological processes like DNA mutation and comparison.

## Functions and Methods
### `returnRandBase()`
- **Purpose**: Randomly selects one of the four DNA bases ('A', 'T', 'C', 'G') and returns it.
- **Implementation**: Utilizes `Math.random()` to select a random base from an array.

### `strandGenerator()`
- **Purpose**: Generates an array representing a DNA strand consisting of 15 bases.
- **Implementation**: Calls `returnRandBase()` within a loop to construct an array of bases.

### `organismFactory(id, strd)`
- **Parameters**:
  - `id`: A unique number identifying the organism.
  - `strd`: An array of 15 DNA bases.
- **Returns**: An object representing an organism, which includes several methods for manipulating and analyzing its DNA.
- **Methods**:
  - `.mutate()`: Mutates one random base in the DNA to a different base.
  - `.compareDNA(org)`: Compares its DNA with another organism's DNA and computes the percentage of identical bases in the same locations.
  - `.willLikelySurvive()`: Evaluates if the organism's DNA contains at least 60% 'C' or 'G' bases, indicating a higher chance of survival.

## Usage Example
```javascript
console.log("Testing organism functionality\n");

let organism1 = organismFactory(1, strandGenerator());
let organism2 = organismFactory(2, strandGenerator());

console.log("Organism 1 DNA:", organism1.strand);
console.log("Organism 2 DNA:", organism2.strand);

organism1.mutate();
console.log("Mutated Organism 1 DNA:", organism1.strand);

console.log("DNA Comparison:", organism1.compareDNA(organism2));

console.log("Organism 1 Survival Likelihood:", organism1.willLikelySurvive());
console.log("Organism 2 Survival Likelihood:", organism2.willLikelySurvive());
