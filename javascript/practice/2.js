cities=["delhi","mumbai","kolkata","bangalore"]

let get= function(x)
        {
                for (let i=0;i<=2;i++)
            {
                let element=cities.pop();
                console.log(`${element}`);
            }
        }
    get(cities);