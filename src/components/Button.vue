<template>
    <div
        :class="$style.buttonWrapper"
        @click="handleClick"
    >
        <div :class="$style.buttonInner">
            <slot>I am Button</slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Button",
    methods: {
        handleClick: function() {
            this.$emit('clicked')
        }
    }
};
</script>

<style module>
.buttonWrapper {
    padding: 9px 15px;
    background-color: #f87e6e;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
}
</style>
