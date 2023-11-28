type Square = {
    iLo: number,
    iHi: number,
    jLo: number,
    jHi: number,
}


function initBoard(): Square[] {
    return [
        { iLo: 0, iHi: 3, jLo: 0, jHi: 3 } as Square,
        { iLo: 3, iHi: 6, jLo: 0, jHi: 3 } as Square,
        { iLo: 6, iHi: 9, jLo: 0, jHi: 3 } as Square,

        { iLo: 0, iHi: 3, jLo: 3, jHi: 6 } as Square,
        { iLo: 3, iHi: 6, jLo: 3, jHi: 6 } as Square,
        { iLo: 6, iHi: 9, jLo: 3, jHi: 6 } as Square,

        { iLo: 0, iHi: 3, jLo: 6, jHi: 9 } as Square,
        { iLo: 3, iHi: 6, jLo: 6, jHi: 9 } as Square,
        { iLo: 6, iHi: 9, jLo: 6, jHi: 9 } as Square,
    ]
}
export function isValidSudoku(board: string[][]): boolean {
    // iterate rows
    for (let r = 0; r < 9; r++) {
        const numMap: Map<string, boolean> = new Map();
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === ".") { continue; }
            if (numMap.has(board[r][c])) { return false; }
            numMap.set(board[r][c], true);
        }
    }
    // iterate columns
    for (let col = 0; col < 9; col++) {
        const numMap: Map<string, boolean> = new Map();
        for (let cell = 0; cell < 9; cell++) {
            if (board[cell][col] === ".") { continue; }
            if (numMap.has(board[cell][col])) { return false; }
            numMap.set(board[cell][col], true);
        }
    }

    // iterate squares
    const boardIdxs = initBoard();
    for (let sq = 0; sq < boardIdxs.length; sq++) {
        const square = boardIdxs[sq];
        const numMap: Map<string, boolean> = new Map();
        // iterate rows
        for (let r = square.iLo; r < square.iHi; r++) {
            for (let c = square.jLo; c < square.jHi; c++) {
                if (board[r][c] === ".") { continue; }
                if (numMap.has(board[r][c])) { return false; }
                numMap.set(board[r][c], true);
            }
        }
    }
    return true;
};