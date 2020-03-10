import { css } from 'emotion'

const colLabelMinWidth = 140
const colLabelWidth = 300
const colLabelMinHeight = 150

export const colLabelClass = css`
  min-width: ${colLabelMinWidth}px;
  width: ${colLabelWidth}px;
  max-width: ${colLabelWidth}px;
  word-break: break-word;
`

export const projectCarContent = css`
  min-height: ${colLabelMinHeight}px;
  min-width: ${colLabelMinWidth}px;
  width: 100%;
  word-break: break-word;
`

export const projectCardClass = css`
  margin-left: 10%;
  margin-right: 10%;
`

export const cardHeaderNav = css`
  background-color: gainsboro;
  padding-bottom: 8px;
  marginBottom: '8px';
`

export const cardText = css`margin-left: 10px;`