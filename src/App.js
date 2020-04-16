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

const RANDOM_PLAINTEXT = ['HACKISADISPLAYORIENTEDDUNGEONSDRAGONSLIKEGAMEBOTHDISPLAYANDCOMMANDSTRUCTURERESEMBLEROGUEFORAGAMEWITHTHESAMESTRUCTUREBUTENTIRELYDIFFERENTDISPLAYAREALCAVEINSTEADOFDULLRECTANGLESTRYQUESTTOGETSTARTEDYOUREALLYONLYNEEDTOKNOWTWOCOMMANDSTHECOMMANDWILLGIVEYOUALISTOFTHEAVAILABLECOMMANDSANDTHECOMMANDWILLIDENTIFYTHETHINGSYOUSEEONTHESCREENTOWINTHEGAMEASOPPOSEDTOMERELYPLAYINGTOBEATOTHERPEOPLEHIGHSCORESYOUMUSTLOCATETHEAMULETOFYENDORWHICHISSOMEWHEREBELOWTHETWENTIETHLEVELOFTHEDUNGEONANDGETITOUTNOBODYHASACHIEVEDTHISYETANDIFSOMEBODYDOESHEWILLPROBABLYGODOWNINHISTORYASAHEROAMONGHEROSWHENTHEGAMEENDSEITHERBYYOURDEATHWHENYOUQUITORIFYOUESCAPEFROMTHECAVESHACKWILLGIVEYOUAFRAGMENTOFTHELISTOFTOPSCORERSTHESCORINGISBASEDONMANYASPECTSOFYOURBEHAVIOURBUTAROUGHESTIMATEISOBTAINEDBYTAKINGTHEAMOUNTOFGOLDYOUVEFOUNDINTHECAVEPLUSFOURTIMESYOURREALEXPERIENCEPRECIOUSSTONESMAYBEWORTHALOTOFGOLDWHENBROUGHTTOTHEEXITTHEREISATENPERCENTPENALTYFORGETTINGYOURSELFKILLED',
                          'THEMOSTNOTICEABLEEFFECTTHISCOMMUNICATIONHASONTHEGAMEISTHEDELAYINMOVINGSUPPOSEAPLAYERTYPESAMOVEFORHISSHIPANDHITSRETURNWHATHAPPENSTHENTHEPLAYERPROCESSSAVESUPMESSAGESTOBEWRITTENTOTHETEMPORARYFILEINABUFFEREVERYSEVENSECONDSORSOTHEPLAYERPROCESSGETSEXCLUSIVEACCESSTOTHETEMPORARYFILEANDWRITESOUTITSBUFFERTOTHEFILETHEDRIVERRUNNINGASYNCHRONOUSLYMUSTREADINTHEMOVEMENTCOMMANDPROCESSITANDWRITEOUTTHERESULTSTHISTAKESTWOEXCLUSIVEACCESSESTOTHETEMPORARYFILEFINALLYWHENTHEPLAYERPROCESSGETSAROUNDTODOINGANOTHERSEVENSECONDUPDATETHERESULTSOFTHEMOVEAREDISPLAYEDONTHESCREENHENCEEVERYMOVEMENTREQUIRESFOUREXCLUSIVEACCESSESTOTHETEMPORARYFILEANYWHEREFROMSEVENTOTWENTYONESECONDSDEPENDINGUPONASYNCHRONYBEFORETHEPLAYERSEESTHERESULTSOFHISMOVESAFTERTHEPLAYERWRITESOUTAFIRSTMOVEMENTMESSAGEASECONDMOVEMENTCOMMANDCANTHENBEISSUEDTHEFIRSTMESSAGEWILLBEINTHETEMPORARYFILEWAITINGFORTHEDRIVERANDTHESECONDWILLBEINTHEFILEBUFFERWAITINGTOBEWRITTENTOTHEFILETHUSBYALWAYSTYPINGMOVESATURNAHEADOFTHETIMETHEPLAYERCANSAILAROUNDQUITEQUICKLY',
                          'IFYOUHAVENEVERPLAYEDSOLITAIREBEFOREITISRECOMMENDEDTHATYOUCONSULTASOLITAIREINSTRUCTIONBOOKINCANFIELDTABLEAUCARDSMAYBEBUILTONEACHOTHERDOWNWARDINALTERNATECOLORSANENTIREPILEMUSTBEMOVEDASAUNITINBUILDINGTOPCARDSOFTHEPILESAREAVAILABLETOBEPLAYEDONFOUNDATIONSBUTNEVERINTOEMPTYSPACESSPACESMUSTBEFILLEDFROMTHESTOCKTHETOPCARDOFTHESTOCKALSOISAVAILABLETOBEPLAYEDONFOUNDATIONSORBUILTONTABLEAUPILESAFTERTHESTOCKISEXHAUSTEDTABLEAUSPACESMAYBEFILLEDFROMTHETALONANDTHEPLAYERMAYKEEPTHEMOPENUNTILHEWISHESTOUSETHEMCARDSAREDEALTFROMTHEHANDTOTHETALONBYTHREESANDTHISREPEATSUNTILTHEREARENOMORECARDSINTHEHANDORTHEPLAYERQUITSTOHAVECARDSDEALTONTOTHETALONTHEPLAYERTYPESHTFORHISMOVEFOUNDATIONBASECARDSAREALSOAUTOMATICALLYMOVEDTOTHEFOUNDATIONWHENTHEYBECOMEAVAILABLE',
                          'ROBOTSPITSYOUAGAINSTEVILROBOTSWHOARETRYINGTOKILLYOUWHICHISWHYTHEYAREEVILFORTUNATELYFORYOUEVENTHOUGHTHEYAREEVILTHEYARENOTVERYBRIGHTANDHAVEAHABITOFBUMPINGINTOEACHOTHERTHUSDESTROYINGTHEMSELVESINORDERTOSURVIVEYOUMUSTGETTHEMTOKILLEACHOTHEROFFSINCEYOUHAVENOOFFENSIVEWEAPONRYSINCEYOUARESTUCKWITHOUTOFFENSIVEWEAPONRYYOUAREENDOWEDWITHONEPIECEOFDEFENSIVEWEAPONRYATELEPORTATIONDEVICEWHENTWOROBOTSRUNINTOEACHOTHERORAJUNKPILETHEYDIEIFAROBOTRUNSINTOYOUYOUDIEWHENAROBOTDIESYOUGETTENPOINTSANDWHENALLTHEROBOTSDIEYOUSTARTONTHENEXTFIELDTHISKEEPSUPUNTILTHEYFINALLYGETYOUONLYFIVESCORESAREALLOWEDPERUSERONTHESCOREFILEIFYOUMAKEITINTOTHESCOREFILEYOUWILLBESHOWNTHELISTATTHEENDOFTHEGAMEIFANALTERNATESCOREFILEISSPECIFIEDTHATWILLBEUSEDINSTEADOFTHESTANDARDFILEFORSCORESY',
                          'ATTHESTARTOFTHEFIRSTGAMETHEPROGRAMASKSTHEPLAYERTOCUTTHEDECKTODETERMINEWHOGETSTHEFIRSTCRIBTHEUSERSHOULDRESPONDWITHANUMBERBETWEENZEROANDFIFTYONEINDICATINGHOWMANYCARDSDOWNTHEDECKISTOBECUTTHEPLAYERWHOCUTSTHELOWERRANKEDCARDGETSTHEFIRSTCRIBIFMORETHANONEGAMEISPLAYEDTHELOSEROFTHEPREVIOUSGAMEGETSTHEFIRSTCRIBINTHECURRENTGAMEFOREACHHANDTHEPROGRAMFIRSTPRINTSTHEPLAYERSHANDWHOSECRIBITISANDTHENASKSTHEPLAYERTODISCARDTWOCARDSINTOTHECRIBTHECARDSAREPROMPTEDFORONEPERLINEANDARETYPEDASEXPLAINEDBELOWAFTERCUTTINGTHEDECKPLAYSTARTSWITHTHENONDEALERTHEPERSONWHODOESNTHAVETHECRIBLEADINGTHEFIRSTCARDPLAYCONTINUESASPERCRIBBAGEUNTILALLCARDSAREEXHAUSTEDTHEPROGRAMKEEPSTRACKOFTHESCORINGOFALLPOINTSANDTHETOTALOFTHECARDSONTHETABLEAFTERPLAYTHEHANDSARESCOREDTHEPROGRAMREQUESTSTHEPLAYERTOSCOREHISHANDANDTHECRIBIFITISHISBYPRINTINGOUTTHEAPPROPRIATECARDSANDTHECUTCARDENCLOSEDINBRACKETSPLAYCONTINUESUNTILONEPLAYERREACHESTHEGAMELIMITACARRIAGERETURNWHENANUMERICINPUTISEXPECTEDISEQUIVALENTTOTYPINGTHELOWESTLEGALVALUEWHENCUTTINGTHEDECKTHISISEQUIVALENTTOCHOOSINGTHETOPCARD'];

const UPPERCASE_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const LOWERCASE_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const TEMP_UI = ['e', 'f', 'g', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];

const N_GRAM = 5;

const RIGHT_ARROW_CODE = 39;
const LEFT_ARROW_CODE = 37;
const LOWERCASE_A_CODE = 97;
const LOWERCASE_Z_CODE = 122;
const DASH = '-';
const BACKSPACE_CODE = 8;
const DEL_CODE = 46;
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

/* ----------------------------------------------- */

function KeyDisplay(props) {
    let fillVals = Array(LEN_ALPHABET).fill(true);

    for(let i = 0; i < LEN_ALPHABET; i++) {
      if(props.keyVal[i] === DASH) {
        continue;
      }
      let char = 0;
      char = props.keyVal[i].toUpperCase().charCodeAt(0);
      if(A_CODE <= char && char <= Z_CODE) {
        fillVals[char-A_CODE] = false;
      }
    }
    
    let key = [];
    for(let i =0; i < LEN_ALPHABET; i++){
      if(props.decrypt) {
          key.push(renderCol(i, props.keyVal[i], LOWERCASE_LETTERS[i], fillVals[i], props.decrypt, props.onClick, parseInt(props.focused) === i));
      } else {
          key.push(renderCol(i,UPPERCASE_LETTERS[i], props.keyVal[i], fillVals[i], props.decrypt, props.onClick, parseInt(props.focused) === i));
      }
    }
    return(
      <Box direction='row'>
        {renderLabel()}
        {key}
      </Box>
    );
}

function renderUIBox(i, text, onClick, focused) {
  return (
    <Box
      onClick={()=>(onClick(i))}
      focusIndicator={false}
      border='true'
      alignContent='center'
      justify='center'
      align='center'
      background={focused ? 'accent-1' : ''}
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

function renderCol(i, plaintext, cyphertext, fill, decrypt, onClick, focused) {
  if(decrypt) {
    return(
      <Box>
        {renderUIBox(i, plaintext, onClick, focused)}
        {renderDisplayBox(i, cyphertext, fill)}
      </Box>
    );
  }
  return(
    <Box>
      {renderDisplayBox(i, plaintext, fill)}
      {renderUIBox(i, cyphertext, onClick, focused)}
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
  return (
    <Grid
      areas={[
        { name: 'text', start: [0, 0], end: [4, 0] },
        { name: 'key', start: [0, 1], end: [3, 1] },
        { name: 'mode', start: [4, 1], end: [4, 1] },
        { name: 'randPT', start: [0, 2], end: [1, 2] },
        { name: 'randCT', start: [2, 2], end: [3, 2] },
        { name: 'break', start: [4, 2], end: [4, 2] },
      ]}
      columns={['auto', 'auto', 'auto', 'auto']}
      rows={['medium', 'xsmall', 'xxsmall']}
      gap='small'
      margin='xlarge'
    >
      <Box gridArea='text'> 
       <TextArea
          onChange = {props.handleEditMessage}
          value = {props.displayMessage}
          placeholder="Type message here..."
          resize={false}
          fill={true}
          name='TextInput'
          spellCheck='false'
          focus={false}
          onClick={props.handleSelectMessage}
        />
      </Box>
      <Box gridArea='key' justify='center'>
        <KeyDisplay 
          decrypt={props.decrypt}
          keyVal={props.keyVal}
          onClick={props.handleKeyDisplay}
          focused={props.focusedBox}
        />
      </Box>
      <Box gridArea='mode' justify='center'>
        <RadioButtonGroup
          options={['Decrypt','Encrypt']}
          onChange={props.handleChangeMode}
          value={props.modeValue}
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
          pattern={UPPERCASE_LETTERS}
          chisquare={UPPERCASE_LETTERS}
          freq={UPPERCASE_LETTERS}
          conflict={UPPERCASE_LETTERS}
        />
      </Box>
    </Grid>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    document.addEventListener('keyup', (event) => this.onKeyPress(event))

    this.state = {
      home: true,
      modeValue:'Decrypt',
      decrypt:true,
      searchSelection:-1,
      message:'',
      displayMessage:'',
      key:Array(LEN_ALPHABET).fill(''),
      displayKey:formatKey([]),
      activeIdx:-1,
    };
  }

  /* -------------- Change State ------------------- */

  updateKeyVal(val, idx) {
    //If removing key val
    if(this.state.key[idx] && !val) {
        if(this.state.decrypt) {
            this.updateMessage(swapChar(this.state.key[idx], String.fromCharCode(idx+LOWERCASE_A_CODE), this.state.message));
        } else {
            this.updateMessage(swapChar(this.state.key[idx], String.fromCharCode(idx+A_CODE), this.state.message));
        }
    //adding a value  
    } else if(val) {
        if(this.state.decrypt) {
            this.updateMessage(swapChar(String.fromCharCode(idx+LOWERCASE_A_CODE), val, this.state.message));
        } else {
            this.updateMessage(swapChar(String.fromCharCode(idx+A_CODE), val, this.state.message));
        }
    }

    let newKey = this.state.key;
    newKey[idx] = val;
    this.updateKey(newKey)
  }

  updateActiveIdx(val){
    this.setState({
      activeIdx:val
    });
  }

  updateKey(val) {
    this.setState({
      key:val,
      displayKey:formatKey(val),
    });
  }

  updateMessage(val) {
    val = processMessage(val);
    this.setState({
      message:val,
      displayMessage:toNGram(val, N_GRAM),
    });
  }

  updateMode(val){
    if(val === 'Decrypt') {
      this.keyToDecrypt();
      this.setState({
        modeValue:val,
        decrypt:true,
      });
    } else {
      this.keyToEncrypt();
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

  /* -------- Home Page ------------------ */
  
  handleBreak() {
    this.setHome(!this.state.home);
  }

  handleKeyDisplay(i) {
    this.updateActiveIdx(i);
  }

  handleChangeMode(event) {
    this.updateMode(event.target.value);
    this.clearFocus();
  }

  handleEditMessage(event) {
    this.updateMessage(event.target.value);
  }

  onKeyPress(event) {
    if(this.state.activeIdx >= 0) {
      if( A_CODE <= event.which && event.which <= Z_CODE && this.codeNotInKey(event.which)) {
          let char = String.fromCharCode(event.which);
          if(!this.state.decrypt) {
            char = char.toLowerCase();
          }
          this.updateKeyVal(char, this.state.activeIdx)
          this.updateActiveIdx((this.state.activeIdx + 1) % LEN_ALPHABET);
      } else if(event.which === DEL_CODE || event.which === BACKSPACE_CODE) {
          this.updateKeyVal('', this.state.activeIdx);
          this.updateActiveIdx((this.state.activeIdx - 1 + LEN_ALPHABET) % LEN_ALPHABET);
      } else if(event.which === LEFT_ARROW_CODE) {
          this.updateActiveIdx((this.state.activeIdx - 1 + LEN_ALPHABET) % LEN_ALPHABET);
      } else if(event.which === RIGHT_ARROW_CODE) {
          this.updateActiveIdx((this.state.activeIdx + 1) % LEN_ALPHABET);
      }
    }
  }

  codeNotInKey(code) {
    for(let i = 0; i < LEN_ALPHABET; i++) {
      if(this.state.key[i] && this.state.key[i].toUpperCase().charCodeAt(0) == code) {
        return false;
      }
    }
    return true;
  }

  clearFocus() {
    this.updateActiveIdx(-1);
  }

  keyToDecrypt() {
    let newKey = Array(LEN_ALPHABET).fill(''); 
    for(let i = 0; i < LEN_ALPHABET; i++) {
      if(this.state.key[i]) {
        newKey[this.state.key[i].charCodeAt(0) - LOWERCASE_A_CODE] = String.fromCharCode(i + A_CODE);
      }
    }
    this.updateMessage(decrypt(newKey, this.state.message));
    this.updateKey(newKey);
  }

  keyToEncrypt() {
    let newKey = Array(LEN_ALPHABET).fill(''); 
    for(let i = 0; i < LEN_ALPHABET; i++) {
      if(this.state.key[i]) {
        newKey[this.state.key[i].charCodeAt(0) - A_CODE] = String.fromCharCode(i + LOWERCASE_A_CODE);
      }
    }
    this.updateMessage(encrypt(newKey, this.state.message));
    this.updateKey(newKey);
  }

  handleRandomPT() {
    let newMessage = RANDOM_PLAINTEXT[Math.floor(Math.random() * RANDOM_PLAINTEXT.length)];
    while( newMessage === this.state.message ) {
      newMessage = RANDOM_PLAINTEXT[Math.floor(Math.random() * RANDOM_PLAINTEXT.length)];
    }
    this.updateMode('Encrypt')
    this.updateKey(Array(LEN_ALPHABET).fill(''));
    this.updateMessage(newMessage);
    this.clearFocus();
  }

  handleRandomCT() {
    let newMessage = RANDOM_PLAINTEXT[Math.floor(Math.random() * RANDOM_PLAINTEXT.length)];
    let key = [...LOWERCASE_LETTERS];
    key = shuffle(key);
    newMessage = encrypt(key, newMessage);

    this.updateMode('Decrypt')
    this.updateKey(Array(LEN_ALPHABET).fill(''));
    this.updateMessage(newMessage);
    this.clearFocus();
  }

  /* ---------------- Break Page -------------- */

  handleSelectSearch(i) {
    alert(i);
    this.updateSearchSelection(i);
  }

  /* ------------------ App ------------------- */

  renderPage() {
    if(this.state.home) {
      return(
          <Box width='large' alignSelf='center'>
            <HomeGrid
              handleBreak={()=> this.handleBreak()}
              modeValue={this.state.modeValue}
              decrypt={this.state.decrypt}
              keyVal={this.state.displayKey}
              handleKeyDisplay={(i) => this.handleKeyDisplay(i)}
              handleChangeMode={(event)=>this.handleChangeMode(event)}
              handleEditMessage={(event)=>this.handleEditMessage(event)}
              handleSelectMessage={()=>this.clearFocus()}
              displayMessage={this.state.displayMessage}
              focusedBox={this.state.activeIdx}
              handleRandomPT={()=>this.handleRandomPT()}
              handleRandomCT={()=>this.handleRandomCT()}
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
 * encrypts the message
 * @param {char[]} key 
 * @param {String} message 
 */
function encrypt(key, message) {
  let output = '';
  for(let i = 0; i < message.length; i++){
    if(A_CODE <= message.charCodeAt(i) && message.charCodeAt(i) <= Z_CODE) {
        let idx = message.charCodeAt(i) - A_CODE;
        if(key[idx]){
            output += key[idx];
        } else {
            output += message.charAt(i);
        }
    } else {
        output += message.charAt(i);
    }
  }
  return output;
}

/**
 * Decrypts the message
 * @param {char[]} key 
 * @param {String} message 
 */
function decrypt(key, message) {
  let output = '';
  for(let i = 0; i < message.length; i++){
    if(LOWERCASE_A_CODE <= message.charCodeAt(i) && message.charCodeAt(i) <= LOWERCASE_Z_CODE) {
        let idx = message.charCodeAt(i) - LOWERCASE_A_CODE;
        if(key[idx]){
            output += key[idx];
        } else {
            output += message.charAt(i);
        }
    } else {
        output += message.charAt(i);
    }
  }
  return output;
}

/**
 * encrypts all plaintext chars that match from to cypertext char that maches to
 * @param {char} from the plaintext
 * @param {char} to the cypertext
 * @param {String} message 
 */
function swapChar(from, to, message){
  let output = '';
  for(let i = 0; i < message.length; i++) {
    if(message.charAt(i) == from) {
        output += to;
    } else {
        output += message.charAt(i)
    }
  }
  return output;
}

/**
 * Formats the key
 * @param {String} key the key to be formated
 */
function formatKey(key) {
  let formatedKey = Array(LEN_ALPHABET).fill(DASH);
  for(let i = 0; i < key.length; i++){
    if(key[i]) {
      formatedKey[i] = key[i];
    }
  }
  return formatedKey;
}

/**
 * Returns an array with the frequencies of the message
 * @param {String} message the message to be looked at
 */
function getFreq(message) {
  let output = Array(LEN_ALPHABET).fill(0);
  for(let i = 0; i < message.length; i ++) {
    output[message.charCodeAt(i) - A_CODE]++;
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
  let output = '';
  let tempMessage = message.toUpperCase();
  for(let i = 0; i < tempMessage.length; i++) {
    //concat char to the end of output
    let char = tempMessage.charCodeAt(i);
    if( A_CODE <= char && char <= Z_CODE ) {
      output += message.charAt(i);
    }
  }
  return output;
}

/**
 * Credit to: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default App;
