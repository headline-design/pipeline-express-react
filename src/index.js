import React from 'react'
import styles from './styles.module.css'
import Pipeline from "@pipeline-ui-2/pipeline";

export { Pipeline };

export const AlgoSendButton = (props) => {

    return (
        <div>
            <button
                className={styles.AlgoSendButton}
                onClick={() => {
                    Pipeline.send(
                        props.recipient,
                        parseInt(props.amount || 1),
                        props.note || "",
                        Pipeline.myAddress,
                        props.wallet,
                        props.index || 0
                    ).then(data => {
                        if (typeof data !== 'undefined') {
                            if (props.returnTo !== undefined) {
                                const object = {}
                                object[props.returnTo] = data
                                props.context.setState(object)
                            }
                            if (typeof props.onChange === "function") {
                                props.onChange(data)
                            }
                        }
                    })
                }}
            >
                Send
            </button>
        </div>
    )
}

export const AlgoButton = (props) => {
    return (
        <div>
            <select id="walletswitch" onChange={() => { Pipeline.pipeConnector = document.getElementById("walletswitch").value }}>
                <option>myAlgoWallet</option>
                <option>WalletConnect</option>
                <option>AlgoSigner</option>
            </select>
            <br />
            <button
                className={styles.AlgoButton}
                onClick={() => {
                    Pipeline.connect(props.wallet).then(accounts => {

                        if (props.returnTo !== undefined) {
                            const data = {};
                            data[props.returnTo] = accounts;
                            props.context.setState(data);
                        }
                        if (typeof props.onChange === "function") {
                            props.onChange(accounts)
                        }
                    })
                }}
            >
                Connect
            </button>
        </div>
    )
}