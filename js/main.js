(()=>{
  let ogham = ' ᚁᚂᚃᚄᚅᚆᚇᚈᚉᚊᚋᚌᚍᚎᚏᚐᚑᚒᚓᚔᚕᚖᚗᚘᚙᚚ';
  let alphabet = ' blfsnhdtcqmg?zraouei12345p';
  let start = '᚛';
  let end = '᚜'

  let $output;
  let $input;
  window.addEventListener('load', function(){
    $output = document.getElementById('output');
    $input = document.getElementById('plaintext');
    $input.addEventListener('keyup', function(){
      let oghamScript = start;

      let fixedText = this.value
        .toLowerCase()
        .replaceAll('ea', '1')
        .replaceAll('oi', '2')
        .replaceAll('ui', '3')
        .replaceAll('ia', '4')
        .replaceAll('ae', '5');
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
      output.innerHTML = oghamScript;
    });
  });

})();
