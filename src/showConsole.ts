

import { IrpfFilter } from './utils/comparador';
import { AskQuestions } from './utils/AskQuestions';

const ask = new AskQuestions()
let irpfController = new IrpfFilter()
let ahorro = 0
let baseImponible;
let pp_persona_fisica;
let pp_empresa;
let pp_autonomo;
const question1: string =  ('Introduzca su base imponible: ')
const question2: string =  ('Introduzca su plan de pensiones de persona física: ')
const question3: string =  ('Introduzca su plan de pensiones de empresa: ')
const question4: string =  ('Introduzca su plan de pensiones de autónomo: ')


export async function showConsole(){
    try{
        baseImponible = parseInt(await ask.question(question1));
        pp_persona_fisica = parseInt(await ask.question(question2));
        pp_empresa = parseInt(await ask.question(question3));
        pp_autonomo = parseInt(await ask.question(question4));

        const inversiones = pp_autonomo + pp_empresa + pp_persona_fisica
        const retencion = irpfController.filterIrpf(baseImponible)
        ahorro = inversiones / 100 * retencion
    
        console.log('tu ahorro total ha sido de: ',ahorro)
    }catch(error){
        console.log('introduzca los datos correctos')
    } finally {
        ask.rl.close()
    }
}


