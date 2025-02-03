import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './header/header';
function App() {
  return (

    <div>
      <Header/>
      <Container>
        <Row className='row_1'>
          <Col sm={3} style={{border: '1px solid red'}}>
            Column1
          </Col>
          <Col sm={3}>
            Column2
          </Col>
          <Col sm={3}>
            Column3
          </Col>
          <Col sm={4}>
            Column4
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
