// pages/newdetail/newdetail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weburl:'http://3g.163.com/news/19/0108/07/E4VT5O590001899O.html'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tempUrl = options.weburl;
    console.log('=='+tempUrl)
    // this.setData({
    //   weburl: tempUrl
    // })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})