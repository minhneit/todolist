import { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addList } from '~/redux/actions/listAction';

function TodoListForm() {
    const [list, setList] = useState('');
    const dispatch = useDispatch();

    console.log(list);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addList(list));
        setList('');
    };
    return (
        <Form className="mx-2 my-2" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                    <Col md={9} xs={9}>
                        <Form.Control
                            type="text"
                            placeholder="Enter your todo"
                            required
                            value={list}
                            onChange={(e) => setList(e.target.value)}
                        />
                    </Col>
                    <Col md={3} xs={3}>
                        <Button className="px-3" type="submit">
                            Add
                        </Button>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    );
}

export default TodoListForm;
