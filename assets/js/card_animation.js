$(function(){

    $('.project.card').hover(
        // trigger when mouse hover
        function(){ $(this).animate({ marginTop: "-=1%", marginBottom: "+=1%" }, 200) },

        // trigger when mouse out
        function(){ $(this).animate({ marginTop: "+=1%", marginBottom: "-=1%" }, 200) }
    );

});