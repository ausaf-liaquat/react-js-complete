import logo from "../../../public/investment-calculator-logo.png";
import React from 'react'

export default function Header() {
  return (
    <header id="header">
        <img src={logo} alt="" />
        <h1>Investment Calculator</h1>
    </header>
  )
}
