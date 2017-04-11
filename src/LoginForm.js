import YXReactUIBase from '../framework/uibase'
import React from 'react'
import md5 from 'md5'
import VerticalLayout from './VerticalLayout'
import HorizontalLayout from './HorizontalLayout'
import Image from './Image'
class LoginForm extends YXReactUIBase{
	onSubmit(form){
		this.refs.form.pass.value = md5(this.refs.form.pass.value);
	}
	render(){ 
		return (
			<VerticalLayout style={this.style({display: 'flex',alignItems: 'center',alignSelf: 'stretch',justifyContent: 'space-between',width:'100%',height:'100%'})}>
				<VerticalLayout style={{display: 'flex',alignItems: 'center',justifyContent: 'center',alignSelf: 'stretch',height:100,backgroundColor: '#2DC3E8',width:'100%'}}>
					<Image src="https://account.yunxiao.com/static/common/images/yunxiaologo.png"></Image>
				</VerticalLayout>
				<VerticalLayout style={{display: 'flex',alignItems: 'center',justifyContent: 'center',alignSelf: 'stretch'}}>
				<form ref='form' method='post' onSubmit={this.onSubmit.bind(this)}>
					<HorizontalLayout style={{marginBottom: 20,fontSize: 16,display: 'flex',alignItems: 'center',justifyContent: 'center',alignSelf: 'stretch',}}>			
						<span style={{marginRight:20}}>用户:</span>
						<input type="text" name="account"  placeholder="Username" style={{minWidth: 240,minHeight: 46,padding: '0px 10px',borderRadius: 5,border: '1px solid #e7e7e7',outline:'none'}}/>
					</HorizontalLayout>
					<HorizontalLayout style={{marginBottom: 40,fontSize: 16,display: 'flex',alignItems: 'center',justifyContent: 'center',alignSelf: 'stretch',}}>
						<span style={{marginRight:20}}>密码:</span>
						<input type="password" name="pass"  placeholder="Password" style={{minWidth: 240,minHeight: 46,padding: '0px 10px',borderRadius: 5,border: '1px solid #e7e7e7',outline:'none'}} />
					</HorizontalLayout>
					<HorizontalLayout style={{marginBottom: 20,fontSize: 16,display: 'flex',alignItems: 'center',justifyContent: 'flex-end',}}>
						<input type="submit" name="commit" value="登   录" style={{minWidth: 240,minHeight: 46,padding: '0px 10px',backgroundColor: '#2DC3E8',fontSize: 16,color:'#fff',borderRadius: 5,border: '1px solid #e7e7e7',outline:'none'}} />
					</HorizontalLayout>
				</form>
				</VerticalLayout>
				<VerticalLayout style={{display: 'flex',alignItems: 'center',justifyContent: 'center',alignSelf: 'stretch',marginBottom:30}}>
					<p style={{fontSize:12,color:'#6a6a6a'}}>©2016 All Rights Reserved. </p>
				</VerticalLayout>
		</VerticalLayout>
		)
	} 
}
module.exports = LoginForm;