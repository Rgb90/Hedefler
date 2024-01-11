import { useState } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export function GoalList() {

    const [todoInput, setTodoInput] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <>
            <Container className='py-5'>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            {todo.text}</li>)
                    )}
                </ul>

                <Form>
                    <Row>
                        <Form.Group className="mb-3" controlId="formText">
                            <Form.Label>Hedef</Form.Label>
                            <Col xs={6}>
                                <Form.Control className='d-flex' value={todoInput} onChange={setTodoInput} name="text" type="text" /> </Col>
                            <Button onClick={addTodo} type="submit">Ekle</Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Container >
        </>
    );
};

const addTodo = () => {
    return (
    <React.Fragment>
 {todos.map((todo, index) => {
      <li key={todo.text}>
        <input type="text" name="name" value={index.text} />
      </li>
    })}
    </React.Fragment>
)}

/*  {
    setTodos(oldTodos => [...oldTodos, `index ${oldTodos.length}`]);
};

return [
    <input type="button" onClick={addTodo} value="Add" />,
    <ul>{todos.map(index =>
      <li>{index}</li>
    )}
    </ul>
]; */