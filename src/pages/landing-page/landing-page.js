import './styles.css'
import Navbar from './Navbar'
import img from '../../assets/image-inicio.png'


function LandingPage() {
  return (
    <div id='main'>
      <Navbar/>
        <div className='name'>
            <h1><span>Controle seu gasto pessoal online</span></h1>
            <p className='details'>Encontre aqui a melhor forma de você organizar seu dinheiro, totalmente grátis e prático de usar!
            </p>
            <a href='../cadastro/Cadastro.js' className='cv-btn'>Cadastra-se já!</a>
        </div>

        <div className='image'>
          <span className="img-inicio"><img src={img} alt="imagem"></img> </span> 
        </div>
      </div>
  );
}

export default LandingPage;