// process.stdout.write("\x07"); beep sound
let args = process.argv.slice(2, process.argv.length);

args.forEach((element) => {
  //for each element we want to create a setTimeout and then print out the beep sound

  if (element < 0 || isNaN(element)) {
    console.log("Negative number or not a number");
  } else {
    setTimeout(() => {
      console.log(element + " seconds");
      process.stdout.write("\x07");
    }, element * 1000);
  }
});
