<template>
    <div class="form-complete" id="complete">
        <p :key="index" v-for="(item, key, index) in $store.state.lead.formData">
            <span> {{ key }}: </span> {{ item }}
        </p>
    </div>
</template>
<script>

    export default {
        name: "form-result",
        components: {},
        computed: {}
    }
</script>
