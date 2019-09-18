
// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here 



let group1=
[
   {"Name": "a1", "Grammer": 97, "Accounts": 90 },
   {"Name": "a2", "Grammer": 87, "Accounts": 85 },
   {"Name": "a3", "Grammer": 75, "Accounts": 85 },
   {"Name": "a4", "Grammer": 55, "Accounts": 85 },
   {"Name": "a5", "Grammer": 65, "Accounts": 85 },
   
];
var grp1 = [];
const set1 = group1.map(msg => {
   grp1[msg.Name] = ((msg.Grammer + msg.Accounts) / 2)+'%';
   
});


//grammar and accounts
for (let [key, value] of Object.entries(grp1)) console.log(`${key}: ${value}`)



let group2=
[
    {"Name": "b1", "Grammer": 97, "Physics": 90 },
    {"Name": "b2", "Grammer": 87, "Physics": 85 },
    {"Name": "b3", "Grammer": 75, "Physics": 85 },
    {"Name": "b4", "Grammer": 55, "Physics": 85 },
    {"Name": "b5", "Grammer": 65, "Physics": 85 },
    
 ];
 var grp2 = [];
 const sets2 = group2.map(msg1 => {
    grp2[msg1.Name] = ((msg1.Grammer + msg1.Physics) / 2)+'%';
     
 });
 //english and physics
 for (let [key, value] of Object.entries(grp2)) console.log(`${key}: ${value}`)