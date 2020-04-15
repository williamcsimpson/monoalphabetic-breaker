import React from 'react';
import { 
  Box, 
  Button,
  Grid,
  Grommet,
  Main,
  RangeInput,
  Text,
  TextArea,
  TextInput,
  Markdown,
  RadioButtonGroup,
  CheckBox,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  RadioButton,
} from 'grommet';
import {
  Add,
  Subtract,
  Previous,
  Next,
} from 'grommet-icons'

const TEMP_LETTERS = ['A', 'B', 'C', '-', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const TEMP_UI = ['e', 'f', 'g', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];

const A_CODE = 65;
const Z_CODE = 90;
const SPACE = ' ';
const LEN_ALPHABET = 26;
const ENGLISH_FREQ = [0.08167, 0.01492, 0.02202, 0.04253, 0.12702, 0.02228, 
                      0.02015, 0.06094, 0.06966, 0.00153, 0.01292, 0.04025, 
                      0.02406, 0.06749, 0.07507, 0.01929, 0.00095, 0.05987,
                      0.06327, 0.09356, 0.02758, 0.00978, 0.02560, 0.00150, 
                      0.01994, 0.00077];

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Courier New',
      size: '18px',
      height: '20px',
    },
  },
};
/*
class KeyDisplay extends React.Component {
  constructor(props) {
    super(props);

    let fillVals = Array(LEN_ALPHABET).fill(true);

    for(let i = 0; i < LEN_ALPHABET; i++) {
      let char = 0;
      if(props.decrypt){
        char = props.plaintext[i].charCodeAt(0);
      } else {
        char = props.cyphertext[i].toUpperCase().charCodeAt(0);
      }
      if(A_CODE <= char && char <= Z_CODE) {
        fillVals[char-A_CODE] = false;
      }
    }

    this.state = {
      decrypt:props.decrypt,
      cyphertext:props.cyphertext,
      plaintext:props.plaintext,
      onClick:props.onClick,
      fill:fillVals
    };
  }

  renderLabel() {
    return(
      <Box>
        <Box
          border='true'
          alignContent='center'
          justify='center'
        >
          <Text>PLAINTEXT</Text>
        </Box>
        <Box
          border='true'
          alignContent='center'
          justify='center'
        >
          <Text>cyphertext</Text>
        </Box>
      </Box>
    )
  }

  renderDisplayBox(i) {
    return (
      <Box
        border='true'
        alignContent='center'
        justify='center'
        align='center'
        background={this.state.fill[i] ? 'light-4': ''}
      >
        <Text>{ this.state.decrypt ? this.state.cyphertext[i]: this.state.plaintext[i]}</Text>
      </Box>

    );
  }
  renderUIBox(i) {
    return (
      <Box
        onClick={()=>(this.state.onClick(i))}
        border='true'
        alignContent='center'
        justify='center'
        align='center'
      >
        <Text>{this.state.decrypt ? this.state.plaintext[i] : this.state.cyphertext[i]}</Text>
      </Box>

    );
  }

  renderCol(i) {
    if(this.state.decrypt) {
      return(
        <Box>
          {this.renderUIBox(i)}
          {this.renderDisplayBox(i)}
        </Box>
      );
    }
    return(
      <Box>
        {this.renderDisplayBox(i)}
        {this.renderUIBox(i)}
      </Box>
    );
  }

  render() {
    let key = [];
    for(let i =0; i < LEN_ALPHABET; i++){
      key.push(this.renderCol(i));
    }
    return(
      <Box direction='row'>
        {this.renderLabel()}
        {key}
      </Box>
    );
  }
}
*/
/* ----------------------------------------------- */

function KeyDisplay(props) {
    let fillVals = Array(LEN_ALPHABET).fill(true);

    for(let i = 0; i < LEN_ALPHABET; i++) {
      let char = 0;
      if(props.decrypt){
        char = props.plaintext[i].charCodeAt(0);
      } else {
        char = props.cyphertext[i].toUpperCase().charCodeAt(0);
      }
      if(A_CODE <= char && char <= Z_CODE) {
        fillVals[char-A_CODE] = false;
      }
    }
    
    let key = [];
    for(let i =0; i < LEN_ALPHABET; i++){
      key.push(renderCol(i, props.plaintext[i], props.cyphertext[i], fillVals[i], props.decrypt, props.onClick));
    }
    return(
      <Box direction='row'>
        {renderLabel()}
        {key}
      </Box>
    );
}

