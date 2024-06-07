/*     ingresos de 12.449 euros -- retencion de 19%
    ingresos de 12.450  a 20.199 euros -- retencion de 24%
    ingresos de 20.200  a 35.199 euros -- retencion de 30%
    ingresos de 35.200  a 59.999 euros -- retencion de 37%
    ingresos de 60.000  a 299.999 euros -- retencion de 45%
    ingresos superiores 300.000 -- retencion de 47% */

/* 
1. Plan de pensiones persona fisica      1500 euros al año 
2. Plan de pensiones de empresa      8500 euros al año
3. Plan de pensiones de autonomo      5750 euros al año

 */

import { Comparador } from './comparador';
import * as readline from 'readline';
let comparador = new Comparador()
let ahorro = 0
let baseImponible;
let pp_persona_fisica;
let pp_empresa;
let pp_autonomo;



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function makeQuestion(question:string): Promise<string>{
    return new Promise((resolve)=>{
        rl.question(question,(input)=> resolve(input))
    })
}
async function main(){
    try{
        baseImponible = parseInt(await makeQuestion('Introduzca su base imponible: '));
        pp_persona_fisica = parseInt(await makeQuestion('Introduzca su plan de pensiones de persona física: '));
        pp_empresa = parseInt(await makeQuestion('Introduzca su plan de pensiones de empresa: '));
        pp_autonomo = parseInt(await makeQuestion('Introduzca su plan de pensiones de autónomo: '));

        const inversiones = pp_autonomo + pp_empresa + pp_persona_fisica
        const retencion = comparador.comparador(baseImponible)
        ahorro = inversiones / 100 * retencion
    
        console.log('tu ahorro total ha sido de: ',ahorro)
    }catch(error){
        console.log('introduzca los datos correctos')
    } finally {
        rl.close()
    }
}
main()

  