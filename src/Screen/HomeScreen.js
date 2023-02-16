import { Card } from 'react-bootstrap';

import TodoListForm from '~/components/TodoListForm';
import TodoListItem from '~/components/TodoListItem';

function HomeScreen() {
    return (
        <div>
            <h2 className="text-center text-warning">Todo List</h2>

            <Card>
                <Card.Header className="text-center">A to do using React and Redux</Card.Header>
                <TodoListForm />
            </Card>

            <h2 className="text-center my-5 text-warning">Your Todo List</h2>
            <TodoListItem />
        </div>
    );
}

export default HomeScreen;
