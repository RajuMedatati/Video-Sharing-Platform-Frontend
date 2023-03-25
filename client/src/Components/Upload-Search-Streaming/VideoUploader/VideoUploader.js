import React, { useRef } from "react"
import { useState } from "react"
import './VideoUploader.css'
function VideoUploader(){
    const [files,setFiles] = useState(null);
    const inputRef = useRef();
    const handleDragOver = (event)=>{
        event.preventDefault();
    }
    const handleDrop = (event)=>{
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    }
    return<>

       <div className="upload-card">
            <h1>Upload New Video</h1>
            <section className="drag">
                {!files && (
                    <div className="drapzone"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <img src="./upload.webp" alt="Upload" width="100px" height="100px" color="white"/>
                        <h1>Drag and drop to upload</h1>
                        <input
                        type="file"
                        multiple
                        onChange={(event)=> setFiles(event.target.files)} 
                        hidden
                        ref={inputRef}/>
                    <button onClick={()=>{
                        inputRef.current.click()
                    }}>or browse to choose a file</button>
                   
                    </div>
                    
                )}
                
               
            </section>
            <div className="below">
                         <h2>Name</h2>
                    <section>
                        <p>Description</p>
                    </section>
                    <section className="flex">
                         <div>
                            <p>Category</p>
                            <h4>Category .</h4>
                         </div>
                         <div>
                            <p>Visibility</p>
                            <h4>Public .</h4>
                         </div>
                         <div>
                            <p>Other</p>
                            <h4>Other .</h4>
                         </div>
                         <div>
                            <p>Other</p>
                            <h4>Other .</h4>
                         </div>
                        
                    </section>
                    
                    </div>
                    <div className="save">
                        <button>save</button>
                    </div>
       </div>
       
    </>
}
export default VideoUploader


    // {
    //     title: { type: String, required: true },
    // fileName: { type: String, required: true },
    // description: { type: String, required: true },
    // contentType: { type: String, required: true },
    // views: { type: Number, default: 0 },
    // publisherName: { type: String, required: true },
    // category: { type: String, required: true },
    // visibility: { type: String, required: true, default: “Public” },
    // user_id: { type: mongoose.Types.ObjectId, reference: "User" },
    //     },     { timestamps: true }
    