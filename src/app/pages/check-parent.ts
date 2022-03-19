import { FormGroup } from "@angular/forms";
import { InputDependency } from "./form-component/field.interface";

export function checkVaidDep(dependency: InputDependency, group: FormGroup | any) {
  let parentVal = group instanceof  FormGroup ? group.getRawValue() : group.value
  let parentData = parentVal[dependency.parentName]
  let parentData2 = parentVal[dependency.parentName+"Code"]
  if (dependency.show) {
    if (dependency.isArray) {
      return (dependency.value as string[]).includes(parentData) || (dependency.value as string[]).includes(parentData2)
    } else {
      return parentData == dependency.value || parentData2 == dependency.value
    }
  } else {
    return parentData ? true : false
  }

}