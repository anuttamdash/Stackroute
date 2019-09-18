cities=["ahmedabad","agra","bhubaneswar","delhi"];

let count=function(x)
                {
                    let ct=0
                    for(let i=0;i<x.length-1;i++)
                    {
                        if(x[i].startsWith("a"))
                        {
                            ct++;
                        }
                    }
                    console.log(ct);
                };                   

                 
count(cities);