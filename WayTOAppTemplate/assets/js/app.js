















/* Document Ready */
$(document).ready(function() {






  $(window).resize(function() {

  });


  /********LOAD BUTTON************************/
  $("#load-btn").click(function() {
    var  videoFileName = $("#route-video-db").val() + ".mp4";
    var i= "assets/video/"+videoFileName;
    $("#v1").load(i);
    //calculateAndDisplayRoute(dictionsService, directionsDisplay);
     return false;
  });


  $("#sidebar-toggle-btn").click(function() {
    $("#sidebar").toggle();
    /*  google.maps.event.trigger(map, "resize");*/
    return false;
  });

  $("#list-btn").click(function() {

    $('#sidebar').toggle();

    return false;
  });

  $("#sidebar-hide-btn").click(function() {
    $('#sidebar').hide();
    /*  google.maps.event.trigger(map, "resize");*/
  });

  $("#full-extent-btn").click(function() {

    return false;
  });


  $("#submit-btn").click(function() {

    submitResults();

  });

  $("#confidence-slider").on('input', function(e) {
    var val = $("#confidence-slider").val();
    $("#confidence-value").text(val);
    //$('#info-window').addClass("hidden");
  });

  $("#confidence-btn").click(function() {
    userLandMarkLogList[indexLMToPlace].placementConfidence = +$("#confidence-slider").val();
    saveLMPlacementLog();
    $('#confidence-window').addClass("hidden");
  });

  $("#instruction-info-close").click(function() {

    $('#instruction-info').addClass("hidden");

  });

  $("#video").on('click mousedown touchstart touchmove', function() {


  });



  $("#video").on('mouseleave mouseup touchend mousewheel', function() {


  });





}); //end getdocument ready
