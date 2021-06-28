// check off specific Todos by clicking
 $("ul").on("click","li",function(){
       $(this).toggleClass("completed");
    })

// click on X to delete Todo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
}) 

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val()
        $(this).val("")
        // create a new li and add to ul
        $("ul").append("<li><span class='trash-can'><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
    }
})

$("#todo-adder").click(function(){
    $("input[type='text']").fadeToggle();
})