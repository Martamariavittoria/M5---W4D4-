import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import romance from '../data/romance.json'
import SingleBooks from './SingleBooks'
import CommentArea from './CommentArea'

const AllTheBooks = ({ searchQuery }) => {
  const [selectedBook, setSelectedBook] = useState(null)

  const filteredBooks = romance.filter((book) =>
    book.title.toLowerCase().includes((searchQuery || '').toLowerCase())
  )
  

  return (
    <Row>
      <Col md={8}>
        <Row className="g-2 mt-3">
          {filteredBooks.map((book) => (
            <Col xs={12} md={4} key={book.asin}>
              <SingleBooks
                book={book}
                selected={selectedBook}
                setSelected={setSelectedBook}
              />
            </Col>
          ))}
        </Row>
      </Col>
      <Col md={4}>
        <CommentArea asin={selectedBook} />
      </Col>
    </Row>
  )
}

export default AllTheBooks
