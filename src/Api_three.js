import React from "react";

function Apithree() {
  let flag = 0;
  // const [count, setCount] = useState(0);

  // async function getApi1() {
  //   const dataapi1 = await fetch(
  //     "https://projectheist.herokuapp.com/characters/1"
  //   );
  //   // return dataapi1;
  //   if (dataapi1.ok) {
  //     setCount((count) => count + 1);
  //   }
  //   const data1 = await dataapi1.json();
  //   console.log(data1);
  // }
  // async function getApi2() {
  //   const dataapi2 = await fetch(
  //     "https://projectheist.herokuapp.com/characters/2"
  //   );

  //   if (dataapi2.ok) {
  //     setCount((count) => count + 1);
  //   }
  //   const data2 = await dataapi2.json();
  //   console.log(data2);
  // }

  // async function getApi3() {
  //   const dataapi3 = await fetch(
  //     "https://projectheist.herokuapp.com/characters/3"
  //   );

  //   if (dataapi3.ok) {
  //     setCount((count) => count + 1);
  //   }
  //   const data3 = await dataapi3.json();
  //   console.log(data3);
  // }

  function getFetchApi() {
    // getApi1();
    // getApi2();
    // getApi3();

    fetch("https://projectheist.herokuapp.com/characters/1")
      .then((res1) => {
        if (res1.ok) {
          // setCount((count) => count + 1);
          flag++;
        }
        return res1.json();
      })
      .then((data1) => console.log(data1));

    setTimeout(() => {
      fetch("https://projectheist.herokuapp.com/characters/2")
        .then((res2) => {
          if (res2.ok) {
            // setCount((count) => count + 1);
            flag++;
          }
          return res2.json();
        })
        .then((data2) => console.log(data2));
    }, 5000);

    fetch("https://projectheist.herokuapp.com/characters/3")
      .then((res3) => {
        if (res3.ok) {
          // setCount((count) => count + 1);
          flag++;
        }
        return res3.json();
      })
      .then((data3) => console.log(data3));
  }

  // console.log(count);
  // if (api1 === true && api2 === true && api3 === true) {
  //   setApithree(true);
  // } else {
  //   setApithree(false);
  // }

  return (
    <>
      <div>
        {flag === 3 ? "All of three Api are successfully resolved" : ""}
        {/* if (api1){
          return <div> All of three Api are successfully resolved</div> 
        } */}
      </div>
      <button onClick={getFetchApi}>click Me</button>
    </>
  );
}

export default Apithree;
