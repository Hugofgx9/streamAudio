import React from 'react';


const DesktopHomePage = (props) => {
	const { ImageSrc, ItemTitle } = props;
	return (
			<div>
				<div>
				
					<img src = '{ImageSrc}' ></img>
				</div>
				<span>
					{ItemTitle}
				</span>
			</div>
	);
}

export default DesktopHomePage;