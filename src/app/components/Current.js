import React from 'react'

class Current extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			currentData: {
				obDateTime: 12345779,
				ob: {
					tempF: 99
				}
			}
		}
	}
	render(){
		return(

			<h2>Current Conditions</h2>
			<p class="date">{{this.state.obDateTime}}</p>
			<div class="highlight">
			    <div class="temp">{{this.state.ob.tempF}}<sup>&deg;F</sup></div>
			    <div class="icon"><img src="images/AerisIcons/Aeris_WxIcons_55x55/{{this.state.ob.icon}}" width="55" height="55" alt="{{this.state.ob.weatherShort}}" title="{{this.state.ob.weatherShort}}"></div>
			</div>

		)
	}

}

export default Current;