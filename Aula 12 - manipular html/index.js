const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

// const raiz = Math.sqrt(numero);

texto.innerHTML = `<p>A raiz quadrada é: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro:${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É um NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondar pra baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondar pra baixo: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
