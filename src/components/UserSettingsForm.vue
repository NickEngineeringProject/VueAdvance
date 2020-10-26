<template>
    <form @submit.prevent="submit">
        <h1>Your Settings</h1>
        <label>
            <span>Email Address</span>
            <input type="text" v-model="email" placeholder="example@gmail.com">
        </label>
        <section>
            <span>Newsletter</span>
            <p>Send you occasional news and updates</p>
            <button type="submit">Update Settings</button>
        </section>
    </form>
</template>

<script>
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
        },
        toggleNewsletter() {
            this.receiveNewsletter = !this.receiveNewsletter
        }
    }
}
</script>

<style scoped>

</style>