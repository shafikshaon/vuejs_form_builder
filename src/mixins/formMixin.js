export default {
    data() {
        return {
            // local object variable to store form data
            formData: {},
            submitted: false
        }
    },
    computed: {},
    watch: {},
    methods: {
        submit() {
            this.submitted = true;
            // eslint-disable-next-line no-console
            this.$validator.validateAll().then(valid => {
                if (valid) {
                    // eslint-disable-next-line no-console
                    console.log('submitted')
                }
            });

        }
    }
}
