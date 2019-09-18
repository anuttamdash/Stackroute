var studioobj=[{id:1,name:"anuttam",marks:90},{id:2,name:"udit",marks:90},{id:3,name:"aashu",marks:90}];

studioobj.forEach(myfunc);
function myfunc(item)
{
    console.log(item["marks"]);
    console.log(item["name"]);
}