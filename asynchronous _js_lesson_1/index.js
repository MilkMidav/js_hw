const robot = {
  isActive: false,
  actions: [],
  walk: function (timeout = 1) {
    this.actions.push({ action: 'walking', timeout: timeout });
    if (!this.isActive) this.startNextTask();
    
    return this;
  }, 
  idle: function (timeout = 1) {
    this.actions.push({ action: 'idling', timeout: timeout });
    if (!this.isActive) this.startNextTask();

    return this;
  },
  startNextTask: function() {
    if (this.actions.length > 0) {
      const action = this.actions.shift();
      this.isActive = true;
      console.log(`Started ${action.action} for ${action.timeout} seconds`);

      setTimeout(() => {
        console.log(`Ended ${action.action}`);
        this.startNextTask();
      }, action.timeout * 1000);
    } else {
      console.log('No tasks to execute');
      this.isActive = false;
    }
  },
};

robot.walk(3).idle(3).walk(3);
