import { AdventOfCodeSolution } from "../shared/adventOfCodeSolution";

class Day1 extends AdventOfCodeSolution{
    
    constructor(){
        super(1, "./01.in")
    }
    
    partOne(): number {
        super.readLines();
        return 0;
    }
    partTwo(): number {
        throw new Error("Method not implemented.");
    }
}

new Day1().partOne();