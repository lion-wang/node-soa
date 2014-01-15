$('#oracle-query').click(function() {
    var sqlstr = $('#sqlStr').val();
    $.ajax({
        url: '/oracle/query',
        type: 'post',
        data: {
            sql: sqlstr
        },
        dataType: 'json',
        success: function(data) {
            if(data.success===1){
                data=data.data;
                var res=[];
                res.push('<table>');
                if(data.length>0){
                    res.push('<tr>');
                    for(var r in data[0]){
                        res.push('<th>'+r+'</th>');
                    }
                    res.push('</tr>');
                }
                for(var i=0;i<data.length;i++){
                    res.push('<tr>');
                    for(var r in data[i]){
                        res.push('<td>'+data[i][r]+'</td>');
                    }
                    res.push('</tr>');
                }
                res.push('</table>');
                $('#result').html(res.join(''));
            }
            else{
                $('#result').html(data.msg);
            }
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('error ' + textStatus + " " + errorThrown);
        }
    })
})