import React from 'react';
import { 
  Box, 
  Button,
  Grid,
  Grommet,
  Main,
  Text,
  TextArea,
  TextInput,
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
  Previous,
  Next,
} from 'grommet-icons'
import ArticleText from './Article';

const RANDOM_PLAINTEXT = ['HACKISADISPLAYORIENTEDDUNGEONSDRAGONSLIKEGAMEBOTHDISPLAYANDCOMMANDSTRUCTURERESEMBLEROGUEFORAGAMEWITHTHESAMESTRUCTUREBUTENTIRELYDIFFERENTDISPLAYAREALCAVEINSTEADOFDULLRECTANGLESTRYQUESTTOGETSTARTEDYOUREALLYONLYNEEDTOKNOWTWOCOMMANDSTHECOMMANDWILLGIVEYOUALISTOFTHEAVAILABLECOMMANDSANDTHECOMMANDWILLIDENTIFYTHETHINGSYOUSEEONTHESCREENTOWINTHEGAMEASOPPOSEDTOMERELYPLAYINGTOBEATOTHERPEOPLEHIGHSCORESYOUMUSTLOCATETHEAMULETOFYENDORWHICHISSOMEWHEREBELOWTHETWENTIETHLEVELOFTHEDUNGEONANDGETITOUTNOBODYHASACHIEVEDTHISYETANDIFSOMEBODYDOESHEWILLPROBABLYGODOWNINHISTORYASAHEROAMONGHEROSWHENTHEGAMEENDSEITHERBYYOURDEATHWHENYOUQUITORIFYOUESCAPEFROMTHECAVESHACKWILLGIVEYOUAFRAGMENTOFTHELISTOFTOPSCORERSTHESCORINGISBASEDONMANYASPECTSOFYOURBEHAVIOURBUTAROUGHESTIMATEISOBTAINEDBYTAKINGTHEAMOUNTOFGOLDYOUVEFOUNDINTHECAVEPLUSFOURTIMESYOURREALEXPERIENCEPRECIOUSSTONESMAYBEWORTHALOTOFGOLDWHENBROUGHTTOTHEEXITTHEREISATENPERCENTPENALTYFORGETTINGYOURSELFKILLED',
                          'THEMOSTNOTICEABLEEFFECTTHISCOMMUNICATIONHASONTHEGAMEISTHEDELAYINMOVINGSUPPOSEAPLAYERTYPESAMOVEFORHISSHIPANDHITSRETURNWHATHAPPENSTHENTHEPLAYERPROCESSSAVESUPMESSAGESTOBEWRITTENTOTHETEMPORARYFILEINABUFFEREVERYSEVENSECONDSORSOTHEPLAYERPROCESSGETSEXCLUSIVEACCESSTOTHETEMPORARYFILEANDWRITESOUTITSBUFFERTOTHEFILETHEDRIVERRUNNINGASYNCHRONOUSLYMUSTREADINTHEMOVEMENTCOMMANDPROCESSITANDWRITEOUTTHERESULTSTHISTAKESTWOEXCLUSIVEACCESSESTOTHETEMPORARYFILEFINALLYWHENTHEPLAYERPROCESSGETSAROUNDTODOINGANOTHERSEVENSECONDUPDATETHERESULTSOFTHEMOVEAREDISPLAYEDONTHESCREENHENCEEVERYMOVEMENTREQUIRESFOUREXCLUSIVEACCESSESTOTHETEMPORARYFILEANYWHEREFROMSEVENTOTWENTYONESECONDSDEPENDINGUPONASYNCHRONYBEFORETHEPLAYERSEESTHERESULTSOFHISMOVESAFTERTHEPLAYERWRITESOUTAFIRSTMOVEMENTMESSAGEASECONDMOVEMENTCOMMANDCANTHENBEISSUEDTHEFIRSTMESSAGEWILLBEINTHETEMPORARYFILEWAITINGFORTHEDRIVERANDTHESECONDWILLBEINTHEFILEBUFFERWAITINGTOBEWRITTENTOTHEFILETHUSBYALWAYSTYPINGMOVESATURNAHEADOFTHETIMETHEPLAYERCANSAILAROUNDQUITEQUICKLY',
                          'IFYOUHAVENEVERPLAYEDSOLITAIREBEFOREITISRECOMMENDEDTHATYOUCONSULTASOLITAIREINSTRUCTIONBOOKINCANFIELDTABLEAUCARDSMAYBEBUILTONEACHOTHERDOWNWARDINALTERNATECOLORSANENTIREPILEMUSTBEMOVEDASAUNITINBUILDINGTOPCARDSOFTHEPILESAREAVAILABLETOBEPLAYEDONFOUNDATIONSBUTNEVERINTOEMPTYSPACESSPACESMUSTBEFILLEDFROMTHESTOCKTHETOPCARDOFTHESTOCKALSOISAVAILABLETOBEPLAYEDONFOUNDATIONSORBUILTONTABLEAUPILESAFTERTHESTOCKISEXHAUSTEDTABLEAUSPACESMAYBEFILLEDFROMTHETALONANDTHEPLAYERMAYKEEPTHEMOPENUNTILHEWISHESTOUSETHEMCARDSAREDEALTFROMTHEHANDTOTHETALONBYTHREESANDTHISREPEATSUNTILTHEREARENOMORECARDSINTHEHANDORTHEPLAYERQUITSTOHAVECARDSDEALTONTOTHETALONTHEPLAYERTYPESHTFORHISMOVEFOUNDATIONBASECARDSAREALSOAUTOMATICALLYMOVEDTOTHEFOUNDATIONWHENTHEYBECOMEAVAILABLE',
                          'ROBOTSPITSYOUAGAINSTEVILROBOTSWHOARETRYINGTOKILLYOUWHICHISWHYTHEYAREEVILFORTUNATELYFORYOUEVENTHOUGHTHEYAREEVILTHEYARENOTVERYBRIGHTANDHAVEAHABITOFBUMPINGINTOEACHOTHERTHUSDESTROYINGTHEMSELVESINORDERTOSURVIVEYOUMUSTGETTHEMTOKILLEACHOTHEROFFSINCEYOUHAVENOOFFENSIVEWEAPONRYSINCEYOUARESTUCKWITHOUTOFFENSIVEWEAPONRYYOUAREENDOWEDWITHONEPIECEOFDEFENSIVEWEAPONRYATELEPORTATIONDEVICEWHENTWOROBOTSRUNINTOEACHOTHERORAJUNKPILETHEYDIEIFAROBOTRUNSINTOYOUYOUDIEWHENAROBOTDIESYOUGETTENPOINTSANDWHENALLTHEROBOTSDIEYOUSTARTONTHENEXTFIELDTHISKEEPSUPUNTILTHEYFINALLYGETYOUONLYFIVESCORESAREALLOWEDPERUSERONTHESCOREFILEIFYOUMAKEITINTOTHESCOREFILEYOUWILLBESHOWNTHELISTATTHEENDOFTHEGAMEIFANALTERNATESCOREFILEISSPECIFIEDTHATWILLBEUSEDINSTEADOFTHESTANDARDFILEFORSCORESY',
                          'ATTHESTARTOFTHEFIRSTGAMETHEPROGRAMASKSTHEPLAYERTOCUTTHEDECKTODETERMINEWHOGETSTHEFIRSTCRIBTHEUSERSHOULDRESPONDWITHANUMBERBETWEENZEROANDFIFTYONEINDICATINGHOWMANYCARDSDOWNTHEDECKISTOBECUTTHEPLAYERWHOCUTSTHELOWERRANKEDCARDGETSTHEFIRSTCRIBIFMORETHANONEGAMEISPLAYEDTHELOSEROFTHEPREVIOUSGAMEGETSTHEFIRSTCRIBINTHECURRENTGAMEFOREACHHANDTHEPROGRAMFIRSTPRINTSTHEPLAYERSHANDWHOSECRIBITISANDTHENASKSTHEPLAYERTODISCARDTWOCARDSINTOTHECRIBTHECARDSAREPROMPTEDFORONEPERLINEANDARETYPEDASEXPLAINEDBELOWAFTERCUTTINGTHEDECKPLAYSTARTSWITHTHENONDEALERTHEPERSONWHODOESNTHAVETHECRIBLEADINGTHEFIRSTCARDPLAYCONTINUESASPERCRIBBAGEUNTILALLCARDSAREEXHAUSTEDTHEPROGRAMKEEPSTRACKOFTHESCORINGOFALLPOINTSANDTHETOTALOFTHECARDSONTHETABLEAFTERPLAYTHEHANDSARESCOREDTHEPROGRAMREQUESTSTHEPLAYERTOSCOREHISHANDANDTHECRIBIFITISHISBYPRINTINGOUTTHEAPPROPRIATECARDSANDTHECUTCARDENCLOSEDINBRACKETSPLAYCONTINUESUNTILONEPLAYERREACHESTHEGAMELIMITACARRIAGERETURNWHENANUMERICINPUTISEXPECTEDISEQUIVALENTTOTYPINGTHELOWESTLEGALVALUEWHENCUTTINGTHEDECKTHISISEQUIVALENTTOCHOOSINGTHETOPCARD'];

