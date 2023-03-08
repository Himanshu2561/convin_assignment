import React from 'react'

const VideoModal = ({ videoLink, setVideoLink, showModal, setShowModal }) => {
  return (
    <div>
      <iframe
        src={videoLink}
        width='560'
        height='315'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      />
    </div>
  )
}

export default VideoModal
