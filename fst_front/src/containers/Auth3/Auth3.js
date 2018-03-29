import React, { Component } from 'react';
import { Form, Input, Button} from 'antd';

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
        mnemonic: '',
        numnuts: 3
    };
    // componentWillMount(){
    //     console.log("Auth3 CWM numnuts", this.props.numnuts);
    //     console.log("Auth3 CWM this.props.history", this.props.history)
    // }
    check = () => {
        this.props.form.validateFields(
            (err) => {
                if (!err) {
                    this.props.form.getFieldsValue().mnemonic;
                    console.info('Auth3 check success');
                    this.props.history.push({pathname: '/transfer', mnemonic:this.state.mnemonic})
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
                    <Button
                        type="primary"
                        onClick={ this.check}>
                    Go To Transfer
                    </Button>
                </Form.Item>
            </div>

        );
    }
}

export const WrappedDynamicRule = Form.create()(DynamicRule);
// ReactDOM.render(<WrappedDynamicRule />, mountNode);