function renderUIBox(i, text, onClick) {
  return (
    <Box
      onClick={()=>(onClick(i))}
      border='true'
      alignContent='center'
      justify='center'
      align='center'
    >
      <Text>{text}</Text>
    </Box>

  );
}

function renderDisplayBox(i, text, fill) {
  return (
    <Box
      border='true'
      alignContent='center'
      justify='center'
      align='center'
      background={fill ? 'light-4': ''}
    >
      <Text>{text}</Text>
    </Box>

  );
}

function renderCol(i, plaintext, cyphertext, fill, decrypt, onClick) {
  if(decrypt) {
    return(
      <Box>
        {renderUIBox(i, plaintext, onClick)}
        {renderDisplayBox(i, cyphertext, fill)}
      </Box>
    );
  }
  return(
    <Box>
      {renderDisplayBox(i, plaintext, fill)}
      {renderUIBox(i, cyphertext, onClick)}
    </Box>
  );
}

function renderLabel() {
  return(
    <Box>
      <Box
        border='true'
        alignContent='center'
        justify='center'
      >
        <Text>PLAINTEXT</Text>
      </Box>
      <Box
        border='true'
        alignContent='center'
        justify='center'
      >
        <Text>cyphertext</Text>
      </Box>
    </Box>
  )
}

/* ----------------------------------------------- */

function ResultTable(props) {
  let body = [];
  for(let i = 0; i < 10; i++) {
    body.push(
      <TableRow>
        <TableCell scope='row'>
          <RadioButton
            onChange={()=>props.onChange(i)}
            checked={i===parseInt(props.selectedButton)} 
          />
        </TableCell>
        <TableCell scope='row'>
          {props.pattern[i]}
        </TableCell>
        <TableCell scope='row'>
          {props.chisquare[i]}
        </TableCell>
        <TableCell scope='row'>
          {props.freq[i]}
        </TableCell>
        <TableCell scope='row'>
          {props.conflict[i]}
        </TableCell>
      </TableRow>
    );
  }

  return(
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope='col' border='bottom'>
          </TableCell>
          <TableCell scope='col' border='bottom'>
            Pattern
          </TableCell>
          <TableCell scope='col' border='bottom'>
            Chi Square
          </TableCell>
          <TableCell scope='col' border='bottom'>
            Frequency
          </TableCell>
          <TableCell scope='col' border='bottom'>
            Confilicts
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {body}
      </TableBody>
    </Table>
  );
}

/* ----------------------------------------------- */
function HomeGrid(props) { 
  let decryptMode = props.decrypt ? true : false;
  return (
    <Grid
      areas={[
        { name: 'text', start: [0, 0], end: [3, 0] },
        { name: 'key', start: [0, 1], end: [3, 1] },
        { name: 'mode', start: [3, 1], end: [3, 1] },
        { name: 'randPT', start: [0, 2], end: [0, 2] },
        { name: 'randCT', start: [1, 2], end: [1, 2] },
        { name: 'update', start: [2, 2], end: [2, 2] },
        { name: 'break', start: [3, 2], end: [3, 2] },
      ]}
      columns={['auto', 'auto', 'auto', 'auto']}
      rows={['medium', 'xsmall', 'xxsmall']}
      gap='small'
      margin='xlarge'
    >
      <Box gridArea='text'> 
       <TextArea
          onChange = {props.handleMessageEdit}
          value = {props.message}
          placeholder="Type message here..."
          resize={false}
          fill={true}
          name='TextInput'
          spellCheck='false'
          focus={false}
        />
      </Box>
      <Box gridArea='key'>
        <KeyDisplay 
          decrypt={props.decrypt}
          plaintext={props.plaintext}
          cyphertext={props.cyphertext}
          onClick={props.handleKeyDisplay}

        />
      </Box>
      <Box gridArea='mode'>
        <RadioButtonGroup
          options={['Decrypt','Encrypt']}
          onChange={props.handleChangeMode}
          value={props.modeValue}
        />
      </Box>
      <Box gridArea='update'>
        <Button
          label='Update'
          size='small'
          onClick={props.handleUpdate}
        />
      </Box>
      <Box gridArea='break'>
        <Button
          label='Break'
          size='small'
          onClick={props.handleBreak}
        />
      </Box>
      <Box gridArea='randPT'>
        <Button
          label='Random Plaintext'
          size='small'
          onClick={props.handleRandomPT}
        />
      </Box>
      <Box gridArea='randCT'>
        <Button
          label='Random Cyphertext'
          size='small'
          onClick={props.handleRandomCT}
        />
      </Box>
    </Grid>
  );
}


