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
    /**
     *  Using jQuery validate
     * 
     * Validate for create receipts form
     */
    $('#form_create_reicepts').validate({
        rules: {
            'receipt_name' : {
                'required': true,
                'min' : 3,
                'max' : 255
            },
            'delivery_date' : {
                'required' : true
            },
            'image' : {
                'required' : true,
                'accept' : "image/jpg, image/jpeg"
            }
        },
        messages: {
            'receipt_name' : {
                'required' : 'Bạn hãy nhập tên đơn hàng',
                'min' : 'Tên đơn hàng phải lớn hơn 3 kí tự',
                'max' : 'Tên đơn hàng không vượt quá 255 kí tự'
            },
            'delivery_date' : {
                'required' : 'Hãy chọn đơn hàng giao dự kiến'
            },
            'image' : {
                'required' : 'Bạn hãy tải hình ảnh hóa đơn',
                'accept' : 'Định dạng hình ảnh hóa đơn không đúng'
            }
        },
        submitHandler: function (form) {
            // Submit data to server
            form.submit();
        }
    });

    /**
     *  Using jQuery validate
     * 
     * Validate for create receipts form
     */
    $('#storage-form').validate({
        rules: {
            'name' : {
                'required': true,
            },
            'cost' : {
                'required' : true
            }
        },
        messages: {
            'name' : {
                'required' : 'Bạn hãy nhập tên kho',
            },
            'cost' : {
                'required' : 'Kho phải có giá duy trì'
            }
        },
        submitHandler: function (form) {
            // Submit data to server
            form.submit();
        }
    });
})