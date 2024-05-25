//@ts-ignore

import { summonCars }  from '../custom-hooks/useCallCars.tsx'

function Datatable({setform, deletecar}: any) {
    const { thecars } = summonCars()
    console.log(thecars)

  return (
    <div id="datatable" >
        <table className="table-fixed">
            <thead>
                <tr>
        
                    <th>Car Make</th>
                    <th>Car Model</th>
                    <th>Car Price</th>
                    <th>Car Year</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {thecars.map(car =>
                // @ts-expect-error: IFormInput exists
                    <tr key={car.car_id} id={car.car_id}>
                        {/* @ts-expect-error: IFormInput exists */}
                        <td>{car.car_make}</td>
                        {/* @ts-expect-error: IFormInput exists */}
                        <td>{car.car_model}</td>
                        {/* @ts-expect-error: IFormInput exists */}
                        <td>{car.car_price}</td>
                        {/* @ts-expect-error: IFormInput exists */}
                        <td>{car.car_year}</td>
                        {/* @ts-expect-error: IFormInput exists */}
                        <td><button id="editbutton" className="bg-black-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-white-200 hover:border-blue-500 rounded" onClick={() => setform([car.car_id, car.car_make, car.car_model, car.car_price, car.car_year])}>
                            Edit Info</button></td>
                        <td><button id="deletebutton" className="bg-black-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-white-400 hover:border-blue-500 rounded" onClick={() => deletecar(car)}>
                            Delete Car
                        </button></td>

                    </tr>
                )}
            </tbody>
        </table>
       
    </div>

    
  )
}

export default Datatable