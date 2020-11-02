<template>
    <div class="sections">
        <section class="flight_information">
            <h2>Информация о перелете</h2>
            <ul v-for="(board, i) of boards"
                :board="board" :key="i"
            >
                <li class="items">
                    <label class="items__title">
                        <input type="checkbox" v-model="flightSelection" :value="board.id">
                        Номер рейса: {{ board.id }}
                    </label>
                    <span>
                        Воздушное судно:
                    </span>
                    <span>
                        Название города вылета:
                    </span>
                    <span>
                        Название аэропорта вылета:
                    </span>
                    <span>
                        Дата вылета:
                    </span>
                    <span>
                        Время вылета:
                    </span>
                    <span>
                        Название города назначения:
                    </span>
                    <span>
                        Название аэропорта назначения:
                    </span>
                    <span>
                        Время прибытия:
                    </span>
                    <span>
                        Время в пути:
                    </span>
                    <span>
                        Вероятность вылета:
                    </span>
                </li>
            </ul>
        </section>
        <section class="booking_information">
            <h2>Информация о бронировании</h2>
            <label>
                Выбран {{flightSelection}} номер рейса
                <button type="submit">Забронировать</button>
            </label>
        </section>
    </div>
</template>

<script>
export default {
    name: "Flights",
    data () {
        return {
            flightSelection: [],
            boards: [
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
    },
    computed: {
        findId() {
            return this.boards.filter(() => {

            })
        }
    }
}
</script>

<style scoped>
    .items {
        display: flex;
        flex-direction: column;
    }
    .items__title {
        padding-bottom: 1rem;
    }
</style>