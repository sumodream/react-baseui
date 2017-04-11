import React, { Component } from 'react'

function recursionCall(define,depth,parent){
	if (typeof define == 'string'){
		return define;
	}
	var children=[];
	if (define.children){
		children = define.children.map((c,idx)=>{
			var newdepth = depth.slice(0);
			newdepth.push(idx);
			return recursionCall(c,newdepth,define);
		})
	}
	if (children.length==0) children==null;
	var props = {yxkey:depth.join("."),options:define.props,parent:parent};
	return require("./componentmap")(define.type,depth.join(','),props,children);
}

module.exports = function(pagedefine,editable){
	if (!pagedefine){
		console.log("this should not happen!");
		return null;
	}
	var VerticalLayout = require('baseui').VerticalLayout;
	var children=pagedefine.children.map((c)=>{
		return recursionCall(c,[0],null);
	});
	return (
		<VerticalLayout style={{flex:'1 0 auto',alignSelf:'stretch'}}>
		{children}
		</VerticalLayout>
	)
}