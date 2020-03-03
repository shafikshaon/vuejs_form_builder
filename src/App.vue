<template>
    <div id="app">
        <form-config-provider/>
    </div>
</template>

<script>
    import FormConfigProvider from "./components/FormConfigProvider.vue"

    export default {
        name: "app",
        components: {
            FormConfigProvider
        }
    }
</script>
<style>
    @import 'assets/styles/vue-select.css';
    @import 'assets/styles/pulse.css';
</style>
