my_url = "js/events.json";
$.ajax({
    'async': false,
    'global': false,
    'url': my_url,
    'dataType': "json",
    'success': function (data) {
        console.log(data)
    }
});