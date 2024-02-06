const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function findAveragePhonePrice (employees){
    let cost = 0;
    let currentSalary;
    let salary;
    let totalSalary = 0;
    
    for(const employee of employees) {
        currentSalary = employee.experience * employee.increment;
        salary = currentSalary + employee.starting;
        totalSalary = totalSalary + salary;
    }
    return totalSalary;
}

const number = findAveragePhonePrice(employees);
console.log(number);