import React, { Component } from 'react'

class Forecast extends React.Component{
	constructor(props){
		super(props)
		
	}
	render(){
		// this.props.data.response[0]
		if(this.props.data.response === undefined) return false
		let days = this.props.data.response[0].periods
		let daysFormatted = days.map((day, idx) =>  
			<li key={idx} className="boogaloo">
				<h3>{day.dateTimeDay}</h3>
				<p className="shortDate">{day.dateTimeDate}</p>
				<img 
					src={"../images/AerisIcons/Aeris_WxIcons_55x55/" + day.icon}
				/>
				<div>{day.maxTempF}<sup>&deg;</sup></div>
				<div>{day.minTempF}<sup>&deg;</sup></div>
				<div>{day.weatherPrimary}</div>
			</li>
		)
		return(
		<div>
			<h2>5 Day Forecast</h2>
			<ul>
				{daysFormatted}
			</ul>
        </div>
		)
	}

}

export default Forecast;