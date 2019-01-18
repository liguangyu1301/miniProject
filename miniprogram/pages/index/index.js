//index.js
const app = getApp()
import Dialog from '../../dist/dialog/dialog';
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  errorFunction: function() {
    this.setData({
     imgsrc: '../../images/banner1.jpg'
    })
  },  
  onLoad: function() {
    var myThis = this;
    // 获取用户信息
    var userinfoS = wx.getStorageSync('user');
    console.log(userinfoS);
    if (userinfoS == null) {
      wx.navigateTo({
        url: '../auto/auto',
      })
    }
    wx.request({
      url: 'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html',
      success(res) {
        console.log(res.data.T1348647853363)
        myThis.setData({

          newsData: res.data.T1348647853363
          });
      }
    })



  },
  onReady: function() {

  },
  goDetail: function (event) {
    var index = event.currentTarget.dataset.weburl;
    console.log(index);
    if (Object.keys(index).length != 0) {
      wx.navigateTo({
        url: '../newdetail/newdetail?weburl=' + index,
      })
    }
  }
})