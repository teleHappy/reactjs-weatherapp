import React, { Component } from 'react'

class Current extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
		<div>
		<h2>Current Conditions</h2>
		<p className="date">{this.props.data.obDateTime} </p>
		
		<div className="highlight">
		    <div className="temp">{(this.props.data.ob) ? this.props.data.ob.tempF: '--'}<sup>&deg;F</sup></div>
		    <div className="icon">
		    <p>{(this.props.data.ob && this.props.data.ob.weatherShort) ? this.props.data.ob.weatherShort: '--'}</p>
		    <img 
		    	src={(this.props.data.ob && this.props.data.ob.icon) ? "../images/AerisIcons/Aeris_WxIcons_55x55/" + this.props.data.ob.icon  : ''}
		    	style={{display: (this.props.data.ob && this.props.data.ob.icon) ? "block" : "none"  }}
		    	width="55" 
		    	height="55" 
		    	alt={(this.props.data.ob && this.props.data.ob.weatherShort) ? this.props.data.ob.weatherShort: '--'} 
		    	title={(this.props.data.ob && this.props.data.ob.weatherShort) ? this.props.data.ob.weatherShort: '--'}
		    />

		    </div>
		</div>

		

        </div>
		)
	}

}

export default Current;