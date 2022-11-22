class Currency {
  constructor(label, price) {
    this.label = label
    this.price = price
  }
}

const currencyUnitHandler = (price) => {
    if (price > 100) {
      return new Currency('ONE HUNDRED', 100)
    } else if (price > 20) {
      return new Currency('TWENTY', 20)
    } else if (price > 10) {
      return new Currency('TEN', 10)
    } else if (price > 5) {
      return new Currency('FIVE', 5)
    } else if (price > 1) {
      return new Currency('ONE', 1)
    } else if (price > 0.25) {
      return new Currency('QUARTER', 0.25)
    } else if (price > 0.1) {
      return new Currency('DIME', 0.1)
    } else if (price > 0.05) {
      return new Currency('NICKEL', 0.05)
    } else {
      return new Currency('PENNY', 0.01)
    }
}

function checkCashRegister(price, cash, cid) {
  let changeValue = cash - price;
  const charge = []

  while (changeValue !=0 ) {
    const { label, price} = currencyUnitHandler(changeValue)
    const divisorInt = parseInt(changeValue / price)
    const valueWithCurrency = divisorInt * price
    changeValue =  changeValue - valueWithCurrency
    charge.push(label, valueWithCurrency)
  }
  console.log(charge)

  return charge;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
