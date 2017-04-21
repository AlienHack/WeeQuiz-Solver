var script = document.createElement('enabledJquery');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$('[class="content"]').html("<center><b>" + ("</br>Plugin Activated</br>WeeQuiz Solver 1.2 By <font color=red>AlienHack</font>") + "</b></center>" + $('[class="content"]').html());

$('[class^="m_question_q"]').each(function(index, obj){
        var cValue = (obj.getAttribute('onclick'));
        if(cValue!==null){
            cValue = cValue.replace('cAnswer(','');
            cValue = cValue.replace(')','');
            var xBlader = cValue.split(',');
            if(xBlader[4]==xBlader[6]){
				obj.className+=" mqq_yes";
            }else{
				obj.className+=" mqq_no";
			}
        }
});