// miniprogram/pages/me/me.js
import Toast from '../../dist/toast/toast';
Page({
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      return {
        title: '我的',
        path: 'me/me'
      }
  },
  data:{
      avatarUrl:'../index/user-unlogin.png',
      nickname:"请点击头像登录"
  },
  onLoad: function (options) {
      var userinfoS = wx.getStorageSync('user')
      this.setData({
        userInfo: userinfoS,
        avatarUrl:userinfoS.avatarUrl,
        nickname:userinfoS.nickName
      })
  },
  // 设置data数据中的userInfo为空
  clearInfo(){
    this.setData({
      userInfo:{}
    })
  },
  toastText(){
    wx.navigateTo({
      url: '../list/list'
    });
  }, 
  onGetUserInfo: function (e) {
    if (!this.logged && e.detail.userInfo) {
      console.log(e.detail.userInfo)
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo,
        nickname: e.detail.userInfo.nickName
      })
      wx.setStorageSync("user", e.detail.userInfo);
    }
  }
})