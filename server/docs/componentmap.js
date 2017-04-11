import { connect } from 'react-redux'

installedModule['comp'] = {};

window.installedComponents={};
function install(type,code){
    var comp = eval(babel(code).code);
    var dataname = comp.dataname;
    var datadep = comp.datadependence?comp.datadependence.filter((item)=>{
        return item.startsWith("@");
    }).map((item)=>{return item.substring(1)}):[];

    installedComponents[type] = connect((state)=>{
        var otherBind = {};
        for (var i in datadep){
            otherBind[datadep[i]] = state[datadep[i]];
        }
        return Object.assign({data:state[dataname],keyid:state.keyid, path:state.path,selectkey:state.currentSelectInPage},otherBind)})(comp)
}
let comps = JSON.parse(unescape(window.__COMPS__));
for (var comp in comps){
    install(comp,comps[comp]);
}

var pageCode;
var cachingComponent={};
function renderPage(){
    console.log("manual call render page..");
    if (!pageCode){
        require('superagent').get("/framework/main.js").end((err,rsp)=>{
            pageCode = babel(rsp.text).code;
            eval(pageCode);
		});
    }
    else{
        eval(pageCode);
    }
}

installedModule["componentmap"] = function(type,key,props,children){
    if (!(type in installedComponents)){
        console.error("No,in release version,dynamic load component is not allowed!!",type);
        return null;
     }
     
     window.___key = key;
     window.___props=props;
     window.___children=children;
     var code = `
        var Comp_${type} = installedComponents.${type};
        var props = ___props;
        var children = ___children;
        var key = ___key;
        module.exports = <Comp_${type} key={key} {...props}>{children}</Comp_${type}>
     `;
     var ret= eval(babel(code).code);
     return ret;
}

if (!pageCode){
    renderPage();
}