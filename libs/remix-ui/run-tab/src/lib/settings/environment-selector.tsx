import React, { useState, useEffect } from 'react'
/* eslint-disable-next-line */
import './environment-selector.css'

export const EnvironmentSelector = (props: any) => {
    const [networkMessage, setNetworkMessage] = useState("");
    const { updateNetwork, selectedProvider } = props

    const onSettingsChange = (e) => {
        const provider = e.target.value
        updateNetwork(provider, (msg) => { setNetworkMessage(msg) })
    }

    return (
        <div className="remixui_crow">
            <label id="selectExEnv" className="remixui_settingsLabel">
                Environment
            </label>
            <div className="remixui_environment">
                <select id="selectExEnvOptions" value={selectedProvider} data-id="settingsSelectEnvOptions" onChange={(e) => { onSettingsChange(e) }} className="form-control remixui_select custom-select">
                    {props.options.map((option, index) => (
                        <option id={`${option.value}-mode`} key={index} title={option.title} value={option.value}>{option.name}</option>
                    ))}
                </select>
                <a href="https://remix-ide.readthedocs.io/en/latest/run.html#run-setup" target="_blank"><i className="remixui_infoDeployAction ml-2 fas fa-info" title="check out docs to setup Environment"></i></a>
            </div>
            <div className="remixui_crow">
                <div className="remixui_settingsLabel">
                </div>
                <div className="remixui_environment" data-id="settingsNetworkEnv">
                    <span className="remixui_network badge badge-secondary">{networkMessage}</span>
                </div>
            </div>
        </div>
    )
}

export default EnvironmentSelector