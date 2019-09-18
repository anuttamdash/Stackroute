function addvalue(event){
    event.preventDefault();
    let myid=txtid.value;
    let myname=txtname.value;
    let myhero=txthero.value;
    let myrec={"id":myid,"name":myname,"hero":myhero}

    fetch(" http://localhost:3000/movies",
    {
        "method":"POST",
        "body":JSON.stringify(myrec),
        "headers":{"content-Type":"application/json"}
    }
    ).then(
        (mes)=>
        {
            console.log("record added");
         //   getallemployee();
        }
    ).catch(
        (err)=>{
            console.log("erorr"+err);
        }
    )
    
}