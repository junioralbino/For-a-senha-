$(function(){

  $('#senha').bind('keyup',function(){
   
   var txt = $(this).val();
   var forca = 0;


   if(txt.length > 6){
     forca += 25;
   }
   var reg = new RegExp(/[a-z]/i);
   if(reg.test(txt)){
      forca += 25;
   }

   var num = new RegExp(/[0-9]/i);
   if(num.test(txt)){
      forca += 25;
   }

  var num = new RegExp(/[^a-z0-9]/i);
   if(num.test(txt)){
      forca += 25;
   }
   if(forca >= 75 ){

      var aceita = 'senha boa';
   }else{
     var aceita = 'Precisa melhorar';
   }

   $('.forca').html('Forca:' + forca + '( '+ txt +') - ' +aceita);

  });

});