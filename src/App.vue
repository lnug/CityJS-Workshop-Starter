<template>
    <div id="app">
        <div>
            <CurrentTurn :turn="turn" />
            <Grid :turn="turn" @turnSwitch="handleNextTurn" />
            <SplitButton/>
            <WinBanner />
        </div>
    </div>
</template>

<script>
import Grid from "./components/Grid.vue";
import SplitButton from "./components/SplitButton.vue";
import CurrentTurn from "./components/CurrentTurn.vue"
import WinBanner from "./components/WinBanner.vue"

export default {
    name: "app",
    components: {
        Grid,
        SplitButton,
        CurrentTurn,
        WinBanner
    },
    data() {
        return {
            turn: "times",
            win: null,
        };
    },
    methods: {
      handleNextTurn: function() {
        this.turn = this.turn === "times" ? "circle" : "times";
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
