//menggabungkan

let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  };
  
  let result = { 
      ...data,
      name : 'Dzaki Muhamad Mumtaz',
      email : 'habakiri76@gmail.com',
      hobby : 'Riding'
   };
  
   console.log(result);
  
   let {name, email, hobby, address: {street, city}} = result
   console.log(street);
   console.log(city);
  