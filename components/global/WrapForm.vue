<template>
  <div
    class="w-[342px] sm:w-[410px] bg-white mx-auto p-5 sm:p-6 2xl:p-8 relative z-50 rounded-lg text-[16px] max-h-[670px] overflow-auto"
    :class="[{
      'sm:w-[1000px]' : politic
    }]"
  >
    <div class="flex justify-end">
      <button
        type="button"
        class="rounded-md inline-flex items-center justify-center text-gray-400 duration-300 ease-in hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        @click="$store.dispatch('popup/close')"
      >
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div v-if="!politic">
    <form v-if="!sending" @submit.prevent="sendForm">
      <div class="text-center px-[31px] leading-[22px]">
        <h3 class="text-[24px] font-semibold">Остались вопросы?</h3>
        <p>Заполните форму и наш специалист вам перезвонит!</p>
      </div>
      <div class="mt-2">
        <input
          v-model="form.name"
          required
          placeholder="Ваше имя"
          class="pb-2 pt-3 pl-2 min-w-full block duration-300 ease-in border border-gray outline-none focus:border-cBorder text-xs lg:text-sm 2xl:base rounded-[10px]"
        />
        <AppDropdown
          :properties="allRegion"
          title="Выберете регион"
          name="region"
          @selectValue="setValue"
        />
        <input
          v-model="form.phone"
          v-mask="'+7 (###)-###-##-##'"
          required
          placeholder="+7(___)___-__-__"
          class="pb-2 pt-3 pl-2 min-w-full block duration-300 ease-in border-gray border-[1px] outline-none focus:border-cBorder text-xs lg:text-sm 2xl:base rounded-[10px]"
        />
        <textarea
          v-model="form.text"
          required
          placeholder="Сообщение"
          class="mt-2 h-[115px] resize-none pb-2 pt-3 pl-2 min-w-full block duration-300 ease-in border border-gray outline-none focus:border-cBorder text-xs lg:text-sm 2xl:base rounded-[10px]"
        />
        <p class="mt-2 text-center text-[12px] text-polit">
          Оставляя свои персональные данные, Вы соглашаетесь с
          <span
            class="cursor-pointer text-[#FF802E] underline"
            @click="openPolitic"
          >Политикой конфиденциальности</span
          >
        </p>
        <recaptcha @error="onError" />
        <button
          type="submit"
          class="mt-[39px] w-full rounded-[15px] bg-[#FF802E] py-[12px] text-center text-[16px] hover:shadow-xl text-white"
        >
          Отправить
        </button>
      </div>
    </form>
    <div v-else>
    <h3 class="text-center text-[22px]">Ваш вопрос успешно отправлен!</h3>
  </div>
    </div>
    <AppPolitic v-else/>
  </div>
</template>

<script>
export default {
  name: 'WrapForm',
  data() {
    return {
      allRegion: [
        'Адыгея',
        'Алтай',
        'Амурская область',
        'Архангельская область',
        'Астраханская область',
        'Башкортостан республика',
        'Белгородская область',
        'Брянская область',
        'Бурятия республика',
        'Владимирская область',
        'Волгоградская область',
        'Вологодская область',
        'Воронежская область',
        'Дагестан республика',
        'Еврейская автономная область',
        'Забайкальский край',
        'Ивановская область',
        'Ингушетия республика',
        'Иркутская область',
        'Кабардино-Балкария республика',
        'Калининградская область',
        'Калмыкия республика',
        'Калужская область',
        'Камчатский край',
        'Карачаево-Черкесия республика',
        'Карелия республика',
        'Кемеровская область',
        'Кировская область',
        'Коми республика',
        'Костромская область',
        'Краснодарский край',
        'Красноярский край',
        'Крым республика',
        'Курганская область',
        'Курская область',
        'Ленинградская область',
        'Липецкая область',
        'Магаданская область',
        'Марий Эл республика',
        'Мордовия республика',
        'Московская область',
        'Мурманская область',
        'Ненецкий автономный округ',
        'Нижегородская область',
        'Новгородская область',
        'Новосибирская область',
        'Омская область',
        'Оренбургская область',
        'Орловская область',
        'Пензенская область',
        'Пермский край',
        'Приморский край',
        'Псковская область',
        'Ростовская область',
        'Рязанская область',
        'Самарская область',
        'Саратовская область',
        'Саха (Якутия) республика',
        'Сахалинская область',
        'Свердловская область',
        'Северная Осетия - Алания республика',
        'Смоленская область',
        'Ставропольский край',
        'Тамбовская область',
        'Татарстан республика',
        'Тверская область',
        'Томская область',
        'Тульская область',
        'Тыва республика',
        'Тюменская область',
        'Удмуртия республика',
        'Ульяновская область',
        'Хабаровский край',
        'Хакасия республика',
        'Ханты-Мансийский - Югра',
        'Челябинская область',
        'Чечня республика',
        'Чувашия республика',
        'Чукотский автономный округ',
        'Ямало-Ненецкий  автономный округ',
        'Ярославская область'],
      form: {
        name: '',
        phone: '',
        text: '',
        region: '',
        recaptcha_response_invisible: ''
      },
      sending: false,
      politic: false,
    }
  },
  methods: {
    async sendForm() {
      try {
        this.form.recaptcha_response_invisible =
          await this.$recaptcha.getResponse()
        const response = await this.$axios.post(
          'https://krasulatop.ru/api/create-lead',
          this.form
        )
        if(response.status === 201) {
          this.sending = true
          setTimeout(() => this.$store.dispatch('popup/close'), 3000)
        }
        this.$log.info(response)
      } catch (e) {
        this.$log.error(e)
      }
    },
    onError(error) {
      this.$log.error('Recaptcha execute error:', error)
    },
    setValue(input) {
      this.$log.info(input)
      this.form.region = input.value
    },
    openPolitic() {
      this.politic = true
    }
  }
}
</script>

<script setup></script>
