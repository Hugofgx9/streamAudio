import React from 'react';
//import PropTypes from 'prop-types';
import styles from '@pages/PagesStyle/DesktopAlbumPage.module.scss';
import AlbumPageSingleTitle from '@components/AlbumPageSingleTitle';

let albumTrackList = [
{title: 'Premier', artist: 'Hupsylon'},
{title: 'Deuxieme', artist: 'Hupsylon'},
{title: 'Troisieme', artist: 'Hupsylon'},
{title: 'Quatrieme', artist: 'Hupsylon'},
{title: 'Cinquieme', artist: 'Hupsylon'},
{title: 'Sixieme', artist: 'Hupsylon'},
{title: 'Septieme', artist: 'Hupsylon'},
];

const AlbumPageDesktop = (props) => {
	//const { color } = props;
	return (
			<div className={ styles.albumPage }>
				<img src=""/>
				<div>
				 <h2 className={ styles.title }>Mania</h2>
				 <h3 className={ styles.title2}>Fall out Boy</h3>
				 <div className= { styles.genreAndDate }>
				 	<h3 className={ [styles.corps ].join(' ') }>Alternative</h3>
				 	<span> - </span>
				 	<h3 className={ [styles.corps ].join(' ') }>2018</h3>
				 </div>
				</div>
				<div className= { [styles.title3, styles.headerMenu].join(' ') } >
					<span>Morceau</span>
					<span>Artiste</span>
					<span>Durée</span>
				</div>
				<ul>
				{albumTrackList.map((track, index) => {
					return (
						<li key={index}>
							<AlbumPageSingleTitle 	 
								nb={index} 
								title={track.title} 
								artist={track.artist} 
							/>
						</li>
					)
				})}
					
				</ul>
			</div>
	);
}

export default AlbumPageDesktop;