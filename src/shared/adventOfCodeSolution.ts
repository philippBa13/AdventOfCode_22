import path from "path";

export abstract class AdventOfCodeSolution {

    private numberOfDay: number;
    private inputfilePath: string;

    constructor(numberOfDay: number, inputfilePath: string) {
        this.numberOfDay = numberOfDay;
        this.inputfilePath = inputfilePath;
    }

    public readLines() {
        var fs = require('fs');
        var array = fs.readFileSync(path.resolve(__dirname, this.inputfilePath)).toString().split("\n");
        for (const i in array) {
            console.log(array[i]);
        }
    }

    abstract partOne(): number
    abstract partTwo(): number

}