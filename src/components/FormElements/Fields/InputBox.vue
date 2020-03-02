<template>
    <input :type="type" :value="value" @input="$emit('input', $event.target.value)"/>
</template>
<script>
    export default {
        props: ["type", 'value']
    }
</script>
