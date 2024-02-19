(()=>{
  let ogham = ' ᚁᚂᚃᚄᚅᚆᚇᚈᚉᚊᚋᚌᚍᚎᚏᚐᚑᚒᚓᚔᚕᚖᚗᚘᚙᚚ';
  let alphabet = ' blfsnhdtcqmg?zraouei12345p';
  let start = '᚛';
  let end = '᚜'

  let $latinInput;
  let $oghamOutput;
  let $dipthongs;

  let $oghamInput;
  let $latinOutput;


  function latinToOgham()
  {
    let fixedText = $latinInput.value;
    if($dipthongs.checked === true)
    {
      fixedText = fixedText
        .toLowerCase()
        .replaceAll('ng', '?')
        .replaceAll('ea', '1')
        .replaceAll('oi', '2')
        .replaceAll('ui', '3')
        .replaceAll('ia', '4')
        .replaceAll('ae', '5');
    }

    let sentences = fixedText.split(/[.\n]/);
    let oghamStrands = [];
    for(let sentence of sentences)
    {
      sentence = sentence.trim();
      let oghamStrand = start;
      if(sentence)
      {
        for(let i = 0; i < sentence.length; i++)
        {
          let char = sentence.charAt(i);
          let pos = alphabet.indexOf(char);
          let oghamChar = ogham.charAt(pos);
          oghamStrand += oghamChar;
        }
        oghamStrand += end;
        oghamStrands.push(oghamStrand);
      }
    }
    $oghamOutput.innerHTML = oghamStrands.join('<br/>');
  }

  function oghamToLatin()
  {
    let plainText = '';
    for(let i = 0; i < $oghamInput.value.length; i++)
    {
      let stave = $oghamInput.value.charAt(i);
      if(stave !== start)
      {
        if(stave === end)
        {
          plainText += '.<br/>';
        }
        else
        {
          let pos = ogham.indexOf(stave);
          let letter = alphabet.charAt(pos);
          plainText += letter;
        }
      }
      plainText = plainText
        .replaceAll('?', 'ng')
        .replaceAll('1', 'ea')
        .replaceAll('2', 'oi')
        .replaceAll('3', 'ui')
        .replaceAll('4', 'ia')
        .replaceAll('5', 'ae');
      $latinOutput.innerHTML = plainText;
    }
  }

  window.addEventListener('load', function(){
    $oghamOutput = document.getElementById('oghamOutput');
    $latinInput = document.getElementById('plaintext');
    $dipthongs = document.getElementById('replaceDipthongs');
    $oghamInput = document.getElementById('ogham');
    $latinOutput = document.getElementById('plainTextOutput');
    $latinInput.addEventListener('keyup', latinToOgham);
    $dipthongs.addEventListener('change', latinToOgham);
    $oghamInput.addEventListener('keyup', oghamToLatin);
  });

})();
