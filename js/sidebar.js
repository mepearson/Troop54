
      $(document).ready(function(){
          $('a').click(function() {
        var clickedId = $(this).attr("id");

          document.getElementById("content").innerHTML = 'Content for ' + clickedId + ' tab';

        });
        });
