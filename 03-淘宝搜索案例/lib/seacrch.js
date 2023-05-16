$(function(){
    $('.ipt').on('keyup',function(){
        let keywords = $(this).val().trim()
        if (keywords.length <= 0){
            return $('#suggest-list').empty().hide()
        }
        console.log(keywords);
        getSuggestList(keywords)
    })
    // 封装函数
    function getSuggestList(kw){
        $.$.ajax({
            url: "https://suggest.taobao.com/sug?q="+ kw,
            dataType: "jsonp",
            success: function (res) {
                console.log(999);
                renderSuggestList()
            }
        });
    }
    // 渲染函数
    function renderSuggestList(res) {
        if (res.result.length <= 0){
            return $('#suggest-list').empty().hide()
        }
        let htmlstr = template('tpl-suggest',res)
        $('suggest-list').html(htmlstr).show()
    }
})