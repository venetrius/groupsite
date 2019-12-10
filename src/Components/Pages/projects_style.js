import { css } from 'emotion'


// const alternateListItemBackground = '#F5F5F5'
const colLabelMinWidth = 140
const colLabelWidth = 300
const colLabelMinHeight = 150
// const colPercentValueWidth = 50
// const colPercentBarWidth = 50
// const colAmountWidth = 80
// const colSourceWidth = 200

export const colLabelClass = css`
  min-width: ${colLabelMinWidth}px;
  width: ${colLabelWidth}px;
  max-width: ${colLabelWidth}px;
  word-break: break-word;
`

export const projectCardClass = css`
  min-height: ${colLabelMinHeight}px;
  min-width: ${colLabelMinWidth}px;
  width: ${colLabelWidth}px;
  max-width: ${colLabelWidth}px;
  word-break: break-word;
`