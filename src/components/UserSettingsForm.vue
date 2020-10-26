<template>
    <form @submit.prevent="submit">
        <h1>Your Settings</h1>
        <section>
            <span>Newsletter</span>
            <p>Send you occasional news and updates</p>
            <!--                :value="receiveNewsletter"-->
            <!--                @input="(newValue) => {receiveNewsletter = newValue}"-->
            <toggle-input
                v-model="receiveNewsletter"
            />
            <button type="submit">Update Settings</button>
        </section>
        <label>
            <span>Email Address</span>
            <input v-model="email"
                   type="text"
                   placeholder="example@gmail.com">
        </label>
    </form>
</template>

<script>
import ToggleInput from '@/components/ToggleInput'
export default {
    name: "UserSettingsForm",
    data() {
        return {
            email: '',
            receiveNewsletter: false
        }
    },
    methods: {
        submit() {
            console.log('success', {
                email: this.email,
                receiveNewsletter: this.receiveNewsletter
            })
        }
    },
    components: { ToggleInput }
}
</script>

<style scoped>

</style>