<template>
    <form @submit.prevent="submit">
        <h1>Your Settings</h1>
        <section>
            <span>Newsletter</span>
            <p>Send you occasional news and updates</p>
            <!--                :value="receiveNewsletter"-->
            <!--                @input="(newValue) => {receiveNewsletter = newValue}"-->
            <toggle-input v-model="receiveNews"/>
            <span v-if="receiveNews">Согласен</span>
            <span v-else>Примите соглашение</span>
            <button type="submit">Update Settings</button>
        </section>
        <label>
            <span>Email Address</span>
            <input v-model="email"
                   type="text"
                   placeholder="example@gmail.com"
            >
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
            receiveNews: true
        }
    },
    methods: {
        submit() {
            console.log('success', {
                email: this.email,
                receiveNews: this.receiveNews
            })
        }
    },
    components: { ToggleInput }
}
</script>

<style scoped>

</style>