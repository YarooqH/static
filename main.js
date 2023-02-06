  //login Function Format                             
  login(hashCode, (response) => {                
    console.log(response);                    
    })
  
    //login Function Response Format
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