cities=["ahmedabad","agra","bhubaneswar","delhi"];
let count=cities.reduce(

                    (cnt,col)=>
                    {
                        if(col.startsWith("a"))
                        {
                            cnt++;
                        }
                        return cnt;
                    },0


);
console.log(count);

