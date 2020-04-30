/* eslint-disable max-len */
/* global $:true  confirm:true */
/* eslint no-unused-vars: "off" */
$('document').ready(() => {
    $('.date').each(function (i) {
        // e[i].first_time_visited.toLocaleDateString('fr-FR') + ' ' +
        // e[i].first_time_visited.toLocaleTimeString('fr-FR', { hour12: false })
        const date = new Date($(this).attr('value'));
        const dateString = date.toLocaleDateString('fr-FR') + ' ' + date.toLocaleTimeString('fr-FR', { hour12: false });
        $(this).text(dateString);
    });
    const refreshRate = 1000;
    setInterval(update, refreshRate, refreshRate);
    setInterval(refresh, 11000);
});

function refresh () {
    $.ajax({
        url: './DDC9EBAFBA3732B5CFC7DC252D39B9376101FE1C41F3309425F1490C0EF39694F154AE566E710DB990A47FDCF9523DAB6C8EC815538822AF1645776DFF4E1249',
        type: 'POST',
        cache: false,
        contentType: 'application/json',
        success: function (mes) {
            console.log(mes);
            $('#pendingN').text(mes.pending);
            $('#sessionN').text(mes.session);
            mes.enigmas.forEach(element => {
                if ($('#enigma' + element.id + ' > .item3').text() === '-' && element.first_time_visited !== '-') {
                    const date = new Date(element.first_time_visited);
                    const dateString = date.toLocaleDateString('fr-FR') + ' ' + date.toLocaleTimeString('fr-FR', { hour12: false });
                    $('#enigma' + element.id + ' > .item3').text(dateString);
                    $('#enigma' + element.id + ' > .item4').addClass('updateTime');
                    $('#enigma' + element.id + ' > .item4').attr('id', element.remaining.remaining);
                }
            });
            mes.winners.forEach(w => {
                const idrevised = w.enigma_id - 1;
                let nb = $('.row' + idrevised).length - 1;
                nb = nb < 0 ? 0 : nb;
                if (nb === 0) {
                    $('#winnertable > tbody').append(`<tr id="winnerEnigma${idrevised}" class="section row${idrevised}">
                        <td style="width:5%;">${w.enigma_id}</td>
                        <td></td>
                        <td></td>
                        <td style="width:10%;"> <button type="button" class="btn" data-toggle="collapse" data-target=".hiderow${idrevised}">+</button> <span id="winnerEnigmaN${idrevised}"> ${w.length}</span></td>
                    </tr>`);
                }
                if (nb !== w.length) {
                    const visible = $('.row' + idrevised).last().hasClass('show') ? 'show' : '';
                    console.log('id', idrevised);
                    $('#winnerEnigmaN' + idrevised).text(w.length);
                    for (let j = nb; j < w.length; j++) {
                        const date = new Date(w.list[j].date);
                        const dateString = date.toLocaleDateString('fr-FR') + ' ' + date.toLocaleTimeString('fr-FR', { hour12: false });
                        $('.row' + idrevised).last().after(`<tr class=" hiderow${idrevised} row${idrevised} collapse out ${visible}">
                        <td></td>
                        <td scope="row">${w.list[j].name}</td>
                        <td style="width:30%;">${dateString}</td>
                        <td></td>
                        </tr>`);
                    }
                }
            });
        },
        error: function (e) {
            log('Failure', 'Server not responding.', 'danger');
        }
    });
}

function update (elapse) {
    $('.updateTime').each(function (i) {
        const text = getDate(+$(this).attr('id'));
        $(this).text(text);
        const remaining = parseInt($(this).attr('id')) - elapse;
        if (remaining >= 0) {
            $(this).attr('id', remaining);
        } else {
            $(this).text('Done');
            $(this).removeClass('updateTime');
        }
    });
}

function getDate (msec) {
    const day = Math.floor(msec / (24 * 3600 * 1000));
    const hours = Math.floor((msec % (24 * 3600 * 1000)) / (3600 * 1000));
    const minute = Math.floor((msec % (3600 * 1000)) / (60 * 1000));
    const sec = Math.floor((msec % (60 * 1000)) / (1000));
    const dayString = day !== 0 ? day + 'j ' : '';
    const hoursString = hours !== 0 ? hours + 'h ' : '';
    const minuteString = minute !== 0 ? minute + 'm ' : '';
    const secString = sec !== 0 ? sec + 's ' : '';
    return dayString + hoursString + minuteString + secString;
};

function fetchData (item) {
    $.ajax({
        url: './8E49843C86D4D2FE203B91B72460F13505E12BE3E4DF73E0104394FD89A5E54460BD25F9C0EF1EA4716E6D883278F4A70B15F77FAF0604DB11011153B7DC728A',
        type: 'POST',
        cache: false,
        data: JSON.stringify({ id: item }),
        contentType: 'application/json',
        success: function (mes) {
            if (mes.status) {
                $('#exampleModalLabel').text(mes.name);
                if (mes.type === 'geo') {
                    $('#geo_type_form').show();
                    $('#flag_type_form').hide();
                    $('#latA').val(mes.latA);
                    $('#longA').val(mes.longA);
                    $('#latB').val(mes.latB);
                    $('#longB').val(mes.longB);
                    $('#flag').val('');
                } else if (mes.type === 'flag') {
                    $('#geo_type_form').hide();
                    $('#flag_type_form').show();
                    $('#flag').val(mes.flag);
                    $('#latA').val('');
                    $('#longA').val('');
                    $('#latB').val('');
                    $('#longB').val('');
                } else {
                    $('#geo_type_form').hide();
                    $('#flag_type_form').hide();
                    $('#latA').val('');
                    $('#longA').val('');
                    $('#latB').val('');
                    $('#longB').val('');
                    $('#flag').val('');
                }
                $('#id').val(mes.id);
                $('#type').val(mes.type);
                $('#enigma_text').val(mes.enigma_text);
                $('#url').val(mes.url);
                $('#delay_to_hint').val(mes.delay_to_hint);
                $('#hint').val(mes.hint);
                $('#exampleModal').modal();
            } else {
                log('Failure', 'Server return wrong status.', 'danger');
            }
            $('#count').text(mes.count);
        },
        error: function (e) {
            log('Failure', 'Server not responding.', 'danger');
        }
    });
}

function saveData () {
    let txt;
    const r = confirm('Es tu sur de toi !');
    if (r === true) {
        const data = {};
        $('.form-control').each(function () {
            data[$(this).attr('id')] = $(this).val();
        });
        $.ajax({
            url: './30AA27976AC1E6883B0D70EA9F8B15135697940A6F86EF7204FC73E1654484AAF5F5A8A9F20FCE5D26BAA5102E1EE96D19FE69DFB812E6A226BEFCC7C55721DF',
            type: 'POST',
            cache: false,
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (mes) {
                if (mes.status) {
                    log('Sucess', 'Changes saved', 'success');
                } else {
                    log('Failure', 'Server return wrong status.', 'danger');
                }
                $('#count').text(mes.count);
            },
            error: function (e) {
                log('Failure', 'Server not responding.', 'danger');
            }
        });
    }

    $('#exampleModal').modal('hide');
}

function log (prefix, message, type) {
    // eslint-disable-next-line new-cap
    const id = ID();
    $('#logmes').prepend('<div id="' + id + '" class="alert alert-' + type + ' alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>' + prefix + '</strong>  ' + message + '</div>');
    setTimeout(() => {
        $('#' + id).fadeOut(100, () => {
            $('#' + id).remove();
        });
    }, 10000);
}

const ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};
