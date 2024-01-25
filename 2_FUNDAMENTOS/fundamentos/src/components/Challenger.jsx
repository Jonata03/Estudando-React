const Challenger = () => {
    const somado = (a,b) =>{
        return console.log(a+b);
    };
    return (
        <div>
            <button onClick={somado(10,10)}>somar</button>
        </div>
    );
};
export default Challenger;