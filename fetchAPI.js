fetch('https://reqres.in/api/users/',{
  method:'POST',
  body: JSON.stringify({
    name:'User 1'
  })
})
.then(res=>{
  if (res.ok){
    console.log("Success")
  } else {
    console.log("Not sucessful")
  }
  return res
})
.then(data=>console.log("data",data))
.catch(error=>console.log('Error'))