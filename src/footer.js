import React,{PropTypes,Component} from 'react';
import classnames from 'classnames';
export default class Footer extends Component {
    static propTypes = {
    };
    static defaultProps = {
        content:'©2017 商户与运营技术部'
    };
    hasChildren(){
        return !!this.props.children;
    }
    getContent(){
        let content ='';
        if(this.hasChildren()){
            content = this.props.children;
        }else{
            content = this.props.content;
        }
        return content;
    }
    render(){
        //let {content} = this.props;
        return(
            <div className='footer-inner'>{this.getContent()}</div>
        )
    }

}

