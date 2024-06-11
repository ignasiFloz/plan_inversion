

    interface IIrpf {

        irpfFrames: {min: number, max: number, irpf: number}[] 
        
        filterIrpf(input: number): number
        load(irpfFrames: {min: number, max: number, irpf: number}[]): void

    }