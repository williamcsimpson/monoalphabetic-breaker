import React from 'react';
import { 
  Box, 
  Heading,
  Markdown,
  Text,
} from 'grommet';

function ArticleText() {
    return (
        <div>
            <Heading level='2' textAlign='center'>Breaking A Monoalphabetic Encryption System Using a Known Plaintext Attack</Heading>
            <Heading level='3' textAlign='start'>How it works</Heading>
                <Text>
                    We recall that Monoalphabetic substitution is a system of encryption where every occurrence of a particular plaintext letter is replaced by a cyphertext letter. For instance, Caesar substitution is monoalphabetic while Vigenere is not. A 2x2 Hill encryption is a monoalphabetic substitution acting on pairs of letters. Keep in mind that the definition of a monoalphabetic substitution allows for the possibility that two distinct plaintext letters are replaced by the same cyphertext letter. However, to break this system using a known plaintext attack, we will require that any two distinct plaintext letters are replaced by two distinct cyphertext letters.
                    <br/>
                    <br/>
                    To encrypt (decrypt) using the web app below, simply cut and paste your plaintext (cyphertext) into the textarea, select Encrypt (Decrypt) and start entering your key. The plaintext (cyphertext) will be encoded (decoded) as you enter the key. To enter a key, first click in the square below (above) the plaintext (cyphertext) letter you want to encrypt (decrypt). The square should now be highlighted in yellow. Now type the corresponding cyphertext (plaintext) letter. The square to the right should now be highlighted. To delete a letter, click on the appropriate box and simply press Back Space or Del. The Space Bar and Arrow keys can be used to cycle through the key without editing it. Notice that letters that do not yet occur in the key are shaded gray.
                    <br/>
                    <br/>
                    <b>IMPORTANT:</b> The web app allows for the partial encryption/decryption of a monoalphabetic substitution. To this end, we will use the convention that plaintext letters are always in uppercase and cyphertext letters are always in lowercase.
                    <br/>
                    <br/>
                    To break a monoalphabetic substitution using a known plaintext attack, we can take advantage of the fact that any pair of letters in the original plaintext message is replaced by a pair of letters with the same pattern. In other words, if two letters of paintext are distinct, then their corresponding letters of cyphertext must also be distinct. To illustrate this, if we know that the word "AMMUNITION" appears in the plaintext, then we can look for strings of 10 consecutive letters of cyphertext that have the following pattern:
                    <ul>
                        <li>The 2<sup>nd</sup> and 3<sup>rd</sup> letters are the same</li>
                        <li>The 5<sup>th</sup> and 10<sup>th</sup> letters are the same (and different from the 2<sup>nd</sup> letter)</li>
                        <li>The 6<sup>th</sup> and 8<sup>th</sup> letters are the same (and different from the 2<sup>nd</sup> and 5<sup>th</sup> letters)</li>
                        <li>All other letters are distinct.</li>
                    </ul>
                    Once we have found all possible matches, we can use a chi-squared statistic to determine which one is the most likely match for the known plaintext. The lower the statistic is, the more likely that match corresponds to the plaintext.
                </Text>
            <Heading level='3' textAlign='start'>How to use</Heading>
                <Text>
                    <ul>
                        <li>Upon pressing the Random Cyphertext button, the web app will display some text which was encrypted using a Monoalphabetic Substitution with a randomly selected key.</li>
                        <li>Press the Break button. Enter a word that you know/believe to be part of the original plaintext message and press Search or the Return key. The Applet will calculate all possible matches for the search word and display a list of results(in groups of 10). You may sort these results from best to worst by Chi Square or Frequency by clicking on their corresponding labels.</li>
                        <li>To see a list of the single letter frequencies taken from the cyphertext, enter a one letter search word and press Search.</li>
                        <li>Some possible matches might conflict with the parts of the key you have already determined. The number in the conflicts column indicates the number of conflicts that that match has with the key. For example, suppose that you have already determined T->q and E->j and you search for the word "THE". You should only be interested in the possible matches of the form "q_j". So if "qfk" is a possible match, you will see a 1 in the conflicts column next to this match since it conflicts with your assumption that E->j. Likewise, "qjy" would a 2 next to it since it violates E->j in two different ways, namely H->j and E->y.</li>
                        <li>To list only those possible matches that do not conflict with the current key, check the Hide Conflicts box.</li>
                        <li>Once you have selected a possible match for your search word, press the Confirm button, and this selection will be incorporated into the current key and the message will be partially decrypted.</li>
                        <li>Now, you hopefully will have enough of the message decoded to start making some guesses as to what other letters of cyphertext might be.</li>
                    </ul>
                </Text>
        </div>
    );
}

export default ArticleText;