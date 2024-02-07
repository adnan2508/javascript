function calculateMoney(ticketSale) {
  const cost = 500 + 8 * 50;
  const ticketPrice = 120 * ticketSale;
  if (ticketSale < 0) {
    return `"Invalid Number"`;
  } else {
    const total = ticketPrice - cost;
    return total;
  }
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  } else if (typeof name === "string") {
    let rest = name.toLowerCase();
    let res = rest.charAt(rest.length - 1);
    if (
      res == "a" ||
      res == "e" ||
      res == "i" ||
      res == "o" ||
      res == "u" ||
      res == "y" ||
      res == "w"
    ) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }
}

function deleteInvalids(array) {
  let finalArray = [];
  if (Array.isArray(array) === true) {
    for (const element of array) {
      if (typeof element === "number" && isNaN(element) === false) {
        finalArray.push(element);
      }
    }
    return finalArray;
  } else {
    return `"Invalid Array"`;
  }
}

function password(obj) {
  if (Object.keys(obj).length !== 3 || obj.birthYear.toString().length < 4) {
    return "invalid";
  } else {
    const sentence = obj.siteName.charAt(0).toUpperCase();
    const capitalized = sentence + obj.siteName.slice(1);
    return `${capitalized}#${obj.name}@${obj.birthYear}`;
  }
}

function monthlySavings(arr , livingCost) {
    if(Array.isArray(arr) === true && typeof livingCost === 'number'){
        let salary = 0;
        let tax;
        let amount;
        let savings;
        for(const num of arr) {
            if(num >= 3000){
                tax = (num * 20) / 100;
                amount = num - tax;
                salary = salary + amount;
            } else {
                salary = salary + num;
            }
        }
        savings = salary - livingCost;
        if(savings >= 0) {
            return savings;
        } else {
            return `"earn more"`;
        }
    } else{
        return "invalid input";
    }
}

