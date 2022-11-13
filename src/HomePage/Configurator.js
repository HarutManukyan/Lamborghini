import tecnica from '../img/tecnica-png.webp'

const Configurator = () => {
    return (
        <div className="config-container">
            <div>
                <div className="config-background">
                    Huracan
                </div>
                <div className="config-title">
                    CONFIGURATOR
                </div>
                <div className="config-text">
                    CREATE YOUR <br />
                    HURACÁN
                </div>
                <div className="config-btn-div">
                    <button className="config-btn">
                        create
                    </button>
                </div>    
            </div>
            <div className='config-img-div'>
                <img className='config-img' src={tecnica}/>
            </div>
        </div>
    )
}

export default Configurator