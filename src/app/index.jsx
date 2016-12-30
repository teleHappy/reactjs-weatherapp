import React, {Component} from 'react';
import {render} from 'react-dom';

import Current from './Current'
import Forecast from './Forecast'
import moment from 'moment'

  	let currentData = '{"id":"KOWD","loc":{"long":-71.166666666667,"lat":42.183333333333},"place":{"name":"norwood","state":"ma","country":"us"},"profile":{"tz":"America/New_York","elevM":19,"elevFT":62},"obTimestamp":1483026780,"obDateTime":"Thursday December 29 2016","ob":{"timestamp":1483026780,"dateTimeISO":"2016-12-29T10:53:00-05:00","tempC":2.2,"tempF":36,"dewpointC":-2.2,"dewpointF":28,"humidity":73,"pressureMB":1013,"pressureIN":29.91,"spressureMB":1011,"spressureIN":29.85,"altimeterMB":1013,"altimeterIN":29.91,"windKTS":0,"windKPH":0,"windMPH":0,"windSpeedKTS":0,"windSpeedKPH":0,"windSpeedMPH":0,"windDirDEG":0,"windDir":"N","windGustKTS":null,"windGustKPH":null,"windGustMPH":null,"flightRule":"LIFR","visibilityKM":16.09344,"visibilityMI":10,"weather":"Cloudy","weatherShort":"Cloudy","weatherCoded":"::OV","weatherPrimary":"Cloudy","weatherPrimaryCoded":"::OV","cloudsCoded":"OV","icon":"cloudy.png","heatindexC":2,"heatindexF":36,"windchillC":2,"windchillF":36,"feelslikeC":2,"feelslikeF":36,"isDay":true,"sunrise":"7:12 am","sunriseISO":"2016-12-29T07:12:59-05:00","sunset":"4:21 pm","sunsetISO":"2016-12-29T16:21:42-05:00","snowDepthCM":null,"snowDepthIN":null,"precipMM":0,"precipIN":0,"solradWM2":null,"ceilingFT":3800,"ceilingM":1158.24,"light":65,"QC":"O","QCcode":10,"sky":100},"raw":"KOWD 291553Z 00000KT 10SM OVC038 02/M02 A2991 RMK AO2 PRESFR SLP130 T00221022","relativeTo":{"lat":42.0999702,"long":-71.3240758,"bearing":55,"bearingENG":"NE","distanceKM":15.949,"distanceMI":9.91}}'
	let forecastData = '{"success":true,"error":null,"response":[{"loc":{"long":-71.324,"lat":42.1},"interval":"day","periods":[{"timestamp":1483012800,"validTime":"2016-12-29T07:00:00-05:00","dateTimeISO":"2016-12-29T07:00:00-05:00","maxTempC":4,"maxTempF":39,"minTempC":0,"minTempF":32,"avgTempC":2,"avgTempF":36,"tempC":null,"tempF":null,"pop":100,"precipMM":20.33,"precipIN":0.8,"iceaccum":0,"maxHumidity":96,"minHumidity":45,"humidity":83,"uvi":1,"pressureMB":1009,"pressureIN":29.8,"sky":94,"snowCM":1.1,"snowIN":0.43,"feelslikeC":-3,"feelslikeF":27,"minFeelslikeC":-4,"minFeelslikeF":25,"maxFeelslikeC":0,"maxFeelslikeF":32,"avgFeelslikeC":-1,"avgFeelslikeF":30,"dewpointC":-7,"dewpointF":19,"maxDewpointC":3,"maxDewpointF":37,"minDewpointC":-7,"minDewpointF":19,"avgDewpointC":-1,"avgDewpointF":30,"windDirDEG":150,"windDir":"SSE","windDirMaxDEG":110,"windDirMax":"ESE","windDirMinDEG":130,"windDirMin":"SE","windGustKTS":20,"windGustKPH":37,"windGustMPH":23,"windSpeedKTS":6,"windSpeedKPH":11,"windSpeedMPH":7,"windSpeedMaxKTS":18,"windSpeedMaxKPH":33,"windSpeedMaxMPH":21,"windSpeedMinKTS":2,"windSpeedMinKPH":4,"windSpeedMinMPH":2,"windDir80mDEG":146,"windDir80m":"SE","windDirMax80mDEG":110,"windDirMax80m":"ESE","windDirMin80mDEG":130,"windDirMin80m":"SE","windGust80mKTS":22,"windGust80mKPH":41,"windGust80mMPH":26,"windSpeed80mKTS":16,"windSpeed80mKPH":29,"windSpeed80mMPH":18,"windSpeedMax80mKTS":22,"windSpeedMax80mKPH":41,"windSpeedMax80mMPH":26,"windSpeedMin80mKTS":9,"windSpeedMin80mKPH":17,"windSpeedMin80mMPH":11,"weather":"Mostly Cloudy with Light Wintry Mix","weatherCoded":[{"timestamp":1483030800,"wx":"L:L:S","dateTimeISO":"2016-12-29T12:00:00-05:00"},{"timestamp":1483034400,"wx":"D:L:R","dateTimeISO":"2016-12-29T13:00:00-05:00"},{"timestamp":1483041600,"wx":"D:L:R,PA::F","dateTimeISO":"2016-12-29T15:00:00-05:00"},{"timestamp":1483052400,"wx":"D:L:R,PA::F","dateTimeISO":"2016-12-29T18:00:00-05:00"}],"weatherPrimary":"Wintry Mix","weatherPrimaryCoded":"D:L:WM","cloudsCoded":"BK","icon":"wintrymix.png","isDay":true,"sunrise":1483013599,"sunriseISO":"2016-12-29T07:13:19-05:00","sunset":1483046546,"sunsetISO":"2016-12-29T16:22:26-05:00","dateTimeDay":"Thu","dateTimeDate":"Dec 29"},{"timestamp":1483099200,"validTime":"2016-12-30T07:00:00-05:00","dateTimeISO":"2016-12-30T07:00:00-05:00","maxTempC":4,"maxTempF":39,"minTempC":-7,"minTempF":19,"avgTempC":-1,"avgTempF":30,"tempC":null,"tempF":null,"pop":9,"precipMM":0,"precipIN":0,"iceaccum":0,"maxHumidity":81,"minHumidity":79,"humidity":60,"uvi":1,"pressureMB":999,"pressureIN":29.5,"sky":21,"snowCM":0,"snowIN":0,"feelslikeC":-6,"feelslikeF":21,"minFeelslikeC":-6,"minFeelslikeF":21,"maxFeelslikeC":-2,"maxFeelslikeF":28,"avgFeelslikeC":-4,"avgFeelslikeF":25,"dewpointC":-4,"dewpointF":25,"maxDewpointC":-4,"maxDewpointF":25,"minDewpointC":-7,"minDewpointF":19,"avgDewpointC":-5,"avgDewpointF":23,"windDirDEG":240,"windDir":"WSW","windDirMaxDEG":260,"windDirMax":"W","windDirMinDEG":240,"windDirMin":"WSW","windGustKTS":30,"windGustKPH":55,"windGustMPH":34,"windSpeedKTS":16,"windSpeedKPH":30,"windSpeedMPH":19,"windSpeedMaxKTS":19,"windSpeedMaxKPH":35,"windSpeedMaxMPH":22,"windSpeedMinKTS":9,"windSpeedMinKPH":17,"windSpeedMinMPH":10,"windDir80mDEG":253,"windDir80m":"WSW","windDirMax80mDEG":260,"windDirMax80m":"W","windDirMin80mDEG":240,"windDirMin80m":"WSW","windGust80mKTS":24,"windGust80mKPH":45,"windGust80mMPH":28,"windSpeed80mKTS":23,"windSpeed80mKPH":42,"windSpeed80mMPH":26,"windSpeedMax80mKTS":24,"windSpeedMax80mKPH":45,"windSpeedMax80mMPH":28,"windSpeedMin80mKTS":20,"windSpeedMin80mKPH":37,"windSpeedMin80mMPH":23,"weather":"Mostly Sunny","weatherCoded":[],"weatherPrimary":"Mostly Sunny","weatherPrimaryCoded":"::FW","cloudsCoded":"FW","icon":"pcloudy.png","isDay":true,"sunrise":1483100008,"sunriseISO":"2016-12-30T07:13:28-05:00","sunset":1483132994,"sunsetISO":"2016-12-30T16:23:14-05:00","dateTimeDay":"Fri","dateTimeDate":"Dec 30"},{"timestamp":1483185600,"validTime":"2016-12-31T07:00:00-05:00","dateTimeISO":"2016-12-31T07:00:00-05:00","maxTempC":2,"maxTempF":36,"minTempC":-1,"minTempF":30,"avgTempC":1,"avgTempF":34,"tempC":null,"tempF":null,"pop":9,"precipMM":1.3,"precipIN":0.05,"iceaccum":0,"maxHumidity":68,"minHumidity":52,"humidity":56,"uvi":1,"pressureMB":1020,"pressureIN":30.12,"sky":43,"snowCM":0,"snowIN":0,"feelslikeC":-11,"feelslikeF":12,"minFeelslikeC":-11,"minFeelslikeF":12,"maxFeelslikeC":-2,"maxFeelslikeF":28,"avgFeelslikeC":-5,"avgFeelslikeF":23,"dewpointC":-11,"dewpointF":12,"maxDewpointC":-6,"maxDewpointF":21,"minDewpointC":-11,"minDewpointF":12,"avgDewpointC":-8,"avgDewpointF":18,"windDirDEG":280,"windDir":"W","windDirMaxDEG":200,"windDirMax":"SSW","windDirMinDEG":200,"windDirMin":"SSW","windGustKTS":13,"windGustKPH":25,"windGustMPH":15,"windSpeedKTS":8,"windSpeedKPH":15,"windSpeedMPH":9,"windSpeedMaxKTS":10,"windSpeedMaxKPH":18,"windSpeedMaxMPH":11,"windSpeedMinKTS":8,"windSpeedMinKPH":15,"windSpeedMinMPH":9,"windDir80mDEG":281,"windDir80m":"W","windDirMax80mDEG":200,"windDirMax80m":"SSW","windDirMin80mDEG":200,"windDirMin80m":"SSW","windGust80mKTS":19,"windGust80mKPH":35,"windGust80mMPH":22,"windSpeed80mKTS":15,"windSpeed80mKPH":27,"windSpeed80mMPH":17,"windSpeedMax80mKTS":19,"windSpeedMax80mKPH":35,"windSpeedMax80mMPH":22,"windSpeedMin80mKTS":12,"windSpeedMin80mKPH":22,"windSpeedMin80mMPH":14,"weather":"Partly Cloudy","weatherCoded":[],"weatherPrimary":"Partly Cloudy","weatherPrimaryCoded":"::SC","cloudsCoded":"SC","icon":"pcloudy.png","isDay":true,"sunrise":1483186414,"sunriseISO":"2016-12-31T07:13:34-05:00","sunset":1483219444,"sunsetISO":"2016-12-31T16:24:04-05:00","dateTimeDay":"Sat","dateTimeDate":"Dec 31"},{"timestamp":1483272000,"validTime":"2017-01-01T07:00:00-05:00","dateTimeISO":"2017-01-01T07:00:00-05:00","maxTempC":6,"maxTempF":43,"minTempC":-4,"minTempF":25,"avgTempC":1,"avgTempF":34,"tempC":null,"tempF":null,"pop":9,"precipMM":0.24,"precipIN":0.01,"iceaccum":null,"maxHumidity":96,"minHumidity":50,"humidity":69,"uvi":1,"pressureMB":1024,"pressureIN":30.24,"sky":26,"snowIN":null,"snowCM":null,"feelslikeC":-6,"feelslikeF":21,"minFeelslikeC":-6,"minFeelslikeF":21,"maxFeelslikeC":1,"maxFeelslikeF":34,"avgFeelslikeC":-2,"avgFeelslikeF":28,"dewpointC":-2,"dewpointF":28,"maxDewpointC":-2,"maxDewpointF":28,"minDewpointC":-5,"minDewpointF":23,"avgDewpointC":-3,"avgDewpointF":27,"windDirDEG":240,"windDir":"WSW","windDirMaxDEG":240,"windDirMax":"WSW","windDirMinDEG":290,"windDirMin":"WNW","windGustKTS":10,"windGustKPH":19,"windGustMPH":12,"windSpeedKTS":9,"windSpeedKPH":16,"windSpeedMPH":10,"windSpeedMaxKTS":10,"windSpeedMaxKPH":18,"windSpeedMaxMPH":11,"windSpeedMinKTS":4,"windSpeedMinKPH":8,"windSpeedMinMPH":5,"windDir80mDEG":245,"windDir80m":"WSW","windDirMax80mDEG":240,"windDirMax80m":"WSW","windDirMin80mDEG":290,"windDirMin80m":"WNW","windGust80mKTS":21,"windGust80mKPH":39,"windGust80mMPH":24,"windSpeed80mKTS":15,"windSpeed80mKPH":27,"windSpeed80mMPH":17,"windSpeedMax80mKTS":21,"windSpeedMax80mKPH":39,"windSpeedMax80mMPH":24,"windSpeedMin80mKTS":12,"windSpeedMin80mKPH":22,"windSpeedMin80mMPH":14,"weather":"Mostly Sunny","weatherCoded":[],"weatherPrimary":"Mostly Sunny","weatherPrimaryCoded":"::FW","cloudsCoded":"FW","icon":"pcloudy.png","isDay":true,"sunrise":1483272819,"sunriseISO":"2017-01-01T07:13:39-05:00","sunset":1483305896,"sunsetISO":"2017-01-01T16:24:56-05:00","dateTimeDay":"Sun","dateTimeDate":"Jan 01"},{"timestamp":1483358400,"validTime":"2017-01-02T07:00:00-05:00","dateTimeISO":"2017-01-02T07:00:00-05:00","maxTempC":3,"maxTempF":37,"minTempC":0,"minTempF":32,"avgTempC":2,"avgTempF":36,"tempC":null,"tempF":null,"pop":9,"precipMM":0.58,"precipIN":0.02,"iceaccum":null,"maxHumidity":81,"minHumidity":55,"humidity":76,"uvi":0,"pressureMB":1036,"pressureIN":30.59,"sky":57,"snowIN":null,"snowCM":null,"feelslikeC":-6,"feelslikeF":21,"minFeelslikeC":-6,"minFeelslikeF":21,"maxFeelslikeC":0,"maxFeelslikeF":32,"avgFeelslikeC":-2,"avgFeelslikeF":28,"dewpointC":-6,"dewpointF":21,"maxDewpointC":-2,"maxDewpointF":28,"minDewpointC":-6,"minDewpointF":21,"avgDewpointC":-3,"avgDewpointF":27,"windDirDEG":70,"windDir":"ENE","windDirMaxDEG":70,"windDirMax":"ENE","windDirMinDEG":70,"windDirMin":"ENE","windGustKTS":5,"windGustKPH":9,"windGustMPH":6,"windSpeedKTS":4,"windSpeedKPH":8,"windSpeedMPH":5,"windSpeedMaxKTS":7,"windSpeedMaxKPH":12,"windSpeedMaxMPH":8,"windSpeedMinKTS":4,"windSpeedMinKPH":8,"windSpeedMinMPH":5,"windDir80mDEG":17,"windDir80m":"NNE","windDirMax80mDEG":70,"windDirMax80m":"ENE","windDirMin80mDEG":70,"windDirMin80m":"ENE","windGust80mKTS":11,"windGust80mKPH":20,"windGust80mMPH":13,"windSpeed80mKTS":7,"windSpeed80mKPH":14,"windSpeed80mMPH":9,"windSpeedMax80mKTS":11,"windSpeedMax80mKPH":20,"windSpeedMax80mMPH":13,"windSpeedMin80mKTS":5,"windSpeedMin80mKPH":9,"windSpeedMin80mMPH":6,"weather":"Partly Cloudy","weatherCoded":[],"weatherPrimary":"Partly Cloudy","weatherPrimaryCoded":"::SC","cloudsCoded":"SC","icon":"pcloudy.png","isDay":true,"sunrise":1483359221,"sunriseISO":"2017-01-02T07:13:41-05:00","sunset":1483392350,"sunsetISO":"2017-01-02T16:25:50-05:00","dateTimeDay":"Mon","dateTimeDate":"Jan 02"}],"profile":{"tz":"America/New_York"}}]}'

	var client_id = 'hgB6Ymghe9qKajnVt0ej4'
	var client_secret = 'tqiHZkvjWwkyhSIakrqae1cOLmr1ghJ6XLYXkTnk'

