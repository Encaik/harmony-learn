import router from '@system.router';

export default {
    data: {
        title: "",
        num:1
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    addCount(){
        this.num++;
    },
    jumpToDetail(){
        router.push({
            uri:'pages/detail/detail'
        })
    }
}
