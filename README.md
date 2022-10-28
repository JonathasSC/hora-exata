# Hora exata
##### Horário pontual de forma direta e fácil.


##### Topícos a seguir:

1. Como funciona
2. Objetivos 
3. Funções

#### Como funciona:

O site funciona de forma fácil, tendo foco o acesso rápido ao seu conteúdo principal, sendo esse o relógio e a data.

Já dentro de seus arquivos, temos um documento index.html onde terá também dentro dele uma seção de códigos feitos em javascript, um arquivo styles.css para estilização e duas imagens moon,png e sun.png usadas também para uma melhor estética, ambos estão nas pastas html,styles e img respectivamente.

Dentro do documento index.html como citado anteriormente teremos onde ocorrerá a parte funcional do site, o script feito em javascript dentro da própria tag script.

Veja abaixo:

<img src="C:\Users\PC\Documents\repositórios\hora-exata\ignore\print-1.png">

<img src="C:\Users\PC\Documents\repositórios\hora-exata\ignore\print-2.png">

Umas das funcionalidades do site é atualizar o hórario e a data de forma certeira para que o rélogio não dependa de serviços externos ou API's para funcionar.

Isso é feito com um sistema de repetição com pausa de 1 segundo, para atualizar todo o conteúdo mais importante, sendo esse o segredo para os segundos do rélogio passar sem problemas.
O site tem uma função de mostrar o horário também em seu título, que funciona junto ao rélogio princípal.

Vemos esse sistema de repetição apartir da linha 42

Dentro dessa repetição existe três estruturas de condições, onde se o horário for menor que 12:00, será mostrado uma mensagem de "Bom dia", se o horário for menor que 17:00 e maior que 12:00 mostrará uma mensagem de boa tarde, e caso seja maior que 17:00 será mostrará uma mensagem de "boa noite".

podemos ver isso apartir da linha 90 até 103.

#### Objetivos

Os objetivos do site são:

- Acertar o horário do seu relógio físico ou do sistema operacional
- Facil vizualização a longa distancia, podendo fazer outras atividades longe do dispositivo.
- Vizualizar hórario sem sair do navegador

#### Funções

Como dito nos dois tópicos acima, as funcionalidades são:

- Mostrar hórario com atualização precisa;
- Mostrar dia, mês e ano;
- Mostrar hórario no título da página;
- Mostrar mensagem de acordo com hórario;
- Mostrar imagem de acordo com hórario;

Adições para futuros updates:

- Cronomêtro
- Temporizador
- Alarmes
- Agenda 
