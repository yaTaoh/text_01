function getcmt(){
    $.ajax({
        method:'get',
        url:'http://www.liulongbin.top:3006/api/cmtlist',
        success:function(res){
            if(res.status !== 200) return alert('列表获取失败')
            // console.log(123);
            let rows = []
            $('res').each(res.data,function(index,item){
                rows.push(`
                <li class="list-group-item" >
                    <span class="badge" style="background-color: yellow;">评论时间：${item.time}</span>
                    <span class="badge" style="background-color: skyblue;">评论人：${item.username}</span>
                    ${item.content}
                </li>`)
            })
            $('#list').empty().append(rows.join(''))
        }
    })
}
getcmt()
$(function(){
    $('#formadd').submit(function(e){
        e.preventDefault()
        let data = $(this).serialize()
        // console.log(data);
        $.post('http://www.liulongbin.top:3006/api/addcmt',data,function(res){
            if (res.status !== 201) {return alert('提交失败')}
            getcmt()
            $('#formadd')[0].reset()
        })
    })
})