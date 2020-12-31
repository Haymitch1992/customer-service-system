<template>
    <div class="data-page">
        <div class="head">
            <h1>云中心乘客服务系统</h1>
            <span class="showTime">2020年8月11日9时45分20秒</span>
        </div>
        <ul class="data-content">
            <li class="data-item-1">
                <div class="data-item1">
                    <dv-border-box-11 title="dv-border-box-11"></dv-border-box-11>
                </div>
                <div class="data-item1">
                    <dv-border-box-11 title="dv-border-box-11"></dv-border-box-11>
                </div>
                <div class="data-item1">
                    <dv-border-box-11 title="dv-border-box-11"></dv-border-box-11>
                </div>
            </li>
            <li class="data-item-2">
                <div class="map">
                    <div class="map1"><img src="../assets/img/lbx.png"></div>
                    <div class="map2"><img src="../assets/img/jt.png"></div>
                    <div class="map3"><img src="../assets/img/map.png"></div>
                </div>
            </li>
            <li class="data-item-3">
                <div class="data-item1">
                    <dv-border-box-11 title="dv-border-box-11"></dv-border-box-11>
                </div>
                <div class="data-item1">
                    <dv-border-box-11 title="dv-border-box-11"></dv-border-box-11>
                </div>
                <div class="data-item1">
                    <dv-border-box-11 title="dv-border-box-11"></dv-border-box-11>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "data"
    }
</script>

<style scoped lang="scss">
    .data-page{
        width: 100vw;
        height: 100vh;
        background: url("../assets/img/data-bg.jpg");
        .head{
            background: url("../assets/img/head_bg.png") no-repeat center center;
            background-size: auto;
            background-size: 100% 100%;
            position: relative;
            z-index: 100;
            color: #ffffff;
            height: 105px;
            h1{
                margin: 0;
                padding: 0;
                line-height: 76px;
                font-size: 38px;
            }
            .showTime{
                position: absolute;
                font-size: 18px;
                right: 20px;
                top: 24px;
                color: #ddd;
            }
        }
        .data-content{

        }
        .data-item-1{
            width: 30%;
            float: left;
        }
        .data-item-2{
            width: 40%;
            float: left;
        }
        .data-item-3{
            width: 30%;
            float: left;
        }
        .data-item1{
            width: 100%;
            height: 250px;
        }
        .map{
            position:relative;
            height: 720px;
            z-index: 9;
        }
        .map1,.map2,.map3{
            position:absolute;
            opacity: .5
        }
        .map1{
            width:643px;
            z-index: 2;top:45px;
            left: 80px;
            animation: myfirst2 15s infinite linear;
        }
        .map2{
            width:566px;
            top:84px;
            left:120px;
            z-index: 3;
            opacity: 0.2;
            animation: myfirst 10s infinite linear;
        }
        .map3{
            width:518px;
            top:107px;
            left: 140px;
            z-index: 1;
        }
        @keyframes myfirst2
        {
            from {transform: rotate(0deg);}
            to {transform: rotate(359deg);}
        }

        @keyframes myfirst
        {
            from {transform: rotate(0deg);}
            to {transform: rotate(-359deg);}
        }
    }

</style>

