//@ts-nocheck
import Datatable from '../components/Datatable.tsx'
import { DataForm } from '../components/DataForm.tsx'
import {useState} from 'react'
import AddButton from '../components/AddButton.tsx'
import EmptyAddForm from '../components/EmptyAddForm.tsx'
import Modal from '../components/Modal.tsx'
import Modal2 from '../components/Modal2.tsx'


export const Dashboard = ( ) => {
  let [form, showForm] = useState(<AddButton formfunc={showAddForm}/>)
  let [modal, modalSwitch] = useState(<></>)
  

  function setForm (car: Array<object>)
    {
      console.log(car) /
      showForm(old => old = <DataForm {...car} reversal={reverseForm} canceledit={cancelAddEdit}/>)
    }

  function reverseForm()
    {
      showForm(old => old = <AddButton formfunc={showAddForm}/>)
    }

  function showAddForm() 
    {
      showForm(old => old = <EmptyAddForm canceledit2={cancelAddEdit}/>)
    }

  function cancelAddEdit() 
  {
    showForm(old => old = <AddButton formfunc={showAddForm}/>)
  }

  function deleteTheCar(dcar: object)
  {
     modalSwitch(nothing => nothing = <Modal dcar={dcar} cancelmode={cancelModal} delconfirm={deleteTheCar2}/>)
  }

  function deleteTheCar2()
  {
     modalSwitch(oldModal => oldModal = <Modal2 cancelmode2={cancelModal}/>)
  }

  function cancelModal() {
     window.location.reload()
     modalSwitch(themodal => themodal = <></>)
  }

  return(
    <div id="dashboard">
      {modal}
      <Datatable setform={setForm} deletecar={deleteTheCar}/>
      {form}
    </div>
  )
} 
