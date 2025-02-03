import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
const header = ()=>{
    return(
        <Container>
            <Row>
                <Col lg={12} className='text-center'>
                    Login
                </Col>
            </Row>
        </Container>
    )
}
export default header;