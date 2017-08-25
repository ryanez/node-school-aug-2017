'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_React$Component) {
    _inherits(Message, _React$Component);

    function Message(props) {
        _classCallCheck(this, Message);

        var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, props));

        _this.state = { message: '' };
        _this.onSendClick = _this.onSendClick.bind(_this);
        _this.onMessageChange = _this.onMessageChange.bind(_this);
        _this.onKeyPressed = _this.onKeyPressed.bind(_this);
        return _this;
    }

    _createClass(Message, [{
        key: 'onSendClick',
        value: function onSendClick() {
            if (this.props.onMessage) {
                this.props.onMessage(this.state.message);
            }

            this.setState({ message: '' });
        }
    }, {
        key: 'onMessageChange',
        value: function onMessageChange(e) {
            this.setState({ message: e.target.value });
        }
    }, {
        key: 'onKeyPressed',
        value: function onKeyPressed(e) {
            if (e.charCode === 13) {
                e.preventDefault();
                this.onSendClick();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'col-sm-8 col-md-8' },
                    React.createElement('input', { type: 'text', className: 'form-control input-lg', placeholder: 'type a message...',
                        value: this.state.message, onChange: this.onMessageChange,
                        onKeyPress: this.onKeyPressed })
                ),
                React.createElement(
                    'div',
                    { className: 'col-sm-4 col-md-4' },
                    React.createElement(
                        'button',
                        { className: 'btn btn-primary btn-block btn-lg', onClick: this.onSendClick },
                        React.createElement('i', { className: 'fa fa-envelope-o fa-fw', 'aria-hidden': 'true' }),
                        'Send'
                    )
                )
            );
        }
    }]);

    return Message;
}(React.Component);
