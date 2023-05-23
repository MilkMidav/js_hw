const robot = {
  isActive: false,
  actions: [], 
  walk: function(timeout = 1) {
    if (this.isActive) {
      this.actions.push({ action: 'walking', timeout: timeout });
    } else {
      this.isActive = true;
      console.log(`Started walking for ${timeout} seconds`);

      setTimeout(() => {
        console.log('Ended walking');
        this.setActionsTimeout();
      }, timeout * 1000);
    }

    return this;
  },
  idle: function(timeout = 1) {
    if (this.isActive) {
      this.actions.push({ action: 'idling', timeout: timeout });
    } else {
      this.isActive = true;
      console.log(`Started idling for ${timeout} seconds`);

      setTimeout(() => {
        console.log('Ended idling');
        this.setActionsTimeout();
      }, timeout * 1000);
    }

    return this;
  },
  setActionsTimeout: function() {
    if (this.actions.length > 0) {
      const action = this.actions.shift();
      console.log(`Started ${action.action} for ${action.timeout} seconds`);
      setTimeout(() => {
        console.log(`Ended ${action.action}`);
        return this.setActionsTimeout();
      }, action.timeout * 1000);
    } else {
      console.log('No tasks to execute')
    }

    return;
  }
};

robot.walk(3).idle(3).walk(3);
