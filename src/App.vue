<template>
  <div id="app">
    <main class="game">
      <div class="container">
        <div class="game-inner">
          <h1 class="game__title">Simon Says</h1>
          <div class="game">
            <div class="circle">
              <button
                :class="[
                  'button',
                  'circle__button',
                  { 'circle__button--active': button.active }
                ]"
                :value="button.id"
                v-for="button in buttons"
                :key="button.id"
                @click="buttonClickHandler(button.id)"
              />
            </div>
            <aside class="controls">
              <h2 class="controls__title">Раунд: {{ rounds }}</h2>
              <button class="button controls__button" @click="start">
                Start
              </button>
              <h3 v-if="lastRound">
                Вы проиграли после {{ lastRound }} раунда
              </h3>
              <h2 class="controls__title">Уровень сложности:</h2>
              <div class="controls__radio-group">
                <label
                  :for="`input-${option.id}`"
                  v-for="(option, index) in options"
                  :key="option.id"
                  class="controls__label"
                >
                  <input
                    :id="`input-${option.id}`"
                    type="radio"
                    class="controls__radio"
                    :value="index"
                    v-model="selectedOption"
                  />
                  {{ option.label }}
                </label>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      rounds: 1,
      lastRound: null,
      options: [
        { id: 1, delay: 1.5, label: 'Легкий' },
        { id: 2, delay: 1, label: 'Средний' },
        { id: 3, delay: 0.4, label: 'Сложный' }
      ],
      selectedOption: 0,
      buttons: [
        {
          id: 1,
          active: false
        },
        {
          id: 2,
          active: false
        },
        {
          id: 3,
          active: false
        },
        {
          id: 4,
          active: false
        }
      ],
      game: [],
      user: []
    }
  },
  computed: {
    delay() {
      return this.options[this.selectedOption].delay
    },
    userString() {
      return this.user.join('').slice(0, this.user.length)
    },
    gameString() {
      return this.game.join('').slice(0, this.user.length)
    },
    gameEnd() {
      return this.userString !== this.gameString
    },

    /* Проверка на правильную последовательность */
    correctSequence() {
      /**
       * Условия:
       * Посл-ть игрока должна быть правильной
       * Длинны массивов посл-ей должный быть равны и не быть пустыми
       */
      const conditions = [
        this.userString === this.gameString,
        this.user.length === this.game.length,
        this.user.length !== 0,
        this.game.length !== 0
      ]
      return conditions.every(v => v)
    }
  },
  methods: {
    buttonClickHandler(id) {
      this.user.push(id)
      this.showButtonWithDelay(id)
      this.playSound(id)
    },
    playSound(id) {
      const audio = new Audio(require(`@/sounds/${id}.ogg`))
      audio.play()
    },
    clear() {
      this.rounds = 1
      this.lastRound = null
      this.user = []
      this.game = []
    },
    start() {
      this.clear()
      this.add()
      this.showSequence()
    },
    add() {
      const randId = Math.floor(Math.random() * 4) + 1
      this.game.push(randId)
    },
    toggleButton(id, value) {
      const button = this.buttons.find(b => b.id === id)
      button.active = value
    },
    /**
     * Подсвечивает кнопку
     * И через указанное время выключает ее
     * delay < 400 для устранения постоянного свечения
     */
    showButtonWithDelay(id, delay = 300) {
      this.toggleButton(id, true)
      setTimeout(() => {
        this.toggleButton(id, false)
      }, delay)
    },

    showSequence() {
      const sequence = [...this.game]
      // delay in seconds
      const delay = this.delay * 1000

      sequence.map((id, index) => {
        setTimeout(() => {
          this.showButtonWithDelay(id)
          this.playSound(id)
        }, delay * index)
      })
    }
  },
  watch: {
    /**
     * При проигрыше показывается сообщение
     * с достигнутым раундом
     */
    gameEnd(val) {
      if (val) {
        this.lastRound = this.rounds
      }
    },
    correctSequence(val) {
      /**
       * Если последовательность правильная
       * Добавляем новый элемент
       * Чистим последовательность игрока
       * Инкрементируем счетчик раундов
       */
      if (val) {
        this.add()
        this.user = []
        this.rounds += 1

        /* Небольшая задержка перед началом нового раунда */
        setTimeout(() => {
          this.showSequence()
        }, 1000)
      }
    }
  }
}
</script>

<style lang="scss">
$blue: #1e90ff;
$red: #ff5643;
$yellow: #feef33;
$green: #bede15;
$colors: (
  1: $blue,
  2: $red,
  3: $yellow,
  4: $green
);
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button {
  margin: 0;
  padding: 0;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
}
.container {
  padding: 0 15px;
  max-width: 1200px;
  width: 100%;
}
.circle {
  border-radius: 50%;
  display: flex;
  flex: 0 1 300px;
  flex-wrap: wrap;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  &__button {
    margin: 0;
    padding: 0;
    appearance: none;
    border: none;
    width: 50%;
    height: 50%;
    &--active {
      opacity: 1 !important;
    }
  }
  @each $index, $color in $colors {
    & > :nth-child(#{$index}) {
      background-color: $color;
      opacity: 0.7;
      &:hover {
        border: 2px solid black;
      }
    }
  }
  & > :nth-child(1) {
    border-radius: 100% 0 0 0;
  }
  & > :nth-child(2) {
    border-radius: 0 100% 0 0;
  }
  & > :nth-child(3) {
    border-radius: 0 0 0 100%;
  }
  & > :nth-child(4) {
    border-radius: 0 0 100% 0;
  }
}
.controls {
  display: flex;
  flex-flow: column;
  &__button {
    background-color: $blue;
    border-radius: 8px;
    padding: 8px;
    font-size: 16px;
    color: cornsilk;
  }
  &__radio-group {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
  }
  &__label {
    cursor: pointer;
    & ~ & {
      margin-top: 6px;
    }
  }
  &__radio {
    margin: 0;
  }
}
.game {
  display: flex;
  justify-content: center;
  gap: 50px;
  &__title {
    margin-top: 0;
    margin-bottom: 60px;
  }
}
</style>
