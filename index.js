// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    //use spread operator
    const newEmp = {...employee};
    newEmp[key] = value;
    return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key]= value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key) {
    //use spread operator
    const newEmp = {...employee};
    delete newEmp[key];
    return newEmp;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}