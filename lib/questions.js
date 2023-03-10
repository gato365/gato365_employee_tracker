const inquirer = require('inquirer');

employeesDBQuestions = [

    // Q1.
    {
        type: 'list',
        name: 'userDecisionAction',
        message: "Select from the following options:",
        choices: ["View Data","Enter Data", "Update Data"]

    },

    // Q2. 

    {
        type: 'list',
        name: 'viewData',
        message: "What do you want to view?",
        when: (answers) => answers.userDecisionAction === 'View Data',
        choices: ["Departments","Roles","Employees"]
    },



      // Q3. 
      {
        type: 'list',
        name: 'enterData',
        message: "What do you want to enter?",
        when: (answers) => answers.userDecisionAction === 'Enter Data',
        choices: ["Departments","Roles","Employees"]
    },
]

inquirer.prompt(employeesDBQuestions).then((dataEDBQuestions) => {
    console.log(dataEDBQuestions.userDecisionAction);
    console.log(dataEDBQuestions.enterData);
});





// When starting up MySQL2
// Step 1: Run "mysql -u root -p" (Question - Why do we do this?; Current Answer - Login Name)
// Step 2: Enter Password
// Step 3: When in you can do the following:
      // CREATE DATABASE "name of data base"