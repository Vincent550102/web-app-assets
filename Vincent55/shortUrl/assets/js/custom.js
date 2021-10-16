$("#urlForm").submit(function () {
    return false;
});

function fetch_from_server() {
    $(".preloader").fadeIn(200);
    $.ajax({
        url: '/web',// 跳轉到  web
        data: {
            url: $("#url").val()
        },
        type: 'POST',
        cache: false,
        success: function (data) {
            show_data(data);

        },
        error: function () {
            // view("異常！"); 
            alert("異常！");
            $(".preloader").fadeOut(100);
        }
    });
}

function show_data(data) {
    $("#urlModalInner").html(data);
    $(".preloader").fadeOut(100);
    $("#urlModal").modal('show');
}

function refresh_main_page() {
    location.reload();
}

$(document).ready(function () {
    $('#urlTable tbody tr').each(function () {
        var full_url = $(this).children("td:nth-child(1)").children("a").text().replace(/\s/g, '');;
        var hide_url = full_url;
        console.log(full_url.length);
        if (full_url.length > 39) {
            hide_url = full_url.substr(0, 37) + "...";
        }
        $(this).children("td:nth-child(1)").children("a").text(hide_url);
    });
    $(".preloader").fadeOut(100);
});