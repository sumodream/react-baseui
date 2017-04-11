import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import HorizontalLayout from './HorizontalLayout'
import VerticalLayout from './VerticalLayout'
import Button from './Button'
import Radio from './Radio'
class Shape {
	constructor(parent, def) {
		this.data = def;
		this.parent = parent;
	}
	static defaultShape(shapeType, props) {
		if (shapeType == "圆") return new Circle(props);
		if (shapeType == "矩形") return new Rect(props);
	}
	static get shapes() {
		return ['圆', '矩形']
	}
	static newShape(parent, item) {
		if (item.type == "圆") return new Circle(parent, item);
		if (item.type == "矩形") return new Rect(parent, item);
		if (item.type == "图片") return new Icon(parent, item);
	}
	get type() {
		return this.data.type;
	}
}

class Icon extends Shape{
	constructor(parent, def) {
		super(parent, def);
		def.type = '图片';
	}
	render(key) {
		return <image key={key} x={this.data.x} y={this.data.y} width={48} height={40} xlinkHref={this.data.src} />
	}
}

class Circle extends Shape {
	constructor(parent, def) {
		super(parent, def);
		def.type = '圆';
		if (!def.radius) def.radius = 1;
	}
	render(key) {
		return <circle key={key} strokeWidth={1} stroke="white" 
				cx={this.data.x} cy={this.data.y} r={this.data.radius} fillOpacity="0" />
	}
	getActiveData(parent, width, height, key) {
		return (
			<svg viewBox={`${this.data.x-this.data.radius},${this.data.y-this.data.radius},${this.data.radius*2},${this.data.radius*2}`} height={height} width={width} style={{clipPath:`url(#${key})`}}>
				<image x={parent.imgx} y={parent.imgy} width={parent.imgwidth} height={parent.imgheight} xlinkHref={parent.state.editimage} />
				<defs>
					<clipPath id={key}>
						{this.render(0)}
					</clipPath>
				</defs>
			</svg>
		)
	}
	dragStart(evt) {
		this.startX = evt.clientX;
		this.startY = evt.clientY;
		this.initCX = this.data.x;
		this.initCY = this.data.y;
		this.initR = this.data.radius;
		if (!this.drawWay) this.drawWay = 'RB';
	}
	doDrag(evt) {
		var ae = this.data;
		var deltax = evt.clientX - this.startX;
		var deltay = evt.clientY - this.startY;
		if (this.drawWay == "move") {
			ae.x = this.initCX + deltax;
			ae.y = this.initCY + deltay;
		}
		if (this.drawWay == "LT") {
			var rdelta = Math.min(deltax, deltay) * (-1) / 2;
			ae.x = this.initCX + deltax / 2;
			ae.y = this.initCY + deltay / 2;
			ae.radius = this.initR + rdelta;
		}
		if (this.drawWay == "RT") {
			var rdelta = Math.max(deltax, -1 * deltay) / 2;
			ae.x = this.initCX + deltax / 2;
			ae.y = this.initCY + deltay / 2;
			ae.radius = this.initR + rdelta;
		}
		if (this.drawWay == "LB") {
			var rdelta = Math.max(-1 * deltax, deltay) / 2;
			ae.x = this.initCX + deltax / 2;
			ae.y = this.initCY + deltay / 2;
			ae.radius = this.initR + rdelta;
		}
		if (this.drawWay == "RB") {
			var rdelta = Math.max(deltax, deltay) / 2;
			ae.x = this.initCX + deltax / 2;
			ae.y = this.initCY + deltay / 2;
			ae.radius = this.initR + rdelta;
		}
		if (this.drawWay == "TC") {
			var rdelta = deltay * -1 / 2;
			ae.x = this.initCX;
			ae.y = this.initCY + deltay / 2;
			ae.radius = this.initR + rdelta;
		}
		if (this.drawWay == "BC") {
			var rdelta = deltay / 2;
			ae.x = this.initCX;
			ae.y = this.initCY + deltay / 2;
			ae.radius = this.initR + rdelta;
		}
		if (this.drawWay == "LC") {
			var rdelta = deltax * -1 / 2;
			ae.x = this.initCX + deltax / 2;
			ae.y = this.initCY;
			ae.radius = this.initR + rdelta;
		}
		if (this.drawWay == "RC") {
			var rdelta = deltax / 2;
			ae.x = this.initCX + deltax / 2;
			ae.y = this.initCY;
			ae.radius = this.initR + rdelta;
		}
		//ae.radius<min(this.parent.props.width,this.parent.props.height)/2
		if (ae.radius > (Math.min(this.parent.props.width, this.parent.props.height) / 2)) {
			ae.radius = Math.min(this.parent.props.width, this.parent.props.height) / 2;
		}
		// ae.x >ae.radius && ae.x < this.parent.props.width-ae.radius
		if (ae.x < (ae.radius + this.parent.imgx)) {
			ae.x = ae.radius + this.parent.imgx;
		}
		if (ae.x > (this.parent.props.width - this.parent.imgx - ae.radius)) {
			ae.x = this.parent.props.width - this.parent.imgx - ae.radius
		}
		// ae.y>ae.radius && ae.y<this.parent.props.height-ae.radius
		if (ae.y < (ae.radius + this.parent.imgy)) {
			ae.y = ae.radius + this.parent.imgy;
		}
		if (ae.y > (this.parent.props.height - this.parent.imgy - ae.radius)) {
			ae.y = this.parent.props.height - this.parent.imgy - ae.radius;
		}
		// console.log("Circle",ae.x,ae.y,ae.width,ae.height,ae.radius,this.parent.props.width,this.parent.props.height,this.data.x,this.data.y,this.parent);
	}
	stopDrag(evt) {
		this.drawWay = "";
	}
	renderActive(parent) {
		var ae = this.data;
		return (
			<g>
			<rect x={ae.x - ae.radius} y={ae.y-ae.radius} width={ae.radius*2} height={ae.radius*2} fillOpacity="0"  strokeWidth={1} stroke="black" strokeDasharray="3 3" strokeDashoffset={parent.state.offset}/>
			<path d={`M${ae.x - ae.radius} ${ae.y - ae.radius} L${ae.x} ${ae.y - ae.radius} 
			A ${ae.radius} ${ae.radius} 0 0 0 ${ae.x - ae.radius} ${ae.y} Z`} fillOpacity="0.2" />
			<path d={`M${ae.x + ae.radius} ${ae.y - ae.radius} L${ae.x + ae.radius} ${ae.y} 
			A ${ae.radius} ${ae.radius} 0 0 0 ${ae.x} ${ae.y  - ae.radius} Z`} fillOpacity="0.2" />
			<path d={`M${ae.x + ae.radius} ${ae.y + ae.radius} L${ae.x} ${ae.y + ae.radius} 
			A ${ae.radius} ${ae.radius} 0 0 0 ${ae.x + ae.radius} ${ae.y} Z`} fillOpacity="0.2" />
			<path d={`M${ae.x - ae.radius} ${ae.y + ae.radius} L${ae.x - ae.radius} ${ae.y} 
			A ${ae.radius} ${ae.radius} 0 0 0 ${ae.x} ${ae.y + ae.radius} Z`} fillOpacity="0.2" />
            <circle onMouseDown={(()=>{this.drawWay = 'move'}).bind(this)} strokeWidth={1} stroke="white" 
				 cx={ae.x} cy={ae.y} r={ae.radius} fillOpacity="0" />
			<rect x={0} y={0} width={parent.props.width} height={ae.y - ae.radius} fillOpacity="0.4"/>
			<rect x={0} y={ae.y + ae.radius} width={parent.props.width} height={parent.props.height-ae.y - ae.radius} fillOpacity="0.4"/>
			<rect x={0} y={ae.y-ae.radius} width={ae.x - ae.radius} height={ae.radius*2} fillOpacity="0.4"/>
			<rect x={ae.x + ae.radius} y={ae.y-ae.radius} width={parent.props.width - ae.x - ae.radius} height={ae.radius*2} fillOpacity="0.4"/>
			<rect onMouseDown={(()=>{this.drawWay = 'LT'}).bind(this)} x={ae.x - ae.radius -5 } y={ae.y - ae.radius-5} width={10} height={10} strokeWidth={2} stroke="white" fillOpacity="0"/>
			<rect onMouseDown={(()=>{this.drawWay = 'RT'}).bind(this)} x={ae.x + ae.radius - 5} y={ae.y - ae.radius-5} width={10} height={10} strokeWidth={2} stroke="white" fillOpacity="0"/>
			<rect onMouseDown={(()=>{this.drawWay = 'LB'}).bind(this)} x={ae.x - ae.radius-5} y={ae.y + ae.radius -5} width={10} height={10} strokeWidth={2} stroke="white" fillOpacity="0"/>
			<rect onMouseDown={(()=>{this.drawWay = 'RB'}).bind(this)} x={ae.x + ae.radius - 5} y={ae.y + ae.radius -5} width={10} height={10} strokeWidth={2} stroke="white" fillOpacity="0"/>
			<rect onMouseDown={(()=>{this.drawWay = 'TC'}).bind(this)} x={ae.x - 5} y={ae.y - ae.radius -5} width={10} height={10} strokeWidth={2} stroke="white" fillOpacity="0"/>
			<rect onMouseDown={(()=>{this.drawWay = 'BC'}).bind(this)} x={ae.x - 5} y={ae.y + ae.radius -5} width={10} height={10} strokeWidth={2} stroke="white" fillOpacity="0"/>
			<rect onMouseDown={(()=>{this.drawWay = 'LC'}).bind(this)} x={ae.x - ae.radius - 5} y={ae.y -5} width={10} height={10} strokeWidth={2} stroke="white" fillOpacity="0"/>
			<rect onMouseDown={(()=>{this.drawWay = 'RC'}).bind(this)} x={ae.x + ae.radius - 5} y={ae.y -5} width={10} height={10} strokeWidth={2} stroke="white" fillOpacity="0"/>
			</g>
		)
	}
}
class Rect extends Shape {
	constructor(parent, def) {
		super(parent, def);
		def.type = '矩形';
		if (!def.width) def.width = 1;
		if (!def.height) def.height = 1;
	}
	render(key) {
		return <rect key={key} strokeWidth={1} stroke="white" 
			x={this.data.x} y={this.data.y} width={this.data.width} height={this.data.height} fillOpacity="0" />
	}
	dragStart(evt) {
		this.startX = evt.clientX;
		this.startY = evt.clientY;
		this.initCX = this.data.x;
		this.initCY = this.data.y;
		this.initWidth = this.data.width;
		this.initHeight = this.data.height;
		if (!this.drawWay) this.drawWay = 'RB';
	}
	stopDrag(evt) {
		this.drawWay = "";
	}
	getActiveData(parent, width, height, key) {
		return (
			<svg viewBox={`${this.data.x},${this.data.y},${this.data.width},${this.data.height}`} height={height} width={width} style={{clipPath:`url(#${key})`}}>
				<image x={parent.imgx} y={parent.imgy} width={parent.imgwidth} height={parent.imgheight} xlinkHref={parent.state.editimage} />
				<defs>
					<clipPath id={key}>
						{this.render(0)}
					</clipPath>
				</defs>
			</svg>
		)
	}
	doDrag(evt) {
		var ae = this.data;
		var deltax = evt.clientX - this.startX;
		var deltay = evt.clientY - this.startY;
		if (this.drawWay == "move") {
			ae.x = this.initCX + deltax;
			ae.y = this.initCY + deltay;
		}
		if (this.drawWay == "LT") {
			ae.x = this.initCX + deltax;
			ae.width = this.initWidth - deltax;
			ae.y = this.initCY + deltay;
			ae.height = this.initHeight - deltay;
		}
		if (this.drawWay == "RT") {
			ae.width = this.initWidth + deltax;
			ae.y = this.initCY + deltay;
			ae.height = this.initHeight - deltay;
		}
		if (this.drawWay == "LB") {
			ae.x = this.initCX + deltax;
			ae.width = this.initWidth - deltax;
			ae.height = this.initHeight + deltay;
		}
		if (this.drawWay == "RB") {
			ae.width = this.initWidth + deltax;
			ae.height = this.initHeight + deltay;
		}
		if (this.drawWay == "TC") {
			ae.y = this.initCY + deltay;
			ae.height = this.initHeight - deltay;
		}
		if (this.drawWay == "BC") {
			ae.height = this.initHeight + deltay;
		}
		if (this.drawWay == "LC") {
			ae.x = this.initCX + deltax;
			ae.width = this.initWidth - deltax;
		}
		if (this.drawWay == "RC") {
			ae.width = this.initWidth + deltax;
		}
		//ae.radius<min(this.parent.props.width,this.parent.props.height)/2
		if (ae.radius > (Math.min(this.parent.props.width, this.parent.props.height) / 2)) {
			ae.radius = Math.min(this.parent.props.width, this.parent.props.height) / 2;
		}
		// ae.x >ae.radius && ae.x < this.parent.props.width-ae.radius
		if (ae.x < (ae.radius + this.parent.imgx)) {
			ae.x = ae.radius + this.parent.imgx;
		}
		if (ae.x > (this.parent.props.width - this.parent.imgx - ae.radius)) {
			ae.x = this.parent.props.width - this.parent.imgx - ae.radius
		}
		// ae.y>ae.radius && ae.y<this.parent.props.height-ae.radius
		if (ae.y < (ae.radius + this.parent.imgy)) {
			ae.y = ae.radius + this.parent.imgy;
		}
		if (ae.y > (this.parent.props.height - this.parent.imgy - ae.radius)) {
			ae.y = this.parent.props.height - this.parent.imgy - ae.radius;
		}
		// console.log("Rect",ae.x,ae.y,ae.width,ae.height,this.parent.props.width,this.parent.props.height);
	}
	renderActive(parent) {
		var ae = this.data;
		return (
			<g>
			<rect x={ae.x} y={ae.y} width={ae.width} height={ae.height} fillOpacity="0"  strokeWidth={1} stroke="white"/>
			<rect onMouseDown={(()=>{this.drawWay = 'move'}).bind(this)} x={ae.x} y={ae.y} width={ae.width} height={ae.height} fillOpacity="0"  strokeWidth={1} stroke="black" strokeDasharray="3 3" strokeDashoffset={parent.state.offset}/>
			<rect x={0} y={0} width={parent.props.width} height={ae.y} fillOpacity="0.4"/>
			<rect x={0} y={ae.y + ae.height} width={parent.props.width} height={parent.props.height-ae.y - ae.height} fillOpacity="0.4"/>
			<rect x={0} y={ae.y} width={ae.x} height={ae.height} fillOpacity="0.4"/>
			<rect x={ae.x + ae.width} y={ae.y} width={parent.props.width - ae.x - ae.width} height={ae.height} fillOpacity="0.4"/>
			<rect onMouseDown={(()=>{this.drawWay = 'LT'}).bind(this)} x={ae.x -5 } y={ae.y -5} width={10} height={10} strokeWidth={2} stroke="white" fillOpacity="0"/>
			<rect onMouseDown={(()=>{this.drawWay = 'RT'}).bind(this)} x={ae.x + ae.width - 5} y={ae.y -5} width={10} height={10} strokeWidth={2} stroke="white" fillOpacity="0"/>
			<rect onMouseDown={(()=>{this.drawWay = 'LB'}).bind(this)} x={ae.x -5} y={ae.y + ae.height -5} width={10} height={10} strokeWidth={2} stroke="white" fillOpacity="0"/>
			<rect onMouseDown={(()=>{this.drawWay = 'RB'}).bind(this)} x={ae.x + ae.width - 5} y={ae.y + ae.height -5} width={10} height={10} strokeWidth={2} stroke="white" fillOpacity="0"/>
			<rect onMouseDown={(()=>{this.drawWay = 'TC'}).bind(this)} x={ae.x + ae.width/2 - 5} y={ae.y -5} width={10} height={10} strokeWidth={2} stroke="white" fillOpacity="0"/>
			<rect onMouseDown={(()=>{this.drawWay = 'BC'}).bind(this)} x={ae.x +ae.width/2- 5} y={ae.y + ae.height -5} width={10} height={10} strokeWidth={2} stroke="white" fillOpacity="0"/>
			<rect onMouseDown={(()=>{this.drawWay = 'LC'}).bind(this)} x={ae.x - 5} y={ae.y +ae.height/2 -5} width={10} height={10} strokeWidth={2} stroke="white" fillOpacity="0"/>
			<rect onMouseDown={(()=>{this.drawWay = 'RC'}).bind(this)} x={ae.x + ae.width - 5} y={ae.y + ae.height/2 -5} width={10} height={10} strokeWidth={2} stroke="white" fillOpacity="0"/>
			</g>
		)
	}
}
class SVGEditor extends ReactUIBase {
	static get propTypes() {
		return {
			editimage: React.PropTypes.string,
			width: React.PropTypes.number,
			height: React.PropTypes.number,
			elements: React.PropTypes.array,
			onActiveData: React.PropTypes.func,
			onDataChange: React.PropTypes.func,
			showToolbar: React.PropTypes.bool,
			showShapes: React.PropTypes.bool,
			defaultSelect: React.PropTypes.number
		}
	}
	static get defaultProps() {
		return {
			width: null,
			height: null,
			//editimage:'http://hfs.yunxiao.com/src/profile/images/icon-face.png',
			editimage: null,
			elements: [],
			onActiveData: null,
			onDataChange: null,
			showToolbar: true,
			showShapes: true,
			defaultSelect: -1
		}
	}
	constructor(props) {
		super(props);
		this.state = {
			offset: 5,
			elements: props.elements.map((item) => {
				return Shape.newShape(this, item)
			}),
			selectIdx: props.defaultSelect
		};
		this.state.editimage = props.editimage;
		this.svgwidth = this.props.width;
		this.svgheight = this.props.height;		
        this.shapeType = -1;
	}
	componentWillUnmount() {
		clearInterval(this.drawIndInterval);
	}
	componentDidMount() {
		// 隐藏右侧图片
		// if (this.props.onActiveData) {
		// 	if (this.state.selectIdx >= 0) {
		// 		var ae = this.state.elements[this.state.selectIdx];
		// 		this.props.onActiveData(ae.getActiveData.bind(ae, this));
		// 	}
		// }

		if (this.props.editimage){
			var img=new Image(); 
			img.onload=(function(){
				this.svgwidth = img.width;
				this.svgheight = img.height;	
				this.imgx = 0;
				this.imgy = 0;
				this.imgwidth = img.width;
				this.imgheight = img.height;
				this.forceUpdate();	
			}).bind(this);
			img.src=this.props.editimage; 
		}

		this.drawIndInterval = setInterval((() => {
			if (this.state.selectIdx >= 0){
				this.setState({
					offset: this.state.offset + 1
				});
			}
		}).bind(this), 200);
	}
	startDrag(evt) {
		if (this.state.selectIdx >= 0) {
			var ae = this.state.elements[this.state.selectIdx];
			if (ae.drawWay) {
				ae.dragStart(evt);
				this.draging = true;
				return;
			}
		}
		if (this.shapeType < 0) return;
		this.draging = true;
		var pos = ReactDOM.findDOMNode(this.refs.baseZone).getBoundingClientRect();
		this.state.elements.push(Shape.defaultShape(Shape.shapes[this.shapeType], {
			x: evt.clientX - pos.left,
			y: evt.clientY - pos.top
		}));
		this.state.selectIdx = this.state.elements.length - 1;
		var ae = this.state.elements[this.state.selectIdx];
		ae.dragStart(evt);
	}
	canvas2img(pt) {
		return {
			x: pt.x * this.srcwidth / this.imgwidth,
			y: pt.y * this.srcheight / this.imgheight
		}
	}
	endDrag(evt) {
		this.draging = false;
		var ae = this.state.elements[this.state.selectIdx];
		ae.stopDrag();
		if (this.props.onActiveData) {
			this.props.onActiveData(ae.getActiveData.bind(ae, this));
		}
		if (this.props.onDataChange) {
			this.props.onDataChange(this.file, this.props.elements, this.state.selectIdx, this);
		}
	}
	doDrag(evt) {
		if (this.draging) {
			var ae = this.state.elements[this.state.selectIdx];
			ae.doDrag(evt);
			this.forceUpdate();
		}
	}
	addCircle() {
		this.state.elements.push(new Circle(this, {
			radius: 30,
			x: 50,
			y: 50
		}));
		this.forceUpdate();
	}
	addRect() {
		this.state.elements.push(new Rect(this, {
			x: 50,
			y: 50,
			width: 100,
			height: 50
		}));
		this.forceUpdate();
	}
	drawActiveSvg(svg) {
		return svg.renderActive(this);
	}
	drawSvg(svg, idx) {
		return svg.render(idx);
	}
	selectElement(idx) {
		this.setState({
			selectIdx: idx
		});
		if (this.props.onActiveData) {
			var ae = this.state.elements[idx];
			this.props.onActiveData(ae.getActiveData.bind(ae, this));
		}
	}
	fileChange(evt) {
		var files = evt.target.files;
		if ((files) && (files[0])) {
			this.file = files[0];
			var reader = new FileReader();
			reader.onload = ((e) => {
				var img = new Image();
				img.src = e.target.result;
				img.onload = (() => {
					this.srcwidth = img.width;
					this.srcheight = img.height;
					if (this.props.width / this.props.height >= this.srcwidth / this.srcheight) {
						this.imgwidth = this.srcwidth * this.props.height / this.srcheight;
						this.imgx = (this.props.width - this.imgwidth) / 2;
						this.imgy = 0;
						this.imgheight = this.props.height;
					} else {
						this.imgx = 0;
						this.imgwidth = this.props.width;
						this.imgheight = this.props.width * this.srcheight / this.srcwidth;
						this.imgy = (this.props.height - this.imgheight) / 2;
					}
					this.setState({
						editimage: e.target.result
					});
					setTimeout((() => {
						if (this.props.onActiveData) {
							if (this.state.selectIdx >= 0) {
								var ae = this.state.elements[this.state.selectIdx];
								this.props.onActiveData(ae.getActiveData.bind(ae, this));
							}
							if (this.props.onDataChange) {
								this.props.onDataChange(this.file, this.props.elements, this.state.selectIdx, this);
							}
						}
					}).bind(this), 100);
				}).bind(this);
			}).bind(this);
			reader.readAsDataURL(files[0]);
		}
	}
	render() {
		if (!this.state.editimage) {
			return (
				<VerticalLayout style={{alignItems:'center',justifyContent:'center', width:this.props.width,height:this.props.height,border:'1px solid #f2f2f2',backgroundColor:'#f2f2f2'}}>
					<label style={{display: 'flex',flexDirection: 'column',}}>						
						<div style={{display: 'flex',width: 90,height: 90,border: '2px dashed #d6d7d9',fontSize: 48,fontWeight: 200,color: '#d6d7d9',cursor: 'pointer',alignItems: 'center',justifyContent: 'center',alignSelf: 'center'}}>+
							<input style={{width:0.1,height:0.1,opacity:0,overflow:'hidden',position:'absolute',zIndex:-1,border:'2px solid red' }} id="svgeditor_choose_file" onChange={this.fileChange.bind(this)} type='file' />
		    			</div>
		    			<div style={{    marginTop: 20,fontSize: 12,color: '#6e7279',}}> 只支持JPG、PNG、GIF，大小不超过5M
		    			</div>
					</label>
				</VerticalLayout>
			)
		}
		var elements = this.state.elements.map((item, idx) => {
			return <Button onClick={this.selectElement.bind(this,idx)}
				 key={idx} theme='infoBlue'>{item.type} {idx+1}</Button>
		});
		var inactiveElements = this.state.elements.filter((item, idx) => {
			return idx != this.state.selectIdx
		}).map((item, idx) => {
			return this.drawSvg(item, idx)
		});
		var ae, activeElement;
		if (this.state.selectIdx >= 0) {
			ae = this.state.elements[this.state.selectIdx];
			activeElement = this.drawActiveSvg(ae);
		}
		var width = this.props.width?this.props.width:this.svgwidth?this.svgwidth:600;
		var height = this.props.height;
		if (!this.svgheight) this.svgheight = 1;
		if (!this.svgwidth) this.svgwidth = 1;
		if (!height){
			if (this.svgwidth>0){
				height = width * this.svgheight / this.svgwidth;
			} else {
				height = 0;
			}
		}
		return (
			<VerticalLayout>
			{this.props.showToolbar?
			<HorizontalLayout>
			<Radio onSelect={((idx)=>{this.shapeType=idx}).bind(this)} values={Shape.shapes} />
			</HorizontalLayout>:null}
			<HorizontalLayout>
            <div ref='baseZone' onMouseDown={this.startDrag.bind(this)} onMouseUp={this.endDrag.bind(this)} onMouseMove={this.doDrag.bind(this)} style={{width:this.props.width,height:this.props.height,}}>
            <svg style={{width,height}} viewBox={"0 0 "+this.svgwidth+" "+this.svgheight} width={this.svgwidth} height={this.svgheight}>
			{this.state.editimage?<image x={this.imgx} y={this.imgy} width={this.imgwidth} height={this.imgheight} xlinkHref={this.state.editimage} />:null}
			{inactiveElements}
			{this.state.selectIdx>=0?activeElement:null}
            </svg>
            </div>
			{this.props.showShapes?
			<VerticalLayout>
			{elements}
			<Button onClick={(()=>{this.setState({selectIdx:-1})}).bind(this)}>取消选中</Button>
			</VerticalLayout>:null}
			</HorizontalLayout>
			</VerticalLayout>
		)
	}
}
module.exports = SVGEditor;