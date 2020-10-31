<template>
    <div>
        <label for="select">Выборка</label>
            <select name="select" id="select">
                <option value="id">id</option>
                <option value="to">to</option>
                <option value="time">time</option>
            </select>
        <ul v-for="(fly, i) of flights" :fly="fly" :key="i">
            <li>
                {{fly.id}} - {{fly.to}} - {{fly.time}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Flights",
    data () {
        return {
            flights: [
                {
                    id: 1,
                    to: 'Липецк-Москва',
                    time: 'вылет сегодня в 9:00 приземление в 11:00'
                },
                {
                    id: 2,
                    to: 'Липецк-Москва',
                    time: 'вылет сегодня в 10:00 приземление в 12:00'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>