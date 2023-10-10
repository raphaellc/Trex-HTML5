function configuracao(){
	var inicia_jogo = document.getElementById("inicia_jogo");
	var novo_usuario = document.getElementById("novo_usuario");
	if(localStorage.getItem("maiorScore") === null || localStorage.getItem("maiorScore") == 0 ){
	//Esconde o Elemento do Canvas
		inicia_jogo.style.display = "none";
	//Mostra o Form para registrar o usuário;
		novo_usuario.style.display = "block";
	}else{
		console.log(localStorage.getItem("maiorScore"))
		//Esconde o Form para registrar o usuário;
		novo_usuario.style.display = "none";
		//Mostra o Elemento do Canvas
		inicia_jogo.style.display = "block";
	}
}
function novoUsuario(){
	var inicia_jogo = document.getElementById("inicia_jogo");
	var novo_usuario = document.getElementById("novo_usuario");
	// Obtém o valor do campo de entrada
	var nomeUsuario = document.getElementById("nome").value;
	// Armazena o nome do usuário na variável de sessão (localStorage)
	localStorage.setItem("nomeUsuario", nomeUsuario);
	//alert(localStorage.getItem("maiorScore"));
	if(localStorage.getItem("maiorScore") !== null || localStorage.getItem("maiorScore") != 0 )
		localStorage.setItem("maiorScore",localStorage.getItem("maiorScore"));
	else{
		localStorage.setItem("maiorScore",0);
		alert(localStorage.getItem("maiorScore"));
	}
	// Start the game loop
	update();
	// Redireciona para outra página ou realiza qualquer outra ação necessária
	//alert("Nome do usuário salvo com sucesso!");

	// Você pode redirecionar para outra página usando 
	//window.location.href, por exemplo:
	 //window.location.href = "index.html";
	/* novo_usuario.style.display = "none";
	inicia_jogo.style.display = "block"; */
			
			 
        
}
