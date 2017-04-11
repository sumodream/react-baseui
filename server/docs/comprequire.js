var installedModule={};
var moduleSource={};
var pageCode;
var pendding=false;
function renderPage(){
    console.log("manual call render page");
    if (!pageCode){
        require('superagent').get("/server/comp.js").end(function(err,rsp){
            pageCode = babel(rsp.text).code;
            eval(pageCode);
        });
    }
    else{
        eval(pageCode);
    }
}
function require(param){
    if (param == "superagent") return superagent;
    if (param == "react") return React;
    if (param == "react-dom") return ReactDOM;
    if (param == "react-router") return ReactRouter;
    if (param == "react-redux") return ReactRedux;
    if (param == "redux-thunk") return ReduxThunk;
    if (param == "redux-logger") return reduxLogger;
    if (param == "underscore") return _;
    if (param == "yxbaseui") return yxbaseui;
    if (param == "moment") return moment;
    if (param == "echarts") return echarts;
    if (param == "md5") return md5;
    if (param == "redux") return Redux;

    if (!param.endsWith(".js")){
        param+=".js";
    }
    if (param in installedModule){
        return installedModule[param];
    }
    if (param in moduleSource){
        pendding=false;
        eval(moduleSource[param]);
        if (!pendding){
            installedModule[param] = thismodule;
            console.log("module",param,'load finished!');
            return thismodule;
        }
        return null;
    }
    pendding=true;
    require('superagent').get(param).end(function(err,rsp){
        var code = babel(rsp.text).code;
        moduleSource[param] = code;
        pendding=false;
        eval(code);
        if (pendding) return null;
        if (param in installedModule) return null;
        console.log("module",param,'load finished!');
        installedModule[param] = thismodule;
        renderPage();
    });
    return null;
}

var module = {
    set exports(value){
        thismodule=value;
    }
}
var thismodule;

if (!pageCode){
    renderPage();
}