import { useState } from "react"

function Check() {

    const [check, setCheck] = useState(true)

    function handlerCheck() {
        setCheck(!check)
    }

    return(
         <input type="checkbox" checked={Check} onChange={handlerCheck} />
    )
}

export default Check