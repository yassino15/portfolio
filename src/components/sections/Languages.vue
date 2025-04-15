<template>
    <section class="languages-section" id="languages-section">
        <div class="container">
            <div class="section-header">
                <p class="section-description">
                    {{ $t('languages.description', 'Languages I speak fluently and use in my professional work.') }}
                </p>
            </div>

            <div class="languages-container">
                <div v-for="language in languages" :key="language.name" class="language-card">
                    <div class="language-header">
                        <div class="language-icon">
                            <i :class="language.icon"></i>
                        </div>
                        <div class="language-info">
                            <h3 class="language-name">{{ language.name }}</h3>
                            <span class="language-level">{{ language.level }}</span>
                        </div>
                    </div>
                    <div class="language-progress">
                        <div class="progress-bar" :style="{ width: language.proficiency + '%' }"></div>
                    </div>
                    <p class="language-description">{{ language.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from "vue-i18n";

const { locale, messages } = useI18n();

// Access the array directly
const languages = computed(() => messages.value[locale.value].languages.items);

</script>

<style lang="scss" scoped>
.languages-section {
    padding-bottom: 4rem;

    .languages-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .language-card {
        flex: 0 0 calc(50% - 2rem);
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
        overflow: hidden;
        cursor: pointer;

        @media (max-width: 768px) {
            flex: 0 0 100%;
        }

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);

            .language-icon i {
                transform: scale(1.1);
            }

            .progress-bar {
                background: linear-gradient(90deg,
                        var(--start-color, #4fc08d),
                        var(--end-color, #3490dc));
            }
        }

        &:nth-child(1) {
            --start-color: #4fc08d;
            --end-color: #3490dc;
        }

        &:nth-child(2) {
            --start-color: #4299e1;
            --end-color: #48bb78;
        }

        .language-header {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;

            .language-icon {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-color: rgba(0, 0, 0, 0.05);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 1rem;

                i {
                    font-size: 1.8rem;
                    color: var(--start-color, #4fc08d);
                    transition: transform 0.3s ease;
                }
            }

            .language-info {
                flex: 1;

                .language-name {
                    font-size: 1.5rem;
                    margin: 0 0 0.3rem;
                    font-weight: 600;
                }

                .language-level {
                    font-size: 0.9rem;
                    color: rgba(0, 0, 0, 0.6);
                    font-weight: 500;
                }
            }
        }

        .language-progress {
            height: 8px;
            background-color: rgba(0, 0, 0, 0.05);
            border-radius: 4px;
            margin-bottom: 1.5rem;
            overflow: hidden;

            .progress-bar {
                height: 100%;
                background-color: var(--start-color, #4fc08d);
                border-radius: 4px;
                transition: width 1.5s ease, background 0.3s ease;
            }
        }

        .language-description {
            font-size: 1rem;
            line-height: 1.6;
            color: rgba(0, 0, 0, 0.7);
        }
    }
}

// Add a subtle animation for the progress bars on page load
@keyframes progressAnimation {
    from {
        width: 0;
    }

    to {
        width: var(--progress-width);
    }
}

// Apply the animation when the component is mounted
.language-card .progress-bar {
    animation: progressAnimation 1.5s ease-out forwards;
}
</style>