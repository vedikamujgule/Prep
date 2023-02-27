const users = [
    {
      id:1,
      name:'Vedika',
      isActive: true
    },
    {
      id:2,
      name:'Preeti',
      isActive: false
    },
    {
      id:3,
      name:'Mayuri',
      isActive: false
    },
    {
      id:4,
      name:'Sanika',
      isActive: false
    }
  ]
  
  let nameArray =[]
  users.forEach(ele=>{
    nameArray.push(ele.name)
  });
  
//   console.log(nameArray)
  
  const names = users.map((user)=>user.name)
  const activeNames = users.filter((user)=>user.isActive?user.name:'')
  console.log(names, activeNames)
  