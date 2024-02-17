import { Fragment } from "react";
import "../css/style.css";
// ad export in start of function to directly access it everywhere

export function User() {
  return (
    <>
      <input type="text" id=""></input>
      <User1 />
      <User2 />
    </>
    // Third way of importing
  );
}

export function User1() {
  return <button className="btn">Submit</button>;
}

export function User2() {
  return (
    <>
      <h2>This is user 2</h2>
      <button>Submit</button>
    </>
  );
}

export function USer3() {
  function AL() {
    alert("Hello world");
  }
  function AL2() {
    console.log("Hello world");
  }
  //   return <button onClick={() => al`ert("Hello world")}>Click me</button>; // Method 1
  return (
    <button
      onClick={() => {
        AL();
        AL2();
      }}
    >
      Click me
    </button>
  );
}

// export default User; // for single
// export {User,User1} // for multiple import
