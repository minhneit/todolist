import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Message from './Messsage';
import { deleteList, listItemComplete, listItemUnComplete } from '~/redux/actions/listAction';

function TodoListItem() {
    const data = useSelector((state) => state.todoItems);
    const { todoList, repeat } = data;
    console.log(todoList);
    const dispatch = useDispatch();

    const handleDelete = (name) => {
        dispatch(deleteList(name));
    };

    const handleItemComplete = (name) => {
        dispatch(listItemComplete(name));
    };

    const handleItemUnComplete = (name) => {
        dispatch(listItemUnComplete(name));
    };

    if (todoList.length > 0) {
        return (
            <>
                {repeat && <Message variant={'danger'}>This note already add, please choose another </Message>}
                <ListGroup>
                    {todoList.map((item, index) => (
                        <ListGroup.Item key={index} variant={item.complete ? 'success' : 'primary'}>
                            <Row>
                                <Col md={8} xs={8}>
                                    - {item.name}
                                </Col>
                                <Col md={2} xs={2}>
                                    {item.complete === true ? (
                                        <Button variant="success" onClick={() => handleItemUnComplete(item.name)}>
                                            <i className="fa-solid fa-check"></i>
                                        </Button>
                                    ) : (
                                        <Button variant="secondary" onClick={() => handleItemComplete(item.name)}>
                                            <i className="fa-solid fa-eraser"></i>
                                        </Button>
                                    )}
                                </Col>
                                <Col md={2} xs={2}>
                                    <Button variant="danger" onClick={() => handleDelete(item.name)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </>
        );
    } else {
        return (
            <ListGroup>
                <ListGroup.Item className="text-center">Nothing To Do</ListGroup.Item>
            </ListGroup>
        );
    }
}

export default TodoListItem;
