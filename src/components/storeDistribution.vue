<!--  -->
<template>
  <div >
  <table>
      <thead>
        <tr class="tb_head">
            <td></td><td>分运单号</td><td>分单预报件重体</td><td>分单实际件重体</td><td>委托项目</td><td>补预入进仓编号</td>
        </tr>
      </thead>
      <tbody v-for="(item,index) in storeData" :key="item.hawb">
          <tr>
            <td><img class="btn_open" @click="openHawbInfo(index)" src="../../img/jiahao.png"></td>
             <td>{{item.hawb}}</td>
             <td>{{item.prePiece}}/{{item.preWeight}}/{{item.preVolume}}</td>
             <td>{{item.realPiece}}/{{item.realWeight}}/{{item.realVolume}}</td>
             <td>{{item.delegateItem}}</td>
             <td>补</td>
          </tr>
          <tr v-show="!!!hawbDisplayFlag[index]">
            <td class="child_td" colspan="6" >
              <table>
                <tbody>
                  <tr class="child_head">
                  <td></td>
                    <td >配货状态</td>
                    <td>预计进仓编号</td>
                    <td>件数</td>
                    <td>重量</td>
                    <td>实际件重体</td>
                 
                  </tr>
                </tbody>
                <tbody v-for="assignedItem in item.assignedInfo">
                  <tr class="child_body" >
                     <td></td>
                    <td class="fixedWidth">已配货</td>
                    <td class="fixedWidth">{{assignedItem.preKhjcno}}</td>
                    <td>{{assignedItem.prePiece}}</td>
                    <td>{{assignedItem.preWeight}}</td>
                    <td>{{assignedItem.realPiece}}/{{assignedItem.realWeight}}/{{assignedItem.realVolume}}</td>
                  </tr>
                  <tr class="child_body">
                    <td colspan="6">
                      <table >
                        <tbody>
                          <tr class="child_head_sec">
                           <td class="fixedWidth"></td> <td class="fixedWidth">实际进仓编号</td><td>实际件重体</td><td>进仓序号</td><td>货物异常信息</td><td>是否超限</td>
                          </tr>
                          <tr v-for="jcItem in assignedItem.jcIfno" :key="jcItem.jcno">
                            <td></td>
                            <td>{{assignedItem.realKhjcno}}<img class="btn_open" @click="openDetail(jcItem.jcno)" src="../../img/jiahao.png"></td>
                            <td>{{jcItem.piece}}/{{jcItem.weight}}/{{jcItem.volume}}</td>
                            <td>{{jcItem.jcno}}</td>
                           <td>{{jcItem.exceptionInfo}}</td>
                           <td>{{jcItem.ifOverLimit}}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
                 <tbody>
                  <tr class="child_dis_assigned">
                 
                    <td >配货状态</td>
                    <td>预计进仓编号</td>
                    <td>件数</td>
                    <td>重量</td>
                    <td>实际件重体</td>
                 
                  </tr>
                  <tr v-for="disAssignedItem in item.disAssignedInfo" class="child_dis_assigned">
                    <td>未配货</td>
                    <td>{{disAssignedItem.preKhjcno}}</td>
                    <td>{{disAssignedItem.prePiece}}</td>
                    <td>{{disAssignedItem.preWeight}}</td>
                    <td>--/--/--</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
      </tbody>
  </table>
  <div  id="floatTb">
    <div><span>包装类型</span><span>件数</span><span>长*宽*高(CM)</span><span>体积(m³)</span></div>
    <div v-for="jcItem in jcDetail"><span>{{jcItem.packageType}}</span><span>{{jcItem.piece}}</span><span>{{jcItem.size}}</span><span>{{jcItem.volume}}</span></div>
  </div>
  </div>
</template>

<script>
import Position from "../js/position";
export default {
  data() {
    return {
      jcDetail: [],
      clickedTd: null,
      hawbDisplayFlag:{},
        //计算进仓序号对应的详情
 
    };
  },
  props: {
    storeData: Array
  },
  components: {},

  computed: {
  
   jcDetailArr: function() {
      var result = [];
      this.storeData.forEach(storeInfo => {
        if (storeInfo.assignedInfo instanceof Array) {
          storeInfo.assignedInfo.forEach(assignedInfo => {
            if (assignedInfo.jcIfno instanceof Array) {
              assignedInfo.jcIfno.forEach(jcIfno => {
                if (jcIfno.detail instanceof Array) {
                  jcIfno.detail.forEach(detail => {
                    let obj = {};
                    obj.jcno = jcIfno.jcno;
                    obj.packageType = detail.packageType;
                    obj.piece = detail.piece;
                    obj.size = detail.size;
                    obj.volume = detail.volume;
                    result.push(obj);
                  });
                }
              });
            }
          });
        }
      });

      return result;
    }
  },
created:function(){
 
}
,
  methods: {
    openDetail: function(jcno) {
      let targetDetail = this.jcDetailArr.filter(p => {
        return p.jcno === jcno;
      });
      this.jcDetail = targetDetail;
      let currentTd = event.target.parentNode;
      let floatPosition = new Position(document, currentTd).getAbsolute();
      let floatTb = document.getElementById("floatTb");
      floatTb.style.top = floatPosition.top + floatPosition.height + 2 + "px";
      floatTb.style.left = floatPosition.left + "px";
      if (this.clickedTd == currentTd) {
        floatTb.style.display == "block"
          ? (floatTb.style.display = "none")
          : (floatTb.style.display = "block");
      } else floatTb.style.display = "block";
      this.clickedTd = currentTd;
    },
    openHawbInfo:function(index){
      var value=!this.hawbDisplayFlag[index];
      console.log(value)
      this.$set(this.hawbDisplayFlag,index,value);
    }
  },
  watch: {
    jcDetail: function(newValue, oldValue) {
      // console.log(newValue);
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.tb_wrap {
  position: relative;
}
table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 1;
  border-spacing: 0;
}
table td {
  word-break: break-all;
  word-wrap: break-word;
  border-right: 1px solid #939598;
  border-bottom: 1px solid #939598;
  font: 500 14px Arial;
  min-width: 200px;
}
.child_td tbody td {
  border-bottom: 0;
  border-right: 1px solid #939598;
}
.child_head :last-child {
  border-right: 0;
}

.child_body td {
  border-top: 1px solid #939598;
}
.child_head_sec td {
  border-top: 0;
}
.child_head_sec td:nth-of-type(6n) {
  border-right: 0;
}
.child_dis_assigned td {
  border-top: 1px solid #939598;
}
.fixedWidth {
  width: 100px;
}

.btn_open {
  cursor: pointer;
}

#floatTb {
  position: absolute;
  background: #fff;
  display: none;
}

.tb_head td{background:rgba(222, 234, 253,1)}
</style>