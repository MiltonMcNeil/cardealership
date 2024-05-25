function Modal2({ cancelmode2 }: any) {
    return (
        <div id="modal2">
            <p id="theresponse" style={{marginBottom: "15px"}}>The car has deleted.</p>
            
            <div id="modalbuttons">
                <button className="mbs" onClick={()=>cancelmode2()} style={{padding: "5px", marginRight: "4px"}}>Thank You.</button>
            </div>
        </div>
      )
}

export default Modal2