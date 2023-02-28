// Write your code here.

const ThumbnailItem = props => {
  const {pic, singleImage} = props
  const {id, imageUrl, thumbnailUrl} = pic

  const selectItem = () => {
    singleImage(imageUrl)
  }

  return (
    <li key={id} onClick={selectItem}>
      <button type="button">
        <img src={thumbnailUrl} alt="thumbnailAltText" />
      </button>
    </li>
  )
}

export default ThumbnailItem
