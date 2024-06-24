class Framework {
    constructor() {
        this.controllers = {};
    }

    registerController(name, controller) {
        this.controllers[name] = controller;
    }

    init() {
        Object.keys(this.controllers).forEach(name => {
            this.controllers[name].init();
        });
    }
}

module.exports = Framework;
