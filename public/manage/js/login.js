$(function() {
  $("#form").bootstrapValidator({
    feedbackIcons: {
      valid: "glyphicon glyphicon-ok",
      invalid: "glyphicon glyphicon-remove",
      validating: "glyphicon glyphicon-refresh"
    },

    fields: {
      username: {
        validators: {
          notEmpty: {
            message: "用户名不能为空"
          },
          stringLength: {
            min: 3,
            max: 9,
            message: "用户名长度必须是 3-9 位"
          },
          callback: {
            message: "用户名不存在"
          }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: "密码不能为空"
          },
          stringLength: {
            min: 6,
            max: 12,
            message: "密码长度必须是6-12位"
          },
          callback: {
            message: "密码错误"
          }
        }
      }
    }
  });

  $("#form").on("success.form.bv", function(e) {
    e.preventDefault();

    $.ajax({
      type: "post",
      url: "/employee/employeeLogin",
      dataType: "json",
      data: $("#form").serialize(),
      success: function(info) {
        console.log(info);

        if (info.success) {
          location.href = "index.html";
        }

        if (info.error === 1000) {
          $("#form")
            .data("bootstrapValidator")
            .updateStatus("username", "INVALID", "callback");
        }

        if (info.error === 1001) {
          $("#form")
            .data("bootstrapValidator")
            .updateStatus("password", "INVALID", "callback");
        }
      }
    });
  });

  $('[type="reset"]').click(function() {
    console.log(1111);
    $("#form")
      .data("bootstrapValidator")
      .resetForm();
  });
});
