$(function(){
    // 时间埗玲
    function padZero(e){
        if(e<10) {
            return '0 '+ e
        }else {
            return e
        }
    }
    // 时间格式
    template.defaults.imports.dataform = function(str){
        let dt = new Data(str)
        let y = dt.getFullYear()
        let m = padZero(dt.getMonth())
        let d = padZero(dt.getDay())
        let hh = padZero(dt.getHours())
        let mm = padZero(dt.getMinutes())
        let ss = padZero(dt.getSeconds())
        return y+ '-'+ m +'-'+ d+' '+ hh +':'+ mm+':'+ss
    }
    // 获取服务器端的数据
    function getlist() {
        $.get('http://www.liulongbin.top:3006/api/news',function(res){
        if(res.status !== 200) return alert('获取数据失败')

        for (let i = 0;i<res.data.length;i++){
            res.data[i].tags = res.data[i].tags.split()
        }

        let htmlStr = template('tpl-news',res)
        $('#new-list').html(htmlStr)
    })
    }
    getlist()
})

