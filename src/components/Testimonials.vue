<template>
    <section class="testimonials">
        <div class="testimonials-header">
            <h2 class="section-header fade-item">Testimonials</h2>
        </div>

        <vueper-slides class="no-shadow" fade>
            <vueper-slide v-for="(slide, i) in this.response" :key="i">
                <template #content>
                    <div class="testimonial">
                        <div class="testimonial-copy">{{slide.data.testimonial_copy[0].text}}</div>
                        <div class="testimonial-picture" :style="{backgroundImage: 'url(' + slide.data.author_image.url + ')'}"></div>
                        <div class="testimonial-author">{{slide.data.testimonial_author[0].text}}</div>
                    </div>
                </template>
            </vueper-slide>
        </vueper-slides>
    </section>
</template>

<script>
// In your Vue.js component.
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    name: 'Testimonials',
    components: { VueperSlides, VueperSlide },
    data: () => ({
        response: null
    }),
    methods: {
        async getContent() {
            const response = await this.$prismic.client.query([
                // With a document type matching "testimonials"
                this.$prismic.Predicates.at('document.type', 'testimonials')
            ]);

            this.response = response.results;
        }
    },
    created() {
        this.getContent();
    }
}
</script>


<style lang="scss">
.testimonials-slider {
    margin: 100px auto 150px;
}

// Vueper Slide Overrides
.vueperslides {
    &--fixed-height {
        height: 500px;

        // @media screen and (max-width: $screen-sm) {
        //     height: 700px;
        // }
    }

    &__arrow {
        color: $accent;
    }

    &__bullet {
        .default {
            background-color: $gray-lighter;
            border: none;
            box-shadow: none;
        }

        &--active .default {
            background-color: $accent;
        }
    }
}

.vueperslide {
    &__title {
        display: none;
    }
}

// Custom Slider Styles
.testimonial {
    text-align: center;
    padding-top: 60px;

    &-copy {
        width: 100%;
        max-width: 600px;
        font-size: 32px;
        line-height: 1.3;
        color: $accent;
        margin: 0 auto;
        position: relative;

        @media screen and (max-width: $screen-sm) {
            padding: 0 50px;
        }

        &:before, &:after {
            content: '“';
            display: block;
            position: absolute;
            font-family: $serif;
            font-size: 110px;
            color: $gray-lighter;
        }

        &:before {
            left: -40px;
            top: -34px;
        }

        &:after {
            content: '”';
            right: -40px;
            top: -34px;
        }
    }

    &-picture {
        margin: 50px auto 10px;
        width: 110px;
        height: 110px;
        background-color: $gray-lighter;
        border-radius: 50%;
        background-size: cover;
    }
}
</style>