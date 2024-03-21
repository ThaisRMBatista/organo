import './Colaborador.css'

const Colaborador = ({nome, cargo, imagem, linkedin, corDeFundo}) => {
    return (
      <div className="colaborador">
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
          <img
            src={imagem}
            alt={nome} //https://github.com/thaisrmbatista.png
          />
        </div>
        <div className="rodape">
          <h4>{nome}</h4>
          <h5>
            {cargo}
          </h5>
        </div>
      </div>
    );
}

export default Colaborador