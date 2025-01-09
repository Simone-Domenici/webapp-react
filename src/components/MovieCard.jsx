import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MovieCard(movie) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
            {movie.abstract}
        </Card.Text>
        <Link to={`/${movie.id}`}><Button variant="primary">See More</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;