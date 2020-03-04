<template>
    <div>
        <v-select
                :options="api_options"
                :placeholder="options.attrs.placeholder"
                @search="onSearch"
                v-model="selectedValue"
        ></v-select>
    </div>
</template>
<script>
    export default {
        props: ["value", "options"],
        data() {
            return {
                selectedValue: '',
                api_options: [
                    {"code": "", "label": "Select one"}
                ],
            }
        },
        methods: {
            onSearch(search) {
                // eslint-disable-next-line no-console
                console.log(search)
            }
        },
        watch: {
            selectedValue(newVal) {
                // eslint-disable-next-line no-console
                this.$emit('input', newVal)
            }
        }
    }
</script>
