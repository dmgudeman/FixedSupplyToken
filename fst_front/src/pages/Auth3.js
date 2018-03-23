import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link, Route, withRouter } from 'react-router-dom';
import Transfer from "./Transfer";

const Button1 = withRouter(({ history }) => (
    <Button
        type="primary"
        onClick={() => { history.push({pathname: '/transfer', state:{mnemonic: this}}) }}
    >
        Click Me!
    </Button>
))

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};
class DynamicRule extends Component {
    state = {
        checkNick: true,
    };
    componentWillMount(){
        console.log("CWM numnuts", this.props.numnuts);
        console.log("CWM this.props.history", this.props.history)
    }
    check = () => {
        this.props.form.validateFields(
            (err) => {
                if (!err) {
                    console.log("this.props", this.props);
                    console.log("this.props.context", this.props.context)
                    console.log("this.props.form.getFieldsValue().mnenonic", this.props.form.getFieldsValue().mnemonic)
                    console.info('success');
                }
            },
        );
    }
    handleChange = (e) => {
        this.setState({
            checkNick: e.target.checked,
        }, () => {
            this.props.form.validateFields(['accountNumber'], { force: true });
        });
    }



    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form.Item {...formItemLayout} label="Name">
                    {getFieldDecorator('mnemonic', {
                        rules: [{
                            required: true,
                            message: 'Please input your 12 word mnemonic',
                        }],
                    })(
                        <Input placeholder="Please input your mnemonic" />
                    )}
                </Form.Item>
                <Form.Item {...formItemLayout} label="account number">
                    {getFieldDecorator('accountNumber', {
                        rules: [{
                            required: this.state.checkNick,
                            message: 'Please input your account number',
                        }],
                    })(
                        <Input placeholder="Please input your account number" />
                    )}
                </Form.Item>

                <Form.Item {...formTailLayout}>
                    <Button1

                        onClick={() => { this.check}}>
                    </Button1>
                </Form.Item>
            </div>

        );
    }
}

export const WrappedDynamicRule = Form.create()(DynamicRule);
// ReactDOM.render(<WrappedDynamicRule />, mountNode);