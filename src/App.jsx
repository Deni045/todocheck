import { useState } from 'react';
import './App.css';


function App() {

    const [todos, setTodos] = useState([
        {
            text: 'HTML',
           done: true
        },
        {
            text: 'JS',
            done: false
        },
        {
            text: 'React',
           done: true 
        },
    ])

    function handlerChange(e) {
        setText(e.target.value)
    }

    const [text, setText] = useState('')

    function handlerBtn(e) {
        setTodos([
            {
                text: text
            },
            ...todos
        ])
       
    }



    const [check, setCheck] = useState(true)

    function handlerCheck() {
        setCheck(!check)
    }

    const [done, setDone] = useState(false)   

    function handlerDone( ) {
        if(check.checked)
        setDone(true)
    }

  return (
    <>
    <div>
        <div>
            <input type="text" value={text} onChange={handlerChange} />
            <button onClick={handlerBtn}>
                add
            </button>
            <input id='box' type="checkbox" checked={check} onChange={handlerCheck}  />
        </div>
    </div>

    <div>
        {todos.map(item => {
            return(
                <li>
                    {item.text}
                   
                    <input type="checkbox" checked={done}  onChange={handlerDone} />
                </li>
            )
        })}

    </div>
    </>
    
  );
}

export default App;
