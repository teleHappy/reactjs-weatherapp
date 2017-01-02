import React, { Conmponent } from 'react';

class Loader extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
	    	<div id="loader" className="panel loader" style={{display: (this.props.isLoading)? "block" : "none"}}>	    	
		    	<div className="icon thunder-storm">
		    	  <div className="lightning">
		    	    <div className="bolt"></div>
		    	    <div className="bolt"></div>
		    	  </div>
		    	</div>
	    	</div>
		)
	}
} 

export default Loader