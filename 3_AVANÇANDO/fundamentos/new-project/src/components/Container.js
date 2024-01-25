

const Container = ({ children,myValue }) => {
    return (
        <div>
            <h2>Este é o titulo do Container</h2>
            {children}
            <h4>meu valor é:{myValue}</h4>
        </div>
    );
}; 

export default Container