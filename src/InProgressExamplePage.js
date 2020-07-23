import React from 'react'
import './InProgressExamplePage.css'
import plusIcon from './img/plus-icon.png'
import avatar1 from './img/avatar1.png'
import avatar2 from './img/avatar2.png'
import avatar3 from './img/avatar3.png'

export const InProgressExamplePage = () => (
  <div className="inProgressExample">
    <div className="title">
      <h2>In Progress Example Page</h2>
      <h4>
        This page is copied directly from the Bad Example Page and will be our
        copy to modify.
      </h4>
    </div>

    <div className="additionalLinks section">
      <h2>Links</h2>
      <p>
        You can find some good resources on accessibility{' '}
        <a href="https://www.w3.org/TR/WCAG21/" tabIndex="5">
          here
        </a>
        ,{' '}
        <a href="https://www.w3.org/WAI/WCAG21/quickref/" tabIndex="4">
          here
        </a>
        , and{' '}
        <a
          href="https://uxdesign.cc/your-web-accessibility-checklist-ec26b372975f"
          tabIndex="6"
        >
          here
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
        >
          <img src={plusIcon} />
        </button>
      </p>
      <div className="listContents">
        <p>
          Eggs{' '}
          <button onClick={() => alert('Removing eggs from list!')}>
            Remove
          </button>
        </p>
        <p>
          Bread{' '}
          <button onClick={() => alert('Removing bread from list!')}>
            Remove
          </button>
        </p>
        <p>
          Milk{' '}
          <button onClick={() => alert('Removing milk from list!')}>
            Remove
          </button>
        </p>
      </div>
    </div>

    <div className="buttons section">
      <h2>Buttons</h2>
      <p>Some styled buttons to click!</p>
      <button
        className="styledButton"
        onClick={() => alert('You have clicked me! Good choice.')}
      >
        Click me!
      </button>
      <span
        className="styledButton"
        onClick={() => alert('You have clicked me! Good choice too.')}
      >
        No, click me!
      </span>
      <a
        className="styledButton"
        href="#"
        onClick={() => alert('You have clicked me! Excellent choice.')}
      >
        Or, click me!
      </a>
    </div>

    <div className="meetTheTeam section">
      <h2>Images</h2>
      <p>Meet the team!</p>
      <div className="avatarsContainer">
        <img src={avatar3} />
        <img src="/intentionally/bad/path/fakeImage.png" />
        <img src={avatar1} />
        <img src={avatar2} />
      </div>
    </div>

    <div className="tableData section">
      <h2>Tables</h2>
      <p>Let's look at some data.</p>
      <p>
        Which of the following is your primary desktop/laptop screen reader?
      </p>
      <div className="tableBody">
        <div className="tableColumn">
          <div className="tableHeader tableDataItem">Screen Reader</div>
          <div className="tableDataItem">NVDA</div>
          <div className="tableDataItem">JAWS</div>
          <div className="tableDataItem">VoiceOver</div>
          <div className="tableDataItem">Narrator</div>
        </div>
        <div className="tableColumn">
          <div className="tableHeader tableDataItem">% of Respondents</div>
          <div className="tableDataItem">40.6%</div>
          <div className="tableDataItem">40.1%</div>
          <div className="tableDataItem">12.9%</div>
          <div className="tableDataItem">1.0%</div>
        </div>
      </div>
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
          <span className="label">First Name</span>
          <input className="textInput" placeholder="First Name" />
        </div>

        <div className="formGroup">
          <span className="label">Last Name</span>
          <input className="textInput" placeholder="Last Name" />
        </div>
        <div className="formGroup">
          <span className="label">Email</span>
          <input className="textInput" />
        </div>
        <div className="formGroup">
          <span className="label">Date of Birth</span>
          <input className="textInput" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
)
