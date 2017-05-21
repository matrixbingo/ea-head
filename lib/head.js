'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Head = (function (_Component) {
    _inherits(Head, _Component);

    function Head() {
        _classCallCheck(this, Head);

        _Component.apply(this, arguments);
    }

    Head.prototype.renderMainNav = function renderMainNav(titles) {
        var i = 1;
        var mainNav = titles.map(function (item) {
            return _react2['default'].createElement(
                'a',
                { key: ++i, className: 'nav-link', href: item.href },
                item.title
            );
        });
        return _react2['default'].createElement(
            'div',
            { className: 'main-nav' },
            mainNav
        );
    };

    //待扩展

    Head.prototype.isArray = function isArray(obj) {
        return obj instanceof Array;
    };

    Head.prototype.getMobileNav = function getMobileNav(content) {
        return _react2['default'].createElement(
            'div',
            { className: 'sub-inner' },
            content
        );
    };

    Head.prototype.render = function render() {
        var _props = this.props;
        var logo = _props.logo;
        var titles = _props.titles;

        var content = this.renderMainNav(titles);

        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'div',
                { className: 'head-inner' },
                _react2['default'].createElement(
                    'div',
                    { className: 'outer' },
                    _react2['default'].createElement(
                        'a',
                        { className: 'logo-link' },
                        _react2['default'].createElement('i', { className: logo.className }),
                        _react2['default'].createElement(
                            'span',
                            { className: 'team-title' },
                            logo.title
                        )
                    ),
                    content
                )
            ),
            this.getMobileNav(content)
        );
    };

    _createClass(Head, null, [{
        key: 'defaultProps',
        value: {
            logo: {
                className: 'logo',
                title: 'FutureTeam'
            },
            titles: [{ title: '文档', href: 'http://uedfamily.com/' }, { title: '博客', href: 'http://uedfamily.com/' }, { title: '关于我们', href: 'http://uedfamily.com/about/' }, { title: '更多组件', href: 'http://uedfamily.com/framework/' }]
        },
        enumerable: true
    }]);

    return Head;
})(_react.Component);

exports['default'] = Head;
module.exports = exports['default'];