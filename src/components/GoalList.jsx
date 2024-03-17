import { useState } from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
align-items: end;
gap: 24px;
padding: 32px;
`;

const LiElement = styled.li`
cursor: pointer;   /* mouse imleci tıklama şeklini alması için */
list-style-type: disc;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Btn = styled.button`
justify-content: space-between;
  background: #BF4F74;
  border-radius: 5px;
  border: none;
  color: white;
  padding: 7px 20px;
`;


export function GoalList() {

    const [todoInput, setTodoInput] = useState("");
    const [todos, setTodos] = useState(['Videoları izlemek', 'Proje yapmak']);

    return (
        <div>
            <Wrapper>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Title>2024 Yılı Hedeflerim</Title>
                        <Form.Control
                            /* Input’umuzun “value” kısmını “todoInput” state’inden çekelim */
                            value={todoInput}
                            /* input’umuzun “onChange” metoduna bu state’in setTodoInput fonksiyonunu 
                               input değiştikçe çalışacak şekilde koyalım  */
                            onChange={(e) => { //inputtan gelen e değerini setTodoInput ile işledik.
                                setTodoInput(e.target.value);
                            }}
                            /* Bizim inputa girdiğimiz herhangi bir değer setTodoInput 
                            fonksiyonuyla todoInput' a gelecek  
                            Bu kod inputun içine yazılmalıdır!!! */
                            type="text"
                        />
                    </Form.Group>
                </Form>
                <Btn   /* Yeni bir fonksiyon oluşturalım. İsmi “addTodo” olsun
                Bu fonksiyonu Ekle butonumuza tıklandığı zaman çalışacak şekilde ayarlayalım
                Fonksiyonumuz çalıştığı zaman “todos” state’imizdeki array’e, “todoInput"state’indeki değeri ekleyelim */
                    onClick={(addTodo) => {
                        if (todoInput.trim() === "") {
                            alert("Boş hedef ekleyemezsiniz");
                        } else if (todos.includes(todoInput)) {
                            alert("Listede zaten var");
                        } else {
                            setTodos([...todos, todoInput]);
                            setTodoInput(""); 
                        }
                        /* addTodo fonksiyonunun içerisinde setTodoInput fonksiyon çağrımını ekleyip boş
                        string (””) alacak şekilde ayarlamalıyız. Bu sayede input’umuzun bağlı olduğu state’i temizleyeceğiz */
                    }}
                    /* variant='success' */>
                    Ekle</Btn>
            </Wrapper>
            <ul>
                {todos.map((todo, index) => (     /* // Listenin içindeki “li” elementlerini, todos array’inden “map” edelim. Key vermek gerekiyor */
                    <LiElement onClick={() => {
                        setTodos((oldValues) => {
                            return oldValues.filter((oldTodo) => oldTodo !== todo);
                        });  /* Liste elemanlarına onClick vereceğiz. Listedeki 
                        herhangi bir hedefin üstüne tıklayınca o hedefi todos state’inden kaldırmış olacağız. */
                    }}
                        key={index}>{todo}
                    </LiElement>
                ))}
            </ul>
        </div>
    );
};