import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import SingleBookElement from './SingleBooks';

import romanceBooks from '../jsonbooks/romance.json'


const AllTheBooksElement = () => {
    return (
        <Container>
            <Row xs={1} md={2} lg={4} className="g-4">
                {romanceBooks.map((book) => {
                    return (
                        <Col key={book.asin}>
                            <SingleBookElement book={book} />
                           
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default AllTheBooksElement;