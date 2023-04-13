function gerarSenha(tamanho, minusculas, maiusculas, numeros, simbolos) {
    var caracteres = '';
    var senha = '';
  
    if (minusculas) {
      caracteres += 'abcdefghijklmnopqrstuvwxyz';
    }
  
    if (maiusculas) {
      caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
  
    if (numeros) {
      caracteres += '0123456789';
    }
  
    if (simbolos) {
      caracteres += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    }
  
    for (var i = 0; i < tamanho; i++) {
      senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
  
    return senha;
  }
  
  function mostrarSenha() {
    var tamanho = document.getElementById("tamanho").value;
    var minusculas = document.getElementById("minusculas").checked;
    var maiusculas = document.getElementById("maiusculas").checked;
    var numeros = document.getElementById("numeros").checked;
    var simbolos = document.getElementById("simbolos").checked;
  
    document.getElementById("senha-gerada").value = gerarSenha(tamanho, minusculas, maiusculas, numeros, simbolos);
  }
  
  function copiarSenha() {
  var senhaGerada = document.getElementById("senha-gerada");
  senhaGerada.select();
  document.execCommand("copy");
  alert("Senha copiada para a área de transferência.");
}
