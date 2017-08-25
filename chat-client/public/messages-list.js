'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Messages = function (_React$Component) {
    _inherits(Messages, _React$Component);

    function Messages(props) {
        _classCallCheck(this, Messages);

        return _possibleConstructorReturn(this, (Messages.__proto__ || Object.getPrototypeOf(Messages)).call(this, props));
    }

    _createClass(Messages, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'col-md-12' },
                    this.props.messages.map(renderMessage)
                )
            );
        }
    }]);

    return Messages;
}(React.Component);

function renderMessage(message) {
    return React.createElement(
        'p',
        { key: message.key, className: 'text-left text-primary' },
        tokenize(message.value)
    );
}

function tokenize(text) {
    var splitExp = /(:fa-[a-zA-Z\-]*:)/g;
    var replaceExp = /(:)(fa-[a-zA-Z\-]*(?=:))(:)/;
    var values = text.split(splitExp);

    return values.map(function (value, i) {
        return splitExp.test(value) ? React.createElement('i', { key: i.toString(), className: 'fa ' + value.replace(replaceExp, '$2') + ' fa-lg', 'aria-hidden': 'true' }) : React.createElement(
            'span',
            { key: i.toString() },
            value
        );
    });
}
