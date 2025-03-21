import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  const handleRemove = async () => {
    // Conferma prima di eliminare il commento
    const confirmDelete = window.confirm(
      'Sei sicuro di voler eliminare questo commento?'
    )
    if (!confirmDelete) return

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer inserisci-qui-il-tuo-token',
          },
        }
      )
      if (response.ok) {
        alert('Commento eliminato correttamente!')
      } else {
        throw new Error('Errore nell\'eliminazione del commento!')
      }
    } catch (error) {
      console.error(error)
      alert(`Si è verificato un errore: ${error.message}`)
    }
  }

  return (
    <ListGroup.Item data-testid="single-comment">
      <div className="d-flex justify-content-between align-items-center">
        <span>{comment.comment}</span>
        <Button variant="danger" onClick={handleRemove}>
          Elimina
        </Button>
      </div>
    </ListGroup.Item>
  )
}

export default SingleComment
