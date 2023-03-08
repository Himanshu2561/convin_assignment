import React from 'react'

const VideoModal = ({ videoLink, setShowModal, setVideoLink }) => {
  return (
    <div className='flex justify-center items-center my-10 text-center'>
      <div>
        <iframe
          src={videoLink}
          width='560'
          height='315'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
        <div
          className='text-white bg-blue-400 my-5 py-1 px-3 rounded-lg cursor-pointer'
          onClick={() => {
            setShowModal(false)
            setVideoLink('')
          }}
        >
          <button>Close Video</button>
        </div>
      </div>
    </div>
  )
}

export default VideoModal
