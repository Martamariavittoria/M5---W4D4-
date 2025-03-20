import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!asin) return

    const fetchComments = async () => {
      setLoading(true)
      setError(false)
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
          {
            headers: {
              Authorization: 'Bearer inserisci-qui-il-tuo-token',
            },
          }
        )
        if (response.ok) {
          const data = await response.json()
          setComments(data)
        } else {
          console.error('Errore nel recupero dei commenti')
          setError(true)
        }
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchComments()
  }, [asin])

  return (
    <div className="text-center">
      {loading && <Loading />}
      {error && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea
