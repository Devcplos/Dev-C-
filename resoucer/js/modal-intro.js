$(document).ready(function(){
    var url = $("#curso1").attr('src');

    $("#overlay").on('hide.bs.modal', function(){
        $("#curso1").attr('src', '');
    });

    $("#overlay").on('show.bs.modal', function(){
        $("#curso1").attr('src', 'intro/secuencial.mp4');
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    var url = $("#curso2").attr('src');

    $("#exampleModale").on('hide.bs.modal', function(){
        $("#curso2").attr('src', '');
    });

    $("#exampleModale").on('show.bs.modal', function(){
        $("#curso2").attr('src', 'intro/For.mp4');
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    var url = $("#curso3").attr('src');

    $("#exampleModales").on('hide.bs.modal', function(){
        $("#curso3").attr('src', '');
    });

    $("#exampleModales").on('show.bs.modal', function(){
        $("#curso3").attr('src', 'intro/Do while.mp4');
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    var url = $("#curso4").attr('src');

    $("#exampleModalesB").on('hide.bs.modal', function(){
        $("#curso4").attr('src', '');
    });

    $("#exampleModaleB").on('show.bs.modal', function(){
        $("#curso4").attr('src', 'intro/if.mp4');
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    var url = $("#curso5").attr('src');

    $("#exampleModaleBo").on('hide.bs.modal', function(){
        $("#curso5").attr('src', '');
    });

    $("#exampleModaleBo").on('show.bs.modal', function(){
        $("#curso5").attr('src', 'intro/ifelse.mp4');
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    var url = $("#curso6").attr('src');

    $("#exampleModaleBoo").on('hide.bs.modal', function(){
        $("#curso6").attr('src', '');
    });

    $("#exampleModaleBoo").on('show.bs.modal', function(){
        $("#curso6").attr('src', 'intro/Case.mp4');
    });
});