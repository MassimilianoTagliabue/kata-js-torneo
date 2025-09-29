
const FighterCard = ({ fighter }) => {



    return (
        <>

            <div className="card " >
                <div className="card-body">
                    <h5 className="card-title">{fighter.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Arma :</h6>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{fighter.nameWeapon ?? "Nessuna"}</h6>
                    <p className="card-text">
                        <strong>Potenza:</strong> {fighter.power} <br />
                        <strong>Moltiplicatore:</strong> {fighter.multiplier}
                    </p>
                    
                </div>
            </div>
        </>
    )



}

export default FighterCard;