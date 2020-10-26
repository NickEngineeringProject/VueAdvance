<template>
    <span :aria-checked="toggled.toString()"
          @click="toggle"
          @keydown.space.prevent="toggle"
          role="checkbox" tabindex="0">check
    </span>
</template>

<script>
export default {
    name: "ToggleInput",
    model: {
        prop: 'toggled',
        event: 'toggle'
    },
    props: {
        toggled: Boolean
    },
    methods: {
        toggle() {
            this.$emit('toggle', !this.toggled)
        }
    }
}
</script>

<style scoped>

</style>