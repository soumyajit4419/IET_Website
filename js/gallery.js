var i =1;
while(i<=19)
{
    $("#workshop-gallery").append(`
    <div class="single-testimonial">
    <img src="./images/gallery/workshops/workshop${i}.jpeg" class="img-fluid"
        style="border-radius: 10px;" />
     </div>
    `)
    i++;
}


var j=1;
while(j<=20){

    $("#events-gallery").append(`
    <div class="single-testimonial">
    <img src="./images/gallery/events/event${j}.jpg" class="img-fluid"
        style="border-radius: 10px;" />
     </div>
    `)
    j++;
}