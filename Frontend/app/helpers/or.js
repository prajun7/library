import { helper } from "@ember/component/helper";

export function or(params) {
  let param;
  for (let i = 0; i < params.length; i++) {
    param = params[i];
    if (param) {
      return param;
    }
  }

  return param;
}

export default helper(or);