<template>
    <input :type="type" :value="value" @input="$emit('input', $event.target.value)" class="form-control"/>
</template>
<script>
    export default {
        props: ["type", 'value']
    }
</script>
