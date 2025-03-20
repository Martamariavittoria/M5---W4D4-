import { useState } from 'react'

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Logica per inviare il commento
    console.log(`Submitting comment for ${asin}: ${comment}`)
    setComment('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add your comment"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddComment
