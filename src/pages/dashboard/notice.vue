<template>
  <f7-page class="notice-page">
    <v-header title='公告' back></v-header>
    <div default>
      <f7-list class="timeline"
        virtual-list
        pull-to-refresh
        infinite-scroll
        @ptr:refresh="pullRefresh"
        @ptr:pullend="pullEnd">
        <ul>
        <!-- we will get the items we need to render from VL render external callback -->
        <f7-list-item
          v-for="(item, index) in this.fullList"
          :key="index"
          class="timeline-item"
        >
          <div class="notice-date">
            <i class="f7-icons">time_fill</i>
            <div class="timeline-item-date">{{item.上架日期}}</div>
            <div class="timeline-item-time"></div>
          </div>
          <div class="timeline-item-divider"></div>
          <div class="timeline-item-desc " :class="item.類型">{{item.類型}}</div>
          <div class="timeline-item-content">
            <div class="timeline-item-text">{{item.內文}}</div>
          </div>
        </f7-list-item>
      </ul>
      </f7-list>
    </div>
  </f7-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('notice', [
      'fullList'
    ])
  },
  created () {
    this.getNoticeList()
  },
  methods: {
    ...mapActions('notice', [
      'getNoticeList'
    ]),
    getSubtitle (str) {
      return str.substring(str.indexOf(':') + 1, str.length)
    },
    pullRefresh () {
      this.getNoticeList()
    },
    pullEnd () {
      this.$root.$f7.pullToRefreshDone()
    }
  }
}
</script>

<style lang="scss">
.md {
  .notice-page {
    .timeline {
      margin: 0;
      padding: 0;
    }
    .timeline-item-time {
      margin-top: 0;
    }
    .timeline-item {
      display: block;
      min-height: 120px;
      &:last-child {
          padding-bottom: 16px;
          display: block;
      }
      &:first-child {
        display: block;
      }
      .item-content {
        padding: 0px;
      }
      .item-inner {
        display: block !important;
        padding: 0px;
        &:after {
          background-color: transparent !important;
        }
      }

      .notice-date {
        z-index: 9;
        position: relative;
        margin-left: 1px;
        background-color: #fafafa;
        line-height: 30px;
        .f7-icons {
          font-size: .9em;
          -moz-transform: scale(-1, 1);
          -webkit-transform: scale(-1, 1);
          -o-transform: scale(-1, 1);
          -ms-transform: scale(-1, 1);
          transform: scale(-1, 1);
          margin-left: 13px;
          width: 12px;
        }
        .f7-icons, .timeline-item-date, .timeline-item-time {
          display: inline-block;
          color: #cfd8dc;
          margin-right: 10px;
        }
        .timeline-item-date {
          font-size: 0.9rem;
        }
      }
      .timeline-item-desc {
        position: absolute;
        margin-left: 35px;
        border-radius: 50% 50%;
        padding: 5px;
        font-size: 0.6rem;
        color: #fff;
        margin-top: -15px;
        line-height: 20px;
        text-align: center;
        width: 20px;
        height: 20px;
      }
      .timeline-item-content {
        margin-left: 75px;
        padding-right: 15px;
        font-size: .9rem;
      }

      &:hover {
        .notice-date {
          .f7-icons, .timeline-item-date, .timeline-item-time {
            color: #3cc8b4;
          }
        }
        background-color: #d9faf5;
      }

      .high-light, .high-light a {
        color: #3cc8b4;
        font-weight: bold;
      }
    }
    .timeline-item-divider {
      margin-top: 20px;
      width: 7px;
      height: 7px;
      top: 10%;
      &:before, &:after{
        z-index: 1;
        left: 45%;
        display: block;
        height: 100vh !important;
      }
    }
    .timeline-item-content {
      margin: -15px 2px 2px;
    }
  }
  .normal, .一般{ background-color: #3cc8b4; }
  .important, .重要 { background-color: #f8e71c; }
  .urgent, .緊急 { background-color: #ff646f; }
}
</style>
