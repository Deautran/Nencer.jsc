/** 
* Using jQuery here
*/
$(document).ready(function () {
    /**
     *  Using jQuery validate
     * 
     * Validate for Login form
     */
    $('#login_form').validate({
        rules: {
            'email': {
                'required': true
            }, 
            'password': {
                'required' : true,
                'min' : 3
            }
        },
        messages: {
            'email': {
                'required': 'Bạn hãy nhập email!'
            },
            'password': {
                'required': 'Bạn hãy nhập mật khẩu',
                'min': 'Mật khẩu phải nhiều hơn 3 kí tự.'
            }
        },
        submitHandler: function (form) {
            // Submit data to server
            form.submit();
        }
    });
})