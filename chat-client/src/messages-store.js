function MessagesStore(onChange) {
    let count = 0;
    let messages = [];
    let message = (key, value) => ({key, value});
    // let socket = io.connect('http://localhost:3000');
    let socket = io.connect('https://node-school-aug-2017.herokuapp.com');

    socket.on('messages', (data) => {
        messages.splice.apply(messages, [0, messages.length].concat(data.map(keyMessage)));
        emitChange();
    });

    socket.on('message', (data) => {
        messages.splice(messages.length, 0, keyMessage(data));
        emitChange();     
    });

    return {
        addMessage,
        getMessages: () => messages
    };

    function addMessage(value) {
        let data = {value};
        messages.push(keyMessage(data));
        socket.emit('message', data);
        emitChange();
    }

    function keyMessage(data) {
        return message((++count).toString(), data.value)
    }

    function emitChange() {
        if (onChange) {
            onChange();
        }        
    }
}