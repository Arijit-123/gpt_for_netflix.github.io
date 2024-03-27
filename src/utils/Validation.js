export const validation=(email, password)=>{
const isemailvalid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
const ispasswordvalid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

if(!isemailvalid) return  "Email id is not valid";
if(!ispasswordvalid) return "password is not valid";

return null;

}