const UPPERCASE_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const LOWERCASE_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const N_GRAM = 5;

const RESULTS_PER_PAGE = 10;
const RIGHT_ARROW_CODE = 39;
const LEFT_ARROW_CODE = 37;
const LOWERCASE_A_CODE = 97;
const LOWERCASE_Z_CODE = 122;
const DASH = '-';
const BACKSPACE_CODE = 8;
const DEL_CODE = 46;
const ENTER_CODE = 13;
const A_CODE = 65;
const Z_CODE = 90;
const SPACE = ' ';
const LEN_ALPHABET = 26;
const ENGLISH_FREQ = [73, 9, 30, 44, 130, 28, 16, 35, 74, 2, 3, 35, 25, 78, 74, 27, 3, 77, 63, 93, 27, 13, 16, 5, 19, 1];

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
  for(let i = 0; i < RESULTS_PER_PAGE; i++) {
    body.push(
      <TableRow>
        <TableCell scope='row'>
          {props.pattern[i] 
            ? <RadioButton onChange={()=>props.onChange(i)} checked={i===parseInt(props.selectedButton)} />
            : ''}
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
            <Box onClick={props.chisquareClick}>Chi Square</Box>
          </TableCell>
          <TableCell scope='col' border='bottom'>
            <Box onClick={props.frequencyClick}>Frequency</Box>
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
        { name: 'searchInfo', start: [1, 2], end: [2, 2] },
        { name: 'previous', start: [0, 2], end: [0, 2] },
        { name: 'next', start: [3, 2], end: [3, 2] },
        { name: 'ok', start: [3, 3], end: [3, 3] },
        { name: 'results', start: [0, 1], end: [3, 1] },
      ]}
      columns={['auto', 'auto', 'auto', 'auto']}
      rows={['xxsmall', 'medium', 'xxsmall', 'xxsmall']}
      gap='small'
      margin='xlarge'
    >
      <Box gridArea='search' alignContent='center' justify='center'> 
        <TextInput
          onChange = {props.handleEditSearch}
          value = {props.searchQuery}
          placeholder='Search for word...'
          spellCheck='false'
          focus={false}
        />
      </Box>
      <Box gridArea='go' alignContent='center' justify='center'>
        <Button
          label='Go'
          onClick={props.handleGo}
        />
      </Box>
      <Box gridArea='conflict'alignContent='center' justify='center'> 
        <CheckBox
          onChange={props.handleToggleConflict}
          label="Hide Conflicts"
        />
      </Box>
      <Box gridArea='searchInfo'> 
    <Text textAlign='center'>Showing {props.resultFrom} - {props.resultTo} </Text> 
    <Text textAlign='center'> (of {props.resultTotal}) </Text>
      </Box>
      <Box gridArea='previous'> 
        <Button
          icon={<Previous size='small' />}
          label='Prev'
          onClick={props.handlePositionPrevious}
        />
      </Box>
      <Box gridArea='next'> 
        <Button
          icon={<Next size='small'/>}
          label='Next'
          onClick={props.handlePositionNext}
          reverse={true}
        />
      </Box>
      <Box gridArea='ok'>
        <Button
          label={props.searchQuery && props.selectedButton >= 0? 'Confirm' : 'Back'}
          onClick={props.handleSearchBack}
        />
      </Box>
      <Box gridArea='results'>
        <ResultTable 
          onChange={props.handleSelectSearch}
          selectedButton={props.selectedButton}
          pattern={props.resultPattern}
          chisquare={props.resultChisquare}
          freq={props.resultFreq}
          conflict={props.resultConflict}
          frequencyClick={props.frequencyClick}
          chisquareClick={props.chisquareClick}
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
      searchQuery:'',
      cyphertext:'',
      cyphertextFreq:[],
      queryResults:[],
      page:0,
      resultPattern:[],
      resultChisquare:[],
      resultFreq:[],
      resultConflict:[],
      resultFrom:0,
      resultTo:0,
      resultTotal:0,
      hideConflict:false,
      queryResultsHideConflict:[],
    };
  }

  /* -------------- Change State ------------------- */

  updateHideConflict(shouldHide) {
    this.updateResultDisplay(this.state.page, this.state.queryResults, shouldHide)
    this.setState({
      hideConflict:shouldHide
    });
  }

  updateQueryResults(val, sortChisquare = true) {
    if( sortChisquare ) {
        val = val.sort(this.compareChisquare);
    } else {
        val = val.sort(this.compareFreq);
    }
    let noConflict = [];
    for(let i = 0; i < val.length; i++) {
      if(val[i].conflicts === 0) {
        noConflict.push(val[i]);
      }
    }
    if(this.state.hideConflict) {
       this.updateResultDisplay(0, noConflict, false);
    } else {
        this.updateResultDisplay(0, val, false);
    }
    this.setState({
      queryResults:val,
      queryResultsHideConflict:noConflict,
    });
  }

  updateResultDisplay(page, results = this.state.queryResults, hideConflict = this.state.hideConflict) {
    if(hideConflict) {
      results = this.state.queryResultsHideConflict;
    }
    this.updateSearchSelection(-1);
    let from = page * RESULTS_PER_PAGE;
    let fromText = from + 1;
    let to = page * RESULTS_PER_PAGE + RESULTS_PER_PAGE;
    if( to > results.length ) {
      to = results.length;
    }
    if(results.length === 0) {
      from = 0;
      to = 0;
      fromText=0;
    }
    let pageResults = results.slice(from, to);
    this.setState({
      page:page,
      resultTo:to,
      resultFrom:fromText,
      resultTotal:results.length,
      resultPattern:pageResults.map(a => a.pattern),
      resultChisquare:pageResults.map(a => (a.chisquare).toFixed(3)),
      resultConflict:pageResults.map(a => a.conflicts),
      resultFreq:pageResults.map(a => a.freq),
    });
  }

  updateSearchQuery(val) {
    val = processSearchQuery(val);
    this.setState({
      searchQuery:val,
    });
  }

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

  updateCypertext(val) {
    this.setState({
      cyphertext:val,
      cyphertextFreq:getFreq(val),
      cyphertextTotal:val.length,
    });
  }

  clearResults() {
    this.setState({
      page:0,
      resultTo:0,
      resultFrom:0,
      resultTotal:0,
      resultPattern:[],
      resultChisquare:[],
      resultConflict:[],
      resultFreq:[],
      hideConflict:false,
      queryResultsHideConflict:[],
      queryResults:[],
    });
  }

  /* -------- Home Page ------------------ */
  
  handleBreak() {
    let cyphertext = '';
    if(!this.state.decrypt) {
        cyphertext = encrypt(this.state.key, this.state.message);
        this.updateMode('Decrypt');
    } else {
        cyphertext = encrypt(keyFromDecryptToEncrypt(this.state.key), this.state.message);
    }
    if(cyphertext !== cyphertext.toLowerCase()) {
      alert('ERROR: Message could not be encrypted. You have plaintext letters in your message that are not in the key.');
      return;
    }
    this.clearResults();
    this.updateCypertext(cyphertext);
    this.setHome(!this.state.home);
    this.updateSearchQuery('');
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
    if(this.state.activeIdx >= 0 && this.state.home) {
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
    } else if(!this.state.home) {
        if( event.which === ENTER_CODE ) {
          this.handleGo();
        }
    }
  }

  codeNotInKey(code) {
    for(let i = 0; i < LEN_ALPHABET; i++) {
      if(this.state.key[i] && this.state.key[i].toUpperCase().charCodeAt(0) === code) {
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

  handleSearchBack() {
    if( this.state.searchQuery && this.state.searchSelection >= 0) {
      let newKey = Array(LEN_ALPHABET).fill('');
      let pattern = this.state.resultPattern[this.state.searchSelection];
      for(let i = 0; i < pattern.length; i++) {
        newKey[pattern.charCodeAt(i) - LOWERCASE_A_CODE] = this.state.searchQuery.charAt(i);
      }
      for(let i = 0; i < LEN_ALPHABET; i++) {
        if( this.state.key[i] && !newKey[i] && !newKey.includes(this.state.key[i]) ) {
          newKey[i] = this.state.key[i];
        }
      }
      this.updateMessage(decrypt(newKey, this.state.cyphertext));
      this.updateKey(newKey);
    }
    this.setHome(!this.state.home);
  }

  handleToggleConflict(event) {
    this.updateHideConflict(event.target.checked);
  }

  handlePositionPrevious() {
    if(this.state.page > 0) {
      this.updateResultDisplay(this.state.page - 1);
    }
  }
  
  handlePositionNext() {
    if(this.state.page * RESULTS_PER_PAGE + RESULTS_PER_PAGE < this.state.resultTotal) {
      this.updateResultDisplay(this.state.page + 1);
    }
  }

  frequencyClick() {
    this.updateQueryResults(this.state.queryResults, false);
  }

  chisquareClick() {
    this.updateQueryResults(this.state.queryResults, true);
  }

  compareChisquare(a, b) {
    if(a.chisquare < b.chisquare) {
      return -1;
    }
    if(a.chisquare > b.chisquare) {
      return 1;
    }
    return 0;
  }

  compareFreq(a, b) {
    if(a.freq > b.freq) {
      return -1;
    }
    if(a.freq < b.freq) {
      return 1;
    }
    return 0;
  }

  handleSelectSearch(i, event) {
    this.updateSearchSelection(i);
  }

  handleEditSearch(event) {
    this.updateSearchQuery(event.target.value);
  }

  handleGo() {
    const cyphertext = this.state.cyphertext;
    const searchQuery = this.state.searchQuery;
    if(!searchQuery){
      this.updateQueryResults([]);
      return;
    }

    let queryTotal = 0.0;
    let done = Array(LEN_ALPHABET).fill(false);
    for( let i = 0; i < searchQuery.length; i++) {
      let char = searchQuery.charCodeAt(i) - A_CODE;
      if(!done[char]){
        done[char] = true;
        queryTotal += ENGLISH_FREQ[char];
      }
    }

    let matches = new Map();
    //Load all patterns that match the search query into matches, with value equal to the pattern's frequency
    for(let i = 0; i < cyphertext.length - searchQuery.length + 1; i++) {
      let pattern = cyphertext.substring(i, i + searchQuery.length);
      let match = true;
      let key = Array(LEN_ALPHABET).fill('');
      let cyphertextTotal = 0;

      for(let j = 0; j < pattern.length; j++ ){
        let idx = pattern.charCodeAt(j) - LOWERCASE_A_CODE;
        let val = searchQuery.charAt(j);
        if( !key[idx] && !key.includes(val)){
            key[idx] = val;
            cyphertextTotal += this.state.cyphertextFreq[idx];
        } else if(key[idx] !== val){
            match = false;
            break;
        }
      }

      if(!match) {
        continue;
      }

      if(matches.has(pattern)) {
          matches.get(pattern).freq = (parseInt(matches.get(pattern).freq) + 1);      
      //only computed once per pattern
      } else {
          let chisquare = 0;
          let done = Array(LEN_ALPHABET).fill(false);
          for( let j = 0; j < pattern.length; j++) {
            let cyphertextChar = pattern.charCodeAt(j) - LOWERCASE_A_CODE;
            if(done[cyphertextChar]) {
              continue;
            }
            done[cyphertextChar] = true;
            let plaintextChar = searchQuery.charCodeAt(j) - A_CODE;
            let divisor = cyphertextTotal * ( ENGLISH_FREQ[plaintextChar] / (1.0 * queryTotal) );
            chisquare += Math.pow((this.state.cyphertextFreq[cyphertextChar] - divisor), 2) / (1.0 * divisor);
          }
          let conflicts = 0;
          for( let j = 0; j < LEN_ALPHABET; j++ ) {
            if( key[j] && ( (this.state.key[j] && this.state.key[j] !== key[j]) 
                       ||   (this.state.key.includes(key[j]) && this.state.key[j] !== key[j]) )) {
              conflicts += 1;
            }
          }
          matches.set(pattern, {freq:1, pattern:pattern, chisquare:chisquare, conflicts:conflicts});
      }
    }
    let queryResults = [];
    for( const [key, value] of matches) {
      queryResults.push(value);
    }

    this.updateQueryResults(queryResults);
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
              searchQuery={this.state.searchQuery}
              handleEditSearch={(event) => this.handleEditSearch(event)}
              handleGo={() => this.handleGo()}
              resultConflict={this.state.resultConflict}
              resultChisquare={this.state.resultChisquare}
              resultFreq={this.state.resultFreq}
              resultPattern={this.state.resultPattern}
              resultFrom={this.state.resultFrom}
              resultTo={this.state.resultTo}
              resultTotal={this.state.resultTotal}
              frequencyClick={() => this.frequencyClick()}
              chisquareClick={() => this.chisquareClick()}
              handlePositionNext={() => this.handlePositionNext()}
              handlePositionPrevious={() => this.handlePositionPrevious()}
              handleToggleConflict={(event) => this.handleToggleConflict(event)}
              handleSearchBack={()=> this.handleSearchBack()}
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
          <Box width='large' alignSelf='center'>
          <ArticleText/>
          {this.renderPage()}
          </Box>
        </Main>
      </Grommet>
    );
  }
}

function keyFromDecryptToEncrypt(key){
    let newKey = Array(LEN_ALPHABET).fill(''); 
    for(let i = 0; i < LEN_ALPHABET; i++) {
      if(key[i]) {
        newKey[key[i].charCodeAt(0) - A_CODE] = String.fromCharCode(i + LOWERCASE_A_CODE);
      }
    }
    return newKey;
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
    if(message.charAt(i) === from) {
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
  message = message.toUpperCase();
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
 * Converts message to upper case, removes all characters not in range [A,Z]
 * @param {String} message the string to be processed
 * @returns processed string
 */
function processSearchQuery(message) {
  let output = '';
  message = message.toUpperCase();
  for(let i = 0; i < message.length; i++) {
    //concat char to the end of output
    let char = message.charCodeAt(i);
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
