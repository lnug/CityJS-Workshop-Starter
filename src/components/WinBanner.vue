<template>
    <div :class="$style.squareWrap" id="confetti" @click="handleClick" v-if="win">
        <FontAwesomeIcon :icon="timesIcon" :class="$style.faTimes" v-if="win === 'times'" />
        <FontAwesomeIcon :icon="circleIcon" :class="$style.faCircle" v-if="win === 'circle'" />'s turn
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimes, faCircle } from "@fortawesome/free-solid-svg-icons";

export default {
    name: "WinBanner",
    props: {
        win: String,
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
        },
    },
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
