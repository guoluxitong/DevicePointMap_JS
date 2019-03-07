import byteField from "./byteField";

export default class countShowField extends byteField{
    constructor(){
        this.groupKey = ""
    }
    setGroupKey(groupKey){
        this.groupKey = groupKey
    }
    
    getValue(){
        return 0
    }
    haveValue(...bytes){
        return true
    }
    setDeviceFieldForUiKey(fieldForUI){
        fieldForUI.key = this.groupKey
    }
}