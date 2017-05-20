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

var Footer = (function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        _Component.apply(this, arguments);
    }

    Footer.prototype.hasChildren = function hasChildren() {
        return !!this.props.children;
    };

    Footer.prototype.getContent = function getContent() {
        var content = '';
        if (this.hasChildren()) {
            content = this.props.children;
        } else {
            content = this.props.content;
        }
        return content;
    };

    Footer.prototype.render = function render() {
        //let {content} = this.props;
        return _react2['default'].createElement(
            'div',
            { className: 'footer-inner' },
            this.getContent()
        );
    };

    _createClass(Footer, null, [{
        key: 'propTypes',
        value: {},
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            content: '©2017 商户与运营技术部'
        },
        enumerable: true
    }]);

    return Footer;
})(_react.Component);

exports['default'] = Footer;
module.exports = exports['default'];