import React from 'react';
import PropTypes from 'prop-types';
import "./youtubeembed.css";
import Draggable from 'react-draggable';


const YoutubeEmbed = ({ embedId }) => (
  <Draggable>
  <div className='video-responsive'>
  <input type="text" placeholder='Entrez une chaine YouTube...'/>
      <iframe
        width='853'
        height='480'
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  </Draggable>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;