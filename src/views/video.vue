<template>
    <div>
        视频流
        <a
                href="#"
                style="display:block;width:1040px;height:660px"
                id="player">
        </a>
    </div>
</template>

<script>
    export default {
        name: 'videoTemplate',
        props: {
            msg: String
        },
        mounted() {
            let urls = "rtmp://192.168.62.4:1935/live/203";
            window.flowplayer("player", "flowplayer-3.2.18.swf",{
                clip: {
                    url: urls,
                    provider: 'rtmp',
                    muted:false,
                    live: true,
                },
                plugins: {
                    rtmp: {
                        url: 'flowplayer.rtmp-3.2.8.swf',
                        netConnectionUrl: urls
                    }
                }
            });
        }
    }
</script>

<style scoped>

</style>
