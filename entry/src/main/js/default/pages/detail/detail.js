import router from '@system.router';

export default {
    data: {
        title: 'World'
    },
    jumpToIndex(){
        router.back()
    }
}
