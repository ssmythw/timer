// process.stdout.write("\x07"); beep
var stdin = process.stdin;

// without this, we would only get streams once enter is pressed
stdin.setRawMode(true);

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
stdin.resume();

// i don't want binary, do you?
stdin.setEncoding("utf8");

// on any data into stdin
stdin.on("data", function (key) {
  // ctrl-c ( end of text )
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  if (key === "b") {
    process.stdout.write("\x07");
  }
  if (/^[1-9]$/i.test(key)) {
    console.log(`Setting a timer for ${key} seconds.`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, key * 1000);
  }
  // write the key to stdout all normal like
  process.stdout.write(key);
});
