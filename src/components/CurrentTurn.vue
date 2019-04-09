<template>
    <div :class="$style.squareWrap" @click="handleClick">
        <FontAwesomeIcon :icon="timesIcon" :class="$style.faTimes" v-if="turn === -1" />
        <FontAwesomeIcon :icon="circleIcon" :class="$style.faCircle" v-if="turn === 1" />'s turn
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimes, faCircle } from "@fortawesome/free-solid-svg-icons";

export default {
    name: "CurrentTurn",
    props: {
        turn: Number,
    },
    components: {
        FontAwesomeIcon,
    },
    computed: {
        timesIcon() {
            return faTimes
        },
        circleIcon() {
            return faCircle
        }
    },
    methods: {
        handleClick: function() {
            this.$emit('squareClicked', this.position)
        }
    }
};
</script>

<style module>
.squareWrap {
    background-color: #2a2a2a;
    border-radius: 3px;
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    height: 60px;
    color: #ffffff;
}

.faTimes {
    font-size: 30px;
    color: #6Eb7F8;
    padding-right: 10px;
}

.faCircle {
    font-size: 30px;
    color: #DF6C69;
    padding-right: 10px;
}
</style>
