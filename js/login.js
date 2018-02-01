layui.use(['form','layer','jquery'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer
        $ = layui.jquery;

    //登录按钮
    form.on("submit(login)",function(d){
        $(this).text("登录中...").attr("disabled","disabled").addClass("layui-disabled");
        let username = d.form[0].value,
            password = d.form[1].value;
        $.ajax({
            type: "POST",
            url: "",
            data:{
                username,
                password,
            },
            success:(res)=>{
                const token = res.data.token;
                const user = res.data.user;
                sessionStorage.setItem('EFToken', token);
                sessionStorage.setItem('user', user);
                window.location.href = "/index.html";
            },

        });//类型， url，数据，正确账号密码，状态码
        return false;
    });

    //表单输入效果
    $(".loginBody .input-item").click(function(e){
        e.stopPropagation();
        $(this).addClass("layui-input-focus").find(".layui-input").focus();
    })
    $(".loginBody .layui-form-item .layui-input").focus(function(){
        $(this).parent().addClass("layui-input-focus");
    })
    $(".loginBody .layui-form-item .layui-input").blur(function(){
        $(this).parent().removeClass("layui-input-focus");
        if($(this).val() != ''){
            $(this).parent().addClass("layui-input-active");
        }else{
            $(this).parent().removeClass("layui-input-active");
        }
    })
})
