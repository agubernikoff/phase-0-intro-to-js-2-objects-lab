// Write your solution in this file!
const employee = {
    name:"john smith",
    streetAddress:"1 first st",
};
function updateEmployeeWithKeyAndValue(object,key,value){
    return {...employee,
    [key]: value,
   };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,object){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    const newEmployee ={
        ...employee,
    }
    delete newEmployee.name
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name;
    return employee;
}