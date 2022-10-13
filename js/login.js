function loginFn() {
    if(!$('#yhm').val().trim()){
        alert('用户名必填')
        return false;
    }
    if(!$('#mm').val().trim()){
        alert('密码格必填')
        return false;
    }
}
