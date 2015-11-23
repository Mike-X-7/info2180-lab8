window.onload = function(){
 
   document.getElementById("controls").innerHTML+='<input type="checkbox" name="Country" value=" ">';
    getData();
}

function getData(){
    $('lookup').observe('click', function(){
 var term = $("term").getValue();
     new Ajax.Request("world.php", {
               method : 'get',
      parameters : {lookup : term},
               onSuccess: function(transport) {
                var response = transport.responseText ||
                "no countries";
                   $('result').update(response);
                   alert(response)
              },
              onFailure: function() { alert('There was an error retrieving data requested'); }        
     });
   });

}
