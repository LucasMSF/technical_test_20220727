interface Billing {
    dia: number,
    valor: number
}

const data: Billing[] = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	},
];

class ManageBilling {
    private data: Billing[]
    private usefulData: Billing[];
    private avg: number;

    constructor(data: Billing[]) {
        this.data = data;
        this.usefulData = this.data.filter(billing => billing.valor > 0);
        this.avg = this.calcAvg(this.usefulData);
    }

    private calcAvg(filtredData: Billing[]) {
        return  filtredData
                .map(billing => billing.valor)
                .reduce((acumulator, current) => acumulator += current) 
                / filtredData.length;
    }

    getMinBilling(): Billing {
        let min: Billing = {dia: 0, valor: 0}; 

       this.usefulData.forEach(billing => {
            if((billing.valor < min.valor) || !min.valor ) 
            min = billing;
       });

       return min;
    }

    getMaxBilling(): Billing {
        let max: Billing = {dia: 0, valor: 0}; 

       this.data.forEach(billing => {
            if(billing.valor > max.valor) 
            max = billing;
       });

       return max;
    }

    getGreaterAverage(): Billing[] {
        return this.usefulData.filter(billing => billing.valor > this.avg);
    }
}

const manageBilling = new ManageBilling(data);

console.log(manageBilling.getMinBilling());
console.log(manageBilling.getMaxBilling());
console.log(manageBilling.getGreaterAverage().length);