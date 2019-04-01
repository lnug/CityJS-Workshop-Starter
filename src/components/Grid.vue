<template>
    <div :class="$style.parapperTheWrapper">
        <div :class="$style.overlayWrap" v-if="won">
            <div :class="$style.emoji">🎉</div>
            <div :class="$style.winText"><FontAwesomeIcon :icon="winIcon" :class="$style.faTimes" /> wins</div>
        </div>
        <div :class="$style.gridWrap">
            <div :class="$style.row">
                <Square
                    :value="board[0]"
                    :position="0"
                    @squareClicked="handleClick"
                />
                <Square
                    :value="board[1]"
                    :position="1"
                    @squareClicked="handleClick"
                />
                <Square
                    :value="board[2]"
                    :position="2"
                    @squareClicked="handleClick"
                />
            </div>
            <div :class="$style.row">
                <Square
                    :value="board[3]"
                    :position="3"
                    @squareClicked="handleClick"
                />
                <Square
                    :value="board[4]"
                    :position="4"
                    @squareClicked="handleClick"
                />
                <Square
                    :value="board[5]"
                    :position="5"
                    @squareClicked="handleClick"
                />
            </div>
            <div :class="$style.row">
                <Square
                    :value="board[6]"
                    :position="6"
                    @squareClicked="handleClick"
                />
                <Square
                    :value="board[7]"
                    :position="7"
                    @squareClicked="handleClick"
                />
                <Square
                    :value="board[8]"
                    :position="8"
                    @squareClicked="handleClick"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimes, faCircle } from "@fortawesome/free-solid-svg-icons";
import Square from "./Square.vue";
import { moves } from '../api';

export default {
    name: "Grid",
    components: {
        Square,
        FontAwesomeIcon,
    },
    props: {
        turn: String,
        locked: Boolean,
        game: String,
    },
    data() {
        return {
            won: null,
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
    computed: {
        winIcon() {
            return this.won === 'times' ? faTimes : faCircle
        }
    },
    methods: {
        handleClick: async function(position) {
            if (this.locked) {
                return;
            }
            if (!this.board[position]) {
                await moves.addMove({ game: this.game, board: Object.values(this.board), move: { cell: position, value: this.turn}})
                this.board[position] = this.turn;
                this.win();
                this.$emit("turnSwitch");
            }
        },
        handleReset() {
            const theBoard = this.board;
            Object.keys(theBoard).forEach(function(key) {
                return (theBoard[key] = null);
            });
            this.won = null
        },
        win: function() {
            if (
                (this.board[0] &&
                    this.board[0] === this.board[1] &&
                    this.board[1] === this.board[2]) ||
                (this.board[3] &&
                    this.board[3] === this.board[4] &&
                    this.board[4] === this.board[5]) ||
                (this.board[6] &&
                    this.board[6] === this.board[7] &&
                    this.board[7] === this.board[8]) ||
                (this.board[0] &&
                    this.board[0] === this.board[3] &&
                    this.board[3] === this.board[6]) ||
                (this.board[1] &&
                    this.board[1] === this.board[4] &&
                    this.board[4] === this.board[7]) ||
                (this.board[2] &&
                    this.board[2] === this.board[5] &&
                    this.board[5] === this.board[8]) ||
                (this.board[0] &&
                    this.board[0] === this.board[4] &&
                    this.board[4] === this.board[8]) ||
                (this.board[3] &&
                    this.board[3] === this.board[4] &&
                    this.board[4] === this.board[6])
            ) {
                this.$emit("win", this.turn);
                this.won = this.turn
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

.parapperTheWrapper {
    position: relative;
}

.overlayWrap {
    background-color: rgba(88, 88, 88, 0.8);
    z-index: 999;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.emoji {
    font-size: 50px;
}

.winText {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    color: #ffffff;
    font-weight: bold;
}

.faTimes {
    font-size: 60px;
    color: #6Eb7F8;
    padding-right: 30px;
}

.faCircle {
    font-size: 60px;
    color: #DF6C69;
    padding-right: 30px;
}
</style>
