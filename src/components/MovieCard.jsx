import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MovieCard(movie) {
  const movieImage = "http://localhost:3000/movies_cover/"+movie.image
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movieImage} />
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