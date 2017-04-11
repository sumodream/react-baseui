'use strict'
import ReactDOMServer from 'react-dom/server';
import React, { Component } from 'react';

var Express = require('express');
var compression = require('compression');
var path = require('path');
var fs = require('fs');
let app = new Express();
let port = process.env.BASEUI_PORT || 9303;

var session = require('express-session')
var reload = require('require-reload')(require);
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session')

app.use(cookieParser('yxreact.design'));	
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieSession({ secret: 'yxreact.design',cookie: { maxage: 60000}, resave: false,saveUninitialized: false}));
app.use(compression());


app.use(function(err, req, res, next) {
    if(!err) return next(); // you also need this line
    console.log("error!!!");
    res.send("error!!!");
});
app.set('views', __dirname);
app.set('view engine', 'ejs');
app.use(Express.static(path.join(__dirname,"../node_modules/react-markdown/umd/")));
app.use(Express.static(path.join(__dirname,"../node_modules/react/dist/")));
app.use(Express.static(path.join(__dirname,"../node_modules/immutable/dist/")));
app.use(Express.static(path.join(__dirname,"../node_modules/draft-js/dist/")));
app.use(Express.static(path.join(__dirname,"../src" )));
app.use(Express.static(path.join(__dirname,"../dist/" )));
app.use(Express.static(path.join(__dirname,".." )));
app.use(Express.static(path.join(__dirname,"docs" )));


//路径解析

// app.get("/",function(req,res,next){
//     var title="BaseUI";
// 	let html = "";
//
//     var fs = require('fs');
//     var files = fs.readdirSync(path.join(__dirname,"../src" ));
//     var compinfos = {};
//     files.filter((item)=>{return item.endsWith(".js")}).forEach((base)=>{
//         var baseobj = reload(path.join(__dirname,"../src",base));
//         var name = base.slice(0,-3);
//         if (baseobj.displayName){
//             name = baseobj.displayName;
//         }
//         var obj={};
//         if (fs.existsSync(path.join(__dirname,"../test/test_"+base))) {
//             obj.test = "test/test_"+base;
//         }
//         compinfos[name]=obj;
//     })
//     compinfos['Toast']={test:"test/test_toast.js"};
//     var reduxState = escape(JSON.stringify(compinfos));
//     var scriptSrcs = [];
//     res.render('index', {title,html,reduxState,scriptSrcs});
// });

app.get("/:comp",function(req,res,next) {
    var compName = req.params.comp.replace(/(\w)/,function(v){return v.toUpperCase()});
    var title="组件-"+compName;
    let html = "";
    var reduxState = escape(JSON.stringify({name:compName}));
    var scriptSrcs = [];
    res.render('comp', {title,html,reduxState,scriptSrcs});
});

app.get("/",function(req,res,next){
    var title="Sumo | BaseUI";
    let html = "";

    var fs = require('fs');
    var abouts = fs.readdirSync(path.join(__dirname,"../pages/about" ));
    var comps = fs.readdirSync(path.join(__dirname,"../pages/components" ));
    var pages = {
        about:{},
        components:{}
    };
    abouts.filter((file)=>{return file.endsWith('.js')}).forEach((page)=>{
        var pageObj = reload(path.join(__dirname,"../pages/about",page));
        let name = {};
        name.en = page.slice(0,-3);
        if(pageObj.displayName){
            name.ch = pageObj.displayName;
        }
        pages.about[name.en] = name;
    });
    
    comps.filter((file)=>{return file.endsWith('.js')}).forEach((page)=>{
        var pageObj = reload(path.join(__dirname,"../pages/components",page));
        let comp = {};
        comp.en = page.slice(0,-3);
        if(pageObj.displayName){
            comp.ch = pageObj.displayName.name;
            comp.classify = pageObj.displayName.classify?pageObj.displayName.classify:'Other'; 
        }else{
            comp.classify = 'Other'
        }
        if(comp.classify in pages.components){
            pages.components[comp.classify].push(comp);
        }else{
            pages.components[comp.classify]=[comp];
        }
    });
    var reduxState = escape(JSON.stringify(pages));
    var scriptSrcs = [];
    res.render('index', {title,html,reduxState,scriptSrcs});
});

app.listen(port);
console.log(`Server is listening to port: ${port}`);
