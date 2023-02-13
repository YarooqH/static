  //login Function Format                             
  login(hashCode)

  //login function will pop up screen where you perform liveness
   
  
  //window.addEventListener Function Format
  
window.addEventListener(
  "message",
  (e) => {
console.log(e.data)
  },
  false
);
  
    //window.addEventListener Response Format
    {
      success: boolean,
      credentials: string || null,
      message: string
  }
  
  
   //getDecodedData Function Format
 getDecodedData(hashCode, credentials, (decodedData) => {
  console.log(decodedData)
  })

  //getDecodedData Function Response Format
  {
    success: boolean,
    data: object || null,
    message: string,
    error: boolean
  }