import React, {Component} from 'react';
import {render} from 'react-dom';


import Current from './components/Current'
import Forecast from './components/Forecast'
import moment from 'moment'

let currentData = {}
let forecastData = {}
let client_id = 'hgB6Ymghe9qKajnVt0ej4'
let client_secret = 'tqiHZkvjWwkyhSIakrqae1cOLmr1ghJ6XLYXkTnk'

class App extends React.Component {
  constructor(props){
  	super(props)
  	this.state = {
  		currentData: currentData,
  		forecastData: forecastData,
  		isLoading: true
  	}
  	this.getWeatherData = this.getWeatherData.bind(this)
  	this.getForecastData = this.getForecastData.bind(this)
  	this.getWeatherDataForCurrentPosition = this.getWeatherDataForCurrentPosition.bind(this)
  }

  render () {
    
  	//TODO: component:navigation extend EventEmmiter to handle clicks
  	//TODO: component:loader
    return (
    	<div>
    	
    	<div id="mainApp">
    		
	    	<nav role="navigation"><span className="button current"><a>Now</a></span><span className="button forecast"><a>5 Day</a></span></nav>
	    	<div id="navTracker"></div>
	    	
	    	
	    	<div id="loader" className="panel loader" style={{display: (this.state.isLoading)? "block" : "none"}}>	    	
		    	<div className="icon thunder-storm">
		    	  <div className="lightning">
		    	    <div className="bolt"></div>
		    	    <div className="bolt"></div>
		    	  </div>
		    	</div>
	    	</div>
	    	
	    	<ul id="panelsContainer"  style={{display: (this.state.isLoading)? "none" : "block"}}>
    			<li id="current" className="panel"><Current data={this.state.currentData}/></li>
    			<li id="forecast" className="panel"><Forecast data={this.state.forecastData}/></li>
	    	</ul>
    	
    	</div>
    	</div>
    	
    )
  }

  /*
   *  makes observation/closest calls to weather service
   *  @param {obj} location coords
   * */
  getWeatherData(coords)
  {
      var that = this;
      var lat = coords.latitude,
          lng = coords.longitude,
          url = `https://api.aerisapi.com/observations/closest?p=${lat},${lng}&client_id=${client_id}&client_secret=${client_secret}&limit=1`;
      $.ajax(
      {
          dtatType: 'json',
          url: url,
          success: function(data)
          {
              data.response[0].ob.sunrise = moment.unix(data.response[0].ob.sunrise).format('h:m a');
              data.response[0].ob.sunset = moment.unix(data.response[0].ob.sunset).format('h:m a');
              data.response[0].obDateTime = moment(data.response[0].obDateTime).format('dddd MMMM DD YYYY');
              that.setState((prevState)=>{
              	prevState.currentData = data.response[0],
              	prevState.isLoading = false;
              })
          }
      });

  };

  /*
   *  makes forecast/closest calls to weather service
   *  @param {obj} location coords
   * */
  getForecastData(coords)
  {
      var that = this
      var lat = coords.latitude,
          lng = coords.longitude,
          url = `https://api.aerisapi.com/forecasts/closest?p=${lat},${lng}&client_id=${client_id}&client_secret=${client_secret}&filter=day&limit=5`;
      $.ajax(
      {
          dataType: 'json',
          url: url,
          success: function(data)
          {
              data.response[0].periods.map(function(p, idx)
              {
                  p.dateTimeDay = moment(p.dateTimeISO).format('ddd');
                  p.dateTimeDate = moment(p.dateTimeISO).format('MMM DD');
              });
              that.setState((prevState)=>{
              	prevState.forecastData = data
              })
          }
      });
  }

  componentDidMount(){
   this.getWeatherDataForCurrentPosition();
  }

  getWeatherDataForCurrentPosition ()
  {
  	navigator.geolocation.getCurrentPosition((position)=>
  	{
  	    this.getWeatherData(position.coords);
  	    this.getForecastData(position.coords);
  	}, 
  	function(e)
  	{
  	    alert('Error getting geolocation position: ' + e.message)
  	},
  	{
  	    enableHighAccuracy: true,
  	    timeout: 10000,
  	    maximumAge: 60000
  	});
  }

}


render(<App/>, document.getElementById('appContainer'));