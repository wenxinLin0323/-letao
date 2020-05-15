NProgress.configure({ showSpinner: false });

$(document).ajaxStart(function() {
  NProgress.start();
});

$(document).ajaxStop(function() {
  setTimeout(function() {
    NProgress.done();
  }, 500);
});

if (location.href.indexOf("login.html") === -1) {
  $.ajax({
    url: "/employee/checkRootLogin",
    type: "get",
    success: function(info) {
      console.log(info);
      if (info.success) {
        console.log("登陆了");
      }

      if (info.error === 400) {
        location.href = "login.html";
      }
    }
  });
}

$(function() {
  $(".category").click(function() {
    $(this)
      .next()
      .stop()
      .slideToggle();
  });

  $(".icon_menu").click(function() {
    $(".lt_aside").toggleClass("hidemenu");
    $(".lt_main").toggleClass("hidemenu");
    $(".lt_topbar").toggleClass("hidemenu");
  });
  $(".icon_logout").click(function() {
    $("#logoutModal").modal("show");
  });

  $("#logoutBtn").click(function() {
    console.log("hehe");

    $.ajax({
      url: "/employee/employeeLogout",
      type: "GET",
      dataType: "json",
      success: function(info) {
        if (info.success) {
          location.href = "login.html";
        }
      }
    });
  });
});
