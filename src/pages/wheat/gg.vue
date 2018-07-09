<template>
  <f7-page>
    <f7-block>
        <f7-row no-gap class="gg-row-header">
                <f7-col width="70">
                    <f7-list>
                    <f7-list-item>
                        <img src="@/assets/icon_all/back_white.png"/>
                    </f7-list-item>
                    <f7-list-item>
                        <div class="name"><span>赵</span></div>
                    </f7-list-item>
                    <f7-list-item>
                        <div class="ggname">赵鸿祎</div>
                    </f7-list-item>
                    <f7-list-item>
                        <div class="ggwechat">Zhaohongwei1990</div>
                    </f7-list-item>                    
                </f7-list>
                </f7-col>
                <f7-col width="30">
                    <f7-list>
                        <f7-list-item>
                            <img class="leaf-icon" src="@/assets/icon_all/sheep-icon.png"/>
                            <div class="littleleaf"><img class="leaf-little-icon" src="@/assets/icon_all/listicon_SW4.png"/></div>
                        </f7-list-item>
                        <f7-list-item>
                            <div class="leafname">崔得胜</div>                            
                        </f7-list-item>
                        <f7-list-item>
                            <div class="more">...</div>
                        </f7-list-item>
                </f7-list>
                </f7-col>
        </f7-row>
         <f7-row no-gap class="gg-tab">
            <f7-col>
                <f7-toolbar tabbar>
                        <f7-link tab-link="#tab-1" tab-link-active>基本信息</f7-link>
                        <f7-link tab-link="#tab-2">活动记录</f7-link>
                        <f7-link tab-link="#tab-3">修改历史</f7-link>
                </f7-toolbar>
                <f7-tabs animated>
                    <f7-tab id="tab-1" class="page-content" tab-active>
                        <f7-block>
                            <p>Tab 111111111111111111111111111 content</p>
                        </f7-block>
                    </f7-tab>
                    <f7-tab id="tab-2" class="page-content">
                        <f7-block>
                            <p>Tab 222222222222222222 content</p>
                        </f7-block>
                    </f7-tab>
                    <f7-tab id="tab-3" class="page-content">
                        <f7-block>
                            <p>Tab 32233333333333333333333333333 content</p>
                        </f7-block>
                    </f7-tab>
                </f7-tabs>
            </f7-col>
        </f7-row>
    </f7-block>    
  </f7-page>
</template>
<script>
</script>
<style lang="scss">
.md .block {
    margin: 0px; 
    padding: 0px; 
}
.md .toolbar-inner {
    overflow: hidden;
    background: #FF6D7F;
}
.gg-row-header{
    background: #FF6D7F;
}
div.list.gg-list-header{
    margin: 0px;
}
div.name{
    width: 99px;
    height: 99px;
    background: #FFFFFF;
    border-radius: 50px;
    margin-left: 90px;
    margin-top: -20px;
}
div.ggname{
    font-family: PFSquareSansPro-Bold;
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: 0.2px;
    line-height: 8px;
    margin-left: 105px;
    margin-top: 0px;
}
div.ggwechat{
    font-family: PFSquareSansPro-Light;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0.5px;
    margin-left: 105px;
    margin-top: 0px;
}
div.leafname{
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 18px;
    margin-left: 5px;
    margin-top: -30px;
}
div.more{
    color:#FFFFFF;
    font-size: 30px;
    margin-left: 5px;
    margin-top: -30px;
}
div.littleleaf{
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    border-radius: 10px
}
img.leaf-little-icon{
    width: 13px;
    height: 13px;
    margin-left: 3px;    
}
div.name span{
    font-family: PingFangSC-Semibold;
    font-size: 38px;
    color: #FF6D7F;
    letter-spacing: 0;
    line-height: 21px;
    margin-left: 20px;
}
.item-inner img.leaf-icon{
    width:56px;
    height: 56px;
    border-radius: 28px;
}
.md .list .item-inner:after,.md .list .item-inner:before {
    background-color: rgba(0,0,0,0);
}
.md .list ul:before,.md .list ul:after{
    background-color: rgba(0,0,0,0);
}
.md .list .item-inner:after, .md .list .item-inner:before {
    background-color: transparent;
}
</style>
