import { useState } from 'react';
import './App.css';


function App() {

    const [check, setCheck] = useState(false)
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
                text: text,
                done: check
            },
            ...todos
        ])
       
    }

    function handlerCheck() {
        setCheck(!check)
    }

    const tooot = (e) => {
        if(e.key == "Enter"){
            handlerBtn(e)
        }
    }



  return (
    <>
    <div>
        <div>
            <input type="text" value={text} onKeyDown={tooot} onChange={handlerChange} />
            <button onClick={handlerBtn}>
                add
            </button>
            <input id='box' type="checkbox" checked={check} onChange={handlerCheck} />
        </div>
    </div>

    <div>
        {todos.map(item => {
            return(
                <li>
                    {item.text}
                   
                    <input type="checkbox" checked={item.done}  />
                </li>
            )
        })}

    </div>
    </>
    
  );
}

export default App;
