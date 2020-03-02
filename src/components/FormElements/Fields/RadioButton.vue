<template>
    <div>
        <label :key="key" v-for="(option, key) in options">
            <input :checked="option === value" :value="option" @input="$emit('input', $event.target.value)"
                   type="radio"/>
            {{ option }}
        </label>
    </div>
</template>
<script>
    export default {
        props: ["options", "value"]
    }
</script>
