
function addvalue(evnt)
        {
            evnt.preventDefault();
            let myid=id.value;
            let myname=nm.value;
            let mytitle=title.value;

            let myrec={"id":myid,"name":myname,"hero":mytitle};
            console.log(myrec);

            fetch("http://localhost:3000/movies",

                {
                    "method":"POST",
                    "body":JSON.stringify(myrec),
                    "headers": {"Content-Type":"application/json"}
                }

                )

                .then
                (
                    (mes)=>
                    {
                        console.log("record added");
                        getall();
                    }

                )

                .catch
                (
                    (err)=>
                    {
                        console.log("error"+err);
                    }
                )
        
        }


function getall()
{
    
    fetch("http://localhost:3000/movies")

                
    .then
    (
        (res)=> 
        {
            var data=res.json();
            return(data);
        }
    )
    .then
    (
        (records)=>
        {
            var str=`<table border=2><tr>   <th>ID</th>  <th>Name</th>  <th>Hero</th> </tr>`;
            records.forEach((rec) => {

                str+=`<tr><td>${rec.id}</td> <td>${rec.name}</td> <td>${rec.hero}</td> </tr>`;


                
            });
            str+=`</table>`;
            document.getElementById("disp").innerHTML=str;
        }
    )
    .catch
    (
        (err)=>
        {
            console.log("error"+err);
        }
    )
}
    
    