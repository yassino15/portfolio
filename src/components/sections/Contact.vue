<template>
  <section id="contact">
    <div class="contact-container">
      <div class="section-header">
        <p class="section-description">{{ $t('contact.description') }}</p>
      </div>
      <div>
        <form @submit.prevent="sendEmail" class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label for="name">{{ $t('contact.name') }}</label>
              <input type="text" id="name" v-model="formData.name" :placeholder="$t('contact.yourName')" required />
            </div>

            <div class="form-group">
              <label for="email">{{ $t('contact.email') }}</label>
              <input type="email" id="email" v-model="formData.email" :placeholder="$t('contact.yourEmail')" required />
            </div>
          </div>

          <div class="form-group">
            <label for="subject">{{ $t('contact.subject') }}</label>
            <input type="text" id="subject" v-model="formData.subject" :placeholder="$t('contact.subject')" required />
          </div>

          <div class="form-group">
            <label for="message">{{ $t('contact.message') }}</label>
            <textarea id="message" v-model="formData.message" :placeholder="$t('contact.yourMessage')" rows="5"
              required></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span class="btn-text">{{ isSubmitting ? $t('contact.sending') : $t('contact.send') }}</span>
            <span class="btn-icon"><i class="fas fa-paper-plane"></i></span>
          </button>

          <div v-if="submitStatus" :class="['status-message', submitStatus.type]">
            {{ submitStatus.message }}
            <!-- {{ $t('contact.success') }} -->
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const submitStatus = ref(null);

const sendEmail = async () => {
  isSubmitting.value = true;
  submitStatus.value = null;

  try {
    const emailjs = (await import('@emailjs/browser')).default;
    const serviceId = 'service_mi3s8gk';
    const templateId = 'template_mbltu4w';
    const publicKey = 'aU7q4dgopMKE-CKid';

    const templateParams = {
      to_email: 'yassintoumeh2002@gmail.com',
      name: formData.name,
      from_email: formData.email,
      title: formData.subject,
      message: formData.message
    };

    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    Object.keys(formData).forEach(key => formData[key] = '');

    submitStatus.value = {
      type: 'success',
      message: t('contact.success')
    };
  } catch (error) {
    console.error('Error sending email:', error);
    submitStatus.value = {
      type: 'error',
      message: t('contact.error')
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.95rem;
}

input,
textarea {
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s;
  background-color: #f9f9f9;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #42b883;
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.15);
  background-color: white;
}

.submit-btn {
  background: linear-gradient(to right, #42b883, #347474);
  color: white;
  border: none;
  padding: 1.1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  overflow: hidden;
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: 0.5s;
}

.submit-btn:hover::before {
  left: 100%;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 15px rgba(66, 184, 131, 0.3);
}

.submit-btn:disabled {
  background: linear-gradient(to right, #95d5b7, #95c1c1);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.btn-icon {
  font-size: 1.1rem;
}

.status-message {
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success {
  background-color: rgba(212, 237, 218, 0.7);
  color: #155724;
  border: 1px solid #c3e6cb;
}

.error {
  background-color: rgba(248, 215, 218, 0.7);
  color: #721c24;
  border: 1px solid #f5c6cb;
}

@media (min-width: 768px) {

  .form-row {
    grid-template-columns: 1fr 1fr;
  }

  .contact-form {
    padding: 3rem;
  }
}
</style>
