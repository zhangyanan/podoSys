<template>
  <f7-page :page-content="false">
    <div class="page-content">     
      <div class="block-title">Default setup</div>
      <div class="list no-hairlines-md">
        <ul>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input type="text" placeholder="Your birth date" readonly="readonly" id="demo-calendar-default"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </f7-page>
</template>
<script>
  import {f7Page } from 'framework7-vue';

  export default {
    components: {
      f7Page,
    },
    on: {
      pageInit(e) {
        const self = this;
        const app = self.$f7;
        const $ = self.$$;
        // Default
        self.calendarDefault = app.calendar.create({
          inputEl: '#demo-calendar-default',
          dateFormat: 'yyyy.mm.dd',
          dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
          monthNames:['1', '2', '3', '4', '5', '6', '7', '8' , '9' , '10', '11', '12'],
        });  
      },
      pageBeforeRemove() {
        const self = this;
        self.calendarDefault.destroy();
      },
    },
  };
</script>