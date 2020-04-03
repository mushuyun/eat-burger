$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("New burger added");
            location.reload();
        });
    });

    $(".eat-burger").on("click", function(evernt){
        event.preventDefault();

        var id = $(this).data("id");
        var isDevoured = {
            devoured: 1
        };

        $ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(function(){
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".delBurger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");

        $ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(function(){
            console.log(`${id} burger is deleted`);
            location.reload();
        });
    });
});