# CSC193A-assignment5
1.[X] The first task is to expand fancifymytext.html by adding UI controls. Add HTML code for the following:

A field for users to enter large (multi-line) amounts of text.
It should be 4 rows by 30 columns in size.
Wrap it in a bordered field set box with the label "Text".
Add a second bordered field set box labeled "Fancify" that contains the following controls:
A button labeled: Bigger!
Two radio buttons labeled "FancyShmancy" and "BoringBetty"

2.[x] Create a new file and save it as fancifymytext.js.
Modify your JS code so that when the user clicks "Bigger", the text in the text area will get larger.

Make sure your text area has an id attribute so your JS code can talk to it.
Modify your JS function so that it now changes the text area's font size to 24pt .

3.[x] Add an event handler so that when the user sets the "FancyShmancy" radio button, the text area will receive some styles.  If they set the "BoringBetty" radio button, the styles go away.

Add an onchange on the radio button that calls a function that pops up an alert.
Modify your new function to set the text area's font weight to bold.
You can see if a radio button is set by checking its checked property. (Give it an id.)
When the radio button is switched to the "BoringBetty", the font weight should go back to normal.
Once the bold part works, let's add some additional styles to the text when "FancyShmancy" radio button is selected:
change its color to blue
underline the text (this is the CSS text-decorationLinks to an external site. property)
Keep the bold styling as well -- in total selecting the "FancyShmancy" radio button, should make the text bold, underline, and blue.

4.[x] Add a new button to the HTML with the text "Moo" that, when clicked, uppercases the text in the text area.
Use the value property of the text area.
Modify your button so that it also adds a suffix of "-Moo" to the last word of each sentence.
Consider a sentence to be a string of text that ends with a period character, "." .
Use the String/array methods split and join. 

[x] Video walkthrough
<div>
    <a href="https://www.loom.com/share/3b6ff76d2a374a0a92295dac5032ce76?sid=5b4688a5-9ea2-4d31-8804-abae0b1a6b00">
    </a>
    <a href="https://www.loom.com/share/3b6ff76d2a374a0a92295dac5032ce76?sid=5b4688a5-9ea2-4d31-8804-abae0b1a6b00">
      <img style="max-width:700px;" src="https://cdn.loom.com/sessions/thumbnails/173aa68c5b5d403ca68e53a9ca793f00-with-play.gif">
    </a>
  </div>
