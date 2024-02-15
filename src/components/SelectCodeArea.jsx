import { codeArea } from '../mocks/codeArea'

const SelectCodeArea = () => {
  return (
    <select name='code' defaultValue="54" >
      {
        codeArea.map( code => (
          <option key={code.name} value={code.phoneCode}>{code.name} (+{code.phoneCode})</option>
        ))
      }
    </select>
  )
}

export default SelectCodeArea
