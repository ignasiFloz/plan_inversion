import * as readline from 'readline';
import { AskQuestions } from './utils/AskQuestions';
import { IrpfFilter } from './utils/IrpfFilter';

let irpfController = new IrpfFilter()
let ask = new AskQuestions()
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


export async function showConsole(){
    try{
        const baseImponible = parseInt(await ask.question(ask.question1,rl));
        const pp_persona_fisica = parseInt(await ask.question(ask.question2,rl));
        const pp_empresa = parseInt(await ask.question(ask.question3,rl));
        const pp_autonomo = parseInt(await ask.question(ask.question4,rl));
        const inversiones = pp_autonomo + pp_empresa + pp_persona_fisica
        const retencion = irpfController.filterIrpf(baseImponible)
        const ahorro = inversiones* retencion
    
        console.log('tu ahorro total ha sido de: ',ahorro)
    }catch(error){
        console.log('introduzca los datos correctos')
    } finally {
        rl.close()
    }
}


