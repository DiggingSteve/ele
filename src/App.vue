<template>
  <div id="app">
  <aa :storeData="storeData"/>
  </div>
</template>

<script>
import aa from "./components/storeDistribution";
export default {
  name: "App",
  data: function() {
    return {
      storeData: [
        {
          hawb: "YSSHA18020011",
          prePiece: 10,
          preWeight: 70,
          preVolume: 1.9,
          realPiece: 12,
          realWeight: 65,
          realVolume: 2.5,
          delegateItem: "基础-上海邮申国际货运有限公司",
          assignedInfo: [
            {
              preKhjcno: "JCNO1117001",
              realKhjcno: "JCNO1117002",
              prePiece: 10,
              preWeight: 70,

              realPiece: 12,
              realWeight: 65,
              realVolume: 2.5,
              jcIfno: [
                {
                  jcno: "123456",
                  piece: 5,
                  weight: 20,
                  volume: 2,
                  exceptionInfo: "无异常",
                  ifOverLimit: "否",
                  detail: [
                    {
                      packageType: "纸箱",
                      piece: 5,
                      size: "46.0*36.0*28.0",
                      volume: "0.45"
                    },
                    {
                      packageType: "木箱",
                      piece: 1,
                      size: "46.0*36.0*28.0",
                      volume: "0.2"
                    }
                  ]
                },
                {
                  jcno: "545454",
                  piece: 5,
                  weight: 20,
                  volume: 2,
                  exceptionInfo: "无异常",
                  ifOverLimit: "否",
                  detail: [
                    {
                      packageType: "木箱",
                      piece: 5,
                      size: "46.0*36.0*28.0",
                      volume: "0.45"
                    },
                    {
                      packageType: "木箱",
                      piece: 1,
                      size: "46.0*36.0*28.0",
                      volume: "0.2"
                    }
                  ]
                }
              ]
            },
            {
              preKhjcno: "JCNO1117001",
              realKhjcno: "JCNO1117002",
              prePiece: 10,
              preWeight: 70,

              realPiece: 12,
              realWeight: 65,
              realVolume: 2.5,
              jcIfno: [
                {
                  jcno: "123456",
                  piece: 5,
                  weight: 20,
                  volume: 2,
                  exceptionInfo: "无异常",
                  ifOverLimit: "否"
                },
                {
                  jcno: "545454",
                  piece: 5,
                  weight: 20,
                  volume: 2,
                  exceptionInfo: "无异常",
                  ifOverLimit: "否"
                }
              ]
            }
          ],
          disAssignedInfo: [
            {
              preKhjcno: "JCNO1117001",
              prePiece: 10,
              preWeight: 70
            }
          ]
        },
        {
          hawb: "YSSHA18020021",
          prePiece: 10,
          preWeight: 70,
          preVolume: 1.9,
          realPiece: 12,
          realWeight: 65,
          realVolume: 2.5,
          delegateItem: "基础-上海邮申国际货运有限公司",
          assignedInfo: [
            {
              preKhjcno: "JCNO1117001",
              realKhjcno: "JCNO1117002",
              prePiece: 10,
              preWeight: 70,

              realPiece: 12,
              realWeight: 65,
              realVolume: 2.5,
              jcIfno: [
                {
                  jcno: "123456",
                  piece: 5,
                  weight: 20,
                  volume: 2,
                  exceptionInfo: "无异常",
                  ifOverLimit: "否"
                },
                {
                  jcno: "545454",
                  piece: 5,
                  weight: 20,
                  volume: 2,
                  exceptionInfo: "无异常",
                  ifOverLimit: "否"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  components: {
    aa
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  display: flex;
}
</style>
