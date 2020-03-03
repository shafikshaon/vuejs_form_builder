import FormTemplate from "./FormTemplate.vue"
import InputBox from "./FormElements/Fields/InputBox.vue"
import TextArea from "./FormElements/Fields/TextArea.vue"
import SingleSelect from "./FormElements/Fields/SingleSelect.vue"
import APISingleSelect from "./FormElements/Fields/APISingleSelect";

const COMPONENT_MAP = {
    formTemplate: FormTemplate,
    text: InputBox,
    textarea: TextArea,
    single_select: SingleSelect,
    api_single_select: APISingleSelect,
}

export function getComponent(type) {
    return COMPONENT_MAP[type]
}
