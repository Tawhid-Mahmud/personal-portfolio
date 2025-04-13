"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw } from "lucide-react"

export function Game() {
  return (
    <section id="game" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Play a Game</h2>
          <div className="w-20 h-1 bg-primary"></div>
          <p className="text-muted-foreground max-w-[600px] mt-4">Take a break and play a quick game of Tic-Tac-Toe!</p>
        </div>

        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Tic-Tac-Toe</CardTitle>
              <CardDescription className="text-center">Challenge yourself or play with a friend</CardDescription>
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

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return
    }

    const newSquares = squares.slice()
    newSquares[i] = xIsNext ? "X" : "O"
    setSquares(newSquares)
    setXIsNext(!xIsNext)
  }

  const renderSquare = (i) => {
    return (
      <button
        className="w-20 h-20 border border-muted-foreground/20 text-2xl font-bold flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        onClick={() => handleClick(i)}
      >
        {squares[i]}
      </button>
    )
  }

  const winner = calculateWinner(squares)
  let status

  if (winner) {
    status = `Winner: ${winner}`
  } else if (squares.every((square) => square)) {
    status = "Game ended in a draw!"
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-lg font-medium">{status}</div>
      <div className="grid grid-cols-3 gap-1 mb-4">
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
      <Button onClick={resetGame} variant="outline" className="flex items-center gap-2">
        <RefreshCw className="w-4 h-4" /> Reset Game
      </Button>
    </div>
  )
}

function calculateWinner(squares) {
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
