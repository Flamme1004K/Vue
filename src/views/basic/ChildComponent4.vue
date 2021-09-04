data() {
    return {
        msg: '자식 컴포넌트로 부터 보내는 메시지'
    }
},
mounted() {
    this.$emit('sned-message', this.msg)
}
