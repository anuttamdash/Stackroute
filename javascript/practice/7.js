let row=6;

for(let i=0;i<row;i++)
          {
              str="";
               for(let space=1;space<row-i;space++)
               {
                    str=str+" ";
               }

               for(let j=0;j<=i;j++)
               {
                    str=str+"* ";
               }

               console.log(str);       

          }
    