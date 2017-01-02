import React, { Component } from 'react'

class Forecast extends React.Component{
	constructor(props){
		super(props)
		
	}
	render(){

		if(this.props.data.response === undefined) return false

		let days = this.props.data.response[0].periods

		let tableFormatted = days.map((day, idx) =>
			<tr key={idx}>
			    <td>
			        <h3>{day.dateTimeDay}</h3>
			        <p className="shortDate">{day.dateTimeDate}</p>
			    </td>
			    <td className="w-icon"><img src={"../images/AerisIcons/Aeris_WxIcons_55x55/" + day.icon} /></td>
			    <td className="temps">
			        <div>{day.maxTempF}<sup>&deg;</sup></div>
			        <div>{day.minTempF}<sup>&deg;</sup></div>
			    </td>
			    <td>{day.weatherPrimary}</td>
			</tr>

		)
		return(
			<div>
				<h2>5 Day Forecast</h2>
				<table>
					<tbody>
						{tableFormatted}
					</tbody>
				</table>
	        </div>
		)
	}

}

export default Forecast;