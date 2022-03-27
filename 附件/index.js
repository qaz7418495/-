window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    // TODO: 在此为 top-right 元素设置监听器
    // document.getElementById('top-right') ...
    document.getElementById('top-right').addEventListener('click',function(){
        clickLogin();
    });
}

function search() {
    // TODO: 搜索触发后的行为
    var inner = document.getElementsByTagName("input");
    if(inner[0].value == ''){
        alert("请输入搜索内容");
    }
    else{
        alert(inner[0].value);
    }
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}


function htmlEncode ( str ) {
    var ele = document.createElement('span');
    ele.appendChild( document.createTextNode( str ) );
    return ele.innerHTML;
  }

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug，另外注意图片路径是否正确
    var username = Kernal.getUserName();
    username = htmlEncode(username);
    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="img/user.jpg" />\
                        </span>\
                        <span id="name">' + username + '</span>\
                    </div>';
    document.getElementById('top-right').innerHTML = content;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}
