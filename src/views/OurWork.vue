<template>
    <div class="work-view page-wrapper">
        <section>
            <h1>This is our work page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo velit sed nibh molestie, faucibus molestie odio faucibus. Praesent auctor vel arcu ut ullamcorper. Mauris quis auctor turpis. Sed nec ex dui. Donec est dolor, cursus id hendrerit non, bibendum in augue. Duis eu semper justo.</p>
        </section>
    </div>
</template>

<script>
export default {
    beforeCreate: function() {
        document.body.className = 'work';
    }
}
</script>

