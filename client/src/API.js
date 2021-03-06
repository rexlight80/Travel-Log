


export const listLogEntries= async()=>{

     const response=await fetch('/api/logs')
       return response.json();

}

export const createLogEntry=async (entry)=>{
  const response=await fetch('/api/logs/',{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(entry)
  })

  return response.json();
}