// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devoured").on("click", function(event) {
    var id = $(this).data("id");
    // var eat = $(this).attr("devoured", 1);
    console.log("this is id:", id)
    // console.log("this is eat:", eat)

    var newDevouredState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
    //   console.log("Status changed to", eat);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca")
        .val()
        .trim(),
      //since you just added the burger, the assumption is that you can only eat it after it is added so this will always be 0 when you add it
      devoured: 0
    };
    console.log("this is new burger", newBurger);
    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger. Get ready to devour it!");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
