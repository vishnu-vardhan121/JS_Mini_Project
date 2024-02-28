function sendMessage(messageBoxId) {
    var messageInput = document.querySelector(`#${messageBoxId} + .input-section .message-input`);
    var messageBox = document.getElementById(messageBoxId);

    if (messageInput.value.trim() !== "") {
        var sent = document.createElement("div");
        sent.setAttribute("class", "incoming-message");
        sent.innerText = messageInput.value;
        messageBox.appendChild(sent);


        if(messageBoxId === 'naren-messages'){
            var otherMessageBoxId ='vishnu-messages'
        }else{
            var otherMessageBoxId ='naren-messages'
        }
        var otherMessageBox = document.getElementById(otherMessageBoxId);

        var received = document.createElement("div");
        received.setAttribute("class", "outgoing-message");
        received.innerText = ` ${messageInput.value}`;
        otherMessageBox.appendChild(received);
        messageInput.value = "";
    }
}