import { useState } from "react"
import styled from "styled-components"

export default function App() {
  const [showText, setShowText] = useState(false)

  const handleClick = () => {
    setShowText(!showText)
  }

  return (
    <Div>
      <Button onClick={handleClick}>
        {showText ? "Hide Text" : "Show Text"}
      </Button>
      {showText && <p>Hello, this is the new text!</p>}
    </Div>
  )
}

const Div = styled.div`
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #002900;
`

const Button = styled.button`
  background-color: #00bd65;
  border-color: #48a35a;
  color: #002900;
  border-radius: 20px;
  padding: 10px 20px;
`
