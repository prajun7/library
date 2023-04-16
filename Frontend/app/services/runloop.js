// eslint-disable-next-line no-restricted-imports
import {
  bind,
  cancel,
  debounce,
  join,
  later,
  next,
  schedule,
  scheduleOnce,
  throttle,
} from "@ember/runloop";
import Service from "@ember/service";

export default class RunloopService extends Service {
  later(...args) {
    return later(...args);
  }
  next(...args) {
    return next(...args);
  }
  cancel(arg) {
    return cancel(arg);
  }
  debounce(...args) {
    return debounce(...args);
  }
  schedule(...args) {
    return schedule(...args);
  }
  join(...args) {
    return join(...args);
  }
  bind(...args) {
    return bind(...args);
  }
  throttle(...args) {
    return throttle(...args);
  }
  scheduleOnce(...args) {
    return scheduleOnce(...args);
  }
}
