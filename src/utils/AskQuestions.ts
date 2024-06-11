import * as readline from 'readline';

    export class AskQuestions {
            rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        question(question:string): Promise<string>{
            return new Promise((resolve)=>{
                this.rl.question(question,(input)=> resolve(input))
        })

    }}