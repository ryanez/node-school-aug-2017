"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppWrapper = function (_React$Component) {
    _inherits(AppWrapper, _React$Component);

    function AppWrapper(props) {
        _classCallCheck(this, AppWrapper);

        var _this = _possibleConstructorReturn(this, (AppWrapper.__proto__ || Object.getPrototypeOf(AppWrapper)).call(this, props));

        _this.messagesStore = MessagesStore(function () {
            return _this.forceUpdate();
        });
        return _this;
    }

    _createClass(AppWrapper, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-sm-12 col-md-6 col-md-offset-3 col-sm-offset-0" },
                    React.createElement(Messages, { messages: this.messagesStore.getMessages() }),
                    React.createElement(Message, { onMessage: this.messagesStore.addMessage })
                )
            );
        }
    }]);

    return AppWrapper;
}(React.Component);

ReactDOM.render(React.createElement(AppWrapper, null), document.getElementById('root'));
