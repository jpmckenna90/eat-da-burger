$(function() {
  $(".devour").on("click", function(target) {
    console.log(target);
    const id = event.target.dataset.id;
    const newDevoured = event.target.dataset.newdevoured;
    const devouredState = newDevoured => {
      if (newDevoured) {
        return false;
      } else {
        return true;
      }
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      // Reload page to reflect changes
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    // Create new burger object to be passed
    var newBurger = {
      name: $("#burgername")
        .val()
        .trim(),
      devoured: $("[name=devoured]:checked")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload page to reflect changes
      location.reload();
    });
  });

  $(".delete").on("click", function(event) {
    event.preventDefault();
    console.log("delete button");
    const id = event.target.dataset.id;

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(() => {
      console.log("deleted burger ", id);
      // Reload page to reflect changes
      location.reload();
    });
  });
});
