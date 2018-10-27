

console.clear();
    window.onload = GetChristmas ;

     function GetChristmas() {
         var divNode = document.getElementById("Christmas") ;
         var Christmas = new Array();
         var Christmas = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg"] ;
         var CurrentCH = document.body.style.backgroundImage;
         var random = Math.floor(Math.random()* Christmas.length);

         currentCH = Christmas[random];

         document.body.style.backgroundImage ="url('"+currentCH+"')";
             document.body.style.backgroundSize ="cover";
            document.body.style.backgroundAttachment= "fixed";










     }
