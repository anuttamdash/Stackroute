

let group1=
[
   {"Name": "sai", "Grammer": 97, "Accounts": 90 },
   {"Name": "sai1", "Grammer": 87, "Accounts": 85 },
   {"Name": "sai2", "Grammer": 75, "Accounts": 85 },
   {"Name": "sai3", "Grammer": 55, "Accounts": 85 },
   {"Name": "sai4", "Grammer": 65, "Accounts": 85 },
   
];
var newgrp = [];
const subjsets = group1.map(msg => {
   newgrp[msg.Name] = ((msg.Grammer + msg.Accounts) / 2)+'%';
   
});
for(let i=0;i<newgrp.length;i++)
{
    console.log(newgrp[i]);
}

let group2=
[
    {"Name": "sai", "Grammer": 97, "Physics": 90 },
    {"Name": "sai1", "Grammer": 87, "Physics": 85 },
    {"Name": "sai2", "Grammer": 75, "Physics": 85 },
    {"Name": "sai3", "Grammer": 55, "Physics": 85 },
    {"Name": "sai4", "Grammer": 65, "Physics": 85 },
   
 ];
 var newgrp2 = [];
 const subjsets1 = group2.map(msg1 => {
    newgrp2[msg1.Name] = ((msg1.Grammer + msg1.Physics) / 2)+'%';
     
 });
 //console.log(newgrp2);
 for(let i=0;i<newgrp2.length;i++)
 {
     console.log(newgrp2[i]);
 }