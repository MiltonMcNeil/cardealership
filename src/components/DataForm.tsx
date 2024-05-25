//@ts-nocheck
import {useForm, SubmitHandler } from "react-hook-form"
import { sendCarEdit } from "../helpers/ServerCalls"


export function DataForm( select: Array<object> ) {

    console.log(select)

    const preloadedValues = {
        car_make: select[1],
        car_model: select[2],
        car_price: select[3],
        car_year: select[4],
    }

    const makeDictobj = (carobj: object, car_id: object) => {
        let newCar: object = {...carobj, car_id, "car_fuel_type": "Unleaded", "car_body_type": "Coupe"}
        return newCar
    }

    
    const { register, handleSubmit } = useForm<IFormInput>({defaultValues: preloadedValues})

    const onSubmit: SubmitHandler<IFormInput> = (cardata) => {
        let good = makeDictobj(cardata, select[0]) 
        let check = sendCarEdit(good)
        console.log(check)
        select.reversal()
        }
    
    return (
        <div id="carform">
            <form onSubmit={handleSubmit(onSubmit)} id="editaddform">
                <label>Car Make: </label>
                <input {...register("car_make")} name="car_make"/>
                <label>Car Model: </label>
                <input {...register ("car_model")} name="car_model"/>
                <label>Car Price: </label>
                <input {...register ("car_price")} name="car_price"/>
                <label>Car Year: </label>
                <input {...register ("car_year")} name="car_year"/>
                <input id="inputBut"type="Submit"/>
                <button id="cancelbutton" onClick={() => select.canceledit()}>Cancel Edits</button>
            </form>
            <p id="instructions">You may edit the data in the form fields. Press the "Submit" button to submit your data.</p>
        </div>
        
    )
}
        


