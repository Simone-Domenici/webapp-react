import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import axios from 'axios';


export default function FormReview({ movieId, onReviewAdded }) {
    const [formData, setFormData] = useState({
        name: '',
        text: '',
        vote: ''
    });

    const onFormChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/api/movies/${movieId}/reviews`, {
                movieId,
                name: formData.name,
                text: formData.text,
                vote: formData.vote
            });
            console.log('Review submitted:', response.data);
            onReviewAdded(response.data)

            setFormData({ name: '', text: '', vote: '' });
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    return (
        <div className='container my-5'>
            <h3>Posta una Recensione</h3>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="name">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Inserisci il tuo nome"
                            value={formData.name}
                            onChange={onFormChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="text">
                        <Form.Label>Recensione</Form.Label>
                        <Form.Control
                            type="textarea"
                            placeholder="Inserisci la tua recensione"
                            value={formData.text}
                            onChange={onFormChange}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="vote">
                        <Form.Label>Voto</Form.Label>
                        <Form.Select
                            required
                            value={formData.vote}
                            onChange={onFormChange}
                        >
                            <option value="">Scegli...</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    );
}