<template>
<div class="container">
    <div class="page-header">
        <h1>使用手册</h1>
    </div>
    <h2 id="-">如何使用</h2>
    <ol>
        <li>在<code>图表配置</code>中，配置好相应图表信息。如标题，X轴名称，Y轴名称等。<strong>图例名称</strong> 一定要填,其他选填。</li>
        <li>上传数据。在<code>图表配置</code>中的<code>数据</code>一栏，上传你的数据。数据格式很简单，每一行一个数据即可。如下：</li>
    </ol>
    <pre>
    1
    2
    1
    2
    3
    </pre>
    <h2 id="-">注意事项</h2>
    <ol>
        <li>没有做异常处理。上传数据格式不对会导致图表无法生成。</li>
        <li>数据过大，超过10万时可能导致浏览器卡死。尽量上传数据控制在5万以内。</li>
    </ol>
</div>
</template>

<script>
export default {
    name: 'Help'
};
</script>

<style scoped>
pre {
    padding: 0;
}
ol {
    margin-top: 20px;
    margin-bottom: 30px;
}
</style>
