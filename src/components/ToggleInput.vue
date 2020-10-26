<template>
    <!--    <span :aria-checked="toggled"-->
    <!--          @click="toggle"-->
    <!--          @keydown.space.prevent="toggle"-->
    <!--          role="checkbox" tabindex="0">check-->
    <!--    </span>-->
    <label>
        <input type="checkbox" @click="toggle" checked>
    </label>
</template>

<script>
export default {
    name: "ToggleInput",
    model: {
        prop: 'receivedNews',
        event: 'toggle'
    },
    props: {
        receivedNews: Boolean,
        value: Object
    },
    methods: {
        toggle() {
            this.$emit('toggle', !this.receivedNews)
        }
    }
}
</script>

<style scoped>

</style>