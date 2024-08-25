const PlayButton = () => {
  return (
    <div>
      <PlayIcon onClick={() => { console.log('click :>> '); }} className='play-icon' />
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="31.5" cy="31.5" r="30" fill="white" stroke="white" stroke-width="3" />
        <path d="M40 29.7679C41.3333 30.5377 41.3333 32.4623 40 33.2321L28.75 39.7272C27.4167 40.497 25.75 39.5348 25.75 37.9952L25.75 25.0048C25.75 23.4652 27.4167 22.503 28.75 23.2728L40 29.7679Z" fill="#614D98" />
      </svg>

    </div>
  )
}
