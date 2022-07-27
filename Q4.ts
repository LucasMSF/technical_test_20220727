type Billing = {
    sp: number,
    rj: number,
    mg: number,
    es: number,
    others: number
}
const billings: Billing = {
    sp: 67836.43,
    rj: 36678.66,
    mg: 29229.88,
    es: 27165.48,
    others: 19849.53
}

function getPercentage(total: number, value: number): number {
    return (value * 100) / total;
}

let total = Object.values(billings).reduce((total, billings) => total += billings)

let percentages: Billing = {
    sp: 0,
    rj: 0,
    mg: 0,
    es: 0,
    others: 0   
}

Object.keys(billings).forEach(key => {
    percentages[key] = Math.round(getPercentage(total, billings[key]));
});

console.log(percentages);