function BreakGrid(props) { 
  return (
    <Grid
      areas={[
        { name: 'search', start: [0, 0], end: [1, 0] },
        { name: 'go', start: [2, 0], end: [2, 0] },
        { name: 'conflict', start: [3, 0], end: [3, 0] },
        { name: 'searchInfo', start: [0, 1], end: [1, 1] },
        { name: 'navigation', start: [2, 1], end: [2, 1] },
        { name: 'ok', start: [3, 1], end: [3, 1] },
        { name: 'results', start: [0, 2], end: [3, 2] },
      ]}
      columns={['auto', 'auto', 'auto', 'auto']}
      rows={['xxsmall', 'xxsmall', 'medium']}
      gap='small'
      margin='xlarge'
    >
      <Box gridArea='search' alignContent='center' justify='center'> 
        <TextInput
          onChange = {props.handleSearchEdit}
          value = {props.searchValue}
          placeholder='Search for word...'
          spellCheck='false'
          focus={false}
        />
      </Box>
      <Box gridArea='go' alignContent='center' justify='center'>
        <Button
          label='Go'
          onClick={props.handleSearchGo}
        />
      </Box>
      <Box gridArea='conflict'alignContent='center' justify='center'> 
        <CheckBox
          onChange={props.handleToggleConflict}
          label="Hide Conflicts"
        />
      </Box>
      <Box gridArea='searchInfo' alignContent='center' justify='center'> 
        <Text>Showing X - X of X </Text>
      </Box>
      <Box gridArea='navigation' justify='center' direction='row'> 
        <Button
          icon={<Previous size='small' />}
          size='small'
          onClick={props.handlePositionPrevious}
        />
        <Button
          icon={<Next size='small'/>}
          size='small'
          onClick={props.handlePositionNext}
        />
      </Box>
      <Box gridArea='ok' alignContent='center' justify='center'>
        <Button
          label='Confirm'
          onClick={props.handleSearchGo}
        />
      </Box>
      <Box gridArea='results'>
        <ResultTable 
          onChange={props.handleSelectSearch}
          selectedButton={props.selectedButton}
          pattern={TEMP_LETTERS}
          chisquare={TEMP_LETTERS}
          freq={TEMP_LETTERS}
          conflict={TEMP_LETTERS}
        />
      </Box>
    </Grid>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      modeValue:'Decrypt',
      decrypt:true,
      letters:TEMP_LETTERS,
      searchSelection:-1,
    };
  }

  updateMode(val){
    if(val === 'Decrypt') {
      this.setState({
        modeValue:val,
        decrypt:true,
      });
    } else {
      this.setState({
        modeValue:val,
        decrypt:false,
      });
    }
  }

  updateSearchSelection(val) {
    this.setState({
      searchSelection:val,
    });
  }
  
  setHome(val) {
    this.setState({
      home:val,
    });
  }

  handleBreak() {
    this.setHome(!this.state.home);
  }

  handleKeyDisplay(i) {
    alert(i);
  }

  handleSelectSearch(i) {
    alert(i);
    this.updateSearchSelection(i);
  }

  handleChangeMode(event) {
    this.updateMode(event.target.value);
  }

  renderPage() {
    if(this.state.home) {
      return(
          <Box width='large' alignSelf='center'>
            <HomeGrid
              handleBreak={()=> this.handleBreak()}
              modeValue={this.state.modeValue}
              decrypt={this.state.decrypt}
              plaintext={this.state.letters}
              cyphertext={TEMP_UI}
              handleKeyDisplay={(i) => this.handleKeyDisplay(i)}
              handleChangeMode={(event)=>this.handleChangeMode(event)}
            >
            </HomeGrid>
          </Box>
      );
    } else {
        return(
          <Box width='large' alignSelf='center'>
            <BreakGrid 
              handleSelectSearch={(i) => this.handleSelectSearch(i)}
              selectedButton={this.state.searchSelection}
            >
            </BreakGrid>
          </Box>
        );
    }
  }

  render () {
    return (
      <Grommet theme={theme} full>
        <Main>
          {this.renderPage()}
        </Main>
      </Grommet>
    );
  }
}

