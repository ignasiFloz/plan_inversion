import * as readline from 'readline';

    export class AskQuestions {
    
    question1 : string = ('Introduzca su base imponible: ') 
    question2 : string = ('Introduzca su plan de pensiones de persona física: ') 
    question3 : string = ('Introduzca su plan de pensiones de empresa: ') 
    question4 : string = ('Introduzca su plan de pensiones de autónomo: ') 

    question(question: string,rl : readline.Interface): Promise<string> {
        return new Promise((resolve) => {
            rl.question(question, (input) => resolve(input));
        });
    }
 
}


    