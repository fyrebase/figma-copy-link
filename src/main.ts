import { showUI } from '@create-figma-plugin/utilities'
import { ucFirstLetter } from './utils/string';

export default function () {
  let nodes = figma.currentPage.selection

  if (nodes.length > 1) {
    figma.closePlugin('Please only select one node')
  }

  let url: string
  let type: string
  
  
  if (nodes.length == 0) {
    type = "PAGE"
    url = "https://www.figma.com/file/" + figma.fileKey
  } else {
    let node = nodes[0]

    type = node.type
    url = "https://www.figma.com/file/" + figma.fileKey + "?node-id=" + encodeURIComponent(node.id)
  }

  figma.ui.onmessage = msg => {
    switch (msg.type) {
      case 'close':
        figma.closePlugin(ucFirstLetter(type) + ' link copied to clipboard')
        break;
      default:
        break;
    }
  }


  showUI({
    width: 0,
    height: 0,
    position: { x: -100000, y: -100000 }
  },
    {
      url
    })
}
