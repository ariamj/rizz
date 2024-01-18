"use client"

import { useState } from 'react'
import Form from "@/components/Form"
import Result from "@/components/Result"
import { calculate } from "@/utility/helpers" // I added this function beforehand

export default function Home() {

  // "useState" takes care of implementation of "setScore"
  const [ score, setScore ] = useState(0)

  function calculateScore(name, major) {
    // alert('hi')
    // setScore(999)
    setScore(calculate(name, major))
  }

  return (
    <main style={{
      padding: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }}>
      <img 
        src="/images/teddy.png" 
        alt="Insanely built teddy hauling an inordinately large domino (not the pizza)"
        style={{ width: 100 }} />
      <h1>Rizzulator 👋</h1>
      <p>
        We're so glad you're here :)
      </p>

      {/* {score == 0 && ( //"&" will always compare both sides, "&&" compares first then second only if needed
        <Form handleCalculate={calculateScore} />
      )} */}

      {score == 0 ?
        <Form handleCalculate={calculateScore} />
        : <Result score={score} />
      }
    </main>
  )
}
