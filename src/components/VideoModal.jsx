import React from 'react'

const VideoModal = ({ videoLink, setVideoLink, setShowModal }) => {
  return (
    <div className='fixed inset-0 w-screen h-screen z-10'>
      <div className='fixed inset-0 w-screen h-screen bg-[rgba(49,49,49,0.8)]'>
        <div className='absolute top-[50%] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[600px]'>
          <iframe
            src={videoLink}
            width='100%'
            height='315'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          />
          <div
            className='text-white bg-blue-400 my-5 py-1 px-3 rounded-lg text-center cursor-pointer'
            onClick={() => {
              setShowModal(false)
              setVideoLink('')
            }}
          >
            <button>Close Video</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoModal
