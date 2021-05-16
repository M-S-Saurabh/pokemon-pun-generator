$('form#sentenceForm').submit(function(e){
    //prevent Default functionality
    e.preventDefault();

    //get the action-url of the form
    var actionurl = 'api/punnify';

    $.post( actionurl, $("form#sentenceForm").serialize())
    .done(function( data ) {
        $('#resultPun').val(data.result);
    });
});