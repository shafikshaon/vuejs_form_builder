<template>
    <div>
        <v-select
                :options="options.choices"
                :placeholder="options.attrs.placeholder"
                multiple
                v-model="selectedValue"
        ></v-select>
    </div>
</template>
<script>
    export default {
        props: ["options", "value"],
        data() {
            return {selectedValue: ''}
        },
        watch: {
            selectedValue(newVal) {
                // eslint-disable-next-line no-console
                this.$emit('input', newVal)
            }
        }
    }
</script>