class App extends React.Component {
  constructor(props){
  	

	currentData = {}
	forecastData = {}

  	super(props)
  	this.state = {
  		currentData: currentData,
  		forecastData: forecastData
  	}
  	this.getWeatherData = this.getWeatherData.bind(this)
  	this.getForecastData = this.getForecastData.bind(this)
  }
  render () {
    return (
    	<div>
  		<li id="current" className="panel"><Current data={this.state.currentData}/></li>
  		<li id="forecast" className="panel"><Forecast data={this.state.forecastData}/></li>
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
          url = 'https://api.aerisapi.com/observations/closest?p=' + lat + ',' + lng + '&client_id=' + client_id + '&client_secret=' + client_secret + '&limit=1';
      $.ajax(
      {
          dtatType: 'json',
          url: url,
          success: function(data)
          {
              data.response[0].ob.sunrise = moment.unix(data.response[0].ob.sunrise).format('h:m a');
              data.response[0].ob.sunset = moment.unix(data.response[0].ob.sunset).format('h:m a');
              data.response[0].obDateTime = moment(data.response[0].obDateTime).format('dddd MMMM DD YYYY');
              //console.log(JSON.stringify(data.response[0]))
              //buildCurrent(data.response[0])
              that.setState((a, b)=>{
              	a.currentData = data.response[0]
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
          url = 'https://api.aerisapi.com/forecasts/closest?p=' + lat + ',' + lng + '&client_id=' + client_id + '&client_secret=' + client_secret + '&filter=day&limit=5';
      $.ajax(
      {
          dataType: 'json',
          url: url,
          success: function(data)
          {
              var x = data.response[0].periods.map(function(p, idx)
              {
                  p.dateTimeDay = moment(p.dateTimeISO).format('ddd');
                  p.dateTimeDate = moment(p.dateTimeISO).format('MMM DD');
              });
              that.setState((a, b)=>{
              	a.forecastData = data
              })
          }
      });
  }

  componentDidMount(){
  	navigator.geolocation.getCurrentPosition((position)=>
  	{
  	    //console.log(position.coords)
  	    this.getWeatherData(position.coords);
  	    this.getForecastData(position.coords);
  	}, function(e)
  	{
  	    alert('Error getting geolocation position: ' + e.message)
  	},
  	{
  	    enableHighAccuracy: true,
  	    timeout: 10000,
  	    maximumAge: 60000
  	});
  	
  }

  componentWillUnmount(){}
  
}

render(<App/>, document.getElementById('panelsContainer'));