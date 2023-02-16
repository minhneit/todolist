import { Container, Col, Row } from 'react-bootstrap';

function FormContainer({ children }) {
    return (
        <Container className="bg-success py-5 rounded-2">
            <Row className="justify-content-md-center row">
                <Col sx={12} md={9}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
}

export default FormContainer;
