<template></template>
<script>
export default {
  name: "Msg",
  mounted() {
    let readkey = localStorage.getItem('20210516');
    if (readkey == false || readkey == null) {
      localStorage.setItem('20210516', 'true');
      this.$notification.open({
        message: "为共产主义崛起而读书",
        description: "✩ 口嗨冲塔请寻他处 ✩ 抽象辩经莫入此门 ✩",

        duration: 0,
        placement: "bottomRight",
        key: "20210516"
      });
    }
  }
};
</script>
