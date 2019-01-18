// pages/topic/topic.js
var ids = 'T1348647853363';
var dataurl = 'http://c.m.163.com/nc/article/headline/';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 50,
    active: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.requestData(ids, dataurl);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onChange(event) {
    switch (event.detail.index) {
      case 0:
        ids = 'T1348647853363';
        dataurl = 'http://c.m.163.com/nc/article/headline/';
        break;
      case 1:
        ids = 'T1467284926140';
        dataurl = 'http://c.3g.163.com/nc/article/list/';
        break;
      case 2:
        ids = 'T1348648517839';
        dataurl = 'http://c.3g.163.com/nc/article/list/';
        break;
      case 3:
        ids = '5bmz6aG25bGx';
        dataurl = 'http://c.m.163.com/nc/auto/list/';
        break;
      case 5:
        ids = 'T1348649079062';
        dataurl = 'http://c.3g.163.com/nc/article/list/';
        break;
    }
    this.requestData(ids, dataurl);
  },
  requestData: function(ids, dataurl) {
    var that = this;
    console.log(dataurl + ids);
    wx.request({
      url: dataurl + ids + '/0-20.html',
      success(res) {
        console.log(res.data[ids])
        that.setData({
          newsData: res.data[ids]
        });
      },
      fail(res) {
        console.log(res.errMsg);
      }
    })
  },
  goDetail: function(event) {
    var index = event.currentTarget.dataset.weburl;
    if (Object.keys(index).length != 0) {
      wx.navigateTo({
        url: '../newdetail/newdetail?weburl='+index,
      })
    }
  }
})