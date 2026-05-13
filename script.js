// Criar função que irá modificar a imagem no HTML ao clicar no button

function changeImage() {
  const imagem_ID = document.getElementById('myImage');
  const checkImage = imagem_ID.getAttribute('src');
  if (checkImage === './images/logo.jpeg') {
    imagem_ID.setAttribute('src', './images/foto2.webp');
    imagem_ID.setAttribute('alt', 'Desenvolvedor Reinaldo Santos na academia');
  } else {
    imagem_ID.setAttribute('src', './images/logo.jpeg');
    imagem_ID.setAttribute('alt', 'Imagem do desenvolvedor Reinaldo Santos');
  }
}

// Criar função que irá modificar o tipo de input

function chargeType() {
  const input_ID = document.getElementById('modificarInput');
  const typeInput = input_ID.getAttribute('type');
  switch (typeInput) {
    case 'text':
      input_ID.setAttribute('type', 'number');
      break;
    case 'number':
      input_ID.setAttribute('type', 'radio');
      break;
    case 'radio':
      input_ID.setAttribute('type', 'range');
      break;
    default:
      input_ID.setAttribute('type', 'text');
  }
}
