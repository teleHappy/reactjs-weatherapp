import React, { Component } from 'react'

class Current extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		if(this.props.data.ob === undefined) return false;

		return(
		<div>
		<h2>Current Conditions</h2>
		<p className="date">{this.props.data.obDateTime} </p>
		
		<div className="highlight">
		    <div className="temp">{ this.props.data.ob.tempF }<sup>&deg;F</sup></div>
		    <div className="w-icon">
		    <img 
		    	src={ "../images/AerisIcons/Aeris_WxIcons_55x55/" + this.props.data.ob.icon }
		    	width="55" 
		    	height="55" 
		    	alt={ this.props.data.ob.weatherShort } 
		    	title={ this.props.data.ob.weatherShort }
		    />

		    </div>
		</div>

		<div className="details">
		    <table>
		    <tbody>
		        <tr>
		            <th>Feels Like</th>
		            <td>{this.props.data.ob.feelslikeF}<sup>&deg;</sup></td>
		        </tr>
		        <tr>
		            <th>Dew Point</th>
		            <td>{this.props.data.ob.dewpointF}<sup>&deg;</sup></td>
		        </tr>
		        <tr>
		            <th>Humidity</th>
		            <td>{this.props.data.ob.humidity}%</td>
		        </tr>
		        <tr>
		            <th>Sunrise</th>
		            <td>{this.props.data.ob.sunrise}</td>
		        </tr>
		        <tr>
		            <th>Sunset</th>
		            <td>{this.props.data.ob.sunset}</td>
		        </tr>
		        </tbody>
		    </table>
		</div>
		

        </div>
		)
	}

}

export default Current;