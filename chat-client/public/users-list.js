'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_React$Component) {
    _inherits(UsersList, _React$Component);

    function UsersList(props) {
        _classCallCheck(this, UsersList);

        var _this = _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(UsersList, [{
        key: 'userRow',
        value: function userRow(user) {
            var _this2 = this;

            var selected = !!this.state[user.key];

            return React.createElement(
                'tr',
                { key: user.key, className: selected ? 'info' : '', onClick: function onClick(e) {
                        return _this2.rowClick(user);
                    } },
                React.createElement(
                    'td',
                    null,
                    user.first
                ),
                React.createElement(
                    'td',
                    null,
                    user.last
                ),
                React.createElement(
                    'td',
                    null,
                    user.username
                )
            );
        }
    }, {
        key: 'rowClick',
        value: function rowClick(user) {
            var state = {};
            state[user.key] = !this.state[user.key];
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'table',
                { className: 'table table-bordered' },
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'td',
                            null,
                            'First Name'
                        ),
                        React.createElement(
                            'td',
                            null,
                            'Last Name'
                        ),
                        React.createElement(
                            'td',
                            null,
                            'Username'
                        )
                    )
                ),
                React.createElement(
                    'tbody',
                    null,
                    this.props.users.map(function (user) {
                        return _this3.userRow(user);
                    })
                )
            );
        }
    }]);

    return UsersList;
}(React.Component);
