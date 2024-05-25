import {DeleteTheCar} from '../helpers/ServerCalls'

function Modal({ dcar, cancelmode, delconfirm }: any) {
   

    return (
      <div id="modal">
          <p id="question">Please confirm this deletion</p>
          <p>Car Make: {dcar.car_make}</p>
          <p>Car Model: {dcar.car_model}</p>
          <p>Car Price: {dcar.car_price}</p>
          <p id="question">Car Year: {dcar.car_year}</p>
          <div id="modalbuttons">
              <button className="mbs" onClick={()=>cancelmode()} style={{padding: "10px", marginRight: "10px"}}>Cancel</button>
              <button className="mbs" onClick={()=>delconfirm(DeleteTheCar(dcar))} style={{padding: "10px", marginLeft: "10px"}}>Delete Car</button>
          </div>
      </div>
    )




}

export default Modal