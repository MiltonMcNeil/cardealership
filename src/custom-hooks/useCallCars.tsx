import {useState, useEffect} from 'react'
import { getCarList } from '../helpers/ServerCalls.ts'

export const summonCars = () => {
    let [thecars, setTheCars] = useState<[]>([])

    const hello = async () => {
        setTheCars(await getCarList())
    }
    
    useEffect(() =>  {
        hello()
    }, []);
    
    return { thecars, getTheCars:hello }
}
