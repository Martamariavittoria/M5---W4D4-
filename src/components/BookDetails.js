import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from './CommentArea'
import romance from '../data/romance.json'

const DettagliLibro = () => {
  const { asin: idLibro } = useParams()
  const libroTrovato = romance.find((libro) => libro.asin === idLibro)

  if (!libroTrovato) return <div>Libro non trovato</div>

  return (
    <Row className="justify-content-center my-4">
      <Col md={10}>
        {/* Sezione superiore: immagine e dettagli affiancati */}
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={libroTrovato.img} alt={libroTrovato.title} />
            </Card>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title style={{ color: 'black' }}>
                  {libroTrovato.title}
                </Card.Title>
                <Card.Text>
                  {libroTrovato.description || 'Nessuna descrizione disponinibile'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Sezione commenti */}
        <Row className="mt-4">
          <Col>
            <CommentArea asin={idLibro} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default DettagliLibro
