class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if(this.stackControl.length ===0){
      return true
    }
    else{
      return false
    }
  }

  isEmpty() {
    // ... your code goes here
    if(this.stackControl.length ===0){
      return true
    }
    else if(this.stackControl <= this.MAX_SIZE){
      return false
    }

  }

  push(item) {
    // ... your code goes here
    this.canPush()
       if(true ){
        this.stackControl.push(item)
       }
       
      
  }

  pop() {
    // ... your code goes here
    this.isEmpty()
    if(false){
      this.stackControl.pop(item)
    }
  }

  display() {
    // ... your code goes here
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
