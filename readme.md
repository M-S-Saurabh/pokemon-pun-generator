Generate Pokemon puns
------------------------
[Visit the App on Heroku](https://pokemon-pun-generator.herokuapp.com/)

Usage
-------
Type a sentence into the textbox and submit. For e.g.
<pre>
The quick brown fox jumped over the lazy dog
</pre>

The result sentence shown will contain a pokemon pun like: <pre>
the **Klink** browne foxx jumped over the lazy dog
</pre>


Method
------
- Get list of pokemons and their IPA pronunciations
- Get list of dictionary words and their IPA pronunciations.
- Take an input sentence from the user.

- Convert the words in the sentence into IPA forms.

- Find the pokemon IPA that has the best match with any words in the sentence.
- replace that word with the pokemon IPA and return the sentence.
