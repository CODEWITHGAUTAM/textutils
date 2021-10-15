import React,{useState} from 'react'

export default function Form1(props) {
    const handleUpClick =()=>
    {
        //console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        

        setText(newText)
        
        
    }
    const handleUpClick1 =()=>
    {
        //console.log("Uppercase was clicked" + text);
        let newText2=text.toLowerCase();
        
        

        setText(newText2)
        
        
    }
    const handleUpClick2 =()=>
    {
        //console.log("Uppercase was clicked" + text);
        let newText2="";
        
        

        setText(newText2)
        
        
    }
    const RemoveSpace =()=>
    {
        
        const text3 = text.replace(/\s+/g, ' ').trim();
        
        

        setText(text3)
        
        
    }
    const handleOnChange =(event)=>
    {
        //console.log("OnChange");
        setText(event.target.value)
        
    }
    const [text,setText]=useState('Enter text here');

    return (
        <div>
           <div className="container" >
               <h1>{props.textArea}</h1>
           <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange}  id="textarea" rows="8"></textarea>
            </div>
            <button type="button" onClick={handleUpClick} className="btn btn-primary mx-3"  >ConvertToUppercase</button>
            <button type="button" onClick={handleUpClick1} className="btn btn-primary mx-3"  >ConvertToLowercase</button>
            <button type="button" onClick={handleUpClick2} className="btn btn-primary mx-3"  >Clear Text</button>
            <button type="button" onClick={RemoveSpace} className="btn btn-primary mx-3"  >Remove Extra Space</button>
           </div>
           <div className="container my-3">
               <h2>Your text Summary</h2>
               <p1>{text.split(" ").length} words {text.length} characters</p1>

           </div>
           <div className="container my-3" >
               <h2>Preview</h2>
               <p>{text}</p>
           </div>
           
            
           
        </div>
    )
}
