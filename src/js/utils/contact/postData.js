export default function postData(url, data, cbk) {
    $.ajax({
        url: url,
        method: 'POST',
        data: data
    })
        .done(function (data) {
            cbk(null, data)
        })
        .fail(function (error) {
            cbk(error)
        })
}