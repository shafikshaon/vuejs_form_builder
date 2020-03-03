<template>
    <div>
        <v-select :options="options.choices" v-model="selectedValue" :placeholder="options.attrs.placeholder"></v-select>
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
