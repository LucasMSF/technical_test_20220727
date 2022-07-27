var billings = {
    sp: 67836.43,
    rj: 36678.66,
    mg: 29229.88,
    es: 27165.48,
    others: 19849.53
};
function getPercentage(total, value) {
    return (value * 100) / total;
}
var total = Object.values(billings).reduce(function (total, billings) { return total += billings; });
var percentages = {
    sp: 0,
    rj: 0,
    mg: 0,
    es: 0,
    others: 0
};
Object.keys(billings).forEach(function (key) {
    percentages[key] = Math.round(getPercentage(total, billings[key]));
});
console.log(percentages);
