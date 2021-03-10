
const Counter = ({ initial, plus, biggest, minus }) => (
    
     <section  style={{border: biggest ? "2px solid green" : null}}>
            <p>{initial}</p>
            <button class="btn btn-primary m-2" onClick={plus}>+</button>
            <button class="btn btn-primary m-2" onClick={minus}>-</button>
        </section>
       
)
    export default Counter;