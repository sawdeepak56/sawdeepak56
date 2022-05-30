function ValidateEmail(a) 
{
 let ev = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 return ev.test(a)
}
let email = '123@abc'
console.log(ValidateEmail(email))
