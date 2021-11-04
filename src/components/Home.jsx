import React from 'react'
import "./home.css";
const Home = () => {
    return (
        <>
        <div className="container">
            <h1 className="title">Bienvenid@! </h1>
            <h3 className="subtitle">A continuación te explicaremos algunas de las funcionalidades que podrás encontrar en nuestra web: </h3>
            <img src="http://i.imgur.com/jhgZ9M2.gif" alt="gif calculadora" />
            <p className="text">Para empezar, a través de los botones de la navegación puedes acceder a cada sección, en la que seguro encuentras lo que estabas buscando... </p>
            <p className="text">En el apartado de <span className="key_word">reloj</span>  podrás ver la hora actual, para que nunca llegues tarde a esa entrevista que puede cambiarte la vida, o a la cita con la que puede ser la persona de tus sueños. </p>
            <img src="https://i.pinimg.com/originals/59/c9/12/59c912db216ac16ba61c31fb3bd95325.gif" alt="facepalm gif" />
            <p className="text">En la sección de <span className="key_word">fecha</span>  puedes añadir tu cumpleaños o el de algún familiar y/o amig@ y comprobar cuanto tiempo queda para la fecha. Si eres de memoria a corto plazo, te vendrá genial! </p>
            <img src="https://i.pinimg.com/originals/3a/07/82/3a0782e34cd00d03ed616e58ff5ad04d.gif" alt="birthday" />
            <p className="text"> Por último, tienes un <span className="key_word">cronómetro</span>  que te puede ser de gran utilidad para superarte a ti mismo en los retos que te propongas!</p>
            <img src="https://c.tenor.com/f0T6gz4od8cAAAAC/apmtv3-elchiringuitodejugones.gif" alt="Pedrerol Tic Tac" />
        </div>
        </>
    )
}

export default Home
