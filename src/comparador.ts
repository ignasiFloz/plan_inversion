/*     ingresos de 12.449 euros -- retencion de 19%
    ingresos de 12.450  a 20.199 euros -- retencion de 24%
    ingresos de 20.200  a 35.199 euros -- retencion de 30%
    ingresos de 35.200  a 59.999 euros -- retencion de 37%
    ingresos de 60.000  a 299.999 euros -- retencion de 45%
    ingresos superiores 300.000 -- retencion de 47% */

export class Comparador {
    comparador(num: number): number{
        if(num<12450){
            return 19
        }else if ( num > 12450 && num < 20199){return 24}
        else if ( num > 20200 && num < 35199){return 30}
        else if ( num > 35200 && num < 59999){return 37}
        else if ( num > 60000 && num < 299999){return 45}
        else if ( num > 300000){return 47}
    }
}