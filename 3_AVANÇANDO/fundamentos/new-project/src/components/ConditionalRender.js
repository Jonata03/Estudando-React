import { useState } from "react"
//sintaxe avançade de condiçao: condiçao ? bloco1 : bloco2 

const ConditionalRender = () => {
    const[x] = useState(false);

    const [name, setName] = useState("mateus")
    //o "name" é o nome da varivel, e o setName é pra ele ser trado como uma funçao 
    return (
        <div>
            <h1>Isso sera exibido</h1>
            {x && <p>se x for true</p>} 
            {!x && <p>se x for False</p>} 
            {<h1>If ternário</h1>}
            {name === "joao"? (
                <div>
                    <p>É o joao</p>
                </div>
            ) : (
                <div>
                    <p>nome nao encontrado</p>
                </div>
            )}
            <button onClick={() => setName("joao")}>clique Aqui!</button>
        </div>
    )
}

export default ConditionalRender