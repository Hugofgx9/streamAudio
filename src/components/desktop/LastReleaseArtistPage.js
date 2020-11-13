import React from 'react';
import styles from '@components/desktop/style/LastReleaseArtistPage.module.scss';
import clsx from 'clsx'

const LastReleaseArtistPage = (props) => {
	const { artist, name, img } = props;

	return (
			<div className = {styles.LastReleaseArtistPage} >

					<h2 className = {clsx(styles.title2, styles.LastRelease)}>
							Dernière sortie
					</h2>

					<img className = {styles.CoverLastRelease} 
					src={img} alt=""/>
					
					<span className = {clsx(styles.corpsTitle, styles.TitleLastRelease)}>
						{name}
					</span>
					<div className = {styles.ArtistLastRelease}>
						{artist}
					</div>					
					<div className = {clsx(styles.corps, styles.DateLengthLastRelease)}>
						date - nombre de titres, durée
					</div>					
						
			</div>
	);
}

export default LastReleaseArtistPage;