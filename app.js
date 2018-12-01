$(document).ready(function () {
    var key = "AIzaSyA-Bw0PIAr-n5qi19qorlkDydwoTus_kUc";
    var playlistId = "PLvYbWbiZnQ0cl_ZrEEtmwll3wBKkOeS-T";
    var URL = "https://www.googleapis.com/youtube/v3/playlistItems";

    var options = {
        part: "snippet",
        key: key,
        maxResults: 20,
        playlistId: playlistId
    };

    function loadVids() {
        $.getJSON(URL, options, function (data) {
            console.log(data);
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data);
        });
    }

    loadVids();

    function mainVid(id) {
        $("#youtube_video_feed").html(`
        <iframe width="860" height="480" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `);
    }

    function resultsLoop(data) {
        $.each(data.items, function (i, item) {
            /*set up the thumbnail of each playlist item*/
            var thumb = item.snippet.thumbnails.medium.url;

            /*set up playlist item title*/
            var title = item.snippet.title;

            /*set up description of playlist item*/
            var description = item.snippet.description.substring(0, 100);

            /*get the video ID of each playlist item*/
            var vid = item.snippet.resourceId.videoId;

            /*dynamically grab each playlist items*/
            $("#youtube_playlist").append(`
            <article class="playlist-item" data-key="${vid}">
        <img src="${thumb}" alt="" class="thumb">
        <div class="youtubevideo_description">
          <h4>${title}</h4>
          <p id="youtube_description_p">${description}</p>
        </div>
      </article>
        `);
        });
    }
    $("#youtube_playlist").on("click", "article", function () {
        var id = $(this).attr("data-key");
        mainVid(id);
    });
});