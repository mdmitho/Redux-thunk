const cartCounter = (store) => (next)=> (action) =>{
console.log("Current state", store.getState());
console.log("Action", action)
 
// return next(action)
}
export default cartCounter