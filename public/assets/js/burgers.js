// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function (event) {
  var id = $(this).data("id");
  var burgerDev = true;

  var burgerIdState = {
    devoured: burgerDev
  };

  // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: burgerIdState
  }).then(
    function() {
      console.log("changed devoured to", burgerDev);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

  $(".form-group").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#enter_text").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

 
});
