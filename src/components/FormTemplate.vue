<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2>Sample form</h2>
                <form @submit.prevent="submit" class="form-template">
                    <!-- Form Template -->
                    <template v-for="(field, key) in formFields">
                        <div :key="key" class="form-group">
                            <field-label :for="`${_uid}-${field.name}`">{{ field.label }}</field-label>
                            <Component
                                    :data-vv-as="field.label"
                                    :id="`${_uid}-${field.name}`"
                                    :is="field.component"
                                    :name="field.name"
                                    :options="!!field.options.choices ? field.options : false"
                                    :type="field.type"
                                    @input="updateField({ key: field.name, value: formData[field.name] })"
                                    v-bind="{ ...field.options.attrs }"
                                    v-model="formData[field.name]"
                                    v-validate="field.validation"
                            />
                            <field-error>{{ errors.first(field.name) }}</field-error>
                        </div>
                    </template>

                    <button type="submit">Save</button>
                </form>
            </div>
            <div class="col-md-6">
                <h2>Sample output</h2>
                <form-result/>
            </div>
        </div>
    </div>
</template>

<script>
    import FieldError from "./FormElements/FieldError.vue"
    import FieldLabel from "./FormElements/FieldLabel.vue"

    import FormResult from "./FormElements/FormResult.vue"

    import formMixin from "../mixins/formMixin"
    import {mapMutations} from "vuex"

    export default {
        name: "form-template",
        mixins: [formMixin],
        props: ["formFields"],
        components: {
            FieldError,
            FieldLabel,
            FormResult
        },
        provide() {
            return {
                formState: this.formState
            }
        },
        methods: {
            ...mapMutations({
                updateField: "lead/updateField"
            })
        }
    }
</script>
