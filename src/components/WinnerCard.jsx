
const WinnerCard = ({ fighter }) => {



    return (
        <>

            <div className="max-w-sm mx-auto rounded-2xl shadow-lg p-6 text-center basis-128">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{fighter.name}</h2>
                <p className="text-gray-600">Arma : {fighter.nameWeapon}</p>

                <p >
                    <strong>Potenza:</strong> {fighter.power} <br />
                    <strong>Moltiplicatore:</strong> {fighter.multiplier}
                </p>
            </div>

        </>
    )



}

export default WinnerCard;