import React , {useState} from 'react'
export default function TextForm(props) {
  // const [text , setText ] = useState("Enter Your Text Here");
  const [text , setText ] = useState("");
  const handleUpClick = (e)=>{
    // console.log('button clicked' );
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To upperCase","success");
    setTimeout(() => {
      props.setAlert(null);
    }, 1500)
    
    
  }
  const handleLowClick = (e)=>{
    // console.log('button clicked' );
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To lowerCase","success");
    setTimeout(() => {
      props.setAlert(null);
    }, 1500)
  }
  const handleOnChange = (e)=>{
    // console.log("onchange happened");
    setText(e.target.value);
  }
  const handleSaveClick = (e)=>{
    // console.log("save clicked");
    localStorage.setItem("Text",text);
    props.showAlert("You Data Has Been Saved","success");
    setTimeout(() => {
      props.setAlert(null);
    }, 1500)

  }
  const handleRetrieve = (e)=>{
    // console.log("save clicked");
    let a =localStorage.getItem("Text");
    setText(a); 
    props.showAlert("Your Data Has been restored ","success");
    setTimeout(() => {
      props.setAlert(null);
    }, 1500)

  }
  const handleExtraSpace =()=>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success");
    setTimeout(() => {
      props.setAlert(null);
    }, 1500)
  }
  return (
    <>
    {/* {console.log(props)} */}
    <div className="container" style={{color:props.mode==="light"?"#042743":"white"}}>
        <h1>{props.heading}</h1>
<div className="mb-3">  
  <textarea className="form-control" value ={text}  id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode=== "light"?"white":"gray" ,color:props.mode=== "light"?"#042743":"white" ,}}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleSaveClick}>Save the Text</button>
<button className="btn btn-primary mx-2" onClick={handleRetrieve}>Retrieve the Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Handle Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==="light"?"#042743":"white"}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Words And {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to Read By An Average Reader</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter Something in the textbox Above To Preview"}</p>
    </div>
    </>
  )
}
