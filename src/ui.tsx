import {
    render
} from '@create-figma-plugin/ui'

import copy from 'copy-text-to-clipboard';

import { h } from 'preact'

function Plugin(props: { [key: string]: any }): h.JSX.Element {
    copy(props.url)

    setTimeout(() => {
        parent.postMessage({
            pluginMessage: {
                "type": "close"
            }
        }, "*")
    }, 0);


    return (
        <div></div>
    )
}

export default render(Plugin)
