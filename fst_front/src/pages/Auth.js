import React, {Component} from 'react';
import { Input, Button } from 'antd';

class Auth extends Component {
    state = {
        mnemonic: '1',
        accountNumber: ''
    }

    handleMnemonic = async (event) => {
        await this.setState({mnemonic: event.target.value});
        await console.log("this.state.mnemonic", this.state.mnemonic)

    }
    handleAccountNumber = async (event) => {
        await this.setState({accountNumber: event.target.value});
        await console.log("this.state.accountNumber", this.state.accountNumber)

    }

    render() {
        return (
            <div>
                <div style={{marginLeft: 20}}><h1>Auth Page</h1></div>
                <div style={{ marginBottom: 16 }}>
                    <Input
                        defaultValue={this.state.mnemonic}
                        addonBefore="12 word mnemonic"
                        style={{ width: "50%", marginLeft:20 }}
                        onChange={this.handleMnemonic}
                     />
                </div>
                <div style={{ marginBottom: 16 }}>
                <Input
                    addonBefore="Your account number"
                    defaultValue={this.state.accountNumber}
                    style={{ width: "50%", marginLeft:20 }}
                    onChange={this.handleAccountNumber}
                />
            </div>

            </div>
        )
    }
}

export default Auth;