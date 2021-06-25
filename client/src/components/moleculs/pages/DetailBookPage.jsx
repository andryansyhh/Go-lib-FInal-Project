import React from "react"
import Header from "../header/header"
import FilePreviewer from 'react-file-previewer';
import ggg from "../../../assets/krs.pdf"

const DetailBookPage = () =>{
 return(
    <>
     <Header />
     <div className="container">
        <h4></h4>
        {/* <FilePreviewer 
            file={{
                url:`${ggg}`
            }}
        /> */}
        
     </div>
    </>
 )
}

export default DetailBookPage