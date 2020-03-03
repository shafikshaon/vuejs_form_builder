<template>
    <div>
        <v-select
                :filterable="false"
                :options="options"
                :placeholder="options.attrs.placeholder"
                @search="onSearch"
                v-model="selectedValue"
        ></v-select>
    </div>
</template>
<script>
    export default {
        props: ["value"],
        data() {
            return {selectedValue: '', options: [{}]}
        },
        methods: {
            onSearch(search) {
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
