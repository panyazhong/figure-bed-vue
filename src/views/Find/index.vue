<template>
  <div id="app">
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "App",
  data() {
    return {
      _beforeUnload_time: 0,
      _gap_time: 0,
      is_fireFox: navigator.userAgent.indexOf("Firefox") > -1,
    };
  },
  methods: {
    beforeunloadHandler(e) {
      this._beforeUnload_time = new Date().getTime();
      if (!navigator.sendBeacon) {
        const end_time = Date.now()
        let params = {
          start_time: this.start_time,
          end_time: end_time
        }
        if (params.end_time - params.start_time > 60000) {
          var xhr = new XMLHttpRequest();
          let url = 'http://192.168.120.227:3000/api/pic/report'
          xhr.open("POST", url, true);
          xhr.setRequestHeader('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWU4YzJiODg3NmMwNDgzMmVmZmI0MjJhIiwiaWF0IjoxNTkwMDQxMzg3LCJleHAiOjE1OTAwNTIxODd9.wJaCldkNBIeePC-CrYZM1H0_EwFwy8sO90m34zWNa9w')
          xhr.send(JSON.stringify(params));
        }
        e = e || window.event
        if (e) {
          e.returnValue = 'close tip'
        }
        return 'close tip'
      }
      
    },
    unloadHandler(e) {
      // this._gap_time = new Date().getTime() - this._beforeUnload_time;

      // //判断是窗口关闭还是刷新
      // localStorage.setItem('time', this._gap_time)
      // if (this._gap_time <= 5) {
        // 发送设置同步 (退出登陆的api)
      if (navigator.sendBeacon) {
        let params = {
          start_time: this.start_time,
          end_time: Date.now()
        }
        
        let token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ'
        let module = JSON.stringify({
          "dashboard": 2,
          "detail": 3
        })
        if (params.end_time - params.start_time > 60000) {
          let blob = new Blob([`token=${token}&start_time=${params.start_time}&end_time=${params.end_time}&module=${module}`], {type : 'application/x-www-form-urlencoded'});

          navigator.sendBeacon('http://192.168.120.227:3000/api/pic/report', blob)
        }
      }
      // }
    },
  },
  computed: {
    ...mapGetters([
      'start_time'
    ])
  },

  mounted() {
    window.addEventListener("beforeunload", e => {
        this.beforeunloadHandler(e)
        
        this.unloadHandler();
        
    });
    window.addEventListener("unload", async e => {
        this.unloadHandler(e)
    });
  },
  destroyed() {
    window.removeEventListener("beforeunload", e =>
      this.beforeunloadHandler(e)
    );
    window.removeEventListener("unload", e => this.unloadHandler(e));
  },
}
</script>

<style>
</style>

