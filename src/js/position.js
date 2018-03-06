//定义类

class Position {
    constructor(reference, target) {
      this.reference = reference;
      this.target = target;
    }
  
    getAbsolute() {
        var target=this.target;
        var reference=this.reference;
        var result = {
            left: 0,
            top:0,
            height:target.clientHeight
        }
        while(target.offsetParent!=null){
            
            result.top += target.offsetTop;
            result.left += target.offsetLeft;
            target=target.offsetParent;
            
        }
   
        return result;
    }
  }


export default Position;