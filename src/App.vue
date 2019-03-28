<template>
    <div id="app">
        <div>
            <CurrentTurn :turn="turn" />
            <Grid :turn="turn" @turnSwitch="handleNextTurn" :locked="locked" @win="handleWin" ref="grid" />
            <SplitButton/>
            <WinBanner />
            <Button @clicked="resetGame">Reset</Button>
        </div>
    </div>
</template>

<script>
import Grid from "./components/Grid.vue";
import Button from "./components/Button.vue"
import SplitButton from "./components/SplitButton.vue";
import CurrentTurn from "./components/CurrentTurn.vue"
import WinBanner from "./components/WinBanner.vue"

export default {
    name: "app",
    components: {
        Grid,
        SplitButton,
        CurrentTurn,
        WinBanner,
        Button,
    },
    data() {
        return {
            turn: "times",
            win: null,
            locked: false,
        };
    },
    methods: {
      handleNextTurn() {
        this.turn = this.turn === "times" ? "circle" : "times";
      },
      handleWin() {
          this.locked = true
      },
      resetGame: function() {
          this.locked = false;
          this.$refs.grid.handleReset() // I don't like this....
      }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

html {
    background-color: #1c1c1c;
}

body {
    margin: 0;
    padding: 0;
}
</style>
