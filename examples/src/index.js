import {Head, Footer} from '../../dist/ea-head.js'
import React, {Component, PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';

const logo = {
    className: 'logo',
    title: 'FutureTeam'
};
const titles = [
        {title: '博客111', href: 'http://uedfamily.com/'},
        {title: '文档', href: 'http://www.baidu.com'},
        {title: '关于我们', href: 'http://uedfamily.com/about/'},
        {title: '更多组件', href: 'http://uedfamily.com/framework/'}
    ];

ReactDom.render(
    <Head logo={logo} titles={titles}></Head>,
    document.getElementById('head')
);
ReactDom.render(
    <Footer content='adasdas'>
        sddsdssdsd
    </Footer>,
    document.getElementById('footer')
);
