"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw } from "lucide-react"

export function Game() {
  return (
    <section id="game" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Let's Play a Game</h2>
          <div className="w-20 h-1 bg-primary"></div>
          <p className="text-muted-foreground max-w-[600px] mt-4 text-base sm:text-lg md:text-xl">Take a break and play a quick game of Tic-Tac-Toe!</p>
        </div>

        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-xl sm:text-2xl">Tic-Tac-Toe</CardTitle>
              <CardDescription className="text-center text-sm sm:text-base">Challenge yourself or play with a friend</CardDescription>
            </CardHeader>
            <CardContent>
              <TicTacToe />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return
    }

    const newSquares = squares.slice()
    newSquares[i] = xIsNext ? "X" : "O"
    setSquares(newSquares)
    setXIsNext(!xIsNext)
  }

  const renderSquare = (i: number) => {
    const value = squares[i]
    const colorClass = value === "X" ? "text-red-500" : value === "O" ? "text-green-500" : ""
    
    return (
      <button
        className={`w-16 h-16 sm:w-20 sm:h-20 border border-muted-foreground/20 text-2xl font-bold flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-200 hover:bg-muted/10 ${colorClass} ${value === "X" ? "hover:bg-red-50" : value === "O" ? "hover:bg-green-50" : ""}`}
        onClick={() => handleClick(i)}
      >
        {squares[i]}
      </button>
    )
  }

  const winner = calculateWinner(squares)
  let status
  let statusClass = "mb-4 text-base sm:text-lg font-medium"

  if (winner) {
    status = `Winner: ${winner}`
    statusClass += winner === "X" ? " text-red-500" : " text-green-500"
  } else if (squares.every((square) => square)) {
    status = "Game ended in a draw!"
    statusClass += " text-primary"
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`
    statusClass += xIsNext ? " text-red-500" : " text-green-500"
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  return (
    <div className="flex flex-col items-center">
      <div className={statusClass}>{status}</div>
      <div className="grid grid-cols-3 gap-1 mb-4 bg-muted/5 p-2 rounded-lg">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <Button 
        onClick={resetGame} 
        variant="outline" 
        className="flex items-center gap-2 hover:bg-muted/20"
      >
        <RefreshCw className="w-4 h-4" /> Reset Game
      </Button>
    </div>
  )
}

function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
}
