<template>
    <div>
        <section class="transfer_pages">
            <h3 class="transfer_page__title">Хотите посмотреть информацию о нас</h3>
            <router-link to="/about">
                <button>О нас</button>
            </router-link>
            <h3 class="transfer_page__title">Хотите посмотреть рассписание полетов</h3>
            <router-link to="/flights">
                <button>Список Рейсов</button>
            </router-link>
            <h3 class="transfer_page__title">Хотите купить билет на ваш выбранный рейс</h3>
            <router-link to="/tickets">
                <button>Купить билет</button>
            </router-link>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>
