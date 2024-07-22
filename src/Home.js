import { useState } from "react";


const Home = () => {

    const [name, setName] = useState('sujana');
    const handleClick = () => {
        setName('sushi');
    }

    return (  
        <div className="Home">
            <h1>Homepage</h1>
            <p>Hi {name}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;