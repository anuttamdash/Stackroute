class Student
{   
    
    constructor(studname, s1, s2,m1,m2)
    {
        this.studname=studname;
        this.s1=s1;
        this.s2=s2;
        this.m1=m1;
        this.m2=m2;
    }
    

}
let arr=[];
let obj1= new Student("anuttam","Grammar","Physics",99, 98);
arr.push(obj1);
let obj2= new Student("ram", "Grammar", "Physics", 98, 99);
arr.push(obj2);
let obj3= new Student("shyam", "Grammar", "Accounts", 100, 100);
arr.push(obj3);
let obj4= new Student("sunder", "Grammar", "Accounts", 98, 99);
arr.push(obj4);
function perform(subject, optional)
{
    let count=0;
    let total_sum=0;
    let total_avg=0.0;    
    for(let i=0; i<arr.length;i++)
    {
        
        if(arr[i].s1==subject && arr[i].s2==optional)
        {
                let str="";
                let sum_individual=0;
                let avg_individual=0.0;
                sum_individual=arr[i].m1+arr[i].m2;
                avg_individual=sum_individual/2;
                count++;
                str="Name:"+arr[i].studname;
                str+="\n";
                str+="Marks in "+arr[i].s1+": "+arr[i].m1+"\n";
                str+="Marks in "+arr[i].s2+": "+arr[i].m2+"\n";
                
                str+="Student Avg: "+ avg_individual+"\n";
                total_sum+=avg_individual;

                console.log(str);
        }
        
        
    }
    console.log("total_avg is "+total_sum/count);


} 
let subject="Grammar";
let optional="Physics";
perform(subject,optional);