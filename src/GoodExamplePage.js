import React from 'react'
import './GoodExamplePage.css'
import plusIcon from './img/plus-icon.png'
import avatar1 from './img/avatar1.png'
import avatar2 from './img/avatar2.png'
import avatar3 from './img/avatar3.png'

export const GoodExamplePage = () => (
  <main className="goodExample">
    <div className="title">
      <h1>Good Example Page</h1>
      <p>
        This page is nearly identical to the Bad Example Page but is nice and
        accessible.
      </p>
    </div>

    <div className="additionalLinks section">
      <h2>Links</h2>
      <p>
        You can find some good resources on accessibility at the{' '}
        <a href="https://www.w3.org/TR/WCAG21/">WCAG docs</a>,{' '}
        <a href="https://www.w3.org/WAI/WCAG21/quickref/">
          WCAG quick reference
        </a>
        , and from{' '}
        <a href="https://uxdesign.cc/your-web-accessibility-checklist-ec26b372975f">
          this accessibility checklist
        </a>
        .
      </p>
    </div>

    <div className="listOfItems section">
      <h2>Lists and Buttons</h2>
      <p>
        This is my shopping list:
        <button
          className="addItemButton"
          onClick={() => alert('Adding a new item!')}
          title="Add item"
        >
          <img src={plusIcon} alt="Add item to list" />
        </button>
      </p>
      <ul className="listContents">
        <li>
          Eggs{' '}
          <button
            onClick={() => alert('Removing eggs from list!')}
            aria-label="Remove item: Eggs"
          >
            Remove
          </button>
        </li>
        <li>
          Bread{' '}
          <button
            onClick={() => alert('Removing bread from list!')}
            aria-label="Remove item: Bread"
          >
            Remove
          </button>
        </li>
        <li>
          Milk{' '}
          <button
            onClick={() => alert('Removing milk from list!')}
            aria-label="Remove item: Milk"
          >
            Remove
          </button>
        </li>
      </ul>
    </div>

    <div className="buttons section">
      <h2>Buttons</h2>
      <p>Some styled buttons to click!</p>
      <button
        className="styledButton"
        onClick={() => alert('You have clicked me! Good choice.')}
      >
        Show Alert 1
      </button>
      <button
        className="styledButton"
        onClick={() => alert('You have clicked me! Good choice too.')}
      >
        Show Alert 2
      </button>
      <button
        className="styledButton"
        onClick={() => alert('You have clicked me! Excellent choice.')}
      >
        Show Alert 3
      </button>
    </div>

    <div className="meetTheTeam section">
      <h2>Images</h2>
      <p>Meet the team!</p>
      <div className="avatarsContainer">
        <img src={avatar3} alt="Jennifer" />
        <img src="/intentionally/bad/path/fakeImage.png" alt="Thomas" />
        <img src={avatar1} alt="Sarah" />
        <img src={avatar2} alt="Chad" />
      </div>
    </div>

    <div className="tableData section">
      <h2>Tables</h2>
      <p>Let's look at some data.</p>
      <p>
        Which of the following is your primary desktop/laptop screen reader?
      </p>
      <table className="tableBody">
        <thead>
          <tr>
            <th scope="col" className="tableHeader tableDataItem">
              Screen Reader
            </th>
            <th scope="col" className="tableHeader tableDataItem">
              % Respondents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tableDataItem">NVDA</td>
            <td className="tableDataItem">40.6%</td>
          </tr>
          <tr>
            <td className="tableDataItem">JAWS</td>
            <td className="tableDataItem">40.1%</td>
          </tr>
          <tr>
            <td className="tableDataItem">VoiceOver</td>
            <td className="tableDataItem">12.9%</td>
          </tr>
          <tr>
            <td className="tableDataItem">Narrator</td>
            <td className="tableDataItem">2.0%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="forms section">
      <h2>Forms</h2>
      <p>Please provide your contact info.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          alert('Form submitted!')
        }}
      >
        <div className="formGroup">
          <label className="label" htmlFor="firstName">
            First Name
          </label>
          <input id="firstName" className="textInput" placeholder="John" />
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="lastName">
            Last Name
          </label>
          <input id="lastName" className="textInput" placeholder="Doe" />
        </div>
        <div className="formGroup">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="textInput"
            type="email"
            placeholder="john.doe@email.com"
            id="email"
          />
        </div>
        <div className="formGroup">
          <label className="label" htmlFor="birthDate">
            Date of Birth
            <br />
            (MM/DD/YYYY)
          </label>
          <input className="textInput" id="birthDate" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </main>
)
