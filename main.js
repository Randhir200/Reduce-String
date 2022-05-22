function runProgram(input) {
    let str = input.trim()
    let stack = [];
    let top = -1;
    for(let i=0;i<str.length;i++){
        if(top==-1){
            top++
            stack.push(str[i])
        }else if(stack[top]==str[i]){
            stack.pop()
            top--
        }else{
            top++
            stack.push(str[i])
        }
    }
        if(top==-1){
         console.log("Empty String")
        }else{
         console.log(stack.join(""))
        }
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  