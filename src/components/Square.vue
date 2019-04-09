<template>
    <div :class="$style.squareWrap" @click="handleClick">
        <FontAwesomeIcon :icon="timesIcon" :class="$style.faTimes" v-if="value === -1" />
        <FontAwesomeIcon :icon="circleIcon" :class="$style.faCircle" v-if="value === 1" />
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimes, faCircle } from "@fortawesome/free-solid-svg-icons";

export default {
    name: "Square",
    props: {
        value: Number,
        position: Number,
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
    width: 100px;
    height: 100px;
    border-radius: 3px;
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.faTimes {
    font-size: 60px;
    color: #6Eb7F8;
}

.faCircle {
    font-size: 60px;
    color: #DF6C69;
}
</style>
