import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleBook = ({ setSelected, selected, book }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => setSelected(book.asin)} // Seleziona il libro cliccando sulla card
      style={{
        border: selected === book.asin ? '3px solid red' : 'none',
      }}
      data-testid="book-card"
    >
      <Card.Img
        variant="top"
        src={book.img}
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
        <Card.Text>€ {book.price}</Card.Text>
        <Button
          className="w-100 mt-2"
          onClick={(e) => navigate(`/details/${book.asin}`)} // Navigazione ai dettagli
        >
          VAI AI DETTAGLI
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
