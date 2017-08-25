'use strict';

function MessagesStore(onChange) {
    var count = 0;
    var messages = [];
    var message = function message(key, value) {
        return { key: key, value: value };
    };
    // let socket = io.connect('http://localhost:3000');
    var socket = io.connect('https://node-school-aug-2017.herokuapp.com');

    socket.on('messages', function (data) {
        messages.splice.apply(messages, [0, messages.length].concat(data.map(keyMessage)));
        emitChange();
    });

    socket.on('message', function (data) {
        messages.splice(messages.length, 0, keyMessage(data));
        emitChange();
    });

    return {
        addMessage: addMessage,
        getMessages: function getMessages() {
            return messages;
        }
    };

    function addMessage(value) {
        var data = { value: value };
        messages.push(keyMessage(data));
        socket.emit('message', data);
        emitChange();
    }

    function keyMessage(data) {
        return message((++count).toString(), data.value);
    }

    function emitChange() {
        if (onChange) {
            onChange();
        }
    }
}
