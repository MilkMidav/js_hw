const robot = {
  promise: Promise.resolve(),

  walk: function (timeout = 1) {
    this.promise = this.promise.then(() => {
      return new Promise(res => {
        console.log("Started walking");
        setTimeout(() => {
          console.log("Ended walking");
          res();
        }, timeout * 1000);
      })
    })
    
    return this;
  }, 

  idle: function (timeout = 1) {
    this.promise = this.promise.then(() => {
      return new Promise(res => {
        console.log("Started idling");
        setTimeout(() => {
          console.log("Ended idling");
          res();
        }, timeout * 1000);
      })
    })

    return this;
  },
};

robot.walk(3).idle(3).walk(3);
