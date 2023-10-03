function configuracao(){
	//Esconde o Elemento do Canvas
	inicia_jogo = document.getElementById("inicia_jogo");
	inicia_jogo.Style.Display = "none";
	//Mostra o Form para registrar o usuário;
	novo_usuario = document.getElementById("novo_usuario");
	novo_usuario.Style.Display = "none";
}
function novoUsuario(){
	inicia_jogo = document.getElementById("inicia_jogo");
	novo_usuario = document.getElementById("novo_usuario");
	// Obtém o valor do campo de entrada
	var nomeUsuario = document.getElementById("nome").value;
	// Armazena o nome do usuário na variável de sessão (localStorage)
	localStorage.setItem("nomeUsuario", nomeUsuario);
	alert(localStorage.getItem("maiorScore"));
	if(localStorage.getItem("maiorScore") !== null || localStorage.getItem("maiorScore") != 0 )
		localStorage.setItem("maiorScore",localStorage.getItem("maiorScore"));
	else{
		localStorage.setItem("maiorScore",0);
		alert(localStorage.getItem("maiorScore"));
	}
	
	// Redireciona para outra página ou realiza qualquer outra ação necessária
	//alert("Nome do usuário salvo com sucesso!");

	// Você pode redirecionar para outra página usando 
	//window.location.href, por exemplo:
	 //window.location.href = "index.html";
	novo_usuario.Style.Display = "none";
	inicia_jogo.Style.Display = "block";
			
			 
        
}
