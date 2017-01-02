import React, { Component } from 'react';

const Navigation = () =>{
	return(
		<div>
			<nav role="navigation">
				<span className="button current">
					<a>Now</a>
				</span>
				<span className="button forecast">
					<a>5 Day</a>
				</span>
			</nav>

			<div id="navTracker"></div>
		</div>		
	)
}

export default Navigation


