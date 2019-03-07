import deviceFieldForUI from "./deviceFieldForUI"
import intCommand from '../entity/intCommand'
import {deviceModel} from '../model/sdcSoftDevice'
import { type } from "os";
export default class byteField{
    constructor() {
        this.startIndex=0
        this.bytesLength=0
        this.value=0
        this.valueMap={}
        this.bit=0
        this.baseNumber=0
        this.isShow=true
        this.needFormat = false
        this.address = ""
        this.maxValue = {}
        this.minValue = {}
    }
    createCommandAndInitValue(){
        const cmd = new intCommand()
        cmd.initValue(this.value)
        return cmd
    }
    getValueBitString(){
        return String.format("%d",this.value)
    }
    haveValue(...bytes){}
    getValueString(){
        if(this.bytesLength > 0){
            return String.format("%s%s",getValueBitString(),this.unit)
        }
        this.needFormat = true
        return String.format("%%s%s",this.unit)
    }
    getDeviceFieldForUI(){
        const deviceFieldForUIObj=new deviceFieldForUI()
        this.setDeviceFieldForUIKey(deviceFieldForUIObj)        
        deviceFieldForUIObj.name=this.name
        deviceFieldForUIObj.title=this.title
        deviceFieldForUIObj.valueString= this.getValueString()
        deviceFieldForUIObj.needFormat = this.needFormat
        deviceFieldForUIObj.unit = this.unit
        switch (arguments.length) {
            case 1:
                deviceFieldForUIObj.value=this.value 
                break;
            case 2:
                deviceFieldForUIObj.value=arguments[1]
                break;
        }
        return deviceFieldForUIObj
    }
    /**
     * 添加计算并显示的点位
     */
    
    init(){
        switch (arguments.length) {
            case 3:
                arguments[0].name = arguments[1]
                arguments[0].title = arguments[2]
                break;
            case 4:
                arguments[1].groupKey = arguments[0]
                arguments[1].name = arguments[2]
                arguments[1].title = arguments[3]
                return arguments[1]
            case 5:
                if(typeof arguments[1] == 'string'){
                    if(typeof arguments[2] == 'string'){
                        arguments[0].name = arguments[1]
                        arguments[0].title = arguments[2]
                        arguments[0].value = arguments[3]
                        arguments[0].valueMap = arguments[4]
                    }else if(typeof arguments[2] == 'int'){
                        arguments[0].name=arguments[1]
                        arguments[0].startIndex=arguments[2]
                        arguments[0].byteLength=arguments[3]
                        arguments[0].title=arguments[4]
                    }
                }else{
                    arguments[1].groupKey = arguments[0]
                    arguments[1].name = arguments[2]
                    arguments[1].title = arguments[3]
                    arguments[1].unit = arguments[4]
                    return arguments[1]
                }
                break;
            case 6:
                if(typeof arguments[5] == 'object'){
                    arguments[0].name=arguments[1]
                    arguments[0].startIndex=arguments[2]
                    arguments[0].byteLength=arguments[3]
                    arguments[0].title=arguments[4]
                    arguments[0].valueMap=arguments[5]
                }else if(typeof arguments[5] == 'number'){
                    arguments[0].name=arguments[1]
                    arguments[0].startIndex=arguments[2]
                    arguments[0].byteLength=arguments[3]
                    arguments[0].title=arguments[4]
                    arguments[0].bit=arguments[5]
                }else if(typeof arguments[5] == 'string'){
                    arguments[0].name=arguments[1]
                    arguments[0].startIndex=arguments[2]
                    arguments[0].byteLength=arguments[3]
                    arguments[0].title=arguments[4]
                    arguments[0].unit=arguments[5]
                }
                break;
            case 7:
                if(typeof arguments[6] == 'object'){
                    arguments[0].name=arguments[1]
                    arguments[0].startIndex=arguments[2]
                    arguments[0].byteLength=arguments[3]
                    arguments[0].title=arguments[4]
                    arguments[0].bit=arguments[5]
                    arguments[0].valueMap=arguments[6]
                }else if(typeof arguments[6] == 'number'){
                    arguments[0].name=arguments[1]
                    arguments[0].startIndex=arguments[2]
                    arguments[0].byteLength=arguments[3]
                    arguments[0].title=arguments[4]
                    arguments[0].unit=arguments[5]
                    arguments[0].baseNumber=arguments[6]
                }
                break;
            case 10:
                if(typeof arguments[5] == 'object'){
                    arguments[0].name=arguments[1]
                    arguments[0].startIndex=arguments[2]
                    arguments[0].byteLength=arguments[3]
                    arguments[0].title=arguments[4]
                    arguments[0].valueMap=arguments[5]
                    arguments[0].cmdGroupKey=arguments[6]
                    arguments[0].address=arguments[7]
                    arguments[0].minValue=arguments[8]
                    arguments[0].maxValue=arguments[9]
                }else if(typeof arguments[5] == 'string'){
                    arguments[0].name=arguments[1]
                    arguments[0].startIndex=arguments[2]
                    arguments[0].byteLength=arguments[3]
                    arguments[0].title=arguments[4]
                    arguments[0].unit=arguments[5]
                    arguments[0].cmdGroupKey=arguments[6]
                    arguments[0].address=arguments[7]
                    arguments[0].minValue=arguments[8]
                    arguments[0].maxValue=arguments[9]
                }
                break;
            case 11:
                arguments[0].name=arguments[1]
                arguments[0].startIndex=arguments[2]
                arguments[0].byteLength=arguments[3]
                arguments[0].title=arguments[4]
                arguments[0].bit=arguments[5]
                arguments[0].valueMap=arguments[6]
                arguments[0].cmdGroupKey=arguments[7]
                arguments[0].address=arguments[8]
                arguments[0].minValue=arguments[9]
                arguments[0].maxValue=arguments[10]
                break;
            
        }
        return arguments[0]
    }
    // init1() {
    //     arguments[0].name=arguments[1]
    //     arguments[0].startIndex=arguments[2]
    //     arguments[0].byteLength=arguments[3]
    //     arguments[0].title=arguments[4]
    //     switch (arguments.length){
    //         case 6:
    //             if(typeof arguments[5] =='number'){
    //                 arguments[0].bit=arguments[5]
    //             }else if(typeof arguments[5] =='object'){
    //                 arguments[0].valueMap=arguments[5]
    //             }else if(typeof arguments[5] =='boolean'){
    //                 arguments[0].isShow=arguments[5]
    //             }else if(typeof arguments[5] =='string'){
    //                 arguments[0].unit=arguments[5]
    //             }
    //             break;
    //         case 7:
    //             if(typeof arguments[5] =='object'){
    //                 arguments[0].valueMap=arguments[5]
    //                 arguments[0].bit=arguments[6]
    //             }else if(typeof arguments[5] =='string'){
    //                 arguments[0].unit=arguments[5]
    //                 arguments[0].baseNumber=arguments[6]
    //             }
    //           break;
    //     }
    //     return arguments[0]
    // }
}