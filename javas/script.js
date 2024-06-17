function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var messageText = messageInput.value.trim();

    if (messageText !== '') {
        var messageContainer = document.getElementById('message-container');
        var messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sender');
        messageElement.textContent = messageText;
        messageContainer.appendChild(messageElement);

        // Limpar o campo de entrada após o envio da mensagem
        messageInput.value = '';

        // Rolagem automática para o final do contêiner de mensagens
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}
