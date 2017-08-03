$(document).ready(function(){
    var url = 'https://api.petfinder.com/pet.find';
    $.ajax({
        type : 'GET',
        data : {
                  format:"json",
                   key:"fc1327e0ada9ec0e14f4de6009f2b8fa",
                   location: "94114"
               },
      //  url : url+'&callback=?' ,
        url : url,
        dataType: 'jsonp',
        success : function(data) {              
           
            console.log(data.petfinder.pets);
        },
        error : function(request, error)
        {
            console.log("Request: "+JSON.stringify(request));
          
        }
    });
});