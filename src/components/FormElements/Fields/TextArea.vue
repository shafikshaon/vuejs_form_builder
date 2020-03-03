<template>
  <textarea :value="value" class="form-control" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  name: "FormTextarea",
  props: {
    value: {
      default: "",
      type: String
    }
  }
}
</script>
