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
    let oghamScript = start;
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
    for(let i = 0; i < fixedText.length; i++)
    {
      let char = fixedText.charAt(i);
      if(char === '.')
      {
        oghamScript += end+'<br/>'+start;
      }
      let pos = alphabet.indexOf(char);
      let oghamChar = ogham.charAt(pos);
      oghamScript += oghamChar;
    }
    oghamScript += end;
    $oghamOutput.innerHTML = oghamScript;
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
          plainText += '<br/>';
        }
        else
        {
          let pos = ogham.indexOf(stave);
          let letter = alphabet.charAt(pos);
          plainText += letter;
        }
      }
      // fixedText = fixedText
      //         .toLowerCase()
      //         .replaceAll('ea', '1')
      //         .replaceAll('oi', '2')
      //         .replaceAll('ui', '3')
      //         .replaceAll('ia', '4')
      //         .replaceAll('ae', '5');
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
