import react from 'react';

function PersonalNotes() {
  return (
    <div>
      <h1>Personal Notes</h1>
      <h2>CSS resources</h2>
      <ul>
        <li>Tailwind colors</li>
      </ul>
      <h2>CSS</h2>
      <h3>positions</h3>
      <ul>
        <li>static(default)</li>
        <li>relative(gap maintained)</li>
        <li>absolute(gap gone)</li>
        <li>fixed(for the whole page)</li>
        <li>stiky(fixed for the current container)</li>
      </ul>
      <h3>SizeUnits</h3>
      <ul>
        <li>px</li>
        <li>vh/vw(how much of the whole viewport)</li>
        <li>%(how much % of the container)</li>
        <li>em(relative to the font size of the container)</li>
        <li>rem(relative to the font size of the root element)</li>
      </ul>
      <h3>Float</h3>
      <ul>
        <li>float(flloat left/float right)</li>
        <li>clear(if already resent take the content to the new place)</li>
        <li>overflow(scroll,hide,etc.)</li>
      </ul>
      <h3>Flex</h3>
      <ul>
        <li>display:flex</li>
        <li>flex-direction:row/column</li>
        <li>flex-wrap:wrap/wrap-reverse</li>
      </ul>
      <h3>Flex</h3>
      <ul>
        <li>display:flex</li>
        <li>flex-direction:row/column</li>
        <li>flex-wrap:wrap/wrap-reverse</li>
      </ul>
    </div>
  )
}

export default PersonalNotes;