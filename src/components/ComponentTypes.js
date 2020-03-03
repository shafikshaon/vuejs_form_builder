import FormTemplate from "./FormTemplate.vue"
import InputBox from "./FormElements/Fields/InputBox.vue"
import TextArea from "./FormElements/Fields/TextArea.vue"
import SingleSelect from "./FormElements/Fields/SingleSelect.vue"
import CheckBox from "./FormElements/Fields/CheckBox.vue"

const COMPONENT_MAP = {
    formTemplate: FormTemplate,
    text: InputBox,
    textarea: TextArea,
    single_select: SingleSelect,
    check: CheckBox
}

export function getComponent(type) {
    return COMPONENT_MAP[type]
}
