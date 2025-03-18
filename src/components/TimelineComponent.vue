<template>
    <div class="timeline-section">
        <ul class="time-line">
            <li class="timeline-item" v-for="item in items" :key="item.id">
                <div class="timeline-item-logo">
                    <img class="logo" :src="item.logo" alt="">
                </div>
                <div class="timeline-item-content">
                    <div class="timeline-item-content-header">
                        <div>
                            <h4>{{ item.degree }}</h4>
                            <h6><i :class="getIcon"></i>{{ item.institution }}</h6>
                        </div>
                        <div class="period">
                            <i class="fa fa-calendar-check"></i>
                            {{ item.period }}
                        </div>
                    </div>
                    <div class="timeline-item-content-description">
                        {{ item.description }}
                    </div>
                    <!-- Tags section - only shown for experience items if they have tags -->
                    <div v-if="showTags && item.tags && item.tags.length > 0" class="timeline-item-tags">
                        <span v-for="(tag, index) in item.tags" :key="index" class="tag">
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </li>
            <li class="timeline-item timeline-item-tail">
                <div class="logo"></div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        required: true
    },
    type: {
        type: String,
        default: 'education',
        validator: (value) => ['education', 'experience'].includes(value)
    },
    showTags: {
        type: Boolean,
        default: false
    }
});

const getIcon = computed(() => {
    return props.type === 'education' ? 'fa-solid fa-building' : 'fa-solid fa-briefcase';
});
</script>

<style lang="scss" scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}

.time-line {
    --image-size: 100px;
    --image-border-size: 7px;
    --line-width: 3px;
    --vertical-spacing: 80px;
    --content-padding-top: 1rem;
    position: relative;
    padding: 0;
    list-style: none;


    &::before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: calc(var(--image-size) / 2 - var(--line-width) / 2);
        width: var(--line-width);
        content: "";
        background-color: #ced4da
    }

    .timeline-item {
        min-height: var(--image-size);
        margin-bottom: var(--vertical-spacing);
    }

    .logo {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        width: var(--image-size);
        height: var(--image-size);
        z-index: 50;
        border: var(--image-border-size) solid #dee2e6;
        border-radius: 50%;
        background-color: #ced4da;
    }

    .timeline-item-content {
        padding-top: 14px;
        margin-left: calc(var(--image-size) + var(--image-size) / 5);

        .timeline-item-content-header {
            display: flex;
            justify-content: space-between;
            padding-bottom: 10px;

            h4 {
                font-size: 1.5rem;
            }

            h6 {
                font-size: .95rem;
                color: #6c757d;
            }

            i {
                padding-inline: .5rem;
                color: #6c757d;
            }

            .period {
                background-color: rgb(252, 252, 252);
                height: fit-content;
                padding: 6px;
                border-radius: 12px;
            }
        }

        .timeline-item-content-description {
            width: 90%;
            font-size: .95rem;
        }

        .timeline-item-tags {
            display: flex;
            flex-wrap: wrap;
            margin-top: 12px;
            gap: 8px;

            .tag {
                display: inline-block;
                padding: 4px 12px;
                border-radius: 20px;
                background-color: #f0f0f0;
                color: #666;
                font-size: 0.85rem;
                font-weight: 500;
                transition: all 0.2s ease;
                background-color: var(--accent-color);
                color: white;
                cursor: pointer;

                &:hover {
                    background-color: #007bff;
                }
            }
        }
    }

    .timeline-item-tail {
        left: calc(var(--image-size) / 4);
        min-height: calc(var(--image-size) / 2);

        .logo {
            width: calc(var(--image-size) / 2);
            height: calc(var(--image-size) / 2);
            transform: translateX(50%);
        }
    }
}

@media (max-width: 768px) {
    .time-line {
        --image-size: 80px;
        --vertical-spacing: 60px;

        .timeline-item-content {
            .timeline-item-content-header {
                flex-direction: column;

                h4 {
                    font-size: 1.3rem;
                    margin-bottom: 0.5rem;
                }

                .period {
                    align-self: flex-start;
                    margin-top: 0.5rem;
                }
            }
        }
    }
}
</style>