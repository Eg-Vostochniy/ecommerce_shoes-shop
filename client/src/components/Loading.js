export const Loading = () => {
  return (
    <div class='svg-loader'>
      <svg class='svg-container' height='100' width='100' viewBox='0 0 100 100'>
        <circle className='loader-svg bg' cx='50' cy='50' r='45'></circle>
        <circle className='loader-svg animate' cx='50' cy='50' r='45'></circle>
      </svg>
    </div>
  )
}
