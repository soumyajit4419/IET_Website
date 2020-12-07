let myUrl = "./js/eventsDetails.json";
$.ajax({
  url: myUrl,
  async: false,
  method: "GET",
  success: function (res) {
    // console.log(res.events[1].imgUrl);
    for (var i = 0; i < res.events.length; i++) {
      $("#eventsModal").append(`
          <!--${res.events[i].eventName} Modal-->        
          <div class="col-lg-2 col-md-2 inc-pad">
          <div class="single_work">
            <div class="work_image">
              <img src="./images/events/${res.events[i].imgUrl}" data-toggle="modal" data-target="#event${i}Modal" class="img-fluid" alt="event" />
            </div>
          </div>

          <!--Modal-->
          <div class="modal fade" id="event${i}Modal" tabindex="-1" role="dialog" aria-labelledby="event${i}ModalTitle">
            <div class="modal-dialog modal-dialog-centered" role="">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="event${i}ModalTitle">${res.events[i].eventName}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span>&times;</span>
                  </button>
                </div>
                <div class="modal-body  text-center">
                  <img src="./images/events/${res.events[i].imgUrl}" alt="event${i} poster" class="model-img img-fluid">
                </div>
                <div class=" modal-footer">
                  <p>${res.events[i].eventBody}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `)
    }

  },
  error: function (err) {
    console.log(err);
  }
});
