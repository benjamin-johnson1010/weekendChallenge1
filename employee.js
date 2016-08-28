console.log('sourced');
//set variable for the employee list
var employeeList = [];
//create input
var addEmployee = function(){
  console.log('in addEmployee');

//create newEmployee
var newEmployee ={
  firstName: document.getElementById('firstNameIn').value,
  lastName: document.getElementById('lastNameIn').value,
  numID: document.getElementById('numIDIn').value,
  jobTitle: document.getElementById('jobTitleIn').value,
  salary: +document.getElementById('salaryIn').value
};//end newEmployee

//check to make sure all information is put into newEmployee
if(newEmployee.firstName == '' || newEmployee.lastName== '' || newEmployee.numID=='' ||
newEmployee.jobTitle=='' || newEmployee.salary==''){
  alert('Please fill out ALL fields');
}
else if(newEmployee.salary <= 0 || newEmployee.numID <= 0){
  alert('Please Enter Your ID Number and Salary as Positive Numbers');
}
else{
//clear boxes
  clearEmployeeInfo();
  console.log(newEmployee);
//push newEmployee into array
employeeList.push(newEmployee);
console.log(employeeList);
//display addEmployee
displayEmployeeInfo();
getMonthlyCost();
}
};//end newEmployee
var clearEmployeeInfo = function(){
  firstName: document.getElementById( 'firstNameIn' ).value = '';
  lastName: document.getElementById( 'lastNameIn' ).value = '';
  numID: document.getElementById( 'numIDIn' ).value = '';
  jobTitle: document.getElementById( 'jobTitleIn' ).value = '';
  salary: document.getElementById( 'salaryIn' ).value = '';
};

var displayEmployeeInfo = function(){
console.log('in displayEmployeeInfo');
//empty the list
  document.getElementById('allEmployees').innerHTML='';
//Now for each employee we will display their First and Last name, ID #, job title and salary
for(var i = 0; i < employeeList.length; i++){
  var employeeInfo = '<h2>Name: ' + employeeList[i].firstName + ' ' + employeeList[i].lastName +
  '<br>ID Number: ' + employeeList[i].numID + '<br>Job Title: ' + employeeList[i].jobTitle +
  '<br>Salary: ' + employeeList[i].salary + '</h2>' + '<button onClick="removeEmployee(' + i + ')">Remove Employee</button></p>';
// append employeeInfo to output div
document.getElementById('allEmployees').innerHTML+=employeeInfo;
}
};//end displayEmployeeInfo
var getMonthlyCost = function(){
console.log('in getMonthlyCost');
var monthlyCost = 0;
for(var i = 0; i < employeeList.length; i++){
monthlyCost += Math.round(100 *(employeeList[i].salary/12))/100;

 }
 console.log('The monthly cost:', monthlyCost);
};
var removeEmployee= function(index){
  console.log('Removing ' + employeeList[index].firstName + ' ' + employeeList[index].lastName + ' from the records');
//splice the employee at this index from out array
employeeList.splice(index,1);
displayEmployeeInfo();
getMonthlyCost();

};
