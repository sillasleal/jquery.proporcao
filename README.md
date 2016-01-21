<h3>Plugin responsável por manter a proporção de componentes da página</h3>

<h4>Instalação do plugin</h4>
<p>Usando o terminal, navegue até o diretório do projeto e rode o comando:</p>
<code>bower install jquery.proporcao --save</code>
<h5>Forma de usar:</h5>
<p>Informe a proporção ou dimenções iniciais, estas serão usadas como base para o calculo.</p>
<code>$(seletor).proporcao({
    width:500,
    height:200
});</code><br>
<p>Caso não sejam informadas as dimenssões, os dados do proprio componentes são usados.</p>
<code>$(seletor).proporcao();</code>
