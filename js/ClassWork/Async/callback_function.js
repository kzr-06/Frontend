// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1 complete");
//     callback();
//   }, 2000);
// }

// function step2() {
//   setTimeout(() => {
//     console.log("Step 2 complete");
//   }, 2000);
// }

// step1(step2);



setTimeout(() => {
  console.log("1. Water boiled");

  setTimeout(() => {
    console.log("2. Added tea powder");

    setTimeout(() => {
      console.log("3. Added sugar");

      setTimeout(() => {
        console.log("4. Added milk");

        setTimeout(() => {
          console.log("5. Tea served");
        }, 2000);

      }, 2000);

    }, 2000);

  }, 2000);

}, 2000);

console.log("HIIIIIIIIIIIIII");

