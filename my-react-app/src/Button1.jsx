
function Button1(){

  const handelClick =() => console.log("OUCH!");

  const handelClick2 = (name) => console.log(`${name} stop clicking me`);

  return(<button onClick={ () => handelClick2("Bro")}>Click me 😊 </button>);

}
export default Button1