**Instructions**

1. Clone this repo
2. Navigate to the 'chess-exercise' directory from the command prompt
3. Run 'npm install'
4. After installation completes, run 'npm start'
5. Visit http://localhost:3000/

To play, select one of the two pieces, then select where you would like to place it.

- When a piece is selected, it will be highlighted orange
- After selecting a piece, valid moves will be highlighted in green when the cursor hovers over them
  - Because both pieces are the same color, the bishop cannot travel through a square occupied but the knight, but the knight can jump over the bishop. This is reflected in the square highlighting
- If a piece is placed in an invalid spot, that spot will be highlighted red until a valid move is made
- Pieces can be picked up and put down without moving