<template>
    <span :aria-checked="value.toString()"
          @click="toggleNewsletter"
          @keydown.space.prevent="toggleNewsletter"

          role="checkbox" tabindex="0">check
    </span>
</template>

<script>
export default {
    name: "ToggleInput",
    data() {
        return {
            value: false
        }
    }
}
</script>

<style scoped>

</style>