/**
 * Returns an array with the frequencies of every period-th character,
 * starting at the positon character in the message
 * @param {String} message the message to be looked at
 * @param {int} period the length of the key
 * @param {int} position the character we want in the key
 */
function getFreq(message, period, position) {
  let output = Array(LEN_ALPHABET).fill(0);
  let total = 0;
  if(period === 0) {
    return output;
  }
  for(let i = position; i < message.length; i += period) {
    output[message.charCodeAt(i) - A_CODE]++;
    total++;
  }
  if(total > 0) {
    for(let i = 0; i < output.length; i++){
      output[i] = (1.0 *output[i]) / (1.0 *total);
    }
  }
  return output;
}

/**
 * Bolds every nth character in the string
 * @param {String} string 
 * @param {int} n in range [0, string.length-1]
 */
function boldN(string, n, period) {
  let output = '';
  for(let i = 0; i < string.length; i++) {
    if( i  % period === parseInt(n)) {
      output += '**' + string.charAt(i) + '**';
    } else {
      output += string.charAt(i);
    }
  }
  return output;
}

/**
 * Formats and returns an array with letter frequencies
 * @param {float[]} freq
 * @param {int} offset
 */
function freqArray(freq, offset) {
  let data = Array();
  for(let i = 0; i < LEN_ALPHABET; i++) {
    //I don't know why it needs an inverse offset
    let inverseOffset = (i - parseInt(offset) + LEN_ALPHABET) % LEN_ALPHABET;
    let globalName = String.fromCharCode(A_CODE + i);
    let localName = String.fromCharCode(A_CODE + inverseOffset);
    data.push({'globalName': globalName, 'globalFreq': ENGLISH_FREQ[i], 'localName': localName, 'localFreq': freq[inverseOffset]});
  }
  return data;
}

/**
 * Decrypts a given cyphertext and key using a vigenere cypher
 * @param {String} cyphertext the message to decrypt. Must be in character set [A-Z]
 * @param {String} key the key used to decrypt message. 
 *                     Must be longer than 0, and in charater set [A-Z] 
 * @returns decrypted messaged as a string
 */
function decryptVigenere (cyphertext, key) {
  if(key.length <= 0) {
    return cyphertext;
  }
  let output = '';
  for(let i = 0; i < cyphertext.length; i++) {
    output += String.fromCharCode(A_CODE + (( (cyphertext.charCodeAt(i) - A_CODE) - (key.charCodeAt(i % key.length) - A_CODE) + LEN_ALPHABET) % LEN_ALPHABET));
  }
  return output;
}

/**
 * Encripts a given plaintext and key using a vigenere cypher
 * @param {String} plaintext the message to encrypt. Must be in character set [A-Z]
 * @param {String} key the key used to encrypt message. 
 *                     Must be longer than 0, and in charater set [A-Z] 
 * @returns encrypted messaged as a string
 */
function encryptVigenere (plaintext, key) {
  let output = '';
  for(let i = 0; i < plaintext.length; i++) {
    output += String.fromCharCode(A_CODE + (( (plaintext.charCodeAt(i) - A_CODE) + (key.charCodeAt(i % key.length) - A_CODE) ) % LEN_ALPHABET));
  }
  return output;
}

/**
 * Returns the message broken into blocks of n chars, separated by a space
 * @param {String} message the string to be processed
 * @param {Integer} n the size of each block, must be greater than 0
 * @returns message broken into n-grams
 */
function toNGram(message, n) {
  let output = '';
  for(let i = 0; i < message.length; i++) {
    output += message.charAt(i);
    //if i is at the end of a n-gram, add a space
    if( (i % n) === (n - 1) ) {
      output += SPACE;
    }
  }
  return output;
}

/**
 * Converts message to upper case, removes all characters not in range [A,Z]
 * @param {String} message the string to be processed
 * @returns processed string
 */
function processMessage(message) {
  message = message.toUpperCase();
  let output = '';
  for(let i = 0; i < message.length; i++) {
    //concat char to the end of output
    let char = message.charCodeAt(i);
    if( A_CODE <= char && char <= Z_CODE ) {
      output += message.charAt(i);
    }
  }
  return output;
}

export default App;
