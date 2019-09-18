let n=50;
let count=function(x)
{
    for(let i=1;i<=50;i++)
    {
        let elem=0;
        for(let j=2;j<=i/2;j++)
        {
            if((i%j)==0)
            {
                elem=elem+1;
            }
        }

        if(elem==0)
        {
            console.log(i);
        }
    }
};
count(50);