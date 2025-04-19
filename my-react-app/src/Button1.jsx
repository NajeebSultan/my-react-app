
function Button1(){


  const handelClick = (e) => e.target.textContent = "OUCH! 😒";
  

  return(<button onDoubleClick = {(e) => handelClick (e)}>Click me 😊 </button>);

}
export default Button1