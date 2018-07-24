//过滤器

import Vue from 'vue'
//过滤器回调的第一个值固定为插值表达式的初始值

Vue.filter('formatDate',function (val,format="YYY-MM-DD") {
  //先创建匹配年月日的三个不同正则
  let yReg=/YYY/i;
  let mReg=/MM/i;
  let dReg=/DD/i;

  // 然后通过val得到相应的年月日
  let date=new Date(val);
  let y=date.getFullYear();
  let m=date.getMonth()+1;
  let d=date.getDate();

  // 最后替换

  return format.replace(yReg,y).replace(mReg,m).replace(dReg,d);
});

//第二种写法：以下的方法是把过滤器当vue插件使用的写法 （要Vue.use）
// export default function (Vue) {
//   Vue.filter('formatDate',function (val,format="YYY-MM-DD") {
    //先创建匹配年月日的三个不同正则
    // let yReg=/YYY/i;
    // let mReg=/MM/i;
    // let dReg=/DD/i;
  
    // 然后通过val得到相应的年月日
    // let date=new Date(val);
    // let y=date.getFullYear();
    // let m=date.getMonth()+1;
    // let d=date.getDate();
  
    // 最后替换
  
//     return format.replace(yReg,y).replace(mReg,m).replace(dReg,d);
//   });
// }
