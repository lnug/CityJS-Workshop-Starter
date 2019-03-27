<template>
    <div>
        <div :class="$style.gridWrap">
            <div :class="$style.row">
                <Square :value="board[0]" :position="0" @squareClicked="handleClick"/>
                <Square :value="board[1]" :position="1" @squareClicked="handleClick"/>
                <Square :value="board[2]" :position="2" @squareClicked="handleClick"/>
            </div>
            <div :class="$style.row">
                <Square :value="board[3]" :position="3" @squareClicked="handleClick"/>
                <Square :value="board[4]" :position="4" @squareClicked="handleClick"/>
                <Square :value="board[5]" :position="5" @squareClicked="handleClick"/>
            </div>
            <div :class="$style.row">
                <Square :value="board[6]" :position="6" @squareClicked="handleClick"/>
                <Square :value="board[7]" :position="7" @squareClicked="handleClick"/>
                <Square :value="board[8]" :position="8" @squareClicked="handleClick"/>
            </div>
        </div>
    </div>
</template>

<script>
import Square from "./Square.vue";

export default {
    name: "Grid",
    components: {
        Square
    },
    props: {
        turn: String,
    },
    data() {
        return {
            board: {
                0: null,
                1: null,
                2: null,
                3: null,
                4: null,
                5: null,
                6: null,
                7: null,
                8: null
            }
        };
    },
    methods: {
        handleClick: function(position) {
            this.win()
            if (!this.board[position]) {
                this.board[position] = this.turn;
                this.$emit('turnSwitch')
            }
        },
        win: function() {
            console.log('hello')
            if (
                (this.board[0] === this.board[1]) && this.board[1] === this.board[2] ||
                (this.board[3] === this.board[4]) && this.board[4] === this.board[5] ||
                (this.board[6] === this.board[7]) && this.board[7] === this.board[8] ||
                (this.board[0] === this.board[3]) && this.board[3] === this.board[6] ||
                (this.board[1] === this.board[4]) && this.board[4] === this.board[7] ||
                (this.board[2] === this.board[5]) && this.board[5] === this.board[8] ||
                (this.board[0] === this.board[4]) && this.board[4] === this.board[8] ||
                (this.board[3] === this.board[4]) && this.board[4] === this.board[6]
            ) {
                console.log(this.turn)
                this.$emit('win', this.turn)
                return "true";
            }
            return "false";
        }
    }
};
</script>

<style module>
.gridWrap {
    display: flex;
    flex-direction: column;
}

.row {
    display: flex;
    flex-direction: row;
}
</style>
