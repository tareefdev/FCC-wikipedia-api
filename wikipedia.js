$(document).ready(function(){
 $("#search").on("click", function() {

var  searchQuery = $("#searchQuery").val();
 var urlQuery = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+
 searchQuery +"&limit=10&namespace=0&format=json";
    $.ajax({
        type: "GET",
        url: urlQuery,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "jsonp",
        success: function (data, textStatus, jqXHR) {

         var html = "";

for (var i=0; i<10; i++) {
        html += "<div class='oneResulte'>  <b>" +
          data[1][i] + "</b>" + "<br>" + data[2][i] + "<br>"+
       "<a href=\""+
        data[3][i]
       + "\"> Read more </a><br><br><br> </div>"
  }

$("#results").html(html);

        },
        error: function (errorMessage) {
        }
    });
});
  });
