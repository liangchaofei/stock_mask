/*
 * @Author: your name
 * @Date: 2020-03-14 10:52:32
 * @LastEditTime: 2020-03-14 11:44:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mask_shop/static/js/oauth.js
 */
$(function(){
    $.ajax({
        url:'https://mask.zhixiutec.com/api/user',
        success:function(res){
            console.log('res',res)
            if(res && res.error_code=== 2){
                var url = res.data;
                window.open(url,'_self')
            }
        }
    })
})