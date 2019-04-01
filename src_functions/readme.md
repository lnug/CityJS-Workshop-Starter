# Functions

When deployed all functions are prefixed with .netlify/functions/<function_name_here>

Development functions

These functions are meant to save games to build an AI ¯\_(ツ)_/¯
POST /move

Saves an object of this shape in mongodb
```javascript

  game: {
    type: String,
  },
  board: [String],
  move: {
    cell: {
      type: Number,
      min: 0,
      max: 8,
    },
    value: {
      type: String,
      enum: ['o', 'x'],
    }
  }
}
```