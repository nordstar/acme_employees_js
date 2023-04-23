const employees = [
  { id: 1, name: 'moe'},
  { id: 2, name: 'larry', managerId: 1},
  { id: 4, name: 'shep', managerId: 2},
  { id: 3, name: 'curly', managerId: 1},
  { id: 5, name: 'groucho', managerId: 3},
  { id: 6, name: 'harpo', managerId: 5},
  { id: 8, name: 'shep Jr.', managerId: 4},
  { id: 99, name: 'lucy', managerId: 1}
];

const spacer = (text)=> {
  if(!text){
    return console.log('');
  }
  const stars = new Array(5).fill('*').join('');
  console.log(`${stars} ${text} ${stars}`);
}

const findEmployeeByName= (newName,array) =>{
   
   for (i=0;i<array.length;i++){

      if (array[i].name === newName){
         return array[i];
      }  
   }
}

spacer('findEmployeeByName Moe')

console.log(findEmployeeByName('moe', employees));
spacer('')

const findManagerFor = (employee, array)=>
  // emp_array.find(temp_employee => temp_employee.id ===employee.managerId);
{
   let mgrID = 0;
   for (i=0; i<array.length; i++){ //find the manager id of the name
      if (employee.name === array[i].name) {
      mgrID = array[i].managerId;
      }
   }
   for (i=0; i<array.length; i++){ //find the object for the manager id
      if (mgrID === array[i].id) { 
         return array[i];
      }
   } 
}

spacer('findManagerFor Shep Jr.')

console.log(findManagerFor(findEmployeeByName('shep Jr.', employees), employees));
spacer('')

const findCoworkersFor=(employee, emp_array) =>{
   let coworkers = [];
   for (i=0; i<emp_array.length;i++){
      if(employee.managerId  === emp_array[i].managerId && employee.name !== emp_array[i].name){
         coworkers.push(emp_array[i]);
      }
   }
   return coworkers;
}

spacer('findCoworkersFor Larry')

console.log(findCoworkersFor(findEmployeeByName('larry', employees), employees));
spacer('');

const findManagementChainForEmployee = (employee, emp_array) =>{
   let mgmtarray = [];
   let tempEmp = findManagerFor(employee, emp_array);

   while (tempEmp!==undefined){
      mgmtarray.push(tempEmp);
      tempEmp = findManagerFor(tempEmp, emp_array);
   }
   // for (i=0; i<emp_array.length;i++){
   //    if(tempEmp.managerId  === emp_array[i].id){
   //       mgmtarray.push(emp_array[i]);
   //       tempEmp = emp_array[i];
   
   return mgmtarray.reverse();
}

spacer('');

spacer('findManagementChain for moe')

console.log(findManagementChainForEmployee(findEmployeeByName('moe', employees), employees));
spacer('');

spacer('findManagementChain for shep Jr.')
console.log(findManagementChainForEmployee(findEmployeeByName('shep Jr.', employees), employees));
spacer('');


const generateManagementTree = (array) =>{

   
}