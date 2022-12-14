const currency = [
	{ name: 'ONE HUNDRED', price: 100},
	{ name: 'TWENTY', price: 20},
	{ name: 'TEN', price: 10},
	{ name: 'FIVE', price: 5},
	{ name: 'ONE', price: 1},
	{ name: 'QUARTER', price: 0.25},
	{ name: 'DIME', price: 0.1},
	{ name: 'NICKEL', price: 0.05},
	{ name: 'PENNY', price: 0.01}
];


function checkCashRegister(price, cash, cid) {
  const output = {status: null, change: []}
  let change  = cash - price;

  const register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];

    return acc;
  }, {total: 0});

  if(register.total === change) {
    output.status = 'CLOSED';
    output.change = cid;
    
    return output;
  }

  if(register.total < change) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }


  const changeArr = currency.reduce(function(acc, curr) {
    let value = 0;

    while(register[curr.name] > 0 && change >= curr.price) {
      change -= curr.price;
      register[curr.name] -= curr.price;
      value += curr.price;
      change = Math.round(change * 100) / 100;
    }

    if(value > 0) {
      acc.push([ curr.name, value ]);
    }

    return acc;
  }, []);


  if(changeArr.length < 1 || change > 0) {
    output.status = 'INSUFFICIENT_FUNDS';

    return output;
  }

  output.status = 'OPEN';
  output.change = changeArr;

  console.log(changeArr)

  return output;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
