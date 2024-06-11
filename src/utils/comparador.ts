
export class IrpfFilter implements IIrpf {
 
        irpfFrames: {min: number, max: number, irpf: number}[]
        data = [{min: 0, max :12450, irpf: 0.19},{min: 12450, max :20199 , irpf: 0.24},{min: 20200, max :35199 , irpf: 0.30},{min: 35200, max : 59999, irpf: 0.37},{min:60000 , max :299999 , irpf: 0.45},{min: 300000, max : Infinity, irpf: 0.47}]

        load(data: {min: number, max: number, irpf: number}[]){
            this.irpfFrames = data
        }
        
        filterIrpf(input: number): number {
            for(let frame of this.irpfFrames){
                if(input>frame.min && input<frame.max) return frame.irpf
            }

        }

}







