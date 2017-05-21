import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';
export default class Head extends Component {
    static defaultProps = {
        logo: {
            className: 'logo',
            title: 'FutureTeam'
        },
        titles: [{title: '文档', href: 'http://uedfamily.com/'},
            {title: '博客', href: 'http://uedfamily.com/'},
            {title: '关于我们', href: 'http://uedfamily.com/about/'},
            {title: '更多组件', href: 'http://uedfamily.com/framework/'}]
    };

    renderMainNav(titles) {
        let i = 1;
        let mainNav = titles.map((item) => {
            return <a key={++i} className='nav-link' href={item.href}>{item.title}</a>
        });
        return <div className='main-nav'>{mainNav}</div>
    }

    //待扩展
    isArray(obj) {
        return obj instanceof Array;
    }

    getMobileNav(content) {
        return (
            <div className='sub-inner'>
                {content}
            </div>
        )
    }

    render() {
        const {logo, titles} = this.props;
        const content = this.renderMainNav(titles);

        return (
            <div>
                <div className='head-inner'>
                    <div className='outer'>
                        <a className='logo-link'>
                            <i className={logo.className}></i>
                            <span className='team-title'>{logo.title}</span>
                        </a>
                        {content}
                    </div>
                </div>
                {this.getMobileNav(content)}
            </div>
        )
    }

}
