const ws = require('ws');
    window.onLoad = function (){
        const Forward = document.getElementById("f");
        const Back = document.getElementById("b");
        const Left = document.getElementById("l");
        const Right = document.getElementById("r");
        const urll = document.getElementById("url");
        const con = document.getElementById("con");
        const dis = document.getElementById("dis");
        const turtid = document.getElementById("turtid");
        const turtpass = document.getElementById("turtpass");

        Connect.onClick = function(){
            let conurl = urll.value;
            console.log("yes");
            if (conurl == null) return
            let socket = new ws(conurl);
            dis.text = conurl
            Forward.onClick = function(){
                socket.send('f')
             }
        }  
           





    }