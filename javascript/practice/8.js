var arr=[
    {"name":"apple","color":"red","price":20},
    {"name":"orange","color":"or","price":60},
    {"name":"banana","color":"yellow","price":80}
]

//printing the color and the price of the fruit
function getres(arr, value) {

    var result  = arr.filter(function(o){return o["name"] == value;} );
  
    if(result)
    {
        console.log(result[0]["color"]);
        console.log(result[0]["price"]);
    }
  
  }

  getres(arr,"orange"); //calling the function

