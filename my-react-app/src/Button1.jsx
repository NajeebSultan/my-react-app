
function Button1(){
  let count = 0;

  const handelClick =(name) => {
    if(count < 3){
      count ++;
      console.log(`${name} you clicked me ${count} time/s `);

    }
    else{
      console.log(`${name} stop clicking me! `);
    }
  };

  return(<button onClick={ () => handelClick ("Bro")}>Click me 😊 </button>);

}
export default Button1